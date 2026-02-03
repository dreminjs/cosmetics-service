"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findManyServicesQueryParamsSchema = exports.updateServiceSchema = exports.createServiceSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const api_schema_1 = require("./api.schema");
exports.createServiceSchema = zod_1.default.object({
    name: zod_1.default.string().min(2).max(100),
    description: zod_1.default.string().min(2).max(500).optional(),
    price: zod_1.default.number().min(0).max(100000).optional(),
});
exports.updateServiceSchema = exports.createServiceSchema.extend({}).partial();
exports.findManyServicesQueryParamsSchema = api_schema_1.paginationQuerySchema.extend({
    title: zod_1.default.string().optional(),
});
