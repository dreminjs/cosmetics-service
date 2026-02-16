import { Outlet } from "react-router";
import { APIProvider } from "./APIProvider";

export const CommonProvider = () => {
  return (
    <APIProvider>
      <Outlet />
    </APIProvider>
  );
};
