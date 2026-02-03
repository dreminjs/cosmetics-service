"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookingSchema = exports.createBookingSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createBookingSchema = zod_1.default.object({
    masterId: zod_1.default.string(),
    timeSlotId: zod_1.default.string(),
});
exports.updateBookingSchema = exports.createBookingSchema.extend({}).partial();
