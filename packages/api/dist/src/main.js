"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("tsconfig-paths/register");
const core_1 = require("@nestjs/core");
const app_1 = require("./modules/app");
const swagger_1 = require("@nestjs/swagger");
const nestjs_zod_1 = require("nestjs-zod");
const response_interceptor_1 = require("./interceptors/response.interceptor");
const cookie_1 = __importDefault(require("@fastify/cookie"));
const multipart_1 = __importDefault(require("@fastify/multipart"));
const platform_fastify_1 = require("@nestjs/platform-fastify");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_1.AppModule, new platform_fastify_1.FastifyAdapter());
    await app.register(cookie_1.default);
    await app.register(multipart_1.default, {
        limits: { fileSize: 5 * 1024 * 1024 },
    });
    app.enableCors({ origin: 'http://localhost:5173', credentials: true });
    app.useGlobalPipes(new nestjs_zod_1.ZodValidationPipe());
    app.useGlobalInterceptors(new response_interceptor_1.ResponseInterceptor());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Tutor AI')
        .setDescription('The Tutor AI API description')
        .setVersion('1.0')
        .addTag('tutors')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, documentFactory);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map