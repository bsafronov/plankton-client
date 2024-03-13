import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { http } from "~/shared/api";
import { useAuthStore } from "~/shared/hooks";
import { SignUpReq, SignUpRes } from "../types";

export const useSignUpMutation = () => {
  const signIn = useAuthStore().signIn;

  return useMutation<SignUpRes, Error, SignUpReq>({
    mutationKey: ["auth", "sign-up"],
    mutationFn: async (input) => {
      const { data } = await http.post<SignUpRes>("auth/sign-up", input);
      return data;
    },
    onSuccess: (data) => {
      toast.success("Вы успешно зарегистрировались!");
      signIn(data);
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });
};
