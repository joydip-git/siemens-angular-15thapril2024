//function calculateAverage(name: string, marks: number[]) {
//parameter array (declared with rest operator => ...)
//array decaled with rest operator will store all the parameter values after the fixed arguments
//you can't declare more than one array with rest operator as part of the function argument list
//this parameter array declared with rest operator should be the last one in the parameter/argument list
//any other array, which is NOT part of the function argument list, can be declared with rest operator
function calculateAverage(name: string, ...marks: number[]): number {
    let sum = 0
    for (const value of marks) {
        sum += value
    }
    return sum / marks.length
}

// calculateAverage('anil', [23, 34, 56])
// calculateAverage('sunil', [20, 40])
// calculateAverage('vinod', [25, 35, 45, 55])
calculateAverage('anil', 23, 34, 56)
calculateAverage('sunil', 20, 40)
calculateAverage('vinod', 25, 35, 45, 55)

const arr = []