class MyQueue {
    constructor() {
        this.stack1 = [],
            this.stack2 = []
    };

    push(x) {
        this.stack1.push(x);
        console.log(this.stack1)
    };

    pop() {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }
        let pop = this.stack2.pop();
        while (this.stack2.length !== 0) {
            this.stack1.push(this.stack2.pop())
        }
        // console.log(this.stack1)
        return pop;
    };

    peek() {
        while(this.stack1.length !== 0){
            this.stack2.push(this.stack1.pop());
        }
        var pop = this.stack2.pop();
        this.stack2.push(pop);
        while(this.stack2.length !== 0){
            this.stack1.push(this.stack2.pop());
        }
        return pop;
    };

    empty() {
        return this.stack1.length === 0 ? true : false;
    };
}

const res = new MyQueue()

console.log(res.push(1))
console.log(res.push(2))
console.log(res.push(3))
console.log(res.peek())
console.log(res.pop())
console.log(res.empty())

// console.log(res.pop())
// console.log(res.peek())
// const arr =  [1,2,3];

// console.log(arr.shift())
// console.log(arr)
