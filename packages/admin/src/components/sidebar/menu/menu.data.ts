import type { IMenuItem } from "./menu.interface";

export const menuItems: IMenuItem[] = [
  {
    label: "Заказы",
    to: "/orders",
  },
  {
    label: "Клиенты",
    to: "/customers",
  },
  {
    label: "Предоставляемые услуги",
    to: "/services",
    isAdmin: true,
  },
  {
    label: "Сотрудники",
    to: "/employees",
    isAdmin: true,
  },
];
