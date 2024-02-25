import { Outlet } from "react-router-dom";
import { UserMessagesListWidget } from "~/widgets/user-messages-list";

export const MessagesLayout = () => {
  return (
    <div className="flex min-h-screen">
      <UserMessagesListWidget />
      <Outlet />
    </div>
  );
};
