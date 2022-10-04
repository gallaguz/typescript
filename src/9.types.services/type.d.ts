type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type MyRecord<K extends keyof any, T> = {
    [P in K]: T;
};
