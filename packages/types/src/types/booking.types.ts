import z from "zod";
import {
  createBookingSchema,
  updateBookingSchema,
} from "../schemas/booking.schema.js";

export type TCreateBookingDto = z.infer<typeof createBookingSchema>;
export type TUpdateBookingDto = z.infer<typeof updateBookingSchema>;
