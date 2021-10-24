const arr = [-1,0,1,2,-1,-4]

const threeSum = (arr) =>{
    var target = 0;
    if (nums.length === 3) {
        if (nums[0]+nums[1]+nums[2] === 0) {
            return [[nums[0],nums[1],nums[2]]];
        }
    }
    
    var results = [];
    var hashMap = {};
    
    for (var i=0; i<nums.length; i++) {
        for (var j=i+1; j<nums.length; j++) {
            for (var k=j+1; k<nums.length; k++) {
              if (nums[i]+nums[j]+nums[k] === target) {
                if (!hashMap[nums[i]*nums[j]*nums[k]]) {
                    results.push([nums[i],nums[j],nums[k]]);
                    results[results.length-1].sort();
                    hashMap[nums[i]*nums[j]*nums[k]] = true;
                    //console.log(hashMap);
                }
              }
              
            }
        }
    }
    return results;
}

const res = threeSum(arr);

console.log(res)