// find all pairs of an integer array whose sum is equal to a given number

// const arr = [0, 14, 0, 4, 7, 8, 3, 5, 7] //expected output (7,4)(8,3),(7,4) sum = 11
const arr = [0, 5, 5, 4, 6, 7, 3] //sum 10

// const printPairs = (arr, sum) => {
//     arr.sort((a, b) => a - b);

//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//     
//             if (arr[i] + arr[j] === sum) {
//                 if (arr[i] !== arr[j]) {
//                     console.log(`(${arr[i]}, ${arr[j]})`)

//                 }
//             }
//         }
//     }


// }

// Using HashMap approach using time complexity approx O(n)

const printPairs = (arr, sum) => {
    let hasMap = {};

    // let result = [];

    for (let i = 0; i < arr.length; i++) {
        // console.log(hasMap)
        if (hasMap[arr[i]]) {
            if (hasMap[arr[i]] !== arr[i]) {
                // result.push([hasMap[arr[i]], arr[i]])
                console.log(`(${hasMap[arr[i]]}, ${arr[i]})`)
            }
        } else {
            hasMap[sum - arr[i]] = arr[i]
        }
    }
    // return result
}

const res = printPairs(arr, 10);
console.log(res)