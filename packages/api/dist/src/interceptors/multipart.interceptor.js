"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipartInterceptor = MultipartInterceptor;
const common_1 = require("@nestjs/common");
const file_util_1 = require("../utils/file.util");
function MultipartInterceptor(options = {}) {
    class MixinInterceptor {
        async intercept(context, next) {
            const req = context.switchToHttp().getRequest();
            if (!req.isMultipart())
                throw new common_1.HttpException('The request should be a form-data', common_1.HttpStatus.BAD_REQUEST);
            const files = {};
            const body = {};
            for await (const part of req.parts()) {
                if (part.type !== 'file') {
                    body[part.fieldname] = part.value;
                    continue;
                }
                const file = await (0, file_util_1.getFileFromPart)(part);
                const validationResult = (0, file_util_1.validateFile)(file, options);
                if (validationResult)
                    throw new common_1.HttpException(validationResult, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                files[part.fieldname] = files[part.fieldname] || [];
                files[part.fieldname].push(file);
            }
            req.storedFiles = files;
            req.body = body;
            return next.handle();
        }
    }
    return (0, common_1.mixin)(MixinInterceptor);
}
//# sourceMappingURL=multipart.interceptor.js.map