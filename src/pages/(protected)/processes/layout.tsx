import { Outlet } from "react-router-dom";
import { Header } from "~/shared/components";
import { ProcessListWidget } from "~/widgets/process-list";

export const ProcessesLayout = () => {
  return (
    <div className="flex flex-col h-full">
      <Header title="Процессы" />
      <div className="flex grow">
        <ProcessListWidget />
        <Outlet />
      </div>
    </div>
  );
};
