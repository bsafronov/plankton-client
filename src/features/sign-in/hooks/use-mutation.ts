import { useMutation } from "@tanstack/react-query";
import { http } from "~/shared/api";
import { SignInReq, SignInRes } from "../types";
import { useAuthStore } from "~/shared/hooks";
import { toast } from "sonner";

export const useSignInMutation = () => {
  const signIn = useAuthStore().signIn;

  return useMutation<SignInRes, Error, SignInReq>({
    mutationKey: ["auth", "sign-in"],
    mutationFn: async (input) => {
      const { data } = await http.post<SignInRes>("/auth/sign-in", input);
      return data;
    },
    onSuccess: (userId) => {
      toast.success("Вы успешно вошли!");
      signIn(userId);
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });
};
