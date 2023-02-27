
function wordLength(word) {
	let length = word.length;
	console.log("Word length is: " + length);
}

do {
let word = prompt("Give a word: ")
wordLength(word);
}
while (prompt("Again?") === "yes");