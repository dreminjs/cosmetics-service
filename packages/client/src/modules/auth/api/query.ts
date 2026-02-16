import { useMutation } from "@tanstack/react-query";
import { login, register, logout } from "./service";
import type { AuthDto } from "@cosmetic-services/types";

export const useLogin = () => {
  const { mutate, ...props } = useMutation({
    mutationFn: login,
  });

  return {
    ...props,
    mutate: (dto: AuthDto) => mutate(dto),
  };
};

export const useRegister = () => {
  const { mutate, ...props } = useMutation({
    mutationFn: register,
  });

  return {
    ...props,
    mutate: (dto: AuthDto) => mutate(dto),
  };
};

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};
