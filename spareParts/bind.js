// Implementation of the Function.prototype.bind method.
'use strict';
const person = {
	name: 'Rick',
	speak() {
		console.log('Hi, I"m ', this.name);
	},
};

function translator() {}

translator.prototype.translate = function (lang) {
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
};
translator.prototype.bind = function (thisObj) {
	const constructorFunc = this;
	return function (lang) {
		constructorFunc.translate.call(thisObj, lang);
	};
};
const jim = new translator();
const jimTranslates = jim.bind(person);

jimTranslates('Setswana');
jimTranslates('Zulu');
jimTranslates();
