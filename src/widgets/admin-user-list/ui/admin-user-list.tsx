import InfiniteScroll from "react-infinite-scroll-component";
import { useAdminUserListQuery } from "../hooks/use-admin-user-list-query";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { CCard } from "~/shared/ui";

export const AdminUserList = () => {
  const { data: users, hasNextPage, fetchNextPage } = useAdminUserListQuery();
  const flatList = users?.pages.flatMap((page) => page.results);

  return (
    <InfiniteScroll
      hasMore={hasNextPage}
      next={fetchNextPage}
      dataLength={flatList?.length ?? 0}
      loader={<Loader2 className="animate-spin block mx-auto" />}
      className="grid grid-cols-2 gap-4"
    >
      {flatList?.map(({ email, id, firstName, lastName, role, username }) => (
        <Link to={`/admin/users/${id}`} key={id}>
          <CCard title={`${firstName} ${lastName}`}>
            <p>
              <span className="text-muted-foreground">Логин:</span> {username}
            </p>
            <p>
              <span className="text-muted-foreground">Роль:</span> {role}
            </p>
            <p>
              <span className="text-muted-foreground">Почта:</span> {email}
            </p>
          </CCard>
        </Link>
      ))}
    </InfiniteScroll>
  );
};
