"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.3.0",
    "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id             String        @id @default(uuid())\n  name           String\n  phone          String        @unique\n  hashedPassword String\n  refreshToken   RefreshToken?\n  booking        Booking[]\n  role           UserRole[]\n}\n\nmodel RefreshToken {\n  id     String @id @default(uuid())\n  token  String\n  user   User   @relation(fields: [userId], references: [id])\n  userId String @unique\n}\n\nmodel Service {\n  id             String          @id @default(uuid())\n  title          String\n  description    String\n  price          Float\n  duration       Int\n  previewImage   String\n  masterServices MasterService[]\n}\n\nmodel Master {\n  id             String          @id @default(uuid())\n  name           String\n  description    String\n  previewImage   String\n  timeSlots      TimeSlot[]\n  booking        Booking[]\n  masterServices MasterService[]\n}\n\nmodel MasterService {\n  id        String   @id @default(uuid())\n  masterId  String\n  serviceId String\n  master    Master   @relation(fields: [masterId], references: [id], onDelete: Cascade)\n  service   Service  @relation(fields: [serviceId], references: [id], onDelete: Cascade)\n  createdAt DateTime @default(now())\n\n  @@unique([masterId, serviceId])\n  @@index([masterId, serviceId])\n}\n\nmodel TimeSlot {\n  id        String   @id @default(uuid())\n  date      DateTime\n  startTime String\n  endTime   String\n  masterId  String\n  master    Master   @relation(fields: [masterId], references: [id], onDelete: Cascade)\n  booking   Booking?\n\n  @@unique([masterId, date, startTime, endTime])\n  @@index([date, startTime, endTime])\n}\n\nmodel Booking {\n  id         String   @id @default(uuid())\n  userId     String\n  user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n  timeSlot   TimeSlot @relation(fields: [timeSlotId], references: [id], onDelete: Cascade)\n  timeSlotId String   @unique\n  masterId   String\n  master     Master   @relation(fields: [masterId], references: [id], onDelete: Cascade)\n}\n\nmodel UserRole {\n  id     String @id @default(uuid())\n  role   Role\n  userId String\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([userId, role])\n}\n\nenum Role {\n  OWNER\n  CUSTOMER\n  MASTER\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"hashedPassword\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"refreshToken\",\"kind\":\"object\",\"type\":\"RefreshToken\",\"relationName\":\"RefreshTokenToUser\"},{\"name\":\"booking\",\"kind\":\"object\",\"type\":\"Booking\",\"relationName\":\"BookingToUser\"},{\"name\":\"role\",\"kind\":\"object\",\"type\":\"UserRole\",\"relationName\":\"UserToUserRole\"}],\"dbName\":null},\"RefreshToken\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"RefreshTokenToUser\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"Service\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"duration\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"previewImage\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"masterServices\",\"kind\":\"object\",\"type\":\"MasterService\",\"relationName\":\"MasterServiceToService\"}],\"dbName\":null},\"Master\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"previewImage\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"timeSlots\",\"kind\":\"object\",\"type\":\"TimeSlot\",\"relationName\":\"MasterToTimeSlot\"},{\"name\":\"booking\",\"kind\":\"object\",\"type\":\"Booking\",\"relationName\":\"BookingToMaster\"},{\"name\":\"masterServices\",\"kind\":\"object\",\"type\":\"MasterService\",\"relationName\":\"MasterToMasterService\"}],\"dbName\":null},\"MasterService\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"masterId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"serviceId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"master\",\"kind\":\"object\",\"type\":\"Master\",\"relationName\":\"MasterToMasterService\"},{\"name\":\"service\",\"kind\":\"object\",\"type\":\"Service\",\"relationName\":\"MasterServiceToService\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"TimeSlot\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"date\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"startTime\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"endTime\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"masterId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"master\",\"kind\":\"object\",\"type\":\"Master\",\"relationName\":\"MasterToTimeSlot\"},{\"name\":\"booking\",\"kind\":\"object\",\"type\":\"Booking\",\"relationName\":\"BookingToTimeSlot\"}],\"dbName\":null},\"Booking\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"BookingToUser\"},{\"name\":\"timeSlot\",\"kind\":\"object\",\"type\":\"TimeSlot\",\"relationName\":\"BookingToTimeSlot\"},{\"name\":\"timeSlotId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"masterId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"master\",\"kind\":\"object\",\"type\":\"Master\",\"relationName\":\"BookingToMaster\"}],\"dbName\":null},\"UserRole\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"Role\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserToUserRole\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await Promise.resolve().then(() => __importStar(require('node:buffer')));
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"))),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js")));
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map