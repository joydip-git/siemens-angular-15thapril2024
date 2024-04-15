import { Employee } from "./models/employee";
import { Developer } from "./models/developer";
import { Hr } from "./models/hr";

const employees: Employee[] = [];

employees.push(
    new Developer(1, 'anil', 1000, 2000, 3000, 4000),
    new Hr(2, 'sunil', 1050, 2050, 3050, 4050)
)

// employees
//     .forEach(
//         function (e: Employee) {
//             console.log(`${e.name} got salary of ${e.calculateSalary()}`)
//         }
//     )

employees
    .forEach(e => console.log(`${e.name} got salary of ${e.calculateSalary()}`))

// for (let index = 0; index < employees.length; index++) {
//     const employee = employees[index];
//     console.log(`${employee.name} got salary of ${employee.calculateSalary()}`)
// }
// for (const employee of employees) {
//     console.log(`${employee.name} got salary of ${employee.calculateSalary()}`)
// }

//employees.forEach