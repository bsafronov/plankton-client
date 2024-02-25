import { Package } from "lucide-react";

export const RootPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <Package className="size-40 text-muted-foreground" />
      <h1 className="text-5xl font-bold">Главная страница</h1>
      <h5 className="text-muted-foreground font-semibold text-lg">
        Здесь можно отобразить основную информацию с разных страниц
      </h5>
    </div>
  );
};
