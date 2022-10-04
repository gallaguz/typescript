export namespace IteratorExample {
    //

    export class Task {
        constructor(public priority: number) {}
    }

    export class TaskList {
        private tasks: Task[] = [];

        public sortByPriority(): void {
            this.tasks = this.tasks.sort((a, b) => {
                if (a.priority > b.priority) {
                    return 1;
                } else if (a.priority === b.priority) {
                    return 0;
                } else {
                    return -1;
                }
            });
        }

        public addTask(task: Task): void {
            this.tasks.push(task);
        }

        public getTask(): Task[] {
            return this.tasks;
        }

        public count(): number {
            return this.tasks.length;
        }

        public getIterator(): PriorityTaskIterator {
            return new PriorityTaskIterator(this);
        }
    }

    export interface IIterator<T> {
        current(): T | undefined;
        next(): T | undefined;
        prev(): T | undefined;
        index(): number;
    }

    export class PriorityTaskIterator implements IIterator<Task> {
        private position = 0;
        private taskList: TaskList;

        constructor(taskList: TaskList) {
            taskList.sortByPriority();
            this.taskList = taskList;
        }

        current(): Task | undefined {
            return this.taskList.getTask()[this.position];
        }

        index(): number {
            return this.position;
        }

        next(): Task | undefined {
            this.position += 1;
            return this.taskList.getTask()[this.position];
        }

        prev(): Task | undefined {
            this.position -= 1;
            return this.taskList.getTask()[this.position];
        }
    }

    export const execute = (): void => {
        console.log(`\n--- Start: Iterator ---\n`);

        const taskList = new TaskList();
        taskList.addTask(new Task(8));
        taskList.addTask(new Task(1));
        taskList.addTask(new Task(3));

        const iterator = taskList.getIterator();

        console.log(iterator.current());
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.prev());
        console.log(iterator.index());

        console.log(`\n--- End: Iterator ---\n`);
    };
}
