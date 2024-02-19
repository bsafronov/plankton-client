import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
type Props = {
  isAuth: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  logout: () => void;
  refresh: (tokens: RefreshProps) => void;
} & (AuthorizedProps | UnauthorizedProps);

type AuthorizedProps = {
  isAuth: true;
  accessToken: string;
  refreshToken: string;
};

type UnauthorizedProps = {
  isAuth: false;
  accessToken: null;
  refreshToken: null;
};

type RefreshProps = {
  accessToken: string;
  refreshToken: string;
};

const authState: StateCreator<Props> = (set) => ({
  isAuth: false,
  accessToken: null,
  refreshToken: null,
  logout: () => {
    set({
      isAuth: false,
      accessToken: null,
      refreshToken: null,
    });
  },
  refresh: ({ accessToken, refreshToken }) => {
    set({
      isAuth: true,
      accessToken,
      refreshToken,
    });
  },
});

export const useAuthStore = create<Props>()(
  persist(authState, {
    name: "auth",
  })
);
