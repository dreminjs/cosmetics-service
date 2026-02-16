import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

export const APIProvider: FC<IProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
