export type SignInReqBody = {
  username: string;
  password: string;
};

export type SignInResBody = {
  accessToken: string;
  refreshToken: string;
};
