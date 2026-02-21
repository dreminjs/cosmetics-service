import { useSidebarStore } from "@/app/store/sidebar.store";
import clsx from "clsx";
export const SideBar = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);

  return (
    <div
      className={clsx(
        "border-2 min-h-screen basis-[300px] md:hidden",
        isOpen ? "block" : "hidden",
      )}
    >
      <h1>SideBar</h1>
    </div>
  );
};
