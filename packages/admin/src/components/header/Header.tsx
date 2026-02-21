import { useSidebarStore } from "@/app/store/sidebar.store";

export const Header = () => {
  const { toggle, isOpen } = useSidebarStore();

  return (
    <header>
      <button className="md:hidden" onClick={toggle}>
        {isOpen ? "close" : "open"}
      </button>
    </header>
  );
};
