export namespace ObserverExample {
    //

    export interface IObserver {
        update(subject: ISubject): void;
    }

    export interface ISubject {
        attach(observer: IObserver): void;
        detach(observer: IObserver): void;
        notify(): void;
    }

    export class Lead {
        constructor(public name: string, public phone: string) {}
    }

    export class NewLead implements ISubject {
        private observers: IObserver[] = [];
        public state: Lead;

        attach(observer: IObserver): void {
            if (!this.observers.includes(observer)) {
                this.observers.push(observer);
            }
            return;
        }

        detach(observer: IObserver): void {
            const observerIndex = this.observers.indexOf(observer);
            if (observerIndex !== -1) {
                this.observers.splice(observerIndex, 1);
            }
            return;
        }

        notify(): void {
            for (const observer of this.observers) {
                observer.update(this);
            }
        }
    }

    export class NotificationService implements IObserver {
        update(subject: ISubject): void {
            console.log(`NotificationService receive notification:`);
            console.log(subject);
        }
    }

    export class LeadService implements IObserver {
        update(subject: ISubject): void {
            console.log(`LeadService receive notification:`);
            console.log(subject);
        }
    }

    export const execute = (): void => {
        console.log(`\n--- Start: Observer ---\n`);

        const subject = new NewLead();
        subject.state = new Lead('Alex', '0000');

        const obs1 = new NotificationService();
        const obs2 = new LeadService();

        subject.attach(obs1);
        subject.attach(obs2);
        subject.notify();
        subject.detach(obs1);
        subject.notify();

        console.log(`\n--- End: Observer ---\n`);
    };
}
