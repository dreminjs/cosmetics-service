import { useSidebarStore } from "@/app/store/sidebar.store";
import { Overlay } from "./Overlay";
import clsx from "clsx";

interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export const SideBarWrapper = ({ children, isOpen }: IProps) => {
  return (
    <Overlay isVisible={isOpen}>
      <div
        className={clsx(
          "border-2 min-h-screen basis-[300px] md:hidden p-2 z-10 absolute bg-white",
          isOpen ? "block" : "hidden",
        )}
      ></div>
      {children}
    </Overlay>
  );
};
