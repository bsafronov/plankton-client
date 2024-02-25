import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import { Toaster, TooltipProvider } from "~/shared/ui";

const queryClient = new QueryClient();

export const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Outlet />
      </TooltipProvider>
      <ReactQueryDevtools />
      <Toaster richColors />
    </QueryClientProvider>
  );
};
