"use strict";
var employee1 = {
    name: "dude",
    age: 32,
    isActive: true,
    languages: ["ruby", "csharp"]
};
var employee2 = {
    age: 43,
    isActive: true,
    languages: ["java", "csharp"]
};
var greetEmployee = function (emp) {
    var _a;
    if (!emp.name) {
        return "Hello";
    }
    return "Hello ".concat((_a = emp.name) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase());
};
console.log(greetEmployee(employee2));
