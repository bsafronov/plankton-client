export type SignUpReq = {
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  password: string;
};

export type SignUpRes = ID;
