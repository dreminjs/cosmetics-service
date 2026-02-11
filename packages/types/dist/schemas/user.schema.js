"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserRoleSchema = exports.updateUserRoleSchema = exports.assignUserRoleSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.assignUserRoleSchema = zod_1.default.object({
    userId: zod_1.default.string().uuid(),
    role: zod_1.default.union([zod_1.default.literal("OWNER"), zod_1.default.literal("CUSTOMER"), zod_1.default.literal("USER")]),
});
exports.updateUserRoleSchema = zod_1.default.object({
    userId: zod_1.default.string().uuid(),
    role: zod_1.default.string().min(2).max(50),
});
exports.deleteUserRoleSchema = zod_1.default.object({
    userId: zod_1.default.string().uuid(),
});
