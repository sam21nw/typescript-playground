const add = (a: number, b: number) => {
    return a + b;
}

console.log(add(12, 45));

type mathFunction = (a: number, b: number) => number

let multiply: mathFunction = (c, d) => c + d;