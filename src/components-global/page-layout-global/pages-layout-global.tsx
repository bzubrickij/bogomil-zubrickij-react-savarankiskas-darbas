import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavbarLayoutGlobal from '../navbar-global/navbar-layout-global';

const PagesLayoutGlobal: React.FC = () => (
  <>
    <NavbarLayoutGlobal />
    <Box component="main">
      <Outlet />
    </Box>
  </>
);

export default PagesLayoutGlobal;
