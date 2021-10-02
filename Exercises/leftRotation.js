// const arr = [1,2,3,4];
// arr.splice(1,0,2)
// console.log(arr.join())
// console.log(arr)

// creat an array by the first parameter in a function. and rotate the array to the left by the number of 2nd parameter.

const rotateLeft = (n, rotate) => {
    let arr = [];
    let number = 0;
    for (let i = 0; i < n; i++) {
        number++;
        arr.push(number)
    }
    for (let i = 0; i < rotate; i++) {
        const value = arr.shift();
        arr.push(value)
        
    }
    console.log(arr)
}

// rotateLeft(5, 3)

// hacker rank problem


const rotateLeft1 = (d, arr) => {
    for (let i = 0; i < d; i++) {
        const value = arr.shift();
        arr.push(value)
        
    }
    console.log(arr)
}

const arr = [1,2,3,4,5];
rotateLeft1(2, arr)