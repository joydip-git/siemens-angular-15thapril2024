class Person {
    constructor(id, name, salary) {
        this.personName = name
        this.personId = id
        this.personSalary = salary
    }
    print() {
        return this.personName
    }
}
class Trainer extends Person {
    constructor(id, name, salary, subject) {
        super(id, name, salary)
        this.subject = subject
    }
    print() {
        return super.print() + ' ' + this.subject
    }
}

console.log(anilTrainer['name'])
const anilTrainer = new Trainer(1, 'anil', 1000, 'Angular')
console.log(anilTrainer.print())