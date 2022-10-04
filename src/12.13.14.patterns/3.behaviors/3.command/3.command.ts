export namespace CommandExample {
    export abstract class Command {
        public commandId: number;

        protected constructor(public history: CommandHistory) {
            this.commandId = Math.random();
        }

        abstract execute(): void;
    }

    export class CommandHistory {
        public commands: Command[] = [];

        push(command: Command): void {
            this.commands.push(command);
        }

        remove(command: Command): void {
            this.commands = this.commands.filter(
                (c) => c.commandId !== command.commandId,
            );
        }
    }

    export class User {
        constructor(public userId: number) {}
    }

    export class AddUserCommand extends Command {
        constructor(
            private user: User,
            private receiver: UserService,
            history: CommandExample.CommandHistory,
        ) {
            super(history);
        }

        execute(): void {
            this.receiver.saveUser(this.user);
            this.history.push(this);
        }

        undo(): void {
            this.receiver.deleteUser(this.user.userId);
            this.history.remove(this);
        }
    }

    export class UserService {
        saveUser(user: User): void {
            console.log(`Save User. id: ${user.userId}`);
        }

        deleteUser(userId: number): void {
            console.log(`Delete User. id: ${userId}`);
        }
    }

    export class Controller {
        receiver: UserService;
        history: CommandHistory = new CommandHistory();

        addReceiver(receiver: UserService): void {
            this.receiver = receiver;
        }

        run(): void {
            const addUserCommand = new AddUserCommand(
                new User(1),
                this.receiver,
                this.history,
            );

            addUserCommand.execute();
            console.log(addUserCommand.history);
            addUserCommand.undo();
            console.log(addUserCommand.history);
        }
    }

    export const execute = (): void => {
        console.log(`\n--- Start: Command ---\n`);

        const controller = new Controller();
        controller.addReceiver(new UserService());
        controller.run();

        console.log(`\n--- End: Command ---\n`);
    };
}
