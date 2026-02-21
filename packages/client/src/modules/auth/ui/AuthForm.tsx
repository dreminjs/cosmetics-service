import { useForm } from "react-hook-form";
import { AuthFormField } from "./AuthFormField";
import type { FC } from "react";

interface IProps {
  onSubmit: (data: any) => void;
}

export const AuthForm: FC<IProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    // resolver: zodResolver(AuthDtoSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/*<AuthFormField
        placeholder="Введите никнейм"
        register={register}
        label={"никнейм"}
        name={"name"}
        error={errors.name?.message}
      />
      <AuthFormField
        placeholder="Введите пароль"
        register={register}
        label={"пароль"}
        name={"password"}
        error={errors.password?.message}
      />*/}
      <button
        className="border-2 px-[15px] rounded-lg block mt-[15px]"
        type="submit"
      >
        Войти
      </button>
    </form>
  );
};
