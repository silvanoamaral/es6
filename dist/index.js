'use strict';

/*
	Ref:. https://nipher.io/blog/
*/

var func1 = function func1(x) {
	return x * x;
};

var func2 = function func2(x, y) {
	return x + y;
};

/* variável let */
var teste = 'Hello World!';
console.log(teste);

/* variável const */
var silvano = {
	name: 'Silvano',
	age: 30
};

console.log(silvano);

/************ ES6 - Template Literals ************/

/* Interpolation */
var myVar = 'es6';
console.log('Welcome ' + myVar + '!');

var myText = 'This is the first line\nThis is the second line\nThis is the third line';

console.log(myText);

/* Interpolated Expressions */
console.log('4 * 3 equals ' + 4 * 3);

var value = 5.123124,
    name = 'Vincent';

console.log(name.toUpperCase() + ', you owe me U$' + value.toFixed(2) + '!');