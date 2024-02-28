import { Link } from "react-router-dom";
import { CCard } from "~/shared/components";

export const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-wrap">
      <Link to={"/admin/products"}>
        <CCard>Изделия</CCard>
      </Link>
      <Link to={"/admin/templates"}>
        <CCard>Шаблоны</CCard>
      </Link>
      <Link to={"/admin/users"}>
        <CCard>Пользователи</CCard>
      </Link>
    </div>
  );
};
