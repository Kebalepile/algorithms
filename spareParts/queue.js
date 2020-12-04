// Queue is an abstract data structure, somewhat similar to Stacks.
// Unlike stacks, a queue is open at both its ends.
// One end is always used to insert data (enqueue)
// and the other is used to remove data (dequeue).
// Queue follows First-In-First-Out methodology, i.e.,
// the data item stored first will be accessed first.

class Queue {
	#q = [];
	enqueue(data) {
		this.#q.push(data);
	}

	dequeue() {
		return this.#q.shift();
	}

	peek() {
		return this.#q[0];
	}

	isEmpty() {
		return this.#q.length > 0 ? false : true;
	}
}

const q = new Queue();

q.enqueue('data');
q.enqueue(2);
q.enqueue(17 + 25);
q.enqueue('last air bander.');
console.log(q.isEmpty());
console.log(q.peek(), ' <----- at first position of the queue.\n');
console.log(q.dequeue(), ' <--- removed from queue.\n');
console.log(q.peek(), ' <----- at first position of the queue.\n');
console.log(q.dequeue(), ' <--- removed from queue.\n');
console.log(q.peek(), ' <----- at first position of the queue.\n');
console.log(q.dequeue(), ' <--- removed from queue.\n');
console.log(q.dequeue(), ' <--- removed from queue.\n');
console.log(q.dequeue(), ' <--- removed from queue.\n');
console.log(q.isEmpty());
