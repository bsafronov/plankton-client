import { Outlet } from "react-router-dom";
import { ChatListWidget } from "~/widgets/chat-list";

export const MessagesLayout = () => {
  return (
    <div className="flex min-h-screen">
      <ChatListWidget />
      <Outlet />
    </div>
  );
};
