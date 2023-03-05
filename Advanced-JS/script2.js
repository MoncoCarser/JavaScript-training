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