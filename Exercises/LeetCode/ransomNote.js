const str = 'aa';
const str1 = 'bbbaa';

// console.log(str === 'a')

const canConstruct = (ransomNote, magazine) => {
    if (ransomNote.length > magazine.length) { return false; }
    let ransomNoteArr = ransomNote.split('');
    // console.log(ransomNoteArr)
    let oldMagazineLength = magazine.length;
    // console.log(oldMagazineLength)
    ransomNoteArr.forEach(function (item, index) {
        // console.log('item', item)
        magazine = magazine.replace(item, '');
        console.log('magazine', magazine)
    });
    if (oldMagazineLength === magazine.length + ransomNoteArr.length) {
        return true;
    } else {
        return false;
    }
}

const res = canConstruct(str, str1)

console.log(res)