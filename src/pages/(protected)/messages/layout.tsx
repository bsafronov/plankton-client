import { Outlet } from "react-router-dom";
import { Header } from "~/shared/ui";
import { ChatListWidget } from "~/widgets/chat-list";

export const MessagesLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Сообщения" />
      <div className="flex grow">
        <ChatListWidget />
        <Outlet />
      </div>
    </div>
  );
};
