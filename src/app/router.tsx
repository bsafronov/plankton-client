import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "~/pages/error";
import { RootPage } from "~/pages/(protected)/page";
import { SignInPage } from "~/pages/auth/sign-in/page";
import { SignUpPage } from "~/pages/auth/sign-up/page";
import { RootLayout } from "~/pages/layout";
import { ProtectedLayout } from "~/pages/(protected)/layout";
import { ProfilePage } from "~/pages/(protected)/profile/page";
import { MessagesPage } from "~/pages/(protected)/messages/page";
import { SettingsPage } from "~/pages/(protected)/settings/page";
import { ProcessesPage } from "~/pages/(protected)/processes/page";
import { AuthLayout } from "~/pages/auth/layout";
import { ShowcasePage } from "~/pages/showcase/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProtectedLayout />,
        children: [
          {
            index: true,
            element: <RootPage />,
          },
          {
            path: "/profile",
            element: <ProfilePage />,
          },
          {
            path: "/messages",
            element: <MessagesPage />,
          },
          {
            path: "/settings",
            element: <SettingsPage />,
          },
          {
            path: "/processes",
            element: <ProcessesPage />,
          },
        ],
      },
      {
        path: "/showcase",
        element: <AuthLayout />,
        children: [
          {
            path: "/showcase",
            element: <ShowcasePage />,
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
