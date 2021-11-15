// find first non repeated character in a string

const str = 'simplest';

const firstNonRepeatedCharacter = (str)=>{
    const hasMap = {};
    for(let i=0;i<str.length;i++){
        if(hasMap.hasOwnProperty(str[i])){
            hasMap[str[i]] +=1
        }else{
            hasMap[str[i]] = 1
        }
    }
    for(let key in hasMap){
        if(hasMap[key] === 1){
            return key;
        }
    }
}

const res =  firstNonRepeatedCharacter(str)
console.log(res)