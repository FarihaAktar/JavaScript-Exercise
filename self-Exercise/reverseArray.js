//  reverse an array

const arr = [1, 2, 3, 4, 5]

const reverseArray = (arr) => {

    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let temp;
        // console.log(arr)
        console.log('oo')
        for (let j = i + 1; j < len; j++) {
            // console.log(arr)
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

    }
    console.log(arr)
}

const res = reverseArray(arr)

console.log(res)