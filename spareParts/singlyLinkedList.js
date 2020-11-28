// Node constructor.
function Node(data) {
	this.data = data;
	this.next = null;
}

// Linked list constructor.
function LinkedList() {
	this.head = null;
	this.length = 0;
}

LinkedList.prototype.AddNode = function (newNode) {
	if (this.head === null) {
		this.head = newNode;
	} else {
		let curNode = this.head;
		let prevNode = this.head;

		while (curNode !== null) {
			prevNode = curNode;
			curNode = curNode.next;
		}
		prevNode.next = newNode;
	}
	this.length += 1;
};

LinkedList.prototype.Insert = function (newNode, index) {
	if (index <= 0 || index > this.length) {
		console.log(`specifed index: ${index}, is out of range.`);
		return;
	} else if (this.head !== null) {
		insert.bind(this)();
	} else {
		console.log('Insertion not allowed on an empty list.');
	}
	function insert() {
	
		let curNode = this.head;
		let prevNode = this.head;
		while(index !== 0) {
			prevNode = curNode;
			curNode = curNode.next;
			index -= 1;
		}
		newNode.next = curNode;
		prevNode.next = newNode;
		this.length += 1;

	}
};

LinkedList.prototype.DisplayAllNodes = function () {
	let node = this.head;
	while (node !== null) {
		console.log('\n -------------------start---------------\n', node, '\n ---------end--------- \n');
		node = node.next;
	}
};
LinkedList.prototype.Length = function () {
	return this.length;
};

const lList = new LinkedList();
lList.AddNode(new Node('10111'));
lList.Insert(new Node('Chucky cheese'), 1);
lList.AddNode(new Node('name:keba, age:23'));

lList.AddNode(new Node(`meaning of life is 42.`));

lList.Insert(new Node('Lebogang'), 4);
lList.DisplayAllNodes();
console.log(lList.Length());
