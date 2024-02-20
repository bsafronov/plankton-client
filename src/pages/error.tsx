import { useNavigate } from "react-router-dom";
import { Button } from "~/shared/ui/button";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h1 className="text-5xl font-bold">404</h1>
      <h5 className="text-1xl text-muted-foreground">
        Такой страницы не существует
      </h5>
      <Button className="mt-4" onClick={() => navigate("/")}>
        На главную
      </Button>
    </div>
  );
};
