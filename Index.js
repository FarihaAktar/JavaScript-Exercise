// const CountVowelCount = (x) => {
//     let arr = ["a", "e", "i", "o ","u"];
//     let res = []
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] === arr){
//             console.log(res.push(x[i]))
//         }
//         else{

//         }

//     }
//     return res;
// }

// const res = CountVowelCount("Hello World")
// console.log(res)

// const a = {x: 12}
// const b = a
// const c = {x : 13}
// const d = {...c}
// const e = {c}
// console.log(a === b)
// console.log(c === d)
// console.log(e, c === e)

// const str = 'hello world'
// console.log(str.length)

// const vowels = ['a', 'e', 'i', 'o', 'u']
// console.log(vowels.includes('b'))

const countVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let i = 0; i < str.length; i++) {

        if (vowels.includes(str[i])) {
            count = count + 1
        }

    }
    return count
}

// const res = countVowels("aeiou")
// console.log(res)

// countVowels("Romel + Fariha")

const reverseArray = (arr) => {
    const newArr = []
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            const value = arr[i];
            newArr.unshift(value)

        }
        console.log(newArr);
    } else {
        console.log("Enter an array")
    }



}
// reverseArray([])
// const arr = [1, 2, 3]
// console.log(Array.isArray(arr))

// const arr1 = [1,2,3];
// const arr2 = [arr1];
// console.log(arr1 === arr2)