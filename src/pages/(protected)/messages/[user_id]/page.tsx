import { useParams } from "react-router-dom";

export const MessagesUserIdPage = () => {
  const { user_id } = useParams();

  return <div>Сообщения с пользователем {user_id}</div>;
};
