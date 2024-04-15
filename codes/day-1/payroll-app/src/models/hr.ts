import { Employee } from "./employee";

export class Hr extends Employee {
    constructor(id: number, name: string, basicPay: number, daPay: number, hraPay: number, public gratuityPay: number) {
        super(id, name, basicPay, daPay, hraPay)
    }
    calculateSalary(): number {
        return super.calculateSalary() + this.gratuityPay
    }
}