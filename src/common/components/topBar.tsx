import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  AppBar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../data/authStore";

const getPageTitle = (pathname: string) => {
  switch (pathname) {
    case "/settings":
      return "Settings";
    case "/search":
      return "Search";
    case "/chat":
      return "Chat";
    case "/user-details":
      return "User Details";
    case "/calls-history":
      return "Calls History";
    case "/payment-methods":
      return "Payment Methods";
    case "/logout":
      return "Logout";
    case "/reviewing":
      return "Review & Rating";
    case "/upcoming-meetings":
      return "Upcoming Meetings";
    case "/become-teacher":
      return "Become Teacher";
    default:
      return "";
  }
};

export const TopBar: React.FC = () => {
  const location = useLocation();
  // const { notifications } = useNotificationsState(); // smame for chat

  const { clear } = useAuthStore();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchor2El, setAnchor2El] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchor2El);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handle2Click = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor2El(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handle2Close = () => {
    setAnchor2El(null);
  };

  const pagesWithoutTopBar = ["/", "/signup", "/signin"];

  const showTopBar = !pagesWithoutTopBar.includes(location.pathname);
  if (!showTopBar) {
    return null;
  }

  return (
    <AppBar position="absolute">
      <Toolbar variant="dense">
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {/* {getPageTitle(location.pathname)} */}
        </Typography>
        <IconButton color="inherit" component={Link} to="/home">
          <HomeIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/upcoming-meetings">
          <CalendarMonthIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/chat">
          <Badge badgeContent={7} color="error">
            <ChatIcon />
          </Badge>
        </IconButton>
        {/* notifications */}
        <IconButton color="inherit" component={Link} to="/notifications">
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit" onClick={handle2Click}>
          <LocalLibraryIcon />
        </IconButton>
        <Menu
          id="teachers-menu"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open2}
          onClose={handle2Close}
          style={{ marginTop: 40 }}
        >
          <MenuItem component={Link} to="/my-topics" onClick={handle2Close}>
            My Topics
          </MenuItem>
          <MenuItem
            component={Link}
            to="/edit-availability"
            onClick={handle2Close}
          >
            Availabilities
          </MenuItem>
          <MenuItem component={Link} to="/earnings" onClick={handle2Close}>
            Earnings
          </MenuItem>
          <MenuItem
            component={Link}
            to="/manage-bank-accounts"
            onClick={handle2Close}
          >
            Bank Accounts
          </MenuItem>
          <MenuItem
            component={Link}
            to="/become-teacher"
            onClick={handle2Close}
          >
            Become Teacher
          </MenuItem>
        </Menu>
        <IconButton color="inherit" onClick={handleClick}>
          <SettingsIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
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
          <MenuItem
            component={Link}
            to="/payment-methods"
            onClick={handleClose}
          >
            Payment Methods
          </MenuItem>
          <MenuItem
            component={Link}
            to="/"
            onClick={() => {
              handleClose();
              clear();
              alert("loged out");
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
