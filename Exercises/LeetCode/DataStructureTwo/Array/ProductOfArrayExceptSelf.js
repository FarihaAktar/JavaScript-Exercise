const productExceptSelf = (nums) => {
    let carry = 1
    // Array to return all the product values
    const output = Array(nums.length).fill(1)
    // console.log(output)
    // Add products to output array starting at the front
    for(let i = 0; i < nums.length;i++){
        output[i]*=carry
        carry*=nums[i]
        // console.log(output)
        // console.log('carry', carry, nums[i])
    }
    // Reset carry
    console.log(output)
    carry = 1
    // Add products to output array starting at the back
    for(let i = nums.length-1; i >= 0; i--){
        output[i]*=carry
        carry*=nums[i]
        // console.log('carry', carry, nums[i])
        // console.log('output', output)
    }
    // console.log(output)
    return output
}

// const nums = [1,2,3,4];
const nums = [-1,1,0,-3,3];

const res = productExceptSelf(nums);

console.log(res)