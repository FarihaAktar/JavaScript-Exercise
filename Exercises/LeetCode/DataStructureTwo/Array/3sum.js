const arr = [-1, 0, 1, 2, -1, -4];
const arr2 = [3, 0, -2, -1, 1, 2]
// console.log(arr2.length)

const threeSum = (nums) => {
    const triplets = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0 || nums[nums.length - 1] < 0) {
            break
        }
        if(i > 0 && nums[i] === nums[i-1]) continue;

        let leftPointer = i + 1 , rightPointer = nums.length -1;
        while(leftPointer < rightPointer){
            const sum = nums[i] + nums[leftPointer] + nums[rightPointer];

            if(sum > 0) rightPointer -=1
            else if(sum< 0) leftPointer +=1;
            else{
                triplets.push([nums[i],  nums[leftPointer] , nums[rightPointer]]);
                while(leftPointer < rightPointer && nums[leftPointer] === nums[leftPointer + 1]) {
                    leftPointer += 1;
                }
                while(leftPointer < rightPointer && nums[rightPointer] === nums[rightPointer - 1]){
                    rightPointer -= 1;
                }
                leftPointer += 1;
                rightPointer -= 1;
            }
        }

    }
    return triplets;
}

const res = threeSum(arr2);

console.log(res)


