"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name, basicPay, daPay, hraPay) {
        this.id = id;
        this.name = name;
        this.basicPay = basicPay;
        this.daPay = daPay;
        this.hraPay = hraPay;
    }
    Employee.prototype.calculateSalary = function () {
        return this.basicPay + this.hraPay + this.daPay;
    };
    return Employee;
}());
exports.Employee = Employee;
