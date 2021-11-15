// remove duplicates from an Array and return a new array which does not contain any duplicates

const arr = ['a', 'b', 'a', 'b', 'c'] // expected output ['a','b','c']

const removeDuplicates = (array) => {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        
        if(newArr.indexOf(array[i]) === -1){
            newArr.push(array[i])
        }
        
    }
    console.log(newArr)
}

const res = removeDuplicates(arr)
console.log(res)