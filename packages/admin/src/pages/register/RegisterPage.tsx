import type { AuthDto } from "@cosmetic-services/types";

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
