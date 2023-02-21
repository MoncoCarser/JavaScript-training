function sayHello() {
	console.log("Hellooo");
}

sayHello();

var sayBye = function() {  /* ANONYMOUS function */
	console.log("Bye mister O.");
}

sayBye();

/* another way to print */
function sing(song) {
	console.log(song);
}

sing("lalilulelo");
sing("humppa humppa humppa");
sing("Tero ja minä");


function multiply(a, b) {
	if (a > 10 || b > 10) {
		return "That is so hard..";
	} else {
	return a * b;
	}
}
/* multiply(5,3); 

we can also:
var total = multiply(4, 5);
alert(total);  */

function checkDriverAge(age) {

	/* var age = prompt("What is your age?"); */

	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

/* var checkDriverAge2 = checkDriverAge(); */


var checkDriverAge2 = function() {
	var age = prompt("What is your age?"); 

	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}	
