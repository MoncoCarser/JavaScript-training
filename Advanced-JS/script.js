// const a = (x,z) => x+z;

const playerCharacter = {
	characterName: "JaneJackson",
	characterLevel: 24,
	wizardLevel: false
}

//  playerCharacter.characterLevel = 25
// -> so you can change properties, but you can reassign the variable

// const { characterName, characterLevel } = playerCharacter;
// let { wizardLevel } = playerCharacter;


// const name = "Mike Tyson";

// const gameCharacter = {
// 	[name]: "hi there",
// 	[1+2]: "heehoo"
// } 

const name = "Daniel";
const age = 2;
const pet = "dinosaur";
// must use `` , not double or single quotes! 
const cuteGreeting = `Hi ${name}, you seem to be big like a ${age + 4} year old. Whoa that is a big ${pet}.`

function greet(name="", age=100, pet="bones") {
	return cuteGreeting = `Hi ${name}, you seem to be big like a ${age + 4} year old. Whoa that is a big ${pet}.`
}


// Closure
const first = () => {
	const greet = "hi";
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

//  if I now call multiplyBy5(5);
//I get 5*5 = 25


// Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5):