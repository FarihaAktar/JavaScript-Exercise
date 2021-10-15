
// const arr = new Array(10).fill(0)
// console.log(arr)

const queries = [[1, 5, 3], [4, 8, 7], [6, 9, 1]]
const queries1 = [[1, 2, 100], [2, 5, 100], [3, 4, 100]]
const queries2 = [[2 ,6, 8],
    [3, 5, 7],
    [1 ,8, 1],
    [5, 9, 15]]

// queries.forEach(([a, b, c])=> console.log(a))
// queries[0][0] = queries[0][0] + 1;
// console.log(queries)

const arrayManipulation = (n, queries) => {
    const arr = new Array(n).fill(0);
    let max = 0;
    queries.forEach(([a, b, k]) => {
        // console.log([a,b,k])
        for (let i = a-1; i < b; i++) {
           arr[i] += k
           if(arr[i]> max){
               max = arr[i]
           }
        }
        // console.log(arr)

    });
    console.log(max)
}



let start = new Date().getTime();

arrayManipulation(10, queries1)

let end = new Date().getTime();

console.log(`Call to doSomething took ${end - start} milliseconds`)

