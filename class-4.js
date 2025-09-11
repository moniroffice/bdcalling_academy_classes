// -------------------------------
// JavaScript Basics
// Arrays | Functions | Conditional Statements
// -------------------------------

// 1. Arrays
let fruits = ["Apple", "Banana", "Mango"];

console.log("First fruit:", fruits[0]);       // Apple
console.log("Number of fruits:", fruits.length); // 3

// Looping through an array
console.log("All fruits:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Adding a new item
fruits.push("Orange");
console.log("After adding:", fruits);

// Removing last item
fruits.pop();
console.log("After removing:", fruits);


// 2. Functions
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Rahim");
greet("Karim");

// Function with return value
function add(a, b) {
  return a + b;
}

let result = add(5, 10);
console.log("Sum:", result);


// 3. Conditional Statements
let age = 18;

// if statement
if (age >= 18) {
  console.log("You are an adult.");
}

// if-else statement
if (age < 18) {
  console.log("You are a minor.");
} else {
  console.log("You are an adult.");
}

// if-else if-else statement
let score = 75;
if (score >= 80) {
  console.log("Grade: A");
} else if (score >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}

// -------------------------------
// End of Basics
// -------------------------------
