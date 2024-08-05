import React, { useEffect, useState } from "react";
import create from "zustand";
import axios from "axios";

// Zustand store
interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token"),
  setToken: (token: string | null) => {
    localStorage.setItem("token", token || "");
    set({ token });
  },
  clearToken: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },
}));
