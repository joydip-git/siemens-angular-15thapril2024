//type inference
var data = 10
//data = 'joydip'
data = 20

console.log(typeof data)

class Person {
    /*
    private name: string;
    private id: number;
    private salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id
        this.name = name
        this.salary = salary
    }
    */
    constructor(private id: number, private name: string, private salary: number) {
    }
    get Id(): number {
        return this.Id
    }
    get Name(): string {
        return this.name
    }
    get Salary(): number {
        return this.salary
    }
    set Name(name: string) {
        this.name = name
    }
    set Salary(salary: number) {
        this.salary = salary
    }
    print(): string {
        let info = `Name:${this.name}, Id:${this.id}, Salary:${this.salary}`
        return info
    }
}

class Trainer extends Person {
    /*
    subject: string;
    constructor(id: number, name: string, salary: number, subject: string) {
        super(id, name, salary)
        this.subject = subject
    }
    */
    constructor(id: number, name: string, salary: number, public subject: string) {
        super(id, name, salary)
        //this.subject = subject
    }

    print(): string {
        return `${super.print()} ${this.subject}`
    }
}

interface Operations {
    add(a: number, b: number): number;
}
class OperationalImplementation implements Operations {
    add(a: number, b: number): number {
        return a + b
    }
}
interface Product {
    name: string;
    id: number;
    price: number;
    decsription?: string;
}

const dellProduct: Product = {
    name: 'dell xps 15',
    id: 1,
    price: 100000,
    decsription: ''
}

//const arr = new Array(10, 20, 30)
const arr = [10, 20, 30]
arr.push(100, 200)
// {
//     0:10, 1: 20, 2:30, 3: 100, 4:200
// }

//removal of values
//deleteing two values starting from index: 1
arr.splice(1, 2)

//replacement of values
//deleteing two values starting from index: 1 and adding two new values at those places
arr.splice(1, 2, 11, 22)