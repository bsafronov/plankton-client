export type User = {
  id: ID;
  username: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  role: "ADMIN" | "USER";
};
