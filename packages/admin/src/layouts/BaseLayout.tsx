import { SideBar } from "@/components/sidebar/";
import { useCheckAuth } from "@/hooks/use-check-auth";
import { Outlet } from "react-router";

export const BaseLayout = () => {
  useCheckAuth();

  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};
