export namespace FacadeExample {
    class Notify {
        send(template: string, to: string): void {
            console.log(`Send ${template} to: ${to}`);
        }
    }

    class Log {
        log(message: string): void {
            console.log(message);
        }
    }

    class Template {
        private templates = [{ name: 'other', template: '<h1>Template</h1>' }];

        getByName(
            name: string,
        ): { name: string; template: string } | undefined {
            return this.templates.find((t) => t.name === name);
        }
    }

    export class NotificationFacade {
        private notify: Notify;
        private logger: Log;
        private template: Template;

        constructor() {
            this.notify = new Notify();
            this.logger = new Log();
            this.template = new Template();
        }

        send(to: string, templateName: string): void {
            const data = this.template.getByName(templateName);
            if (!data) {
                this.logger.log(`Cant find template: ${templateName}`);
                return;
            }
            this.notify.send(data.template, to);
            this.logger.log(`Send template: ${templateName}`);
        }
    }

    // const send = new NotificationFacade();
    // send.send('lol@lol.com', 'other');
    // send.send('lol@lol.com', 'not other');
}

// in main.ts
/**

 import { FacadeExample } from '@app/12.13.14.patterns/2.structural/2.facade';

 const Notification = FacadeExample.NotificationFacade;

 const send = new Notification();

 send.send('lol@lol.com', 'other');
 send.send('lol@lol.com', 'not other');

 */
