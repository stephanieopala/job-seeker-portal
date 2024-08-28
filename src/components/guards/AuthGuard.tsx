import { ReactNode, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '@/hooks/use-auth';

type Props = {
  children: ReactNode;
};

const AuthGuard = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string>();

  if (!isAuthenticated) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname);
    }
    return <Navigate to="/" />;
  }
  return <div>{children}</div>;
};

export default AuthGuard;
