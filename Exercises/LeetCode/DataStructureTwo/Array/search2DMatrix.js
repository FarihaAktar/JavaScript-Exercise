const searchMatrix = (matrix, target) => {
    for (let i = 0; i < matrix.length; i++) {
        for(let j= 0; j< matrix[i].length; j++){
            if(target === matrix[i][j]){
                return true
            }else{
                continue
            }
        }
    }
    return false
}

const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
const res = searchMatrix(matrix, 37);

console.log(res)