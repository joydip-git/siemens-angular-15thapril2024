export class Employee {
    constructor(public id: number, public name: string, public basicPay: number, public daPay: number, public hraPay: number) {

    }
    calculateSalary(): number {
        return this.basicPay + this.hraPay + this.daPay
    }
}