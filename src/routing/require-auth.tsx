import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { selectLoggedIn } from '../store/features/authentication/auth-selectors';
import { useRootSelector } from '../store/hooks/hooks';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const loggedIn = useRootSelector(selectLoggedIn);

  if (!loggedIn) {
    return <Navigate to={`/login?next=${location.pathname}`} />;
  }

  return children;
};

export default RequireAuth;
