import { Button, Box, Badge } from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyledNavLink from '../../../styles/custom-styles/styled-nav-link';
import { useRootDispatch, useRootSelector } from '../../../store/hooks/hooks';
import { selectUser } from '../../../store/features/authentication/auth-selectors';
import { authLogoutAction } from '../../../store/features/authentication/auth-actions';

const NavbarClient: React.FC = () => {
  const user = useRootSelector(selectUser);
  const dispatch = useRootDispatch();

  const logout = () => {
    dispatch(authLogoutAction);
  };

  const userInitials = user && user.name && user.surname
    ? `${user.name[0]}.${user.surname[0]}!`
    : null;

  return (
    <Box sx={{ display: 'inlineFlex', alignItems: 'center' }}>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/pricing">Pricing</StyledNavLink>
      <StyledNavLink to="/cart">
        <Badge badgeContent={0} color="primary" sx={{ position: 'relative', top: 8 }} />
        <ShoppingCartIcon sx={{ fontSize: 28, position: 'relative', top: 8 }} />
      </StyledNavLink>
      <Box sx={{ m: 2, border: 1, p: 1 }}>
        Hi
        {' '}
        {userInitials}
      </Box>
      <Button variant="contained" color="error" onClick={logout}>Logout</Button>
    </Box>
  );
};
export default NavbarClient;
