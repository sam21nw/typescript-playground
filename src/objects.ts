interface EmployeeType {
    name?: string,
    age: number,
    isActive: boolean
    languages: (string)[]
}

let employee1: EmployeeType = {
    name: "dude",
    age: 32,
    isActive: true,
    languages: ["ruby", "csharp"]
}
let employee2: EmployeeType = {
    age: 43,
    isActive: true,
    languages: ["java", "csharp"]
}

const greetEmployee = (emp: EmployeeType) => {
    if (!emp.name) {
        return `Hello`;
    }
    return `Hello ${emp.name?.toLocaleUpperCase()}`;
}

console.log(greetEmployee(employee2));