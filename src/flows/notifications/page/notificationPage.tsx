// NotificationsPage.tsx

import React, { useEffect, useMemo } from "react";

import { Container, Typography } from "@mui/material";
import List from "../../../common/components/list";
import { NotificationActionButtons } from "../components/notificationActionButtons";
import {
  convertNotificationToListDetails,
  useNotificationsState,
} from "../data/notificationState";
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

  useEffect(() => {
    setNotifications({ data: mockNotifications });
  }, [setNotifications]);

  const listData = useMemo(() => {
    const result = convertNotificationToListDetails(notifications);
    return result;
  }, [notifications, convertNotificationToListDetails]);

  return (
    <Container style={containerStyle}>
      <Typography variant="h4" style={headerStyle}>
        Notifications
      </Typography>
      <List data={listData} ActionButtons={NotificationActionButtons} />
    </Container>
  );
};
