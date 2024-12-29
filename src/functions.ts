const add = (a: number, b: number) => {
    return a + b;
}

// console.log(add(12, 45));

type mathFunction = (a: number, b: number) => number

let multiply: mathFunction = (c, d) => c + d;

let numbers: number[] = [1, 2, 3, 4, 5, 6]

const total = (numbs: number[]) => {
    return numbs.reduce((prev, curr) => prev + curr);
}
console.log(total(numbers));

const createError = (err: string) => {
    return "string";
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false;
}

// use of never type
const numberOrString = (value: number | string): string => {
    if (typeof value === "string") {
        return "string";
    }
    if (isNumber(value)) {
        return "number";
    }
    return createError("this should not happen");
}
