// find and removes the duplicates and replace them with 0 return the array
const arr = [1, 2, 1, 2, 2]

const removeDuplicates = (arr) => {
    
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] === arr[j]) {
                arr[j] = 0
            }
        }
    }
    return arr
}

// const res = removeDuplicates(arr)

// console.log(res)
