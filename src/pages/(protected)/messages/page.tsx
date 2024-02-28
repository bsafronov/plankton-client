import { MessageSquare } from "lucide-react";

export const MessagesPage = () => {
  return (
    <div className="flex items-center justify-center grow flex-col">
      <MessageSquare className="size-40 text-muted-foreground" />
      <h1 className="text-4xl font-bold">Выберите чат</h1>
      <h5 className="text-lg text-muted-foreground font-semibold">
        Чтобы начать общение
      </h5>
    </div>
  );
};
