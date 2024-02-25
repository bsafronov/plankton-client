import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "~/shared/ui";

export const ChatListWidget = () => {
  return (
    <aside className="border-r">
      <h5 className="border-b font-semibold text-center">Сообщения</h5>
      <div className="flex flex-col border-b divide-y">
        <Link to={"/messages/1"} className="flex p-2 gap-2 items-center">
          <Avatar>
            <AvatarFallback className="bg-amber-300" />
          </Avatar>
          <div className="flex flex-col text-sm w-40">
            <span className="font-semibold truncate">Пользователь 1</span>
            <p className="text-muted-foreground truncate">
              Последнее сообщение
            </p>
          </div>
        </Link>
        <Link to={"/messages/2"} className="flex p-2 gap-2 items-center">
          <Avatar>
            <AvatarFallback className="bg-emerald-300" />
          </Avatar>
          <div className="flex flex-col text-sm w-40">
            <span className="font-semibold truncate">Пользователь 2</span>
            <p className="text-muted-foreground truncate">
              Последнее сообщение
            </p>
          </div>
        </Link>
      </div>
    </aside>
  );
};
