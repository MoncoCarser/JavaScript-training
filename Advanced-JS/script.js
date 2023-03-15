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
