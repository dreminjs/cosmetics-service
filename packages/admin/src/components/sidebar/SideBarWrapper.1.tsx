import { Overlay } from "./Overlay";


export const SideBarWrapper = ({ children }: { children: React.ReactNode; }) => {

  const { isOpen, toggle } = useSidebarStore();


  return <Overlay isVisible={isOpen}>
    <div
      className={clsx(
        "border-2 min-h-screen basis-[300px] md:hidden p-2 z-10 absolute bg-white",
        isOpen ? "block" : "hidden"
      )}
    >
};
    </></>;
};
