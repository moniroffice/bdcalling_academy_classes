// Import specific functions
import { add, multiply } from "./math.mjs";

// Import default function
import subtract from "./math.mjs";

console.log("Add:", add(5, 3));         // 8
console.log("Multiply:", multiply(4, 6)); // 24
console.log("Subtract:", subtract(10, 4)); // 6
