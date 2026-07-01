// STRING METHODS IN JAVASCRIPT

// ---------- Template Literals (modern way) ----------
const userName = "aliza";
const repoCount = 50;

// Old way: userName + repoCount + " Value"  -> less readable
// Modern way: template literals using backticks
console.log(`Hello my name is ${userName} and my repo count is ${repoCount}`);

// ---------- String Object (rarely used, prefer literals) ----------
const gameName = new String('aliza-tariq-com');

console.log(gameName.charAt(2));        // character at index 2
console.log(gameName.indexOf('t'));     // first occurrence index of 't'

const shortName = gameName.substring(0, 4); // extracts characters, no negative index support
console.log(shortName);

const slicedName = gameName.slice(-8, 4);   // slice supports negative indexing
console.log(slicedName);

// ---------- Trim ----------
const paddedName = "   aliza    ";
console.log(paddedName);
console.log(paddedName.trim()); // removes whitespace from both ends only

// ---------- Replace & Includes ----------
const url = "https://aliza.com/aliza%20tariq";
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar')); // checks if substring exists

console.log(gameName.split('-')); // splits string into array by separator


// ---------- Practical Example: String Concatenation ----------
let personName = "aliza tariq";
let personAge = 20;

// Old way: string + variable + string  -> less readable, error-prone with types
console.log(personName + personAge + "and i am a girl");

// Modern way: template literal -> cleaner, avoids type coercion issues
console.log(`Hello my name is ${personName} and my age is ${personAge} and i am a girl`);

console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
console.log(personName.charAt(4));
console.log(personName.indexOf('a'));
console.log(personName.substring(0, 4));
console.log(personName.replace("aliza", "aliza-tariq"));


// STRING METHODS - EXAMPLES (Interview Prep)

// ---------- charAt() ----------
let str1 = "JavaScript";
console.log(str1.charAt(4));
// Output: "S"

// ---------- indexOf() ----------
let str2 = "JavaScript";
console.log(str2.indexOf("S"));
// Output: 4

// ---------- lastIndexOf() ----------
let str3 = "hello world hello";
console.log(str3.lastIndexOf("hello"));
// Output: 12

// ---------- includes() ----------
let str4 = "JavaScript";
console.log(str4.includes("Script"));
// Output: true

// ---------- slice() ----------
let str5 = "JavaScript";
console.log(str5.slice(0, 4));
// Output: "Java"

// ---------- substring() ----------
let str6 = "JavaScript";
console.log(str6.substring(4, 10));
// Output: "Script"

// ---------- trim() ----------
let str7 = "   Hello World!   ";
console.log(str7.trim());
// Output: "Hello World!"

// ---------- trimStart() / trimEnd() ----------
let str8 = "   Hello   ";
console.log(str8.trimStart());
// Output: "Hello   "
console.log(str8.trimEnd());
// Output: "   Hello"

// ---------- toUpperCase() / toLowerCase() ----------
let str9 = "Aliza";
console.log(str9.toUpperCase());
// Output: "ALIZA"
console.log(str9.toLowerCase());
// Output: "aliza"

// ---------- replace() ----------
let str10 = "I love Java";
console.log(str10.replace("Java", "JavaScript"));
// Output: "I love JavaScript"

// ---------- replaceAll() ----------
let str11 = "cat bat cat";
console.log(str11.replaceAll("cat", "dog"));
// Output: "dog bat dog"

// ---------- split() ----------
console.log("A B C".split(" "));
// Output: ["A", "B", "C"]
console.log("A,B,C".split(","));
// Output: ["A", "B", "C"]
console.log("ABC".split(""));
// Output: ["A", "B", "C"]

// ---------- concat() ----------
let str12 = "Hello";
let str13 = "World";
console.log(str12.concat(" ", str13));
// Output: "Hello World"

// ---------- repeat() ----------
let str14 = "ha";
console.log(str14.repeat(3));
// Output: "hahaha"

// ---------- startsWith() / endsWith() ----------
let str15 = "JavaScript";
console.log(str15.startsWith("Java"));
// Output: true
console.log(str15.endsWith("Script"));
// Output: true

// ---------- padStart() / padEnd() ----------
let str16 = "5";
console.log(str16.padStart(3, "0"));
// Output: "005"
console.log(str16.padEnd(3, "0"));
// Output: "500"

// ---------- length ----------
let str17 = "JavaScript";
console.log(str17.length);
// Output: 10