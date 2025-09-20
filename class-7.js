/*************************************************
 * 1️⃣ Different Types of Functions
 *************************************************/

// 👉 Named Function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// 👉 Anonymous Function (assigned to a variable)
const farewell = function (name) {
  return `Goodbye, ${name}!`;
};
console.log(farewell("Bob"));

// 👉 Arrow Function
const add = (a, b) => a + b;
console.log("3 + 5 =", add(3, 5));

/*************************************************
 * 2️⃣ Spread and Rest Operators
 *************************************************/

// Spread: expand an array/object
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log("Spread example:", newNums);

// Rest: gather arguments
function sumAll(...values) {
  return values.reduce((acc, n) => acc + n, 0);
}
console.log("Sum using rest:", sumAll(2, 4, 6, 8));

/*************************************************
 * 3️⃣ Callback Function
 *************************************************/
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    const data = { id: 1, title: "JavaScript Basics" };
    callback(data); // run the callback after data is “ready”
  }, 1000);
}

fetchData((result) => {
  console.log("Callback received:", result);
});

/*************************************************
 * 4️⃣ Promise
 *************************************************/
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ id: 2, title: "Promise Resolved!" });
      } else {
        reject("Something went wrong!");
      }
    }, 1000);
  });
}

fetchDataPromise()
  .then((res) => console.log("Promise result:", res))
  .catch((err) => console.error(err));

/*************************************************
 * 5️⃣ Async / Await
 *************************************************/
async function getData() {
  try {
    const data = await fetchDataPromise();
    console.log("Async/Await result:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}
getData();

/*************************************************
 * 6️⃣ require (CommonJS) & import (ESM)
 *************************************************/

// ----- CommonJS (Node.js) -----
// const fs = require("fs"); // uncomment in Node environment
// console.log("Current files:", fs.readdirSync("."));

// ----- ES Module -----
// import path from "path"; // works in .mjs or type:module
// console.log("Base name:", path.basename("/a/b/c.txt"));

/*************************************************
 * Notes:
 * - To run this file: `node functions_and_async.js`
 * - For import/export, make sure your package.json has `"type": "module"`
 *************************************************/
