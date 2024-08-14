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
import { MainColumn, Page } from "../../../common/styledComponents";

const containerStyle = {
  paddingTop: "32px",
  paddingBottom: "32px",
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
    <Page>
      <MainColumn>
        <List
          data={listData}
          ActionButtons={NotificationActionButtons}
          header="Notifications"
        />
      </MainColumn>
    </Page>
  );
};
