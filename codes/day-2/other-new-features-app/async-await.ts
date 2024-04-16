import { readFile, readFileSync } from 'fs'
const divide = (a: number, b: number): Promise<number> => {
    const p = new Promise<number>(
        (resolveFn, rejectFn) => {
            const res = a / b
            if (res == Infinity) {
                rejectFn(new Error('divisor can ot be zero'))
            }
            resolveFn(res)
        }
    )
    return p
}

// const readDataSync = async () => {
//     try {
//         const data = readFileSync('./data.txt')
//         return data
//     } catch (error) {
//         throw error
//     }
// }
// const readDataSync = (): Promise<string> => {
//     const p = new Promise<string>(
//         (resolveFn, rejectFn) => {
//             try {
//                 const data = readFileSync('./data.txt')
//                 resolveFn(data.toString())
//             } catch (error) {
//                 rejectFn(error)
//             }
//         }
//     )
//     return p
// }
// readDataSync()
//     .then(data => console.log(data))
//     .catch(e => console.log(e))

type callbackFnType = (err: any, data: any) => void
const readData = async (callbackFn: callbackFnType) => {
    try {
        readFile('./data.txt', callbackFn)
    } catch (error) {
        throw error
    }
}

const add = (a: number, b: number) => a + b

readData(
    (err: any, data: any) => {
        if (err)
            console.log(err)

        if (data)
            console.log(data.toString())
    }
)

// divide(12, 3)
//     .then((data) => console.log(data))
//     .catch(e => console.log(e))

async function callDivide() {
    try {
        const result = await divide(12, 3)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

console.log(add(12, 3))