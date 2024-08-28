class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0;
    }
    
    push(element){
        // if the stack length is 0, create a node, make it the top and bottom and increase the length
        // if not, create a node, make it the top, point its next to the next element and increase the length
        const newNode = new Node(element);
        if(this.length == 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode
        }
        this.length++;
    }
    
    pop(){
        // if length == 0, return null
        // if length == 1, store the element in a var, delete the last element and make the top and bottom as null
        // else, store this.head.next in a var, this.head = var
        // length--, return the var
        if(this.length == 0){
            return null
        }else if(this.length == 1){
            const poppedElement = this.top;
            this.top = null;
            this.bottom = null;
            this.length--;
            return 0
        }else{            
            const poppedElement = this.top;
            this.top = poppedElement.next;
            this.length--;
            return poppedElement
        }            
    }
    
    peek(){
        // if no element return null
        // if length > 0, return the top
        return this.length > 0 ? this.top.value : null
    }
}

const myStack = new Stack();
myStack.push("hi");
myStack.push("there");
console.log(myStack.pop());
console.log(myStack.pop());

// console.log(myStack.peek());