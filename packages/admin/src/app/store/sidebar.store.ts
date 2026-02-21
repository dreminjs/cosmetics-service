import { create } from "zustand";

interface ISidebarStore {
  isOpen: boolean;
  toggle: () => void;
}

export const useSidebarStore = create<ISidebarStore>((set) => ({
  isOpen: false,
  toggle: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },
}));
