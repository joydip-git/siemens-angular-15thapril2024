import { Employee } from "./employee";

export class Developer extends Employee {
    constructor(id: number, name: string, basicPay: number, daPay: number, hraPay: number, public incentivePay: number) {
        super(id, name, basicPay, daPay, hraPay)
    }
    calculateSalary(): number {
        return super.calculateSalary() + this.incentivePay
    }
}