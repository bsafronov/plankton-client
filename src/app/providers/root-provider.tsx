import { AuthProvider } from "./auth-provider";
import { ModalProvider } from "./modal-provider";
import { QueryProvider } from "./query-provider";

type Props = {
  children?: React.ReactNode;
};

export const RootProvider = ({ children }: Props) => {
  return (
    <QueryProvider>
      <AuthProvider>
        <ModalProvider />
        {children}
      </AuthProvider>
    </QueryProvider>
  );
};
