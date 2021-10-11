const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maximumSubarray = (nums) => {
    let max = Number.NEGATIVE_INFINITY;
    let currentSum = 0;
    let maxStartIndex = 0;
    let maxEndIndex = arr.length - 1;
    let currentStartIndex = 0;
    nums.forEach((currentNumber, currentIndex) => {
        currentSum += currentNumber;
        if (max < currentSum) {
            max = currentSum;
            maxStartIndex = currentStartIndex;
            maxEndIndex = currentIndex;
        }
        if (currentSum < 0) {
            currentSum = 0;
            currentStartIndex = currentIndex + 1;
        }
    });
     let newArr = nums.slice(maxStartIndex, maxEndIndex + 1);
     let sum = 0;
     newArr.forEach(element =>{
         sum += element
     })
     return sum;
};
console.log(maximumSubarray(arr));
// console.log(arr.slice(3,7));

// maximumSubarray(arr)