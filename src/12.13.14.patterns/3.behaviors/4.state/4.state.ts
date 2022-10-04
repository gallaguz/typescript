export namespace StateExample {
    //
    export class DocumentItem {
        public text: string;
        private state: DocumentItemState;
        constructor() {
            this.setState(new DraftDocumentItemState());
        }
        setState(state: DocumentItemState): void {
            this.state = state;
            this.state.setContext(this);
        }
        getState(): DocumentItemState {
            return this.state;
        }
        publishDoc(): void {
            this.state.publish();
        }
        moderationDoc(): void {
            this.state.moderation();
        }
        deleteDoc(): void {
            this.state.delete();
        }
    }

    export abstract class DocumentItemState {
        public name: string;
        public item: DocumentItem;
        public abstract publish(): void;
        public abstract moderation(): void;
        public abstract delete(): void;
        public setContext(item: DocumentItem): void {
            this.item = item;
        }
    }

    export class DraftDocumentItemState extends DocumentItemState {
        constructor() {
            super();
            this.name = 'DraftDocument';
        }
        publish(): void {
            console.log(`Published: ${this.item.text}`);
            this.item.setState(new PublishDocumentItemState());
        }
        moderation(): void {
            console.log(`Moderation: ${this.item.text}`);
            this.item.setState(new ModerationDocumentItemState());
        }
        delete(): void {
            console.log(`Deleted: ${this.item.text}`);
            // Some delete logic
        }
    }

    export class ModerationDocumentItemState extends DocumentItemState {
        constructor() {
            super();
            this.name = 'ModerationDocument';
        }
        publish(): void {
            console.log(`Published: ${this.item.text}`);
            this.item.setState(new PublishDocumentItemState());
        }
        moderation(): void {
            console.log(`Already under moderation`);
        }
        delete(): void {
            console.log(`Deleted: ${this.item.text}`);
            this.item.setState(new DraftDocumentItemState());
        }
    }

    export class PublishDocumentItemState extends DocumentItemState {
        constructor() {
            super();
            this.name = 'PublishDocument';
        }
        publish(): void {
            console.log(`Already published!`);
        }
        moderation(): void {
            console.log(`Moderation: ${this.item.text}`);
            this.item.setState(new ModerationDocumentItemState());
        }
        delete(): void {
            console.log(`Deleted: ${this.item.text}`);
            this.item.setState(new DraftDocumentItemState());
        }
    }

    export const execute = (): void => {
        console.log(`\n--- Start: State ---\n`);

        const item = new DocumentItem();
        item.text = 'My document';
        console.log(item.getState());
        item.moderationDoc();
        console.log(item.getState());
        item.deleteDoc();
        console.log(item.getState());
        item.publishDoc();
        console.log(item.getState());
        item.publishDoc();
        console.log(item.getState());

        console.log(`\n--- End: State ---\n`);
    };
}
