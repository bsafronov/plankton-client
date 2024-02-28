import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
type Props = {
  isAuth: boolean;
  userId: number | null;
  signIn: (userId: number) => void;
  signOut: () => void;
};

const authState: StateCreator<Props> = (set) => ({
  isAuth: false,
  userId: null,
  signIn(userId) {
    set({ isAuth: true, userId });
  },
  signOut() {
    set({ isAuth: false });
  },
});

export const useAuthStore = create<Props>()(
  persist(authState, {
    name: "auth",
  })
);
