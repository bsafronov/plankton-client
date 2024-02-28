import { Link } from "~/shared/ui";

export const AdminNavbarList = () => {
  return (
    <aside className="flex flex-col divide-y border-r">
      <Link to={"/admin"} className="px-4">
        Статистика
      </Link>
      <Link to={"/admin/departments"} className="px-4">
        Отделы
      </Link>
      <Link to={"/admin/products"} className="px-4">
        Изделия
      </Link>
      <Link to={"/admin/templates"} className="px-4">
        Шаблоны
      </Link>
      <Link to={"/admin/users"} className="px-4">
        Пользователи
      </Link>
    </aside>
  );
};
