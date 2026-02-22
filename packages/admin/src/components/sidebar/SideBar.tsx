import { useSidebarStore } from "@/app/store/sidebar.store";
import { Menu } from "./menu/Menu";
import { SideBarWrapper } from "./SideBarWrapper";
export const SideBar = () => {
  const { isOpen, toggle } = useSidebarStore();

  return (
    <SideBarWrapper isOpen={isOpen}>
      <button className="md:hidden mb-5" onClick={toggle}>
        close
      </button>
      <Menu />
    </SideBarWrapper>
  );
};
