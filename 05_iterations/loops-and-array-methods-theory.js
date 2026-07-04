// LOOPS, MAP, FILTER, REDUCE - QUICK OVERVIEW

// Loops = repeating a task until told to stop
// Useful when you need to do something multiple times

// ---------- for loop ----------
// Best when you already know how many times to repeat
for (let i = 1; i <= 5; i++) {
    console.log("Hi Student", i);
}


// ---------- while loop ----------
// Best when you don't know how many times, just a condition to check
let remainingChai = 3;
while (remainingChai > 0) {
    console.log("Drinking chai...");
    remainingChai--;
}


// ---------- do...while loop ----------
// Runs at least once, then checks the condition
let count = 1;
do {
    console.log("This runs at least once");
    count++;
} while (count <= 3);


// ---------- map() ----------
// Creates a brand new array by transforming every item
const usd = [2, 4, 8];
const pkr = usd.map((amount) => amount * 278);
console.log(pkr);
// Output: [556, 1112, 2224]


// ---------- filter() ----------
// Picks only the items that pass a given condition
const numbersList = [1, 2, 3, 4, 5, 6];
const oddNumbers = numbersList.filter((n) => n % 2 !== 0);
console.log(oddNumbers);
// Output: [1, 3, 5]


// ---------- reduce() ----------
// Combines all items in array into a single final value
const marks = [10, 20, 30, 40];
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
console.log(totalMarks);
// Output: 100


// ---------- Quick Reference ----------
// for      -> use when you know the number of repetitions
// while    -> use when repetitions depend on a condition
// map      -> transforms every item, returns a new array
// filter   -> keeps only matching items, returns a new array
// reduce   -> combines everything into one single value