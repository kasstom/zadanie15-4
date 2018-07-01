// Zadanie pierwsze

const a = 'Hello';
const b = 'World';
const sayHello = (first, second) => console.log(`${first} ${second}`)
sayHello(a, b)

// Zadanie drugie

const multiply = (first = 1, second = 1) => console.log(first * second);
multiply(6,)

// Zadanie trzecie


const average = (...args) => {
	let added = 0
	for (let i = 0; i < args.length; i++) {
		added += args[i];
	}
	return added / args.length
}
console.log(average(1, 3, 6, 6))

// Zadanie czwarte

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades))


// Zadanie piąte

const array = [1, 4,'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = array;
console.log(`${firstName} ${lastName}`);