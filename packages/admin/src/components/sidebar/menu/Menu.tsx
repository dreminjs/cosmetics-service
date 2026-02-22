import { menuItems } from "./menu.data";
import { MenuItem } from "./MenuItem";
import { useIsOwner } from "@/hooks/use-is-owner";

export const Menu = () => {
  const isOwner = useIsOwner();
  const visibleItems = menuItems.filter((el) => {
    if (el.isAdmin) return isOwner;
    return true;
  });
  return (
    <ul>
      {visibleItems.map((el) => (
        <MenuItem {...el} key={el.to} />
      ))}
    </ul>
  );
};
