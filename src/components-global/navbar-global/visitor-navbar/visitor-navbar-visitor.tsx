import { Badge, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyledNavLink from '../../../styles/custom-styles/styled-nav-link';

const NavbarVisitor: React.FC = () => (
  <>
    <StyledNavLink to="/">Home</StyledNavLink>
    <StyledNavLink to="/pricing">Pricing</StyledNavLink>
    <StyledNavLink to="/cart">
      <Badge badgeContent={0} color="primary" sx={{ position: 'relative', top: 8 }} />
      <ShoppingCartIcon sx={{ fontSize: 28, position: 'relative', top: 8 }} />
    </StyledNavLink>
    <Button variant="outlined" color="inherit" sx={{ mr: 2 }}><Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Sign Up</Link></Button>
    <Button variant="contained" color="inherit"><Link to="/login" style={{ textDecoration: 'none' }}>Log In</Link></Button>

  </>
);
export default NavbarVisitor;
