class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Stack {
	#head = null;
	#length = 0;
	size() {
		return this.#length;
	}

	add(data) {
		let node = new Node(data);
		node.next = this.#head;
		this.#head = node;
		this.#length += 1;
	}

	pop() {
		let item = this.#head?.data || null;
		this.#head = this.#head?.next || null;
		if (item) {
			this.#length -= 1;
		}
		return item;
	}

	peek() {
		return this.#head?.data || null;
	}
}

const stack = new Stack();

stack.add(2);
stack.add('Hi Keba');
stack.add(23 + 17);
console.log(stack.size(), ' is the current stack size\n');
console.log(stack.peek(), '<---- at top of the stack.\n');
console.log(stack.pop(), ' <--- was poped off the stack.\n');
console.log(stack.size(), ' is the current stack size\n');
console.log(stack.peek(), '<---- at top of the stack.\n');
console.log(stack.pop(), ' <--- was poped off the stack.\n');
console.log(stack.size(), ' is the current stack size\n');
console.log(stack.peek(), '<---- at top of the stack.\n');
console.log(stack.pop(), ' <--- was poped off the stack.\n');
console.log(stack.pop(), ' <--- was poped off the stack.\n');
