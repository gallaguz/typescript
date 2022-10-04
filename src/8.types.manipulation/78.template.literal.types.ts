type ReadOrWrite = 'read' | 'write';
type Bulk = 'bulk' | '';

type Access = `can${ReadOrWrite}`;
// "canread" | "canwrite"
type Access2 = `can${Uppercase<ReadOrWrite>}`;
// "canREAD" | "canWRITE"
type Access3 = `can${Capitalize<ReadOrWrite>}`;
// "canRead" | "canWrite"
type Access4 = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`;
// canReadBulk" | "canRead" | "canWriteBulk" | "canWrite"

type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;
type TypeT = ReadOrWriteBulk<Access4>;
// "ReadBulk" | "Read" | "WriteBulk" | "Write"

type ErrorOrSuccess = 'error' | 'success';
type ResponseT = {
    result: `http${Capitalize<ErrorOrSuccess>}`;
};
const a: ResponseT = {
    result: 'httpError',
};
