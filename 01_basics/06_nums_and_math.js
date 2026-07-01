 // NUMBERS & MATH IN JAVASCRIPT

const totalPoints = 500;

const walletBalance = new Number(250);
// console.log(walletBalance.toString().length);
// console.log(walletBalance.toFixed(1));

const decimalValue = 456.7823;
// console.log(decimalValue.toPrecision(4)); // limits total significant digits

const bigNumber = 2500000;
// console.log(bigNumber.toLocaleString('en-IN')); // formats number by locale (e.g. Indian numbering system)

// ---------- Math Object ----------
// console.log(Math);
// console.log(Math.abs(-7));      // absolute value
// console.log(Math.round(6.4));   // rounds to nearest integer
// console.log(Math.ceil(6.1));    // rounds up
// console.log(Math.floor(6.9));   // rounds down
// console.log(Math.min(5, 2, 9, 1));
// console.log(Math.max(5, 2, 9, 1));

console.log(Math.random()); // random decimal between 0 and 1

console.log((Math.random() * 10) + 1); // random decimal between 1 and 11

console.log(Math.floor(Math.random() * 10) + 1); // random whole number between 1 and 10

// ---------- Random Number in a Custom Range ----------
const rangeMin = 15;
const rangeMax = 25;

console.log(Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin);