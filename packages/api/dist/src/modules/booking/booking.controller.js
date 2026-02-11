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
exports.BookingController = void 0;
const common_1 = require("@nestjs/common");
const booking_service_1 = require("./booking.service");
const pagination_query_params_dto_1 = require("../../dto/pagination-query-params.dto");
const user_decorator_1 = require("../user/user.decorator");
const access_token_guard_1 = require("../token/guards/access-token.guard");
const create_dto_1 = require("./dto/create.dto");
const update_dto_1 = require("./dto/update.dto");
let BookingController = class BookingController {
    bookingService;
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    async findMany(query, userId) {
        const countQuery = this.bookingService.count({ where: { userId } });
        const itemsQuery = this.bookingService.findMany({
            where: {
                userId,
            },
            skip: query.skip,
            take: query.take,
        });
        const [count, items] = await Promise.all([countQuery, itemsQuery]);
        return {
            total: count,
            items,
        };
    }
    async createOne(dto, userId) {
        return await this.bookingService.createOne({ data: { ...dto, userId } });
    }
    async updateOne(dto, id) {
        return await this.bookingService.updateOne({
            where: { id },
            data: dto,
        });
    }
    async deleteOne(id) {
        await this.bookingService.deleteOne({
            where: { id },
        });
    }
};
exports.BookingController = BookingController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_query_params_dto_1.PaginationQueryParamsDto, String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateBookingDto, String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "createOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_dto_1.UpdateBookingDto, String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "updateOne", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "deleteOne", null);
exports.BookingController = BookingController = __decorate([
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, common_1.Controller)('booking'),
    __metadata("design:paramtypes", [booking_service_1.BookingService])
], BookingController);
//# sourceMappingURL=booking.controller.js.map