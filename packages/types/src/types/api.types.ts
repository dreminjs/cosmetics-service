import { z } from "zod";
import { paginationQuerySchema } from "../schemas/api.schema";

export interface IAPIResponse<T> {
  data: T;
}

export interface IStandartResponse {
  message: string;
}

export interface IWithPagination<T> {
  total: number;
  items: T[];
}

export type TPaginationQuery = z.infer<typeof paginationQuerySchema>;
