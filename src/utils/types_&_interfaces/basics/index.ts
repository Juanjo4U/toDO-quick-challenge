export interface AnyObject {
    [key: number]: any;
    [key: string]: any;
};

export interface ObjectType<Type> {
    [x: string]: Type,
    [x: number]: Type
}

export type AnyFunction = (...args: Array<any>) => any;