export namespace AdapterExample {
    export class KVDatabase {
        private db: Map<string, string> = new Map<string, string>();
        save(key: string, value: string): void {
            this.db.set(key, value);
        }
    }

    export class PersistentDB {
        savePersistent(data: Object): void {
            console.log(data);
        }
    }

    export class PersistentDBAdapter extends KVDatabase {
        constructor(public database: PersistentDB) {
            super();
        }

        override save(key: string, value: string): void {
            this.database.savePersistent({ key, value });
        }
    }

    export function run(base: KVDatabase): void {
        base.save('key', 'value');
    }
}

// main.ts
/**
 import { AdapterExample } from '@app/12.13.14.patterns/2.structural/3.adapter/3.adapter';

 const { PersistentDBAdapter, PersistentDB, run } = AdapterExample;

 run(new PersistentDBAdapter(new PersistentDB()));

 */
