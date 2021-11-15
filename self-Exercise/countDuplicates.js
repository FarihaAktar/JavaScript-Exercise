// write a function that count how many numbers are duplicates in aN ARRAY

const arr = [1, 2, 1, 4, 3, 4] // expected output 2 - three numbers are duplicates in here

const countDuplicates = (arr) => {
    const obj = {};
    let count = 0;
    arr.forEach(num => {
        obj[num] = (obj[num] || 0) + 1

        // another way
        // if(obj.hasOwnProperty(num)){
        //     obj[num] += 1
        // }else{
        //     obj[num] = 1
        // }
    })

    console.log(obj)
    
    for (let key in obj) {
        if (obj[key] > 1) {
            count++;
        }
    }
    return count;
}

const res = countDuplicates(arr)

console.log(res)

