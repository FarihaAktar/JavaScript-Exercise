// 2D array
const arr = new Array(3)

for (let i = 0; i < arr.length; i++) {
    arr[i] = []
}
let value = 0
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        arr[i][j] = value++;
        // console.log(arr[i][j])
    }
    //    console.log('-')
}


// console.log(arr)
// let maxValue = Number.MIN_VALUE

for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(arr[i][j], arr[i][j + 1], arr[i][j + 2], arr[i+1][j + 1], arr[i+2][j],arr[i+2][j+1],arr[i+2][j+2])
        console.log(arr[i][j]+ arr[i][j + 1]+ arr[i][j + 2]+ arr[i+1][j + 1]+ arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2])
        const sum = arr[i][j]+ arr[i][j + 1]+ arr[i][j + 2]+ arr[i+1][j + 1]+ arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]
        maxValue = Math.max(maxValue, sum)
    }
}
// console.log(maxValue)

// console.log(Number.MIN_VALUE)

// hour glass sum calculation with 3 types of array
const arr1 = [[0, -4, -6, 0, -7, -6], [-1, -2, -6, -8, -3, -1], [-8, -4, -2, -8, -8, -6], [-3, -1, -2, -5, -7, -4], [-3, -5, -3, -6, -6, -6], [-3, -6, 0, -8, -6, -7]]
const arr2 = [[-1, 1, -1, 0, 0, 0],[0, -1, 0, 0, 0, 0],[-1, -1, -1, 0, 0, 0],[0, -9, 2, -4, -4, 0],[-7, 0, 0, -2, 0, 0],[0, 0, -1, -2, -4 ,0]]
const arr3 = [[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 9, 2, -4, -4, 0], [0, 0, 0, -2, 0, 0], [0, 0, -1, -2, -4, 0]]

const hourGlassSum = (arr) => {
    let p_max_value = Number.MIN_VALUE;
    let n_max_value = Number.MIN_VALUE;
    let negArr = [];
    let row = arr[0].length;
    let column = arr.length;
    for (let i = 0; i < row - 2; i++) {
        for (let j = 0; j < column - 2; j++) {
            const sum = (arr[i][j] + arr[i][j + 1] + arr[i][j + 2]) + (arr[i + 1][j + 1]) + (arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])
            // console.log(sum)
            if (sum > 0) {
                p_max_value = Math.max(p_max_value, sum)
                // console.log(p_max_value, 'positive')
            } else {
                negArr.push(sum)
                n_max_value = Math.max(...negArr)
                // console.log(negArr, 'negative')
            }
        }
    }
    // console.log(max_value)
    if (p_max_value !== 5e-324) {
        console.log(p_max_value)
    } else {
        console.log(n_max_value);
    }
}

hourGlassSum(arr3)

