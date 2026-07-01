// Stack vs Heap Memory in JavaScript

// Stack: primitives, fixed size, LIFO, fast, copied by value
// Heap: objects/arrays/functions, dynamic size, copied by reference

// ---------- Stack Example ----------
let myYoutubeName = "aliza-dev";
let anotherName = myYoutubeName;
anotherName = "aliza-tariq";

console.log(myYoutubeName); // "aliza-dev" -> unaffected, copied by value
console.log(anotherName);   // "aliza-tariq"

// ---------- Heap Example ----------
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = userOne; // same reference, not a new object
userTwo.email = "aliza@google.com";

console.log(userOne.email); // "aliza@google.com" -> both point to same object
console.log(userTwo.email); // "aliza@google.com"

// Primitives -> independent copies
// Objects -> shared reference