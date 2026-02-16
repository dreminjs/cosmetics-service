import { createBrowserRouter } from "react-router";
import { AuthPageLayout } from "@/modules/auth";
import { LoginPage } from "@/pages/login";
import { BaseLayout } from "@/layouts/BaseLayout";
import { OrdersPage } from "@/modules/orders";
import { CommonProvider } from "./providers/CommonProvider";

export const router = createBrowserRouter([
  {
    Component: CommonProvider,
    children: [
      {
        Component: AuthPageLayout,
        children: [
          {
            path: "/login",
            Component: LoginPage,
          },
        ],
      },
      {
        Component: BaseLayout,
        children: [
          {
            path: "/",
            Component: OrdersPage,
          },
        ],
      },
    ],
  },
]);
