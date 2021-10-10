const array = ['a', 'b', 'c', 'd'];
const array2 = ['a', 'b', 'c', 'd'];

const array3 = array;
const array4 = [...array];
const array5 = [...array, 'e'] 
const array6 = [array, 'e'] 
const array7 = [...array, 'e'] 
// console.log(array === array2) // false
// console.log(array === array3) //True
// console.log(array === array4) //false
// console.log(array5 === array7) //false

const object = {
    key:'value',
    key1:'value',
}

const object1 = object;
const object2 = {...object}
const object3 = {object, ...object}
const object4 = {...object, key2: 'value'}
// console.log(object === object1) // true
// console.log(object2 === object) // false
// console.log(object4)

