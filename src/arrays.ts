let strArr: (string | number)[] = ['one', 'two', 'three'];
let numArr: (string | number)[] = [1, 2, 3];

numArr.push("four");

console.log(numArr);
let firstElement = strArr.shift();
console.log("first el in strArr: " + firstElement);

// Tuple
let myTuple: [number, number, null] = [89, 23, null];
let lenOfTuple = myTuple.unshift(null);
console.log("length of myTuple: " + lenOfTuple);
myTuple.forEach(element => {
    console.log(element);
});
