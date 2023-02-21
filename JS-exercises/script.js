var database = [
{
	username: "andrei",
	password: "supersecret"
}
	];

var newsFeed = [
{
	username: "Bobby",
	timeline: "So tired from learning so much today."
},
{
	username: "Sally",
	timeline: "JS is so darn coooooooool!"
}
	];

var usernamePrompt = prompt("What is your username:");
var passwordPrompt = prompt("What is your password:");

function signIn(user, password) {
	if (user === database[0].username && 
		password === database[0].password) {
		console.log(newsFeed);
	} else {
		alert("Sorry, username or password was not of acceptable quality.");
	}
}

signIn(usernamePrompt, passwordPrompt);