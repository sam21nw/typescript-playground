let a = 1;
let b = "3";

// union type
let album: string | number = "The Wall";

album = 1;
console.log(album);

let isLoading: boolean;
isLoading = true;
console.log(isLoading);

// function return types
const sum = (a: number, b: number): number => {
    return a + b;
}
console.log(sum(15, 2));