import { Link } from "~/shared/ui";

export const ProcessesPage = () => {
  return (
    <div className="w-full">
      <div className="text-lg font-semibold border-b px-4">
        История процессов
      </div>
      <div className="divide-y border-b">
        <article className="text-muted-foreground px-4 flex justify-between flex-wrap items-center py-1 gap-2">
          <div>
            <Link to={"/processes/1"}>Процесс #1</Link> передан в работу отделом
            ЗГД от пользователя <Link to={"/profile"}>Сафронов Б.</Link>
          </div>
          <div className="ml-auto text-sm">16:00</div>
        </article>
        <article className="text-muted-foreground px-4 flex justify-between flex-wrap items-center py-1 gap-2">
          <div>
            <Link to={"/processes/1"}>Процесс #1</Link> передан в работу отделом
            ЗГД от пользователя <Link to={"/profile"}>Сафронов Б.</Link>
          </div>
          <div className="ml-auto text-sm">16:00</div>
        </article>
        <article className="text-muted-foreground px-4 flex justify-between flex-wrap items-center py-1 gap-2">
          <div>
            <Link to={"/processes/1"}>Процесс #1</Link> передан в работу отделом
            ЗГД от пользователя <Link to={"/profile"}>Сафронов Б.</Link>
          </div>
          <div className="ml-auto text-sm">16:00</div>
        </article>
        <article className="text-muted-foreground px-4 flex justify-between flex-wrap items-center py-1 gap-2">
          <div>
            <Link to={"/processes/1"}>Процесс #1</Link> передан в работу отделом
            ЗГД от пользователя <Link to={"/profile"}>Сафронов Б.</Link>
          </div>
          <div className="ml-auto text-sm">16:00</div>
        </article>
        <article className="text-muted-foreground px-4 flex justify-between flex-wrap items-center py-1 gap-2">
          <div>
            <Link to={"/processes/1"}>Процесс #1</Link> передан в работу отделом
            ЗГД от пользователя <Link to={"/profile"}>Сафронов Б.</Link>
          </div>
          <div className="ml-auto text-sm">16:00</div>
        </article>
      </div>
    </div>
  );
};
