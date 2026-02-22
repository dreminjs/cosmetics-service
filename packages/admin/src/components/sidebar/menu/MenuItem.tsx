import { Link } from "react-router";
import type { IMenuItem } from "./menu.interface";

type TProps = Omit<IMenuItem, "isAdmin">;

export const MenuItem = ({ label, to }: TProps) => {
  return (
    <li className="mb-2.5">
      <Link to={to}>{label}</Link>
    </li>
  );
};
