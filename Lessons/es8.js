// padStart
// padEnd
const str = 'Hello'
// console.log(str.padStart(10)) // add 10 space before

// console.log(str.padEnd(10)) // add 10 spaces after

// Object.keys()
// Object.values()
// Object.entries()

const obj ={
    name0: 'Fariha',
    name1: 'Romel',
    name3: 'Farhan',
    name4: 'Rifat'
}

// Object.keys(obj).forEach((key)=>{
//     console.log(key, obj[key])
// })

// Object.values(obj).map((value)=>{
//     console.log(value)
// })

Object.entries(obj).map((value)=>{
    console.log(value)
})