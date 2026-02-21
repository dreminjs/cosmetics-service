import { useAuthGuard } from "@/hooks/use-auth-guard";
import type { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const AuthPageLayout: FC<IProps> = ({ children }) => {
  useAuthGuard("guest");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {children}
    </div>
  );
};
