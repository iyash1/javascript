console.log("Arrays in JS");

// How to create an array?

// Method I - creating an empty array (not best practice)
var arr = new Array();

// Method II - creating an empty array with size specified (not best practice)
var daysOfWeek = new Array(7);

// Method III - creating an array with elements (not best practice)
var daysOfWeek2 = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
);

// Method IV : creating an Empty array (BEST PRACTICE!!!)
var daysOfWeek3 = [];

// Method V : creating an array with elements (BEST PRACTICE!!!)
var daysOfWeek4 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

// To know the length of the array using the method 'length'
console.log("Length of array = ", daysOfWeek4.length);

// How to add new elements to an array?
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Before push : ", numbers);

// pushing new elements into the array
numbers.push(10, 11);
console.log("After push", numbers);

// adding elements to the start of the array
numbers.unshift(0);
numbers.unshift(-1, -2);
console.log("After unshift op", numbers);

// How to remove elements from an array?
// remove elements at the end of the array
numbers.pop();
console.log("After pop", numbers);

// to remove the element from the start of the array
numbers.shift();
console.log("After shift op", numbers);

// removing defined number of elements from a set position
numbers.splice(5, 3); // remove 3 elements starting from index position 5
console.log("After splice", numbers);

// using the splice method to add elements to array from a set index position
numbers.splice(5, 0, 4, 5, 6);
console.log("After splice add from index position 5 : ", numbers);

// removing and adding elements to the array, simultaneously, using the splice method
numbers.splice(5, 3, 8, 10, 12);
console.log("After splice add/ remove from index position 5 :", numbers);

// array concatentation
var zeroElement = 0;
var positiveNumbers = [1, 2, 3];
var negativeNumbers = [-1, -2, -3];
console.log(
  "Array  Concatenation : ",
  positiveNumbers.concat(zeroElement, negativeNumbers) // no limit for arguments for concatenation
);

// Iterator functions for arrays
const isEven = num => {
  return num % 2 === 0 && num > 0;
};

// iterate through elements of an array until an element in the array returns false
console.log("Iterators - every function : ", numbers.every(isEven));

// iterate through elements of an array until an element in the array returns true
console.log("Iterators - some function : ", numbers.some(isEven));

// iterate through the entire list irrespective of the elements meeting the conditions
console.log("Iterators - map function : ", numbers.map(isEven));
// NOTE :  the map function creates a new array with returned results and then returns the same.
// It does not operate directly on the original array.

// iterate through the entire array and return an array of elements that pass the condition
console.log("Iterators - filter function : ", numbers.filter(isEven));

// iterate though every element in the array and reduce the them using operations through an accumulator
console.log(
  "Iterators - reduce function : ",
  numbers.reduce((previousELement, currentElement, index) => {
    return previousELement + currentElement;
  })
);

const avengers = [
  { name: "Hulk", strength: 50000 },
  { name: "Spider-Man", strength: 40000 },
  { name: "Hawkeye", strength: 5000 },
  { name: "Thor", strength: 80000 },
  { name: "Black Widow", strength: 5000 },
  { name: "Vision", strength: 40000 },
  { name: "Scarlet Witch", strength: 40000 },
  { name: "Mystique", strength: 6000 },
  { name: "Captain America", strength: 20000 },
  { name: "Deadpool", strength: 10000 },
  { name: "Black Panther", strength: 10000 },
  { name: "Iron man", strength: 600000 }
];

// iterate through the array and return the first element that matches the query
console.log(
  "Iterator - find method : ",
  avengers.find(avenger => avenger.name === "Iron man")
);

// iterate over the array elements and join a specified string/character/number to each element and return the amalgamation.
console.log(
  "Iterators - join method : ",
  avengers.map(avenger => avenger.name).join(", ")
);

// Iterates over the array elements and checks if any of the element constains the specified string/character/number
console.log(
  "Iterators - includes method : ",
  avengers.map(avenger => avenger.name).includes("Deadpool")
);

// includes string version - check if a given string has the specified substring
const sampleString = "The quick brown fox jumps over the lazy dog";
console.log(
  "Includes method : Does the sentence 'The quick brown fox jumps over the lazy dog' contain the word 'jumps' ? ",
  sampleString.includes("jumps")
);

// forEach method - executes the given function on every element of the array rather than mere iteration through elements
avengers.forEach(avenger =>
  console.log(`The ${avenger.name} has strength ${avenger.strength}`)
);

// Sorting of an array
// sort method : sorts using the ASCII value of the element or string
const randomArray = [1, 3, 5, 7, 2, 4, 6, 0, 8];
console.log("before sorting : ", randomArray);
console.log("after sorting : ", randomArray.sort()); // ascending order
console.log("custom sorting : ", randomArray.sort((a, b) => b - a)); // sort by custom function; descending order

// reverse a order of the array
console.log("reverse the array : ", randomArray.reverse());

// string representation of an array
console.log("string representation the array : ", randomArray.toString());
