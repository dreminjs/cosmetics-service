import { Header } from "@/components/header/Header";
import { SideBar } from "@/components/sidebar/";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { Outlet } from "react-router";

export const BaseLayout = () => {
  useAuthGuard("private");

  return (
    <div className="flex">
      <SideBar />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
