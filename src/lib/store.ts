"use client";

import { create } from "zustand";

interface AuthStore {
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoginOpen: false,
  openLogin: () => set({ isLoginOpen: true }),
  closeLogin: () => set({ isLoginOpen: false }),
}));
