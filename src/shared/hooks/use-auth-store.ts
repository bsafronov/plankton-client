import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
type Props = {
  isAuth: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  login: (tokens: TokensProps) => void;
  refresh: (tokens: TokensProps) => void;
  logout: () => void;
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

type TokensProps = {
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
  login: ({ accessToken, refreshToken }) => {
    set({
      isAuth: true,
      accessToken,
      refreshToken,
    });
  },
  refresh: ({ accessToken, refreshToken }) => {
    set({
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
