import { useEffect, useReducer, createContext } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { User, Session, AuthError } from '@supabase/supabase-js';

type LoginReturnType =
  | {
      user: User;
      session: Session;
    }
  | {
      user: null;
      session: null;
    };

type RegisterReturnType =
  | {
      user: User;
      session: Session | null;
    }
  | {
      user: null;
      session: null;
    };
interface State {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: User | null;
}
interface AuthContextType extends State {
  login: (
    email: string,
    password: string
  ) => Promise<LoginReturnType | AuthError | null>;
  // logout: () => Promise<void>;
  register: (
    email: string,
    password: string,
    fullName: string,
    userType: string,
    avatar_url: string | null
  ) => Promise<RegisterReturnType | AuthError | null>;
}

type InitializeAction = {
  type: 'INITIALIZE';
  payload: {
    isAuthenticated: boolean;
    user: User | null;
  };
};

type RegisterAction = {
  type: 'REGISTER';
  payload: {
    user: User | null;
  };
};

type LoginAction = {
  type: 'LOGIN';
  payload: {
    user: User | null;
  };
};

type Action = InitializeAction | RegisterAction | LoginAction;

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers: Record<string, (state: State, action: Action) => State> = {
  INITIALIZE: (state, action): State => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  REGISTER: (state, action): State => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: !!user, //true
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: !!user, //true is only true id there's a user
      user,
    };
  },
};

const reducer = (state: State, action: Action): State =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext<AuthContextType>({
  ...initialState,
  // eslint-disable-next-line @typescript-eslint/require-await
  login: async () => {
    throw new Error('login function not implemented');
  },
  // eslint-disable-next-line @typescript-eslint/require-await
  register: async () => {
    throw new Error('register function not implemented');
  },
  //logout: Promise.resolve()
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = () => {
      try {
        const { data } = supabase.auth.onAuthStateChange((event, session) => {
          if (event === 'SIGNED_OUT') {
            dispatch({
              type: 'INITIALIZE',
              payload: {
                isAuthenticated: false,
                user: null,
              },
            });
          } else if (session) {
            dispatch({
              type: 'INITIALIZE',
              payload: {
                isAuthenticated: true,
                user: session.user,
              },
            });
          }
        });
        return () => {
          data.subscription.unsubscribe();
        };
      } catch (error) {
        console.log(error);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };
    void initialize();
  }, []);

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    dispatch({
      type: 'LOGIN',
      payload: {
        user: data.user,
      },
    });

    if (error) {
      return error;
    }

    if (!data || !data.user) {
      return null;
    }
    return {
      user: data.user,
      session: data.session,
    };
  };

  const register = async (
    email: string,
    password: string,
    fullName: string,
    userType: string,
    avatar_url: string | null
  ) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: userType,
          avatar_url,
        },
      },
    });

    dispatch({
      type: 'REGISTER',
      payload: {
        user: data.user,
      },
    });
    if (error) {
      return error;
    }

    if (!data || !data.user) {
      return null;
    }
    return {
      user: data.user,
      session: data.session,
    };
  };

  // const logout = async () => {
  //   console.log()
  // }

  return (
    <AuthContext.Provider value={{ ...state, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
