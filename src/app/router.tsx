import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/root-layout";
import { AuthLayout } from "./layouts/auth-layout";
import { DashboardLayout } from "./layouts/dashboard-layout";
import { ErrorPage } from "~/pages/error";
import { HomePage } from "~/pages/page";
import { SignInPage } from "~/pages/auth/sign-in/page";
import { SignUpPage } from "~/pages/auth/sign-up/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/profile",
            element: <div>Profile</div>,
          },
          {
            path: "/messages",
            element: <div>Messages</div>,
          },
          {
            path: "/settings",
            element: <div>Settings</div>,
          },
          {
            path: "/processes",
            element: <div>Processes</div>,
          },
        ],
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "/auth/sign-in",
            element: <SignInPage />,
          },
          {
            path: "/auth/sign-up",
            element: <SignUpPage />,
          },
        ],
      },
    ],
  },
]);
