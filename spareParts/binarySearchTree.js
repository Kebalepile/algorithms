// Binary Tree Data Structure
// A tree whose elements have at most 2 children is called a binary tree.
// Since each element in a binary tree can have only 2 children,
// we typically name them the left and right child.
// A Binary Search tree is a binary tree
// in which nodes that have lesser value
// are stored on the left while the nodes
// with a higher value are stored at the right

class Node {
	constructor(data) {
		this.data = data;
		this.l = null;
		this.r = null;
	}
}

class BST {
	#root = null;
	insert(data) {
		let node = this.#root;
		if (!node) {
			this.#root = new Node(data);
			return;
		}

		const searchTree = (node, data) => {
			if (data < node.data) {
				if (!node.l) {
					node.l = new Node(data);
					return;
				}
				return searchTree(node.l, data);
			} else if (data > node.data) {
				if (!node.r) {
					node.r = new Node(data);
					return;
				}
				return searchTree(node.r, data);
			} else {
				return 'data is already in BST.';
			}
		};

		return searchTree(node, data);
	}
	has(data) {
		let node = this.#root;
		while (node.data !== data) {
			if (data < node.data) {
				node = node.l;
			} else if (data > node.data) {
				node = node.r;
			}

			if (!node) {
				return false;
			}
		}

		return true;
	}
	get(data) {
		let node = this.#root;
		while (node.data !== data) {
			if (data < node.data) {
				node = node.l;
			} else if (data > node.data) {
				node = node.r;
			}

			if (!node) {
				return 'No such data in BST.';
			}
		}

		return node.data;
	}
	del(data) {
		const delNode = (node, data) => {
			if (!node) {
				return null;
			}
			if (data < node.data) {
				node.l = delNode(node.l, data);
				return node;
			} else if (data > node.data) {
				node.r = delNode(node.r, data);
				return node;
			} else {
				// (leaflet) node with no children.
				if (node.l === null && node.r === null) {
					node = null;
					return node;
				}

				// node has one child cases.
				if (!node.r) {
					node = node.l;
					return node;
				}

				if (!node.l) {
					node = node.r;
					return node;
				}

				// has both children.
				if (node.l && node.r) {
					let tempNode = node.r;
					while (tempNode.l) {
						tempNode = tempNode.l;
					}

					node.data = tempNode.data;
					// delete value from subtree.
					node.r = delNode(node.r, tempNode.data);
					return node;
				}
			}
		};

		this.#root = delNode(this.#root, data);
	}
	min() {
		let node = this.#root;
		while (node.l) {
			node = node.l;
		}

		return node.data;
	}
	max() {
		let node = this.#root;

		while (node.r) {
			node = node.r;
		}

		return node.data;
	}
	minHeight(node = this.#root) {
		if (!node) {
			return -1;
		}

		let left = this.minHeight(node.l),
			right = this.minHeight(node.r);

		if (left < right) {
			return left + 1;
		} else {
			return right + 1;
		}
	}
	maxHeight(node = this.#root) {
		if (!node) {
			return -1;
		}

		let left = this.maxHeight(node.l),
			right = this.maxHeight(node.r);

		if (left > right) {
			return left + 1;
		} else {
			return right + 1;
		}
	}
	isBalanced() {
		return this.minHeight() >= this.maxHeight() - 1;
	}
	// traversal methods, use recursion helpers.
	// left -> root -> right.
	inOrder() {
		let results = [],
			traverse = (node) => {
				if (node.l) {
					traverse(node.l);
				}
				results.push(node.data);
				if (node.r) {
					traverse(node.r);
				}
			};

		traverse(this.#root);
		return results;
	}
	// root -> left -> right.
	preOrder() {
		let results = [],
			traverse = (node) => {
				results.push(node.data);
				if (node.l) {
					traverse(node.l);
				}
				if (node.r) {
					traverse(node.r);
				}
			};
		traverse(this.#root);

		return results;
	}
	// left -> right -> root.
	postOrder() {
		let results = [],
			traverse = (node) => {
				if (node.l) {
					traverse(node.l);
				}

				if (node.r) {
					traverse(node.r);
				}
				results.push(node.data);
			};
		traverse(this.#root);

		return results;
	}
	// use while loop.
	levelOrder() {
		let results = [],
			q = [];
		if (this.#root) {
			q.push(this.#root);
			while (q.length) {
				let node = q.shift();
				results.push(node.data);
				if (node.l) {
					q.push(node.l);
				}
				if (node.r) {
					q.push(node.r);
				}
			}
			return results;
		}
		return null;
	}
}

const tree = new BST();

console.log(tree.insert(9));
console.log(tree.insert(4));
console.log(tree.insert(17));
console.log(tree.insert(12));
console.log(tree.insert(3));
console.log(tree.insert(6));
console.log(tree.insert(22));
console.log(tree.insert(5));
console.log(tree.insert(7));
console.log(tree.insert(20));
console.log(tree.insert(10));
console.log(tree.has(9));
console.log(tree.has(6));
console.log(tree.get(4), ' <-- data retrived from BST.');
console.log(tree.get(45));
console.log(tree.min(), ' <--- min value in BST.');
console.log(tree.max(), ' <---- max value in BST.');
console.log('min heighth is --> ', tree.minHeight());
console.log('max heighth is --> ', tree.maxHeight());
console.log(`tree is ${tree.isBalanced() ? 'balanced' : 'not balanced'}.`);
tree.del(4);
console.log(tree.get(4), ' <-- data retrived from BST.');
tree.del(17);
console.log(tree.get(17), ' <-- data retrived from BST.');
console.log(`tree is ${tree.isBalanced() ? 'balanced' : 'not balanced'}.`);
console.log(tree.inOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.levelOrder());
