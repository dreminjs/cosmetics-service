import { API_KEYS, SERVICE_KEYS } from "@/shared";
import { instance } from "@/shared/api/api.instance";
import type { IAPIResponse, TPrivateUser } from "@cosmetic-services/types";

export const findMySelf = async (): Promise<IAPIResponse<TPrivateUser>> => {
  return (await instance.get(`admin/${API_KEYS.users}/${SERVICE_KEYS.me}`))
    .data;
};
