"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nest_commander_1 = require("nest-commander");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const logLevels = process.env.DEBUG
        ? ['log', 'error', 'warn', 'debug', 'verbose']
        : ['log', 'error', 'warn'];
    const logger = new common_1.Logger('CLI');
    try {
        await nest_commander_1.CommandFactory.run(app_module_1.AppModule, {
            logger: logLevels,
            errorHandler: (err) => {
                logger.error(err.message);
                if (process.env.DEBUG) {
                    logger.error(err.stack);
                }
                process.exit(1);
            },
        });
    }
    catch (error) {
        logger.error('Failed to start CLI:', error);
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=cli.js.map