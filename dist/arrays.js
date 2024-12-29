"use strict";
var strArr = ['one', 'two', 'three'];
var numArr = [1, 2, 3];
numArr.push("four");
console.log(numArr);
var firstElement = strArr.shift();
console.log("first el in strArr: " + firstElement);
// Tuple
var myTuple = [89, 23, null];
var lenOfTuple = myTuple.unshift(null);
console.log("length of myTuple: " + lenOfTuple);
myTuple.forEach(function (element) {
    console.log(element);
});
