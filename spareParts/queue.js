// Queue is an abstract data structure, somewhat similar to Stacks.
// Unlike stacks, a queue is open at both its ends.
// One end is always used to insert data (enqueue)
// and the other is used to remove data (dequeue).
// Queue follows First-In-First-Out methodology, i.e.,
// the data item stored first will be accessed first.

// queue with an array.
class Queue {
	#items = [];
	#length = 0;
	#maxSize = 4;
	/**
	 *
	 * @param {Element} elem
	 * @description adds element to the back of the queue.
	 */
	enqueue(elem) {
		if (!this.isFull()) {
			this.#items.push(elem);
			this.#length += 1;
		}
	}
	/**
	 * @description removes element from front of the queue.
	 */
	dequeue() {
		if (!this.isEmpty()) {
			this.#items.shift();
			this.#length -= 1;
		}
	}
	/**
	 * @description gets element from front of the queue
	 * without removing it from the queue.
	 * @returns {Element} element.
	 */
	peek() {
		if (!this.isEmpty()) {
			return this.#items[0];
		}
		return null;
	}
	/**
	 * @description checks if queue if full.
	 * @returns {Boolean} boolean
	 */
	isFull() {
		return this.#length === this.#maxSize ? true : false;
	}
	/**
	 * @description checks if queue if empty.
	 * @returns {Boolean} boolean
	 */
	isEmpty() {
		return this.#length === 0 ? true : false;
	}
}

const q = new Queue();
console.log(q.isEmpty());
q.enqueue('Rage doll.');
q.enqueue('Bob the builder');
q.enqueue('Teletubbies');
q.enqueue('Dragon Ball Super');
q.enqueue('Teen Titens');
console.log(q.peek());
q.dequeue();
console.log(q.peek());
q.dequeue();
console.log(q.peek());
q.dequeue();
console.log(q.peek());
q.dequeue();
console.log(q.isFull());
