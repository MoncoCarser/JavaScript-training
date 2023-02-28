
function continueAfter1Second() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function multiWord(length) {
	console.log(length**2);
  const result = await continueAfter1Second();
}


function wordLength(word) {
	let length = word.length;
	console.log("Word length is: " + length);
	multiWord(length)
}


do {
let word = prompt("Give a word: ")
wordLength(word);
} while 
(prompt("Again?") === "yes");
