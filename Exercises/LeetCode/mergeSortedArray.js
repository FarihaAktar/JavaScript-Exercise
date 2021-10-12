const arr = [1, 2, 3, 4];
// arr.splice(1,2, 5); // take three arguments- index, delete, element to insert
// arr[1] = 7
// console.log(arr)

// const arr1 = [1, 2, 3, 0, 0, 0]
// const arr2 = [2, 5, 6]
// const arr1 = [4, 5, 6, 0, 0, 0]
// const arr2 = [1, 2, 3]
// const arr1 = [1]
// const arr2 = []
const arr1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0] // m = 6
const arr2 = [1, 2, 2] // n = 3

const mergeSortedArray = (nums1, m, nums2, n) => {
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = nums1.length - 1; i >= 0; i--) {
      if (p1 >= 0 && nums1[p1] >= nums2[p2]) {
        nums1[i] = nums1[p1];
        // console.log('p1',p1, nums1)
        p1--;
      } else if (p2 >= 0) {
        nums1[i] = nums2[p2];
        // console.log('p2',p2, nums1)
        p2--;
      }
    }
    return nums1
}

console.log(mergeSortedArray(arr1, 6, arr2, 3))