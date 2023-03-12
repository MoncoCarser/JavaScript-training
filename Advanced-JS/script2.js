// reference type
var obj1 = { value: 10 };
var obj2 = obj1;
var obj = { value: 10 };

// CONTEXT
// contect vs scope
fucntion b() {
	let a = 4; // a only exists inside b() < SCOPE
}

const object4 = {
	a; function() {
		console.log(this);
	}
}

// instantiation

class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I'm ${this.name}, I'm a ${this.type}.`)
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type)
	}
	play() {
		console.log(`Weeeeee I'm a ${this.type}.`)
	}
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark magic wizard");

"Turtle".padstart(5)
.padend()

Object.values
Object.entries //get whole list
Object.keys

let obj = {
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr. Grinch"}

Object.keys(Obj).forEach((key, index) => {
console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
	console.log(value);
})

Object.entries(obj).map(value => {
	return value[1] + value[0].replace("username", "");
})

Async Await

// flat()

const array = [1,[2,"mememe",[24, "memetoooo"]],4,[5,"huba"]]
array.flat(2) // default is 1 layer, but can mark how deep want to go

// flat() can also do some data cleanig
const customerData = ["Cidny",  ,,,,,,,, "John" ]
customerData.flat()

// flatMap()   allows us to use the basic map functions and flattens the result to level 1

const userEmail = "                eddydude@gmail.com"
const userEmail2 = "johnhjonh@gmail          "
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())

const theObject = Object.fromEntries(arrayInQuestion) // create an object of an array
Object.entries(theObject) // from object to array


try {
	bob + "hi"
} catch (error) {
	console.log("NO NO NO NO" + error) // using error is not mandatory since ES10
}


// for of
// iterating arrays and strings
// DOES NOT WORK with objects like "for in", because must be iterable
const basket = ["banana", "pear", "mansikka"];

for (item of basket) {
	console.log(item);
}

// for in - properties
// enumerating -  objects

const bigBasket = {
	grapes: 500,
	pears: 4,
	oranges: 10,
}

for (item in bigBasket) {
	console.log(item);
}

let andrei_pokemon = {
	pikachu: {
		species: "mouse pokemon",
		height: 0.8,
		weight: 30,
		power: "lightning",
	}
}


let power = andrei_pokemon?.pikachu?.power
console.log(power)

let power = andrei_pokemon?.pikachu?.power || "no power" // works by truthy/falsy principle 
let power2 = andrei_pokemon?.pikachu?.power ?? "no power" // checks if null or identified
console.log(power)


const alpha = "something about something lalilulelo good good"
alpha.replaceAll("good", "apple") // there is .replace, but it only worked on FIRST found match, replaceAll works on all

 
const someArray = [123,5656,765,353,7765,33,7,45,234]
someArray.at(-1); // going from last item