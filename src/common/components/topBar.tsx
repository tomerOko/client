import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Badge,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Home as HomeIcon,
  CalendarMonth as CalendarMonthIcon,
  Chat as ChatIcon,
  Notifications as NotificationsIcon,
  LocalLibrary as LocalLibraryIcon,
  Settings as SettingsIcon,
  ExitToApp as LogoutIcon,
  Person as PersonIcon,
  History as HistoryIcon,
  Payment as PaymentIcon,
  Topic as TopicIcon,
  AccessTime as AvailabilityIcon,
  AccountBalance as EarningsIcon,
  AccountBalanceWallet as BankAccountIcon,
  School as BecomeTeacherIcon,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../data/authStore";

export const TopBar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const { clear } = useAuthStore();

  const [settingsAnchorEl, setSettingsAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [teacherAnchorEl, setTeacherAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleTeacherClick = (event: React.MouseEvent<HTMLElement>) => {
    setTeacherAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setSettingsAnchorEl(null);
    setTeacherAnchorEl(null);
  };

  const pagesWithoutTopBar = ["/", "/signup", "/signin"];
  if (pagesWithoutTopBar.includes(location.pathname)) {
    return null;
  }

  const menuItems = [
    { icon: <PersonIcon />, text: "User Details", link: "/user-details" },
    { icon: <HistoryIcon />, text: "Calls History", link: "/calls-history" },
    {
      icon: <PaymentIcon />,
      text: "Payment Methods",
      link: "/payment-methods",
    },
    {
      icon: <LogoutIcon />,
      text: "Logout",
      onClick: () => {
        handleClose();
        clear();
        alert("Logged out");
      },
    },
  ];

  const teacherMenuItems = [
    { icon: <TopicIcon />, text: "My Topics", link: "/my-topics" },
    {
      icon: <AvailabilityIcon />,
      text: "Availabilities",
      link: "/edit-availability",
    },
    { icon: <EarningsIcon />, text: "Earnings", link: "/earnings" },
    {
      icon: <BankAccountIcon />,
      text: "Bank Accounts",
      link: "/bank-accounts",
    },
    {
      icon: <BecomeTeacherIcon />,
      text: "Become Teacher",
      link: "/become-consultant",
    },
  ];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            color="white"
            sx={{ mr: 2, fontWeight: "bold" }}
          >
            Consultify
          </Typography>
          {!isMobile && (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/home"
                startIcon={<HomeIcon />}
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/upcoming-meetings"
                startIcon={<CalendarMonthIcon />}
              >
                Meetings
              </Button>
            </>
          )}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" component={Link} to="/chat">
            <Badge badgeContent={7} color="error">
              <ChatIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" component={Link} to="/notifications">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={handleTeacherClick}>
            <LocalLibraryIcon />
          </IconButton>
          <IconButton onClick={handleSettingsClick}>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: "white",
                color: theme.palette.primary.main,
              }}
            >
              <SettingsIcon />
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
      <Menu
        anchorEl={settingsAnchorEl}
        open={Boolean(settingsAnchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={item.onClick || handleClose}
            component={item.link ? Link : "li"}
            to={item.link}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
      <Menu
        anchorEl={teacherAnchorEl}
        open={Boolean(teacherAnchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {teacherMenuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
            component={Link}
            to={item.link}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};
