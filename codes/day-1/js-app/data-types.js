var intValue = 10
var nameValue = 'joydip'
var floatValue = 12.34
var boolValue = true

console.log(typeof intValue)
console.log(typeof nameValue)
console.log(typeof floatValue)
console.log(typeof boolValue)

//object in JS is a collction of keys and values
var obj = {
    //value properties
    name: 'anil',
    id: 1,
    salary: 1000,
    //functional property
    print: function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}
console.log(typeof obj)
console.log(typeof obj.print)

console.log(obj.name)
console.log(obj['salary'])
console.log(obj.print())

