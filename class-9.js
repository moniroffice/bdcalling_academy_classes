/***********************
 JavaScript "this" Keyword
***********************/

// 1. this in Global Context
// In a browser, "this" refers to the window object
console.log("Global this:", this);  

// 2. this in a Regular Function
function showThis() {
  console.log("Regular Function this:", this);
}
showThis(); // In strict mode: undefined, otherwise window/global

// 3. this in an Object Method
const person = {
  name: "Alice",
  greet: function() {
    console.log("Object Method this:", this.name);
  }
};
person.greet(); // "Alice"

// 4. this Alone
// In strict mode, "this" = undefined. 
// Without strict mode, "this" = window (in browser).
"use strict";
console.log("this alone (strict mode):", this);

// 5. this in a Function (Strict Mode)
function testThis() {
  console.log("Strict Function this:", this);
}
testThis(); // undefined in strict mode

// 6. this in an Event Handler (Browser Only)
/*
<button onclick="this.style.backgroundColor='red'">Click Me</button>
*/
// In this case, "this" refers to the HTML element itself.

// 7. this in Arrow Functions
// Arrow functions do NOT bind their own "this"
// They inherit from the parent scope
const arrowExample = {
  name: "Bob",
  regular: function() {
    console.log("Regular function this:", this.name);
  },
  arrow: () => {
    console.log("Arrow function this:", this.name);
  }
};
arrowExample.regular(); // "Bob"
arrowExample.arrow();   // undefined (or window.name in browser)

// 8. this with call(), apply(), bind()
function fullName(city, country) {
  console.log(this.firstName + " " + this.lastName + " from " + city + ", " + country);
}

const person1 = { firstName: "John", lastName: "Doe" };

fullName.call(person1, "Dhaka", "Bangladesh"); // call
fullName.apply(person1, ["New York", "USA"]);  // apply

const boundFunc = fullName.bind(person1, "London", "UK");
boundFunc(); // bind
