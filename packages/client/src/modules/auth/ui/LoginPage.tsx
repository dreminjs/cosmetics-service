import { useLogin } from "../api/query";
import { AuthForm } from "./AuthForm";

export const LoginPage = () => {
  const { mutate } = useLogin();

  return <AuthForm onSubmit={mutate} />;
};
