import { useRegister } from "../api/query";
import { AuthForm } from "./AuthForm";

export const RegisterPage = () => {
  const { mutate } = useRegister();

  return <AuthForm onSubmit={mutate} />;
};
