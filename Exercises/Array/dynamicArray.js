const array = new Array(2);

// console.log(array)

const input = `2 5
1 0 5
1 1 7
1 0 3
2 1 0
2 1 1`;

const inputArray = input.split('\n');
const N = inputArray[0].split(' ')[0]

inputArray.splice(1).forEach(el => {
    const [q,x,y] = el.split(" ").map(Number)
})

console.log(newArr)