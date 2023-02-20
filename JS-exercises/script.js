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

multiply(5,3);

/* we can also: */ 
var total = multiply(4, 5);
alert(total);