// Get a reference to the button element
const button = document.querySelector('#myButton');

// Add an event listener to the button
button.addEventListener('click', () => {
  // Get a reference to the input element
  const input = document.querySelector('#myInput');

  // Get the value of the input element
  const inputValue = input.value;

  // Create a new paragraph element
  const newParagraph = document.createElement('p');

  // Set the text content of the new paragraph element
  newParagraph.textContent = inputValue;

  // Append the new paragraph element to the document body
  document.body.appendChild(newParagraph);
});




function getUserData(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(userData => {
      return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(posts => {
          userData.posts = posts;
          return userData;
        });
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
}

async function displayUserData(userId) {
  try {
    const userData = await getUserData(userId);
    console.log(userData);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
displayUserData(1);

//Nuclear countdown

const makeNuclearButton = () => {
  let timeWithoutDestruction = 0
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return "BOOM";
  }
  setInterval(passTime, 1000)
  return {
    launch: launch,
    totalPeaceTime: totalPeaceTime
  }
}

const oops = makeNuclearButton();


// Closures 2 exercise - modify the function so it can only be called once

const masterView = () => {
let called = false;
const initialize = () => {
  view = "🏔";
  if (called) return; 
    called = true;
    return console.log("View has been set");
}
return {
  onlyOnce: initialize
}
}
const setView = masterView();
//  now above can only be called once, but the way of calling is not as intended by the exercise

initialize();
initialize();
initialize();
console.log(view)


// ANSWER
let view;
function initialize() {
  let called = 0;
  return function() {
    if (called > 0) {
      return;
    } else {
      view = "🏔";
      called++;
      console.log("View has been set");
    }
  }
}
const startOnce = initialize();
startOnce();
console.log(view)



// Closures exercise 3 - fix the function to work in 3s intervals as intended

const array = [1,2,3,4];
for (var i=0; i < array.length; i++) {
  setTimeout(function(){
    console.log("I am at index " + i)
  }, 3000)
}


// Prototypal Inheritance exercise

new Date("1900-10-10").lastYear()
// would provide 1899

// Modify .map() to print smiley face at the end of each item

console.log([1,2,3].map(item => item + "🗺️"));

// 1Smiley , 2Smiley, 3Smiley