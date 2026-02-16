import { useMutation } from "@tanstack/react-query";
import { login, logout } from "./service";
import type { AuthDto } from "@cosmetic-services/types";

export const useLogin = () => {
  const { mutate, ...props } = useMutation({
    mutationFn: login,
  });

  return { mutate: (dto: AuthDto) => mutate(dto), ...props };
};

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};
