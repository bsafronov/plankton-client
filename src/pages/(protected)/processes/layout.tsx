import { Outlet } from "react-router-dom";
import { ProcessListWidget } from "~/widgets/process-list";

export const ProcessesLayout = () => {
  return (
    <div className="flex">
      <ProcessListWidget />
      <Outlet />
    </div>
  );
};
