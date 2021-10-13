const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];
// const arr1 = [4, 9, 5];
// const arr2 = [9, 4, 9, 8, 4];
// const arr1 = [1,2];
// const arr2 = [1,1];
// const arr1 = [3,2,1];
// const arr2 = [1,1];

// console.log(arr1.includes(9))

const intersect = (nums1, nums2) => {
 
    let final=[];
    for(let i=0;i<nums2.length;i++){
           let val=nums2[i];
           if(nums1.includes(val)){
               nums1.splice(nums1.indexOf(val),1);
               final.push(val);
           }
    }
    return final;

    // let set1 = new Set(nums1);
    // let set2 = new Set(nums2);
    // let newArr = [];
    // for(let value of set1){
    //     if(set2.has(value)){
    //         newArr.push(value)
    //     }
    // }
    // return newArr
    
}

console.log(intersect(arr1, arr2))



// let newArr = [];
// if (nums1.length < nums2.length) {
//     nums1.filter(value => {
//         if (nums2.includes(value)) {
//             newArr.push(value)
//         }
//     })
// } else if (nums1.length > nums2.length) {
//     nums2.filter(value => {
//         if (nums1.includes(value)) {
//             newArr.push(value)
//         }
//     })
// } else {
//     nums1.filter(value => {
//         if (nums2.includes(value)) {
//             if (newArr.includes(value) !== true) {
//                 newArr.push(value)
//             }
//         }
//     })
// }

// return newArr;