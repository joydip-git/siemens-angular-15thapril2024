import { Employee } from "./models/employee";
import { Developer } from "./models/developer";
import { Hr } from "./models/hr";

const employess: Employee[] = [];

employess.push(
    new Developer(1, 'anil', 1000, 2000, 3000, 4000),
    new Hr(2, 'sunil', 1050, 2050, 3050, 4050)
)

for (let index = 0; index < employess.length; index++) {
    const employee = employess[index];
    console.log(`${employee.name} got salary of ${employee.calculateSalary()}`)
}