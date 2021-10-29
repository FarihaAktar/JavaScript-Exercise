const rotateImage = (matrix) => {
    let y = matrix.length - 1
    for (let i = 0; i < matrix.length / 2; i++) {
        let x = (matrix.length - 1) - i
        for (let j = i; j < y; j++) {
            let t = matrix[i][j]
            matrix[i][j] = matrix[j][y]
            matrix[j][y] = t
            t = matrix[i][j]
            matrix[i][j] = matrix[y][x]
            matrix[y][x] = t
            t = matrix[i][j]
            matrix[i][j] = matrix[x][i]
            matrix[x][i] = t
            x--
        }
        y--
    }
    return matrix
}

const matrix = [[1,2,3],[4,5,6],[7,8,9]];

const res = rotateImage(matrix);

console.log(res)