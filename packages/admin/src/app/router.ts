import { createBrowserRouter } from "react-router";
import { AuthPageLayout } from "@/modules/auth";
import { LoginPage } from "@/pages/login";
import { BaseLayout } from "@/layouts/BaseLayout";
import { OrdersPage } from "@/modules/orders";
import { CommonProvider } from "./providers/CommonProvider";
import { PAGE_KEYS } from "@/shared";

export const router = createBrowserRouter([
  {
    Component: CommonProvider,
    children: [
      {
        path: PAGE_KEYS.login,
        Component: LoginPage,
      },
      {
        Component: BaseLayout,
        children: [
          {
            path: PAGE_KEYS.orders,
            Component: OrdersPage,
          },
        ],
      },
    ],
  },
]);
