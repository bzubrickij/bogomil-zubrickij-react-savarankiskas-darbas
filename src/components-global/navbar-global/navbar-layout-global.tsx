import React from 'react';
import {
  AppBar, Container, Toolbar, Typography, Box,
} from '@mui/material';

import NavbarClient from './client-navbar/client-navbar-client';
import NavbarVisitor from './visitor-navbar/visitor-navbar-visitor';
import { useRootSelector } from '../../store/hooks/hooks';
import { selectLoggedIn } from '../../store/features/authentication/auth-selectors';

const NavbarLayoutGlobal: React.FC = () => {
  const loggedIn = useRootSelector(selectLoggedIn);

  return (
    <AppBar position="static" sx={{ mb: 6, bgcolor: '#764AF1' }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            children / dog / cat / neighbour - disposal service
          </Typography>
          <Box>
            {loggedIn ? <NavbarClient /> : <NavbarVisitor />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarLayoutGlobal;
