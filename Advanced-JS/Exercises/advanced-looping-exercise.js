const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  if ( arr.length === 0) {
    return 0;
  }
  let filteredArray = arr.filter(Number.isInteger);
  return Math.max.apply(null, filteredArray);
   //   console.log(filteredArray);  
}

function biggestNumberInArray2(arr) {
  if ( arr.length === 0) {
    return 0;
  }
  let filteredArray = arr.filter(Number.isInteger);
  filteredArray.sort((a,b) => b - a);
  console.log(filteredArray[0]);  
}

function biggestNumberInArray3(arr) {
    if ( arr.length === 0) {
    return 0;
  }
  let filteredArray = arr.filter(Number.isInteger);

  var largest = 0;

  for (i=0; i<filteredArray.length; i++){
      if (filteredArray[i]>largest) {
          largest=filteredArray[i];
      }
    }
  console.log(largest);
}



// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (basket[item] === lookingFor) {
      return "Item is on the list";
    } else {
      return "Nope, not on the list."
    }
  }
}
