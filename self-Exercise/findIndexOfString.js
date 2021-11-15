const str = 'Hello World';
const patternStr = 'lo';


const findIndexOfString = (str, pattern) => {
    const firstIndex = pattern[0];
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === firstIndex) {
            for (let j = 0; j < pattern.length; j++) {
                if(pattern[j] !== str[i+j]){
                  break
                }
            }
            
        }
    }
  
}

const res = findIndexOfString(str, patternStr);

console.log(res)



// const findIndexOfString = (str, pattern) => {

//     let newArray = [];

//     for (let i = 0; i < str.length; i++) {
//         newArray = [];
//         for (let j = 0; j < pattern.length; j++) {
//             if (str[i + j] === pattern[j]) {
//                 newArray.push(i + j)
//             } else {
//                 break
//             }
//             if(newArray.length === pattern.length){
//                 return newArray[0]
//             }
//         }
//     }
//     return -1;


// }