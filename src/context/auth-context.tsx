// import jwtAxios from '@/api/jwt-api';
// import { useEffect, useReducer, createContext } from 'react';

// type User = {
//   username: string;
//   // [key: string]: any;
// };

// interface State {
//   isInitialized: boolean;
//   isAuthenticated: boolean;
//   user: User | null;
// }

// type InitializeAction = {
//   type: 'INITIALIZE';
//   payload: {
//     isAuthenticated: boolean;
//     user: User | null;
//   };
// };

// type LoginAction = {
//   type: 'LOGIN';
//   payload: {
//     user: User;
//   };
// };

// type Action = InitializeAction | LoginAction;

// const initialState = {
//   isAuthenticated: false,
//   isInitialized: false,
//   user: null,
// };

// const handlers: Record<string, (state: State, action: Action) => State> = {
//   INITIALIZE: (state, action): State => {
//     const { isAuthenticated, user } = action.payload;
//     return {
//       ...state,
//       isAuthenticated,
//       isInitialized: true,
//       user,
//     };
//   },
//   LOGIN: (state, action) => {
//     const { user } = action.payload;
//     return {
//       ...state,
//       isAuthenticated: true,
//       user,
//     };
//   },
// };

// const reducer = (state: State, action: Action): State =>
//   handlers[action.type] ? handlers[action.type](state, action) : state;

// //create authcontext
// const AuthContext = createContext({
//   ...initialState,
//   login: () => Promise.resolve(),
//   register: () => Promise.resolve(),
//   logout: () => Promise.resolve(),
// });

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     const initialize = async (): Promise<void> => {
//       try {
//         const loggedInUser = window.localStorage.getItem('user');
//         if (loggedInUser) {
//           // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//           const user: User = await JSON.parse(loggedInUser);
//           dispatch({
//             type: 'INITIALIZE',
//             payload: {
//               isAuthenticated: true,
//               user,
//             },
//           });
//         } else {
//           dispatch({
//             type: 'INITIALIZE',
//             payload: {
//               isAuthenticated: false,
//               user: null,
//             },
//           });
//         }
//       } catch (error) {
//         console.log(error);
//         dispatch({
//           type: 'INITIALIZE',
//           payload: {
//             isAuthenticated: false,
//             user: null,
//           },
//         });
//       }
//     };
//     void initialize();
//   }, []);

//   const login = async (email: string, password: string): Promise<void> => {
//     const body = { email, password };
//     const response = await jwtAxios.post('account/login', body);
//     console.log('response', response);

//     // const { accessToken } = response.data.data;
//     // const user = {};

//     // localStorage.setItem('user', JSON.stringify(user));
//     // setAuthToken(accessToken);
//     dispatch({
//       type: 'LOGIN',
//       payload: {
//         user,
//       },
//     });
//   };

//   // const register = async (username: string, password: string, confirmPassword: string, userType: string ) => {
//   //   console.log()
//   // }

//   // const logout = async () => {
//   //   console.log()
//   // }

//   return (
//     <AuthContext.Provider value={{ ...state, login, register }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
