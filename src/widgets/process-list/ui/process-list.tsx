import { Link } from "~/shared/ui";

export const ProcessListWidget = () => {
  return (
    <aside className="border-r min-h-screen">
      <h5 className="border-b font-semibold px-4 text-lg">Активные процессы</h5>
      <div className="flex flex-col border-b w-64">
        <Link to={"/processes/1"} className="px-4 truncate">
          Процесс #1
        </Link>
        <Link to={"/processes/2"} className="px-4 truncate">
          Процесс #2
        </Link>
      </div>
    </aside>
  );
};
