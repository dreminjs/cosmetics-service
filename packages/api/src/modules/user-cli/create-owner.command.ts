import { Command, CommandRunner, Option } from 'nest-commander';
import { Inject, Injectable } from '@nestjs/common';
import { Role } from 'generated/prisma/enums';
import { hash } from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

@Command({
  name: 'create owner',
  description: 'Create owner',
})
@Injectable()
export class CreateOwnerCommand extends CommandRunner {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {
    super();
  }

  async run(
    passedParams: string[],
    options?: { phone?: string; password?: string },
  ): Promise<void> {
    if (!options?.phone || !options?.password) {
      console.error('❌ Phone and password are required');
      return;
    }

    const phone = options?.phone;
    const password = options?.password;
    const hashedPassword = await hash(password, 10);

    try {
      await this.prisma.user.create({
        data: {
          name: 'admin',
          phone,
          hashedPassword,
          role: {
            create: {
              role: Role.OWNER,
            },
          },
        },
      });
    } catch (error) {
      console.error('❌ Failed to create super admin:', error);
    }
  }

  @Option({
    flags: '-e, --phone <phone>',
    description: 'Admin phone',
  })
  parsePhone(val: string): string {
    return val;
  }

  @Option({
    flags: '-p, --password <password>',
    description: 'Admin password',
  })
  parsePassword(val: string): string {
    return val;
  }
}
