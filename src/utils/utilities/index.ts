import { T } from "../../translations";
import { AnyObject, AnyFunction } from "../types_&_interfaces";

export const functionWithCache = (myFunction: AnyFunction): AnyFunction => {
    if (typeof myFunction !== 'function') throw new Error(`PARAM IS NOT A FUNCTION TO functionWithCache`);
    const cache: AnyObject = {};
    return (...args: Array<any>): any => {
        const key = JSON.stringify(args);
        if (!cache[key]) cache[key] = myFunction(...args);
        return cache[key];
    }
}

export const getFromObj = (key: string): AnyFunction => {
    return (obj: AnyObject): any => obj[key];
}

export const pipeFromObj = (...functions: Array<AnyFunction>): any => {
    return functionWithCache((state: AnyObject): any => {
        let result = state;
        for (let i = 0, end = functions.length; i < end; i++) {
            if (typeof functions[i] !== 'function') throw new Error(`PARAM AT POSITION: ${i} IS NOT A FUNCTION TO PIPE`);
            result = functionWithCache(functions[i])(result);
        }
        return result
    })
}

export const Alert = (text: string) => alert(T(text));