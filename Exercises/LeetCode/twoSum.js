// const arr = [3,2,4]; // target - 6
// const arr = [2, 7, 11, 15]; //target-9
const arr = [3, 2, 3]; //target-6


const twoSum = (nums, target) => {
    let indices = [];
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i]
        for (let j = i; j < nums.length; j++) {
            if (i !== j) {
                if (value + nums[j] === target) {
                    indices.push(i);
                    indices.push(j)
                    console.log(indices)
                }
            }
        }

    }
}

twoSum(arr, 6)