export type UserRes = {
  id: ID;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role?: "ADMIN" | "USER";
};
