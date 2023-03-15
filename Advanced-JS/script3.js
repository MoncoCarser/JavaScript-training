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


//  forEach

const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach(num => {
	double.push(num * 2);
})

console.log("forEAch", double);

// map, filter, reduce
// map

 const mapArray = array.map(num => num * 2);

 console.log("map", mapArray);


//  filter

const arrayFilter = [1, 2, 10, 16];

 const filterArray = arrayFilter.filter(num => num > 5);

 console.log("filter", filterArray);

 //  reduce
 const arrayReduce = [1, 2, 10, 16];

 const reduceArray = arrayReduce.reduce((accumulator, num) => {
 	return accumulator + num;
 }, 5);

 console.log("reduce", reduceArray);