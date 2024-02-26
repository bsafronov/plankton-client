import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "~/pages/error";
import { RootPage } from "~/pages/(protected)/page";
import { SignInPage } from "~/pages/auth/sign-in/page";
import { SignUpPage } from "~/pages/auth/sign-up/page";
import { RootLayout } from "~/pages/layout";
import { ProfilePage } from "~/pages/(protected)/profile/page";
import { MessagesPage } from "~/pages/(protected)/messages/page";
import { SettingsPage } from "~/pages/(protected)/settings/page";
import { ProcessesPage } from "~/pages/(protected)/processes/page";
import { AuthLayout } from "~/pages/auth/layout";
import { ShowcasePage } from "~/pages/showcase/page";
import { ProccessIdPage } from "~/pages/(protected)/processes/[process_id]/page";
import { ProcessesLayout } from "~/pages/(protected)/processes/layout";
import { MessagesUserIdPage } from "~/pages/(protected)/messages/[user_id]/page";
import { MessagesLayout } from "~/pages/(protected)/messages/layout";
import { ProtectedLayout } from "~/pages/(protected)/layout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
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
            element: <MessagesLayout />,
            children: [
              {
                path: "/messages",
                element: <MessagesPage />,
              },
              {
                path: "/messages/:user_id",
                element: <MessagesUserIdPage />,
              },
            ],
          },
          {
            path: "/settings",
            element: <SettingsPage />,
          },
          {
            element: <ProcessesLayout />,
            children: [
              {
                path: "/processes",
                element: <ProcessesPage />,
              },
              {
                path: "/processes/:process_id",
                element: <ProccessIdPage />,
              },
            ],
          },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/showcase",
            element: <ShowcasePage />,
          },
        ],
      },
      {
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
