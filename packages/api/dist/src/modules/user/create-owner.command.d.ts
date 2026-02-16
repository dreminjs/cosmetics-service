import { CommandRunner } from 'nest-commander';
import { UserService } from 'src/modules/user/user.service';
export declare class CreateOwnerCommand extends CommandRunner {
    private userService;
    constructor(userService: UserService);
    run(passedParams: string[], options?: {
        phone?: string;
        password?: string;
    }): Promise<void>;
    parsePhone(val: string): string;
    parsePassword(val: string): string;
}
