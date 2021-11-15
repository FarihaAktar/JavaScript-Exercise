const strArr = ['x', 'y', 'z', 'k', 'l']
const boolArr = [true, false, false, false, true]


const replaceValue = (arr1, arr2, str) => {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i; j <= i; j++) {
            if (str === arr1[i]){
                if(arr2[j] === true){
                    arr2[j] = false
                    return arr2;
                }else{
                    arr2[j] = true
                    return arr2;
                }
            }
        }
    }
    return null;
}

const res = replaceValue(strArr, boolArr, 'k')

console.log(res)