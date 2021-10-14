const mat = [[1, 2], [3, 4]]; // r = 1, c = 4

const matrixReshape = (arr, r, c) => {
    if (r * c !== arr.length * arr[0].length) {
        return arr
    }
    const res = []
    let row = []
    arr.forEach(items => items.forEach((num) => {
        row.push(num)
        if (row.length === c) {
            res.push(row)
            row = []
        }
    }))
    return res
}

console.log(matrixReshape(mat, 1, 4))