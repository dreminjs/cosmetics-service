import { useMutation } from "@tanstack/react-query";
import { login, logout } from "./service";
import { useNavigate } from "react-router";
import { PAGE_KEYS } from "@/shared";
import type { SigninDto } from "@cosmetic-services/types";

export const useLogin = () => {
  const { mutate, ...props } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      const navigate = useNavigate();
      navigate(PAGE_KEYS.orders);
    },
  });

  return { mutate: (dto: SigninDto) => mutate(dto), ...props };
};

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      const navigate = useNavigate();
      navigate(PAGE_KEYS.login);
    },
  });
};
