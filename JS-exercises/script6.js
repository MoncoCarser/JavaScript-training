var database = [
{
	username: "andrei",
	password: "supersecret"
},
{
	username: "johnny11",
	password: "alpha"
},
{
	username: "sally",
	password: "777"
}
	];

var newsFeed = [
{
	username: "Bobby",
	timeline: "So tired from learning so much today."
},
{
	username: "Michael22",
	timeline: "Best programming language is..."
},
{
	username: "DudeMighty",
	timeline: "I cracked it!"
},
{
	username: "Sally",
	timeline: "JS is so darn coooooooool!"
}
	];


function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, username or password was not of acceptable quality.");
	}
}


var usernamePrompt = prompt("What is your username:");
var passwordPrompt = prompt("What is your password:");

signIn(usernamePrompt, passwordPrompt);