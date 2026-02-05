import type { AuthDto } from "@cosmetic-services/types";
import { AuthForm, AuthPageLayout, useLogin } from "../../modules/auth";

export const LoginPage = () => {
  const { mutate } = useLogin();

  const handleSubmit = (dto: AuthDto) => {
    mutate(dto);
  };

  return (
    <AuthPageLayout>
      <AuthForm onSubmit={handleSubmit} />
    </AuthPageLayout>
  );
};
