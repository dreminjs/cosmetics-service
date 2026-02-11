"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOneTimeSlotSchema = exports.createTimeSlotSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createTimeSlotSchema = zod_1.default.object({
    id: zod_1.default.string().uuid(),
    date: zod_1.default.date(),
    startTime: zod_1.default.string(),
    endTime: zod_1.default.string(),
    masterId: zod_1.default.string().uuid(),
});
exports.updateOneTimeSlotSchema = exports.createTimeSlotSchema.partial();
