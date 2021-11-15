const arr = [2, 8, 4, 8, 6]

const countEvenNumbers = (arr) => {
    let count = 0;
    arr.forEach(int => int % 2 === 0 && count++)
    return count
}

// const res = countEvenNumbers(arr)

// console.log(res)

const arr2 = [1,2,1,3,2,1,4]

const removeDuplicates = (arr)=>{
    let hasMap = {};
  
    for(let i=0; i<arr.length; i++){
        if(hasMap.hasOwnProperty(arr[i]) === false){
            hasMap[arr[i]] = arr[i]
        }
    }

    const newArr = Object.values(hasMap)

    return newArr;
}

const res = removeDuplicates(arr2)
console.log(res)