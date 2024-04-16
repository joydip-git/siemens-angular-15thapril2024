
const anilObj = {
    name: 'anil',
    id: 1,
    salary: 1000
}

// const nameValue = anilObj.name
// const salaryValue = anilObj.salary

// const name = anilObj.name
// const salary = anilObj.salary

//object destructuring
// const { name: nameValue, salary: salaryValue } = anilObj
//console.log(nameValue, salaryValue)

const { name, salary } = anilObj
//const { name:name, salary:salary } = anilObj

console.log(name, salary)

const numbers = [1, 2, 3, 4, 5]

// const secondValue = numbers[1]
// const fourthValue = numbers[3]

const [, secondValue, , fourthValue] = numbers
console.log(secondValue, fourthValue)

// const exportsObject = require('./utility')
// const { add } = exportsObject

import { add } from "./utility";
console.log(add(12, 13))