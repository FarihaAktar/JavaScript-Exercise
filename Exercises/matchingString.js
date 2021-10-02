const strings = ['a', 'a', 'ab', 'b'];
const queries = ['a', 'ab', 'b'];

const matchingArray = (str, q) => {
    const arr = [];
    let value = 0;
    for (let i = 0; i < q.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (str[j] === q[i]) {
                value++;
            }
        }
        arr.push(value)
        value = 0;
    }
    console.log(arr)
}

matchingArray(strings, queries)