import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import { Link, useLocation } from 'react-router-dom';

const TopBar: React.FC = () => {

  const location = useLocation();

  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case '/settings':
        return 'Settings';
      case '/search':
        return 'Search';
      case '/chat':
        return 'Chat';
      default:
        return 'User Details';
    }
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6"  sx={{ flexGrow: 1 }}>
          {getPageTitle(location.pathname)}
        </Typography>
        <IconButton color="inherit" component={Link} to="/user-details">
          <SettingsIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/search">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/chat">
          <ChatIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
