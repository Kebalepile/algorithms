
const ary = generateNumbers(200);
const item = ary[50];
const index = binarySearch(ary, item);

console.log(item, ' is at index ', index);
console.log(ary[index]);



function sort(ary) {
	return ary.sort((a, b) => a - b);
}

function binarySearch(ary, item) {
	let start = 0;
	let end = ary.length - 1;

	return findIndex();
	// *****************************************
	//search helper function
	// *****************************************
	function findIndex() {
		while (start <= end) {
			let curIndex = Math.floor((start + end) / 2);
			let curItem = ary[curIndex];

			if (curItem === item) {
				return curIndex;
			}

			if (curItem < item) {
				start = curIndex + 1;
			} else {
				end = curIndex - 1;
			}
		}
	}
}


function generateNumbers(range, total = arguments[0]) {
	let acc = new Set();

	generate(total);

	return Array.from(acc);

	function generate(total) {
		while (total) {
			acc.add(Math.floor(Math.random() * range));

			total--;
		}
	}
}
