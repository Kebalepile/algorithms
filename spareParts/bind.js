// Implementation of the Function.prototype.bind method.

const person = {
	name: 'Rick',
	speak() {
		console.log('Hi, I"m ', this.name);
	},
};

function translate(lang) {
	switch (lang) {
		case 'Setswana':
			console.log('Dumela ke nna  ', this.name);
			break;
		case 'Zulu':
			console.log('Sayobona igama lami ngu ', this.name);
			break;
		default:
			this.speak();
			break;
	}
}

translate.prototype.bind = function (thisObj) {
	const that = this;
	return function (lang) {
		that.call(lang);
	};
};

const activate = translate.bind(person);


activate('Setswana');
activate('Zulu');
activate();
