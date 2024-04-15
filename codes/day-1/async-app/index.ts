// const divide = (a: number, b: number): Promise<number> => {
//     const p = new Promise<number>(
//         //executor function (what to do?)
//         (resolveFn, rejectFn) => {
//             const res = a / b
//             if (res == Infinity) {
//                 const e = new Error('divisor should not be zero')
//                 rejectFn(e)
//             }

//             resolveFn(res)
//         }
//     )
//     return p
// }
/*
const divPromise = divide(12, 3)
// divPromise
//     .then(
//         //success
//         (data) => { console.log(data) },
//         //failure
//         (e) => { console.log(e) }
//     )
divPromise
    .then(
        //success
        (data) => { console.log(data) }
    )
    .catch(
        //failure
        (e) => { console.log(e) }
    )
*/

const divide = async (a: number, b: number): Promise<number> => {

    const res = a / b
    if (res == Infinity) {
        const e = new Error('divisor should not be zero')
        throw e;
    }
    return res
}

const add = (a: number, b: number) => a + b

async function call() {
    try {
        const res = await divide(12, 0)
        console.log(res)
    } catch (e: any) {
        console.log(e.message)
    }
}
call()


const addRes = add(12, 3)
console.log(addRes)