//callback in JS/TS
const add = function (a: number, b: number): number {
    return a + b
}
const multiply = function (a: number, b: number, c: number): number {
    return a * b * c
}
type fnRefType = (x: number, y: number) => number
const calculate = function (fnRef: fnRefType, a: number, b: number) {
    return fnRef(a, b)
}

// interface FnRefType {
//     (x: number, y: number): number;
// }

// const calculate = function (fnRef: FnRefType, a: number, b: number) {
//     return fnRef(a, b)
// }

const res = calculate(add, 10, 12);
console.log(res)

const numbers = [1, 4, 2, 5, 3]
// const isEven = function (num: number) {
//     return num % 2 == 0
// }
// const isEven = (num: number) => {
//     return num % 2 == 0
// }
const isEven = (num: number) => { return num % 2 == 0 }
for (const item of numbers) {
    const status = isEven(item)
    if (status)
        console.log(item)
}
const filteredNumbers = numbers.filter(isEven)
// const oddNumbers = numbers
//     .filter(
//         function (item: number) {
//             return item % 2 != 0
//         }
//     )

const oddNumbers = numbers
    .filter((item: number) => item % 2 != 0)

// const found = numbers
//     .find(
//         function (item) {
//             return item == 4
//         }
//     )

const found = numbers.find((item: number) => item == 4)

// const index = numbers
//     .findIndex(
//         function (item) {
//             return item == 4
//         }
//     )

const index = numbers.findIndex((item) => item == 4)

// const transformed = numbers
//     .map(
//         function (item) {
//             return `${item * 2}`
//         }
//     )

const transformed = numbers.map((item) => `${item * 2}`)

// numbers
//     .sort(
//         function (a, b) {
//             return a - b
//         }
//     )
numbers.sort((a: number, b: number) => a - b)

