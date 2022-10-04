export namespace ChainOfCommandExample {
    export interface IMiddleware {
        next(middleware: IMiddleware): IMiddleware;
        handle(request: any): any;
    }

    export abstract class AbstractMiddleware implements IMiddleware {
        private nextMiddleware: IMiddleware;
        next(middleware: IMiddleware): IMiddleware {
            this.nextMiddleware = middleware;
            return middleware;
        }
        handle(request: any): any {
            if (this.nextMiddleware) {
                return this.nextMiddleware.handle(request);
            }
            return;
        }
    }

    export class AuthMiddleware extends AbstractMiddleware {
        override handle(request: any): any {
            console.log(this.constructor.name);
            if (request.userId === 1) {
                return super.handle(request);
            }
            return { error: 'Not Authorized' };
        }
    }

    export class ValidateMiddleware extends AbstractMiddleware {
        override handle(request: any): any {
            console.log(this.constructor.name);
            if (request.body) {
                return super.handle(request);
            }
            return { error: 'No Body' };
        }
    }

    export class Controller extends AbstractMiddleware {
        override handle(request: any): any {
            console.log(this.constructor.name);
            return { success: request };
        }
    }

    export const execute = (): void => {
        console.log(`\n--- Start: Chain Of Command ---\n`);

        const controller = new Controller();
        const validate = new ValidateMiddleware();
        const auth = new AuthMiddleware();

        auth.next(validate).next(controller);
        console.log(auth.handle({ userId: 3 }));
        console.log(`\n`);
        console.log(auth.handle({ userId: 1 }));
        console.log(`\n`);
        console.log(auth.handle({ userId: 1, body: 'body' }));

        console.log(`\n--- End: Chain Of Command ---\n`);
    };
}
