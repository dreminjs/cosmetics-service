import { SideBar } from "@/components/sidebar/";
import { Outlet } from "react-router";

export const BaseLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};
