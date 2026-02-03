import z from "zod";
import {
  createBookingSchema,
  updateBookingSchema,
} from "../schemas/booking.schema";

export type TCreateBookingDto = z.infer<typeof createBookingSchema>;
export type TUpdateBookingDto = z.infer<typeof updateBookingSchema>;
