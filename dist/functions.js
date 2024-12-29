"use strict";
var add = function (a, b) {
    return a + b;
};
var multiply = function (c, d) { return c + d; };
var numbers = [1, 2, 3, 4, 5, 6];
var total = function (numbs) {
    return numbs.reduce(function (prev, curr) { return prev + curr; });
};
console.log(total(numbers));
var createError = function (err) {
    return "string";
};
// custom type guard
var isNumber = function (value) {
    return typeof value === 'number' ? true : false;
};
// use of never type
var numberOrString = function (value) {
    if (typeof value === "string") {
        return "string";
    }
    if (isNumber(value)) {
        return "number";
    }
    return createError("this should not happen");
};
