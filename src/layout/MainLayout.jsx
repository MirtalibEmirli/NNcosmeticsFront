import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#f5f5fa' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
