export namespace MediatorExample {
    export interface IMediator {
        notify(sender: string, event: string): void;
    }

    abstract class Mediated {
        mediator: IMediator;

        setMediator(mediator: IMediator): void {
            this.mediator = mediator;
        }
    }

    export class Notification {
        send(): void {
            console.log('Send Notification');
        }
    }

    export class Log extends Mediated {
        log(message: string): void {
            if (message === 'trigger error') {
                this.mediator.notify(this.constructor.name, 'error');
                return;
            }
            console.log(message);
        }
    }

    export class EventHandler extends Mediated {
        myEvent(): void {
            this.mediator.notify(this.constructor.name, 'myEvent');
        }
        errorEvent(): void {
            this.mediator.notify(this.constructor.name, 'errorEvent');
        }
    }

    export class NotificationMediator implements IMediator {
        constructor(
            public notifications: Notification,
            public logger: Log,
            public handler: EventHandler,
        ) {}

        notify(sender: string, event: string): void {
            switch (sender) {
                case 'Log':
                    this.logger.log(`Triggered error`);
                    break;
            }

            switch (event) {
                case 'myEvent':
                    this.notifications.send();
                    this.logger.log('Sent');
                    break;
                case 'errorEvent':
                    this.logger.log(`trigger error`);
                    break;
            }
        }
    }

    export const execute = (): void => {
        console.log(`\n--- Start: Mediator ---\n`);

        const handler = new EventHandler();
        const logger = new Log();
        const notification = new Notification();

        const mediator = new NotificationMediator(
            notification,
            logger,
            handler,
        );

        logger.setMediator(mediator);
        handler.setMediator(mediator);
        handler.myEvent();
        handler.errorEvent();

        console.log(`\n--- End: Mediator ---\n`);
    };
}
