import { createBrowserRouter } from "react-router-dom";
import { RootProvider } from "./providers/root-provider";
import { HomePage } from "~/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootProvider />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
