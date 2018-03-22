/*
	Ref:. https://nipher.io/blog/
*/

const func1 = x => x * x; 
 
const func2 = (x, y) => { return x + y; }; 

/* variável let */
let teste = 'Hello World!';
console.log(teste);


/* variável const */
const silvano = {
	name: 'Silvano',
	age: 30
}


console.log(silvano);

/************ ES6 - Template Literals ************/

/* Interpolation */
let myVar = 'es6';
console.log(`Welcome ${myVar}!`);

let myText = `This is the first line
This is the second line
This is the third line`;

console.log(myText);

/* Interpolated Expressions */
console.log(`4 * 3 equals ${4 * 3}`);

let value = 5.123124,
	name = 'Vincent';

console.log(`${name.toUpperCase()}, you owe me U$${value.toFixed(2)}!`);