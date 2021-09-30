// 2D array
// const arr = new Array(3)

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = []
// }
// let value = 0
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 5; j++) {
//         arr[i][j] = value++;
//         console.log(arr[i][j])
//     }
//        console.log('-')
// }


// console.log(arr)
// let maxValue = Number.MIN_VALUE

// for (let i = 0; i < 1; i++) {
//     for (let j = 0; j < 2; j++) {
//         console.log(arr[i][j], arr[i][j + 1], arr[i][j + 2], arr[i+1][j + 1], arr[i+2][j],arr[i+2][j+1],arr[i+2][j+2])
//         console.log(arr[i][j]+ arr[i][j + 1]+ arr[i][j + 2]+ arr[i+1][j + 1]+ arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2])
//         const sum = arr[i][j]+ arr[i][j + 1]+ arr[i][j + 2]+ arr[i+1][j + 1]+ arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]
//         maxValue = Math.max(maxValue, sum)
//     }
// }
// console.log(maxValue)

// console.log(Number.MIN_VALUE)

const arr1 = [[2, 3, 0, 0, 0], [0, 1, 0, 0, 0], [1, 1, 1, 0, 0], [0, 0, 2, 4, 4], [0, 0, 0, 2, 0]]

const hourGlassSum = (arr) => {
    let max_value = Number.MIN_VALUE;
    let row = 5;
    let column = 5;
    for (let i = 0; i < row - 2; i++) {
        for (let j = 0; j < column - 2; j++) {
            const sum = (arr[i][j] + arr[i][j + 1] + arr[i][j + 2]) + (arr[i + 1][j + 1]) + (arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])
            // console.log(sum)
            max_value = Math.max(max_value, sum)
        }
    }
    console.log(max_value)
}

hourGlassSum(arr1)