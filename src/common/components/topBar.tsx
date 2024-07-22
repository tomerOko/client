import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
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
      case '/user-details':
        return 'User Details';
      case '/calls-history':
        return 'Calls History';
      case '/payment-methods':
        return 'Payment Methods';
      case '/logout':
        return 'Logout';
      case '/reviewing':
        return 'Review & Rating';
      default:
        return '';
    }
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {getPageTitle(location.pathname)}
        </Typography>
        <IconButton color="inherit" component={Link} to="/search">
          <HomeIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/chat">
          <ChatIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleClick}>
          <SettingsIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
          style={{ marginTop: 40 }}
        >
          <MenuItem component={Link} to="/user-details" onClick={handleClose}>
            User Details
          </MenuItem>
          <MenuItem component={Link} to="/calls-history" onClick={handleClose}>
            Calls History
          </MenuItem>
          <MenuItem component={Link} to="/payment-methods" onClick={handleClose}>
            Payment Methods
          </MenuItem>
          <MenuItem component={Link} to="/" onClick={()=>{
            handleClose(); 
            alert('loged out');
            }}>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
