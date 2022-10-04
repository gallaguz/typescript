export namespace BridgeExample {
    export interface IProvider {
        sendMessage(message: string): void;
        connect(config: string): void;
        disconnect(): void;
    }

    export class TelegramProvider implements IProvider {
        connect(config: string): void {
            console.log(config, this.constructor.name);
        }

        disconnect(): void {
            console.log('Disconnected Telegram');
        }

        sendMessage(message: string): void {
            console.log(message);
        }
    }

    export class WhatsappProvider implements IProvider {
        connect(config: string): void {
            console.log(config, this.constructor.name);
        }

        disconnect(): void {
            console.log('Disconnected Whatsapp');
        }

        sendMessage(message: string): void {
            console.log(message);
        }
    }

    export class NotificationSender {
        constructor(private provider: IProvider) {}

        send(): void {
            this.provider.connect('Connect');
            this.provider.sendMessage('Message');
            this.provider.disconnect();
        }
    }

    export class DelayNotificationSender extends NotificationSender {
        constructor(provider: IProvider) {
            super(provider);
        }

        sendDelayed(): void {}
    }
}

// const sender = new NotificationSender(new TelegramProvider());
// sender.send();
// const sender2 = new NotificationSender(new WhatsappProvider());
// sender2.send();
