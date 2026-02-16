import { AuthForm, useLogin } from "../../modules/auth";

export const LoginPage = () => {
  const { mutate } = useLogin();

  return <AuthForm onSubmit={mutate} />;
};
