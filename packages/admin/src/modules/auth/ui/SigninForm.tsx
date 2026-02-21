import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AuthFormField } from "./AuthFormField";
import { useLogin } from "../api/query";
import { type SigninDto, SigninDtoSchema } from "@cosmetic-services/types";

export const SigninForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninDto>({
    resolver: zodResolver(SigninDtoSchema),
  });
  const { mutate } = useLogin();

  return (
    <form onSubmit={handleSubmit(mutate)}>
      <AuthFormField
        placeholder="Введите номер телефона"
        register={register}
        label={"номер телефона"}
        name={"phone"}
        error={errors.phone?.message}
      />
      <AuthFormField
        placeholder="Введите пароль"
        register={register}
        label={"пароль"}
        name={"password"}
        error={errors.password?.message}
      />
      <button
        className="border-2 px-[15px] rounded-lg block mt-[15px]"
        type="submit"
      >
        Войти
      </button>
    </form>
  );
};
