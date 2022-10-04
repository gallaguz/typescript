export namespace TemplateMethodExample {
    //

    export class Form {
        constructor(public name: string) {}
    }

    export abstract class SaveForm<T> {
        public save(form: Form): void {
            const res = this.fill(form);
            this.log(res);
            this.send(res);
        }

        protected abstract fill(form: Form): T;
        protected log(data: T): void {
            console.log(data);
        }
        protected abstract send(data: T): void;
    }

    export class FirstAPI extends SaveForm<string> {
        protected fill(form: Form): string {
            return form.name;
        }

        protected send(data: string): void {
            console.log(`Sent: ${data}`);
        }
    }

    export class SecondAPI extends SaveForm<{ name: string }> {
        protected fill(form: Form): { name: string } {
            return { name: form.name };
        }

        protected send(data: { name: string }): void {
            console.log(`Sent: ${data.name}`);
        }
    }

    export const execute = (): void => {
        console.log(`\n--- Start: Template Method ---\n`);

        const form1 = new FirstAPI();
        form1.save(new Form('Alex'));

        const form2 = new SecondAPI();
        form2.save(new Form('Peter'));

        console.log(`\n--- End: Template Method ---\n`);
    };
}
