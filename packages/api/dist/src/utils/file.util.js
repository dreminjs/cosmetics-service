"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFile = exports.getFileFromPart = void 0;
const common_1 = require("@nestjs/common");
const getFileFromPart = async (part) => {
    const buffer = await part.toBuffer();
    return {
        buffer,
        size: buffer.byteLength,
        filename: part.filename,
        mimetype: part.mimetype,
        fieldname: part.fieldname,
    };
};
exports.getFileFromPart = getFileFromPart;
const validateFile = (file, options) => {
    const validators = [];
    if (options.maxFileSize)
        validators.push(new common_1.MaxFileSizeValidator({ maxSize: options.maxFileSize }));
    if (options.fileType)
        validators.push(new common_1.FileTypeValidator({ fileType: options.fileType }));
    for (const validator of validators) {
        if (validator.isValid(file))
            continue;
        return validator.buildErrorMessage(file);
    }
};
exports.validateFile = validateFile;
//# sourceMappingURL=file.util.js.map