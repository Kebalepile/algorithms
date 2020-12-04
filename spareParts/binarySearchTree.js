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
	constructor() {
		this.root = null;
	}
	insert(data) {
		const root = this.root;
		if (!root) {
			this.root = new Node(data);
			return;
		} else {
			const searchTree = (node, data) => {
				if (data < node.data) {
					if (!node.l) {
						node.l = new Node(data);
						return;
					} else {
						return searchTree(node.l, data);
					}
				} else if (data > node.data) {
					if (!node.r) {
						node.r = new Node(data);
						return;
					} else {
						return searchTree(node.r, data);
					}
				} else {
					return 'data already in BST.';
				}
			};
			return searchTree(root, data);
		}
	}

	min() {
		let curNode = this.root;

		while (curNode.l) {
			curNode = curNode.l;
		}

		return curNode.data;
	}

	max() {
		let curNode = this.root;
		while (curNode.r) {
			curNode = curNode.r;
		}

		return curNode.data;
	}
	/**
	 *
	 * @param {Element} data
	 * @description default search
	 */
	search(data) {
		let curNode = this.root;
		while (curNode.data !== data) {
			if (data < curNode.data) {
				curNode = curNode.l;
			} else if (data > curNode.data) {
				curNode = curNode.r;
			}

			if (curNode === null) {
				return 'No node with such data in tree.';
			}
		}

		return curNode;
	}

	contains(data) {
		let curNode = this.root;
		while (curNode.data !== data) {
			if (data < curNode.data) {
				curNode = curNode.l;
			} else if (data > curNode.data) {
				curNode = curNode.r;
			}

			if (curNode === null) {
				return false;
			}
		}

		return curNode.data === data ? true : false;
	}

	remove(data) {
		// helper function.
		const rmNode = (node, data) => {
			if (node === null) {
				//  empty tree
				return null;
			}

			if (data < node.data) {
				node.l = rmNode(node.l, data);
				return node;
			} else if (data > node.data) {
				node.r = rmNode(node.r, data);
				return node;
			} else {
				//No children.
				// dealing with a leaf node.
				// both node.l && node.r contain Null.
				if (node.l === node.r) {
					node = null;
					return node;
				}

				// has one child cases.
				if (node.l === null) {
					return node.r;
				}
				if (node.r === null) {
					return node.l;
				}

				// has both children cases.
				// looking for a successor.
				let curNode = node.r;
				while (curNode.l) {
					curNode = curNode.l;
				}

				node.data = curNode.data;
				// delete value from subtree.
				node.r = rmNode(node.r, curNode.data);

				return node;
			}
		};

		this.root = rmNode(this.root, data);
	}

	isBalanced() {
		return this.minHeight() >= this.maxHeight() - 1;
	}

	minHeight(node = this.root) {
		if (node === null) {
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

	maxHeight(node = this.root) {
		if (node === null) {
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

	// tree travels methods.
	// starts at left -> root -> right.
	inorder() {
		const result = [],
			traverse = (node) => {
				if (node.l) {
					traverse(node.l);
				}
				result.push(node.data);
				if (node.r) {
					traverse(node.r);
				}
			};

		traverse(this.root);

		return result;
	}

	// starts at root -> left -> right.
	preOrder() {
		const result = [],
			traverse = (node) => {
				result.push(node.data);
				if (node.l) {
					traverse(node.l);
				}
				if (node.r) {
					traverse(node.r);
				}
			};

		traverse(this.root);
		return result;
	}

	// starts at left -> right -> root.
	postOrder() {
		const result = [],
			traverse = (node) => {
				if (node.l) {
					traverse(node.l);
				}

				if (node.r) {
					traverse(node.r);
				}

				result.push(node.data);
			};

		traverse(this.root);
		return result;
	}

	levelOrder() {
		const result = [],
			q = [];
		if (this.root) {
			q.push(this.root);
			while (q.length) {
				let node = q.shift();
				result.push(node.data);
				if (node.l) {
					q.push(node.l);
				}
				if (node.r) {
					q.push(node.r);
				}
			}
			return result;
		}

		return null;
	}
}

const tree = new BST();
tree.insert(9);
tree.insert(4);
tree.insert(17);
tree.insert(3);
tree.insert(6);
tree.insert(22);
tree.insert(5);
tree.insert(7);
tree.insert(20);
console.log(tree.insert(10));
console.log(tree.min());
console.log(tree.max());
console.log(tree.contains(4));
console.log(tree.contains(5));
console.group(tree.search(1));
console.log(tree.search(7));
// tree.remove(1);
console.log(tree.contains(1));
console.group(tree.search(3));

console.log(tree.minHeight());
console.log(tree.maxHeight());
console.log(tree.isBalanced());
console.log(tree.inorder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.levelOrder());
