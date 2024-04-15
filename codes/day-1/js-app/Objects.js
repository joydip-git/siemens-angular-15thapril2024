//constructor
function sample(data) {
    //var x = 10
    this.x = data
}

var first = new sample(10)
var second = new sample(20)
console.log(first.data)
console.log(second.data)
sample(100)
console.log(data)

//console.log(global)
/*
//object literal syntax
const anilObject = {
    name: 'anil',
    id: 1,
    salary: 1000,
    print: function () {
        return this.name
    }
}
const sunilObject = {
    name: 'sunil',
    id: 2,
    salary: 2000,
    print: function () {
        return this.name
    }
}
*/

//2. constructor function syntax
function person(id, name, salary) {
    this.id = id
    this.name = name
    this.salary = salary
    this.print = function () {
        return this.name
    }
}

const anilObject = new person(1, "anil", 1000)
const sunilObject = new person(2, "sunil", 2000)