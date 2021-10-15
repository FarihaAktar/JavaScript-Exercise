// const s = 'leetCode';
const s = 'farrafi';
// console.log(s.includes('e'))

const firstUniqueChar = (s) => {
    let letterCounter = {};
    for (letter of s) {
        if (letterCounter[letter]) {
            letterCounter[letter] += 1;

        } else {
            letterCounter[letter] = 1;
        }
    }
    console.log(letterCounter)
    for (let i = 0; i < s.length; i++) {
        const strLetter = s[i];
        if (letterCounter[strLetter] === 1) {
            return i
        }
    }
    return -1
}

const res = firstUniqueChar(s);

console.log(res)