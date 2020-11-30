// stack data structure
// The order may be LIFO(Last In First Out).

// Why Use Stack?
//  If you need to store data in a data structure its size has to frequently change,
//  it is better to use stack over an array because the array will have to create
//  the new bigger size of an empty array to fit the new data,
//  then it will copy from older array to new empty array which
//  takes linear time O(n), whereas Stack only takes constant time O(1).
//  So it would be better to use a stack if the data comes and goes very often.

// Implementation of Stack
//  A stack is used in conjunction with other data structures,
//  and two common ways to implement stack are using an array
//  or linked list.

// stack with an array
class Stack {
	constructor() {
		this.items = [];
	}
	/**
	 *
	 * @param {interface} element
	 * @description Adds an element onto the top of the stack.
	 */
	Push(element) {
		this.items.unshift(element);
	}
	/**
	 * @description Removes top element from stack.
	 * @returns {Element}
	 */
	Pop() {
		let elem = this.items.shift();
		return elem;
	}
	/**
	 * @description Displays top element
	 * @returns null, Element at index[0]
	 */
	Peek() {
		return this.IsEmpty() ? null : this.items[0];
	}
	/**
	 * @description checks whether stack is empty
	 * @returns {Boolean}
	 */
	IsEmpty() {
		return this.items.length <= 0;
	}
}

let newStack = new Stack();
// My Life Problems.
console.log(newStack.IsEmpty());
newStack.Push('kill bill');
newStack.Push('marry Lerato');
newStack.Push('get a soft pillow.');
newStack.Push('eat less.');
console.log(newStack.Peek());
newStack.Pop();
console.log(newStack.IsEmpty());
console.log(newStack.Peek());
newStack.Pop();
console.log(newStack.IsEmpty());
console.log(newStack.Peek());
newStack.Pop();
console.log(newStack.IsEmpty());
console.log(newStack.Peek());
newStack.Pop();
console.log(newStack.IsEmpty());
console.log(newStack.Peek());

// Stack with a linked list
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Stack2 {
	constructor() {
		this.top = null;
	}

	IsEmpty() {
		// I'm using type coreison... something like that.
		return this.top ? false: true;
	}
	Peek() {
	
		return this.IsEmpty()? null : this.top.data;
	}

	Pop() {
		let data = this.top.data;
		this.top = this.top.next;
		return data;
	}

	Push(data) {
		let node = new Node(data);
		node.next = this.top;
		this.top = node;
	}
}

let stack2 = new Stack2();

// Sorry to bore you.
console.log("\n\n\n\n\n\n\n")
console.log(stack2.IsEmpty());
stack2.Push('kill bill');
stack2.Push('marry Lerato');
stack2.Push('get a soft pillow.');
stack2.Push('eat less.');
console.log(stack2.Peek());
stack2.Pop();
console.log(stack2.IsEmpty());
console.log(stack2.Peek());
stack2.Pop();
console.log(stack2.IsEmpty());
console.log(stack2.Peek());
stack2.Pop();
console.log(stack2.IsEmpty());
console.log(stack2.Peek());
stack2.Pop();
console.log(stack2.IsEmpty());
console.log(stack2.Peek());
