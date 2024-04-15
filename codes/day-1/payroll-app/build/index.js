"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var developer_1 = require("./models/developer");
var hr_1 = require("./models/hr");
var employess = [];
employess.push(new developer_1.Developer(1, 'anil', 1000, 2000, 3000, 4000), new hr_1.Hr(2, 'sunil', 1050, 2050, 3050, 4050));
for (var index = 0; index < employess.length; index++) {
    var employee = employess[index];
    console.log("".concat(employee.name, " got salary of ").concat(employee.calculateSalary()));
}
