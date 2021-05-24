var Stack = function(){
    this.count = 0;
    this.storage = {};

    // Add a value at the end of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    // Remove and return the last element of the stack
    this.pop = function(){
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // Size of the stack
    this.size = function(){
        return this.count;
    }

    // Return the value of the end of the stack
    this.peek = function(){
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push(2);
myStack.push(5);
myStack.push(7);
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());