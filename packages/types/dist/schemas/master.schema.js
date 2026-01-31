"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findManyMasterQueryParamsSchema = exports.updateMasterFormSchema = exports.hireMasterFormSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const api_schema_1 = require("./api.schema");
exports.hireMasterFormSchema = zod_1.default.object({
    name: zod_1.default
        .string()
        .min(1, { message: "Имя обязательно" })
        .max(100, { message: "Имя не должно превышать 100 символов" }),
    description: zod_1.default
        .string()
        .max(1000, { message: "Описание не должно превышать 1000 символов" }),
    previewImage: zod_1.default.string(),
});
exports.updateMasterFormSchema = exports.hireMasterFormSchema
    .extend({
    oldPreviewImage: zod_1.default.string().optional(),
})
    .partial();
exports.findManyMasterQueryParamsSchema = api_schema_1.paginationQuerySchema.extend({
    serviceId: zod_1.default.string().uuid().optional(),
});
