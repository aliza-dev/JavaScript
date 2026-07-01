// ARRAYS IN JAVASCRIPT

// An array stores multiple values inside a single variable
// Elements are accessed using an index, starting from 0

// Example:
// let subjects = ["math", "physics", "chemistry"];
// subjects[0] -> "math"
// subjects.length -> 3


// ---------- push() ----------
// Adds a new element to the end of the array
// subjects.push("biology");
// console.log(subjects);
// Output: ["math", "physics", "chemistry", "biology"]


// ---------- pop() ----------
// Removes the last element from the array
// subjects.pop();
// console.log(subjects);
// Output: ["math", "physics", "chemistry"]


// ---------- unshift() ----------
// Adds a new element to the beginning of the array
// subjects.unshift("english");
// console.log(subjects);
// Output: ["english", "math", "physics", "chemistry"]


// ---------- shift() ----------
// Removes the first element from the array
// subjects.shift();
// console.log(subjects);
// Output: ["math", "physics", "chemistry"]


// ---------- splice() ----------
// Adds, removes, or replaces elements at a specific position
// Unlike slice(), splice() modifies the original array
// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)

// Remove:
// subjects.splice(1, 1); // removes 1 element starting at index 1
// Output: ["math", "chemistry"]

// Insert without removing:
// subjects.splice(1, 0, "computer science");
// Output: ["math", "computer science", "physics", "chemistry"]

// Replace:
// subjects.splice(1, 1, "statistics");
// Output: ["math", "statistics", "chemistry"]


// ---------- slice() ----------
// Returns a portion of the array without modifying the original
// Syntax: array.slice(startIndex, endIndex)

let cities = ["Lahore", "Karachi", "Islamabad", "Multan"];
let selectedCities = cities.slice(1, 3);

console.log(selectedCities);
// Output: ["Karachi", "Islamabad"]

console.log(cities);
// Output: ["Lahore", "Karachi", "Islamabad", "Multan"] -> original unchanged


// ---------- Merging Arrays ----------
// push() should not be used to merge arrays — it adds the array as one nested element instead of combining elements

const frontendSkills = ["HTML", "CSS", "React"];
const backendSkills = ["Node.js", "Express", "PostgreSQL"];

const mergedUsingConcat = frontendSkills.concat(backendSkills);
// console.log(mergedUsingConcat);
// Output: ["HTML", "CSS", "React", "Node.js", "Express", "PostgreSQL"]

// Spread operator is the modern and preferred approach for merging arrays
const mergedUsingSpread = [...frontendSkills, ...backendSkills];
// console.log(mergedUsingSpread);
// Output: ["HTML", "CSS", "React", "Node.js", "Express", "PostgreSQL"]


// ---------- Flattening Nested Arrays ----------
// flat() converts a multi-level nested array into a single-level array

const nestedData = [10, [20, 30], 40, [50, [60, 70, [80, 90]]]];
const flattenedData = nestedData.flat(Infinity); // Infinity removes all levels of nesting

console.log(flattenedData);
// Output: [10, 20, 30, 40, 50, 60, 70, 80, 90]


// ---------- Array.isArray() ----------
// Checks whether the given value is an array

console.log(Array.isArray("developer"));
// Output: false


// ---------- Array.from() ----------
// Converts a string or an array-like/iterable value into an actual array

console.log(Array.from("developer"));
// Output: ["d", "e", "v", "e", "l", "o", "p", "e", "r"]

// Passing a plain object returns an empty array,
// since JavaScript cannot determine whether to use its keys or values
console.log(Array.from({ country: "Pakistan" }));
// Output: []


// ---------- Array.of() ----------
// Creates a new array directly from the arguments passed to it

let subjectScore1 = 88;
let subjectScore2 = 92;
let subjectScore3 = 79;

console.log(Array.of(subjectScore1, subjectScore2, subjectScore3));
// Output: [88, 92, 79]