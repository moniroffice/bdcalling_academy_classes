// -------------------------------
// JavaScript Basics
// Statements | Comments | Variables | For Loop
// -------------------------------

// 1. Statements
// Each line that does something is a statement.
console.log("This is a statement.");
console.log("Another statement here.");

// 2. Comments
// Single-line comment: ignored by JavaScript
/* 
   Multi-line comment:
   You can write explanations here.
*/

// 3. Variables
// let → value can be reassigned
let name = "Rahim";
console.log("Name:", name);
name = "Karim"; // updated value
console.log("Updated Name:", name);

// const → cannot be reassigned
const age = 20;
console.log("Age:", age);

// var → old way, avoid in modern code
var country = "Bangladesh";
console.log("Country:", country);

// 4. For Loop
// Syntax: for(initialization; condition; increment) { ... }
console.log("For loop example:");
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// Another example: print items from an array
let fruits = ["Apple", "Banana", "Mango"];
console.log("Fruits list:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// -------------------------------
// End of basics
// -------------------------------
