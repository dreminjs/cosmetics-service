import { API_KEYS, SERVICE_KEYS } from "@/shared";
import { instance } from "@/shared/api/api.instance";
import type { IAPIResponse, TPublicUser } from "@cosmetic-services/types";

export const findMySelf = async (): Promise<IAPIResponse<TPublicUser>> => {
  return (await instance.get(`${API_KEYS.users}/${SERVICE_KEYS.me}`)).data;
};
