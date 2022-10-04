export const a = 43;

export const b = 44;

export default function run(): void {
    console.log('run');
}

export namespace Test {
    export const a = 42;

    export interface B {
        c: number;
    }
}

export type MyType = string | number;
