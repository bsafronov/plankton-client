import { http } from "~/shared/api";
import { SignInReqBody, SignInResBody } from "../types";

export const signIn = (data: SignInReqBody) => {
  return http.post<SignInResBody>("/auth/sign-in", data);
};
