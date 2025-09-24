// 1. Named Function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// 2. Anonymous Function (assigned to a variable)
const farewell = function (name) {
  return `Goodbye, ${name}!`;
};
console.log(farewell("Bob"));

// 3. Arrow Function
const add = (a, b) => a + b;
console.log("Sum:", add(5, 3));

// 4. Function with Default Parameters
function multiply(a, b = 2) {
  return a * b;
}
console.log("Multiply:", multiply(5));

// 5. Function with Rest Operator (...)
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum All:", sumAll(1, 2, 3, 4, 5));

// 6. Function using Spread Operator (...)
const nums = [10, 20, 30];
console.log("Max:", Math.max(...nums));

// 7. Callback Function
function processUserInput(callback) {
  const name = "Charlie";
  callback(name);
}
processUserInput(function (name) {
  console.log("Callback says Hello,", name);
});

// 8. Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) resolve("Data fetched successfully!");
      else reject("Error fetching data!");
    }, 1000);
  });
}

fetchData()
  .then((msg) => console.log("Promise:", msg))
  .catch((err) => console.log("Promise Error:", err));

// 9. Async / Await
async function getData() {
  try {
    const msg = await fetchData();
    console.log("Async/Await:", msg);
  } catch (error) {
    console.log("Async/Await Error:", error);
  }
}
getData();

// 10. require (CommonJS)
const path = require("path");
console.log("Current file base name:", path.basename(__filename));

// 11. import (ESM) 
// 👉 NOTE: To use this, you must set "type": "module" in package.json
// import fs from "fs";
// console.log("Current directory files:", fs.readdirSync("."));
