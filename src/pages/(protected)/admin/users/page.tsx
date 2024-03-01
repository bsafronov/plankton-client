import { FilterUsers } from "~/features/filter-users";
import { AdminUserList } from "~/widgets/admin-user-list";

export const AdminUsersPage = () => {
  return (
    <div className="flex gap-4 items-start">
      <div className="sticky top-4">
        <FilterUsers />
      </div>
      <div className="grow">
        <AdminUserList />
      </div>
    </div>
  );
};
