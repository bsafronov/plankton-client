import { Outlet } from "react-router-dom";
import { RootProvider } from "../providers/root-provider";

export const RootLayout = () => {
  return (
    <>
      <RootProvider>
        <Outlet />
      </RootProvider>
    </>
  );
};
