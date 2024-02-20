import { ModalProvider } from "./modal-provider";
import { QueryProvider } from "./query-provider";

type Props = {
  children?: React.ReactNode;
};

export const RootProvider = ({ children }: Props) => {
  return (
    <QueryProvider>
      <ModalProvider />
      {children}
    </QueryProvider>
  );
};
