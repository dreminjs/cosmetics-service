import { createBrowserRouter } from "react-router";
import { CommonProvider } from "./providers/CommonProvider";
import { LoginPage, RegisterPage } from "../modules/auth";
import { PAGE_KEYS } from "@/shared";
import { AuthPageLayout } from "@/modules/auth/ui/AuthPageLayout";

export const router = createBrowserRouter([
  {
    element: <CommonProvider />,
    children: [
      {
        element: <AuthPageLayout />,
        children: [
          {
            path: PAGE_KEYS.login,
            element: <LoginPage />,
          },
          {
            path: PAGE_KEYS.register,
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
]);
