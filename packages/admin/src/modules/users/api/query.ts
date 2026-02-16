import { API_KEYS, SERVICE_KEYS } from "@/shared";
import { useQuery } from "@tanstack/react-query";
import { findMySelf } from "./service";

export const useGetMySelf = () => {
  return useQuery({
    queryKey: [API_KEYS.users, SERVICE_KEYS.me],
    queryFn: () => findMySelf(),
  });
};
