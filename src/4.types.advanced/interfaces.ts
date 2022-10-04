function enumerable(value: boolean) {
    return function (target: any, propertyKey: string): void {
        const descriptor =
            Object.getOwnPropertyDescriptor(target, propertyKey) || {};
        if (descriptor.enumerable != value) {
            // descriptor.configurable = value;
            descriptor.enumerable = value;
            descriptor.writable = true;
            Object.defineProperty(target, propertyKey, descriptor);
        }
    };
}

export class User {
    @enumerable(false)
    private _name: string;

    set name(str: string) {
        this._name = str;
    }

    get name(): string {
        return this._name;
    }
}

export interface IIndex {
    [index: number]: User;
    addUser(a: User): void;
}

type ud = Record<number, User>;

export class Index implements IIndex {
    [index: number]: User;

    addUser(a: User): void {
        this[Object.entries(this).length] = a;
    }
}

const user: User = new User();
user.name = 'Vasya';

const obj: IIndex = new Index();
obj.addUser(user);
obj.addUser(user);
obj.addUser(user);
obj.addUser(user);
obj.addUser(user);

console.log(obj);

// class User {
//     id:string;
//
//     @enumerable(false)
//     name: string;
// }

// var user = new User();
// user.id = 1.ts;
// user.name = 'John Doe';
// for (key in user){ console.log(key, user[key]);}

const enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPayment {
    sum: number;
    from: number;
    to: number;
}

interface IPaymentRequest extends IPayment {}

interface ISuccessData extends IPayment {
    databaseId: number;
}
interface IFailedData {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: ISuccessData;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IFailedData;
}

const req: IPaymentRequest = {
    sum: 10000,
    from: 2,
    to: 4,
};

const res1: IResponseSuccess = {
    status: PaymentStatus.Success,
    data: {
        databaseId: 567,
        sum: 1000,
        from: 2,
        to: 4,
    },
};

const res2: IResponseFailed = {
    status: PaymentStatus.Failed,
    data: {
        errorMessage: 'no money',
        errorCode: 4,
    },
};

const getSuccess = (): IResponseSuccess => {
    return res1;
};

const getFailed = (): IResponseFailed => {
    return res2;
};

console.log(getSuccess());
console.log(getFailed());

// interface IIndex {
//     [index: number]: number;
// }
// class Index implements IIndex {
//     [index: number]: number;
// }
// const index: Index = new Index();
// index[Object.entries(index).length] = 1.ts;
// index[Object.entries(index).length] = 2;
// index[Object.entries(index).length] = 3;
// index[Object.entries(index).length] = 4;
//
// console.log(index);
