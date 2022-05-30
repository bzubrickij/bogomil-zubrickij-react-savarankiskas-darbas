import React from 'react';
import { Navigate } from 'react-router-dom';
import { selectLoggedIn } from '../store/features/authentication/auth-selectors';
import { selectRedirect } from '../store/features/navigation/navigation-selectors';
import { useRootSelector } from '../store/hooks/hooks';

const RequireVisitor = ({ children }: { children: JSX.Element }) => {
  const loggedIn = useRootSelector(selectLoggedIn);
  const redirect = useRootSelector(selectRedirect);

  if (loggedIn) {
    return (
      <Navigate to={redirect ?? '/'} />
    );
  }

  return children;
};

export default RequireVisitor;
