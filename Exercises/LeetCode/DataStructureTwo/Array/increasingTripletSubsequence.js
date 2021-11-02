const increasingTriplets = (nums) => {
    // for (let i = 0; i < nums.length - 2; i++) {
    //     for (let j = i + 1; j <= i + 1; j++) {
    //         for (let k = j + 1; k <= j + 1; k++) {
    //             if (nums[i] < nums[j] && nums[j] < nums[k]) {
    //                 return true
    //             }
    //         }
    //     }
    // }
    // return false

    let first = Infinity;
    let second = Infinity;

    for (let curr of nums) {
       
        if (curr > second && curr > first) {
            console.log(curr)
            return true;
        };
        if (curr > first) {
            second = curr;
        } else {
            first = curr;
        };
        console.log(curr, first, second)
    };
    return false;
}

// const nums = [1,2,3,4,5];
// const nums = [5, 4, 3, 2, 1];
// const nums = [2,1,5,0,4,6];
const nums = [20, 100, 10, 12, 5, 13];

const res = increasingTriplets(nums)

console.log(res)