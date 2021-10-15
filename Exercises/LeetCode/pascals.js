const pascals = (numRows) => {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    let result = [];
    for (let row = 1; row <= numRows; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            
            if (col === 0 || col === row - 1) {
                arr.push(1);
                // console.log('arr1',arr, 'col',  col)
            } else {
                arr.push((result[row - 2][col - 1] + result[row - 2][col]));
                // console.log('arr2', arr, 'col', col)
            }
        }
        result.push(arr);
    }
    return result;
    // console.log(result)
}

console.log(pascals(1))