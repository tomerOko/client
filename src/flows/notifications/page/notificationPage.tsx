// NotificationsPage.tsx

import React, { useEffect } from "react";

import { NotificationCard } from "../components/notificationCard";
import { useNotificationsState } from "../data/notificationState";
import { Container, Typography } from "@mui/material";
import { mockNotifications } from "../mock/mockNotifications";

const containerStyle = {
  paddingTop: "32px",
  paddingBottom: "32px",
};

const headerStyle = {
  marginBottom: "32px",
};

export const NotificationsPage: React.FC = () => {
  const { notifications, setNotifications } = useNotificationsState();

  // Set notifications on initial render
  useEffect(() => {
    setNotifications({ data: mockNotifications });
  }, [setNotifications]);

  return (
    <Container style={containerStyle}>
      <Typography variant="h4" style={headerStyle}>
        Notifications
      </Typography>
      {notifications.data.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </Container>
  );
};
