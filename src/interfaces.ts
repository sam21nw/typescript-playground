interface Guitarist {
    name: (string | undefined),
    albums: string[]
}

interface mathFunctionInterface {
    (a: number, b: number): number
}

let multiplyUsingInterface: mathFunctionInterface = (c, d) => c + d;