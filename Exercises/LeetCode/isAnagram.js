const str = 'anagrama';
const str1= 'marganaa';

const isAnagram = (s, t)=>{
    if(s.length !== t.length){
        return false
    }
    sArr = s.split('');
    // console.log(sArr);
    sArr.forEach(item => {
        t = t.replace(item, '')
    });
    if(t.length === 0){
        return true
    }else{
        return false
    }
}

const res = isAnagram(str, str1)

console.log(res)