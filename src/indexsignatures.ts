// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number;
// }

interface TransactionObj {
    readonly [index: string]: number; // index signature
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
};

console.log(todaysTransactions["Books"]);

let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

/**
 * 
 * @param transactions 
 * @returns 
 */
const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (let transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};

console.log(todaysNet(todaysTransactions));
console.log(todaysTransactions['Dude']);


/////////////////////////////////////////////////////////

interface Student {
    // [x: string]: any;
    name: string,
    gpa: number,
    classes?: number[]; // optional
}

const student: Student = {
    name: "Dave",
    gpa: 4.5,
    classes: [100, 200],
    // test: 23
};

// console.log(student.test);

for (const key in student) {
    if (Object.prototype.hasOwnProperty.call(student, key)) {
        const element = student[key as keyof Student];
        console.log(`[${key}: ${element}]`);
    }
}

///////////////////////////////////////////////////////////////////
console.log("-------------------------------------------");

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "gpa");

///////////////////////////////////////////////////////////////////
console.log("-------------------------------------------");

// interface Incomes {
//     [key: string]: number;
// }
type Streams = "salary" | "bonus" | "sidehustle";
type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
    // business: 100
};

for (const rev in monthlyIncomes) {
    console.log(monthlyIncomes[rev as keyof Incomes]);
}
