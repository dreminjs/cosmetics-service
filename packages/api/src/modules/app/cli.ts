import 'dotenv/config';
import { CommandFactory } from 'nest-commander';
import { Logger, LogLevel } from '@nestjs/common';
import { UserCliModule } from '../user-cli/user-cli.module';

async function bootstrap() {
  const logLevels: LogLevel[] = process.env.DEBUG
    ? ['log', 'error', 'warn', 'debug', 'verbose']
    : ['log', 'error', 'warn'];

  const logger = new Logger('CLI');

  try {
    await CommandFactory.run(UserCliModule, {
      logger: logLevels,
      errorHandler: (err) => {
        logger.error(err.message);
        if (process.env.DEBUG) {
          logger.error(err.stack);
        }
        process.exit(1);
      },
    });
  } catch (error) {
    logger.error('Failed to start CLI:', error);
    process.exit(1);
  }
}

bootstrap();
