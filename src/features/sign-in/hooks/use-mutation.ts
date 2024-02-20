import { useMutation } from "@tanstack/react-query";
import { authApi, authConsts } from "~/entities/auth";

export const useSignInMutation = () => {
  return useMutation({
    mutationKey: authConsts.queryKeys.signIn,
    mutationFn: authApi.signIn,
  });
};
