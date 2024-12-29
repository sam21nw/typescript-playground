"use strict";
// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number;
// }
var todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions["Books"]);
var prop = "Pizza";
console.log(todaysTransactions[prop]);
/**
 *
 * @param transactions
 * @returns
 */
var todaysNet = function (transactions) {
    var total = 0;
    for (var transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
console.log(todaysTransactions['Dude']);
var student = {
    name: "Dave",
    gpa: 4.5,
    classes: [100, 200],
    // test: 23
};
// console.log(student.test);
for (var key in student) {
    if (Object.prototype.hasOwnProperty.call(student, key)) {
        var element = student[key];
        console.log("[".concat(key, ": ").concat(element, "]"));
    }
}
///////////////////////////////////////////////////////////////////
console.log("-------------------------------------------");
Object.keys(student).map(function (key) {
    console.log(student[key]);
});
var logStudentKey = function (student, key) {
    console.log("Student ".concat(key, ": ").concat(student[key]));
};
logStudentKey(student, "gpa");
///////////////////////////////////////////////////////////////////
console.log("-------------------------------------------");
var monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
    // business: 100
};
for (var rev in monthlyIncomes) {
    console.log(monthlyIncomes[rev]);
}
