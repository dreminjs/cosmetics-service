import { API_KEYS, SERVICE_KEYS } from "@/shared";
import { instance } from "@/shared/api/api.instance";
import type { IStandartResponse, SigninDto } from "@cosmetic-services/types";

export const login = async (dto: SigninDto): Promise<IStandartResponse> => {
  console.log(dto);
  return (await instance.post(`${API_KEYS.auth}/${SERVICE_KEYS.login}`, dto))
    .data;
};

export const logout = async (): Promise<IStandartResponse> => {
  return (await instance.post(`${API_KEYS.auth}/${SERVICE_KEYS.logout}`)).data;
};
