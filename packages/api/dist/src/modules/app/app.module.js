"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const auth_1 = require("../auth");
const master_module_1 = require("../master/master.module");
const service_module_1 = require("../service/service.module");
const token_module_1 = require("../token/token.module");
const minio_module_1 = require("../minio/minio.module");
const user_module_1 = require("../user/user.module");
const user_role_1 = require("../user-role");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_1.AuthModule,
            master_module_1.MasterModule,
            service_module_1.ServiceModule,
            token_module_1.TokenModule,
            minio_module_1.MinioModule,
            user_module_1.UserModule,
            user_role_1.UserRoleModule,
        ],
        controllers: [app_controller_1.AppController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map