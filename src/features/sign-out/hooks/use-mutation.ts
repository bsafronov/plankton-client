import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { http } from "~/shared/api";
import { useAuthStore } from "~/shared/hooks";

export const useSignOutMutation = () => {
  const signOut = useAuthStore().signOut;

  return useMutation({
    mutationKey: ["auth", "sign-out"],
    mutationFn: async () => {
      const { data } = await http.post<boolean>("auth/sign-out");
      return data;
    },
    onSuccess: () => {
      signOut();
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });
};
