import { Outlet } from "react-router-dom";
import { MessageUserListWidget } from "~/widgets/message-user-list";

export const MessagesLayout = () => {
  return (
    <div className="flex min-h-screen">
      <MessageUserListWidget />
      <Outlet />
    </div>
  );
};
