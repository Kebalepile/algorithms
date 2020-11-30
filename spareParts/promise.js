
//My first attempt at creating a promise based of my knowledge
//about them.
let myPromise = function (resolve, reject) {
	let fulfiled = false;
	const onFulfiled = [];
	let rejected = false;
	const onRejected = [];

	return {
		run() {
			let obj = resolve();

			fulfiled = obj.status;
			if (fulfiled) {
				console.log(onFulfiled.length)
				onFulfiled.forEach((fn, index, ary) => {
					let rtn = fn(obj.data);
					if (rtn !== undefined) {
						fn = ary[index + 1];
						fn(rtn);
					}
				});
			} else if (!fulfiled) {
				rejected = true;
				if (rejected) {
					onRejected.forEach((errFn) => {
						errFn(reject());
					});
				}
			}
		},
		getStatus() {
			return {
				fulfiled,
				rejected,
			};
		},
		then(cb) {
			onFulfiled.push(cb);
		},
		catchError(cb) {
			
				onRejected.push(cb);
			
		},
	};
};

let resolve = () => {
	return { status: false, data: 'hello' };
};

let reject = () => {
	return `too tired`;
};
let myP = myPromise(resolve, reject);

myP.then((data) => {
	console.log(data);
	return data + ' keba';
});
myP.then((data) => {
	console.log(data);
});

myP.catchError((err) => console.error(err));

myP.run();
