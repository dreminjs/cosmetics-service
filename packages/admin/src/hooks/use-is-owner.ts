import { useGetMySelf } from "@/modules/users/api/query";
import { UserRoleSchema } from "@cosmetic-services/types";

export const useIsOwner = () => {
  const { data: user } = useGetMySelf();
  return user?.data.role.includes(UserRoleSchema.options[0]);
};
