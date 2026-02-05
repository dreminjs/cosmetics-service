import type { AuthDto } from "@cosmetic-services/types";
import { AuthForm, AuthPageLayout, useRegister } from "../../modules/auth";

export const RegisterPage = () => {
  const { mutate } = useRegister();

  const handleSubmit = (dto: AuthDto) => {
    mutate(dto);
  };

  return (
    <AuthPageLayout>
      <AuthForm onSubmit={handleSubmit} />
    </AuthPageLayout>
  );
};
