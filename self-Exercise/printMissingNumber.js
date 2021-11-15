
// find the missing number in a given integer array of 1 to 100 . function takes two parameter. array and length of the array
const arr = [1, 2, 3, 9, 8]

const printMissingNumber = (arr, str) => {
    const newArr = [];
    const len = arr.length;
    arr.sort((a,b)=> a -b)
    // console.log(arr)
    if(arr[len -1] !== str){
        arr.push(str)
        newArr.push(str)
    }
    // console.log(arr)
    for(let i=arr.length-2; i>0;i--){
        if(arr[i] - arr[i+1] !== -1){
            let x = arr[i] - arr[i+1]
            let j = -1;
            while(j>x){
                newArr.push(arr[i+1]+j)
                j--;
            }
        }
    }
    return newArr;
    
    
}

const res = printMissingNumber(arr, 10)
console.log(res)