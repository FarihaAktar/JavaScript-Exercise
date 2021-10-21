const parenthesis = '({[]})';

const isValid = (s) => {
    const obj = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    const stack = [];
    for(paren of s){
        if(obj.hasOwnProperty(paren)){
            stack.push(paren);
            // console.log(stack)
        }else{
            const closeParen = stack.pop();
            // console.log('p',paren, obj[closeParen])
            // console.log('closeparen',closeParen)
            if(paren !== obj[closeParen]){
                // console.log('p',paren, obj[closeParen])
                return false;
            }
        }
    }
    return stack.length === 0;
}

const res = isValid(parenthesis);

console.log(res)