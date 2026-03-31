"use client";

import { create } from "zustand";

interface AuthStore {
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  isGetStartedOpen: boolean;
  openGetStarted: () => void;
  closeGetStarted: () => void;
  isExploreOpen: boolean;
  openExplore: () => void;
  closeExplore: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoginOpen: false,
  openLogin: () => set({ isLoginOpen: true }),
  closeLogin: () => set({ isLoginOpen: false }),
  isGetStartedOpen: false,
  openGetStarted: () => set({ isGetStartedOpen: true }),
  closeGetStarted: () => set({ isGetStartedOpen: false }),
  isExploreOpen: false,
  openExplore: () => set({ isExploreOpen: true }),
  closeExplore: () => set({ isExploreOpen: false }),
}));
