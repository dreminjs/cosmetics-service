"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSlotController = void 0;
const common_1 = require("@nestjs/common");
const time_slot_service_1 = require("./time-slot.service");
const create_dto_1 = require("./dto/create.dto");
const update_dto_1 = require("./dto/update.dto");
const user_role_1 = require("../user-role");
const find_dto_1 = require("./dto/find.dto");
const roles_1 = require("../../constants/roles");
let TimeSlotController = class TimeSlotController {
    timeSlotService;
    constructor(timeSlotService) {
        this.timeSlotService = timeSlotService;
    }
    async createOne(data) {
        return this.timeSlotService.createOne(data);
    }
    async updateOne(id, data) {
        return this.timeSlotService.updateOne(id, data);
    }
    async deleteOne(id) {
        return this.timeSlotService.deleteOne(id);
    }
    async findMany(query) {
        return this.timeSlotService.findMany({
            where: {
                masterId: query.masterId,
                date: {
                    lte: query.startDate,
                    gte: query.endDate,
                },
            },
        });
    }
};
exports.TimeSlotController = TimeSlotController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, user_role_1.AllowedRoles)(roles_1.ROLES.MASTER),
    (0, common_1.UseGuards)(user_role_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateTimeSlotDto]),
    __metadata("design:returntype", Promise)
], TimeSlotController.prototype, "createOne", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, user_role_1.AllowedRoles)(roles_1.ROLES.MASTER),
    (0, common_1.UseGuards)(user_role_1.RolesGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dto_1.UpdateTimeSlotDto]),
    __metadata("design:returntype", Promise)
], TimeSlotController.prototype, "updateOne", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TimeSlotController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_dto_1.FindManyTimeSlotDto]),
    __metadata("design:returntype", Promise)
], TimeSlotController.prototype, "findMany", null);
exports.TimeSlotController = TimeSlotController = __decorate([
    (0, common_1.Controller)('time-slot'),
    __metadata("design:paramtypes", [time_slot_service_1.TimeSlotService])
], TimeSlotController);
//# sourceMappingURL=time-slot.controller.js.map