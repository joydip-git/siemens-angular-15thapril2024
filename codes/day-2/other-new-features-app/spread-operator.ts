const anilObj = {
    name: 'anil',
    id: 1,
    salary: 1000
}

//const copyObj = {}
// for (const propName in anilObj) {
//     const propValue = anilObj[propName]
//     copyObj[propName] = propValue
// }

//(...)=> spread operator
const copyObj = {
    ...anilObj,
    name: 'Anil Kumar'
}
console.log(copyObj)

const numbers = [1, 2, 3]
const copyNumbers = [...numbers]

const objects = [{
    name: 'anil',
    id: 1,
    salary: 1000
}, {
    name: 'sunil',
    id: 2,
    salary: 2000
}]

//const copyObjects=[...objects]
const copyObjects = [
    { ...objects[0] },
    {
        ...objects[1],
        name: 'sunil kumar'
    }
]
