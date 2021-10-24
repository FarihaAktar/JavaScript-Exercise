const arr = [1, 1, 2, 4, 2]

// console.log(arr.pop(), arr)

const singleNumber = (nums) => {
    //     var res = 0;
    //   var len = nums.length;
    //   for (var i = 0; i < len; i++) {
    //     res ^= nums[i];
    //     console.log(res)
    //   }
    //   return res;
    nums.sort()
    // console.log(nums)
    for (let i = 0; i < nums.length; i += 2) {
        // console.log(i)
        if (nums[i] != nums[i + 1]) {
            return nums[i];
        }
    }
}

const res = singleNumber(arr);

console.log(res)