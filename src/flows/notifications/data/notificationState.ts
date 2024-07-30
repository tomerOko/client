import { create } from "zustand";

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
}

export interface Notifications {
  data: Notification[];
}

interface NotificationsState {
  notifications: Notifications;
  setNotifications: (notifications: Notifications) => void;
}

export const useNotificationsState = create<NotificationsState>((set) => ({
  notifications: {
    data: [],
  },
  setNotifications: (notifications: Notifications) => set({ notifications }),
}));
