class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkList {
	#head = null;
	#length = 0;
	insert(data) {
		let node = this.#head;
		if (!node) {
			this.#head = new Node(data);
			this.#length += 1;
			return;
		}

		while (node.next) {
			node = node.next;
		}

		node.next = new Node(data);
		this.#length += 1;
	}
	next() {
		let node = this.#head;

		const value = () => {
				let val = node?.data || null;
				node = node?.next || null;
				return val;
			},
			done = () => {
				return node?.data ? false : true;
			};
		return {
			value,
			done,
		};
	}
	del(data) {
		let curNode = this.#head,
			prevNode;
		while (curNode) {
			if (curNode.data === data) {
				curNode = curNode.next;
				break;
			}
			prevNode = curNode;
			curNode = curNode.next;
		}

		if (prevNode) {
			prevNode.next = curNode;
			this.#head = prevNode;
		} else {
			this.#head = curNode;
		}

		this.#length -= 1;
	}
	length() {
		return this.#length;
	}
	isEmpty() {
		return this.length() > 0 ? false : true;
	}
}

const list = new LinkList();

list.insert(2);
list.insert(4);
list.insert(5);

console.log('\n length ', list.length());
console.log(list.isEmpty());

let iter1 = list.next();
while (!iter1.done()) {
	console.log(iter1.value());
}
list.del(2);
console.log('\n length ', list.length());
console.log(list.isEmpty());

let iter2 = list.next();
while (!iter2.done()) {
	console.log(iter2.value());
}
list.del(4);
console.log('\n length ', list.length());
console.log(list.isEmpty());

let iter3 = list.next();
while (!iter3.done()) {
	console.log(iter3.value());
}

list.del(5);
console.log('\n length ', list.length());
console.log(list.isEmpty());

let iter4 = list.next();
while (!iter4.done()) { //won't run.
	console.log(iter4.value());
}
