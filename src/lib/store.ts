"use client";

import { create } from "zustand";

interface AuthStore {
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  isGetStartedOpen: boolean;
  openGetStarted: () => void;
  closeGetStarted: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoginOpen: false,
  openLogin: () => set({ isLoginOpen: true }),
  closeLogin: () => set({ isLoginOpen: false }),
  isGetStartedOpen: false,
  openGetStarted: () => set({ isGetStartedOpen: true }),
  closeGetStarted: () => set({ isGetStartedOpen: false }),
}));
