
class Stack{
    constructor(){
        this.stackArray = [];
    }
    
    peek(){
        if(this.stackArray.length == 0){
            console.log("Empty!")
        }else{
            console.log(this.stackArray[this.stackArray.length-1])    
        }
    }
    
    pop(){
        this.stackArray.pop()
    }
    
    push(element){
        // add element to the end of the array
        this.stackArray.push(element);
    }
    
    printStack(){
        for(let i = this.stackArray.length - 1; i >= 0; i--){
            console.log(this.stackArray[i] + " ");
        }
    }
}

const myStack = new Stack();
myStack.push("hi")
myStack.push("i")
myStack.push("my")
// myStack.pop()
// // myStack.peek()
// myStack.pop()
// myStack.pop()

// myStack.peek()

// myStack.printStack()