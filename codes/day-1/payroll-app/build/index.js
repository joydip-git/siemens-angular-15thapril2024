define(["require", "exports", "./models/developer", "./models/hr"], function (require, exports, developer_1, hr_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var employees = [];
    employees.push(new developer_1.Developer(1, 'anil', 1000, 2000, 3000, 4000), new hr_1.Hr(2, 'sunil', 1050, 2050, 3050, 4050));
    // employees
    //     .forEach(
    //         function (e: Employee) {
    //             console.log(`${e.name} got salary of ${e.calculateSalary()}`)
    //         }
    //     )
    employees
        .forEach(function (e) { return console.log("".concat(e.name, " got salary of ").concat(e.calculateSalary())); });
});
// for (let index = 0; index < employees.length; index++) {
//     const employee = employees[index];
//     console.log(`${employee.name} got salary of ${employee.calculateSalary()}`)
// }
// for (const employee of employees) {
//     console.log(`${employee.name} got salary of ${employee.calculateSalary()}`)
// }
//employees.forEach
