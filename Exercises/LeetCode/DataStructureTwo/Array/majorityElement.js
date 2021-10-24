const arr = [2,2,1,1,1,2,2];

const majorityElement = (nums) =>{
    const obj = {};

    nums.forEach(num =>{
        if(obj.hasOwnProperty(num)){
            obj[num] += 1;
        }else{
            obj[num] = 1
        }
    })
    // console.log(obj)
    // console.log(Object.values(obj))
    let greatest = Math.max(...Object.values(obj))

    for(let key in obj){
        if(obj[key] === greatest){
            return Number(key)
        }
    }
}

const res = majorityElement(arr);

console.log(res)