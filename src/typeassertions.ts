const myCanvas = document.getElementById("canvas") as HTMLCanvasElement;

const addOrConcat = (a: number): number | string => {
    return `${a}`;
}

let myVal = addOrConcat(12);
console.log(myVal);