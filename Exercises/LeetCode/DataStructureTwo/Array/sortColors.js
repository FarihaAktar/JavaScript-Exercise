const colors = [2, 0, 2, 1, 1, 0];


const sortColors = (nums) => {
    if (nums.length === 0) {
        return nums
    }

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - i; j++) {
            if (nums[j] < nums[j - 1]) {
                swap(nums, j - 1, j)
            }
        }
    }
    return nums;
}

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const res = sortColors(colors);

console.log(res)