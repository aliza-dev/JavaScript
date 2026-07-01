// DATES IN JAVASCRIPT

let currentDate = new Date();

console.log(currentDate.toString());
// JS provides multiple methods to display date in different formats

console.log(currentDate.toDateString());     // e.g. Fri Jun 27 2025
console.log(currentDate.toLocaleString());   // e.g. 6/27/2025, 5:22:59 PM

// console.log(typeof currentDate);
// Date returns "object" as its data type

// ---------- Creating a Custom Date ----------
// let customDate = new Date(2023, 0, 23)              // year, month (0-indexed), day
// let customDate = new Date(2023, 0, 23, 5, 3)        // year, month, day, hour, minute
// let customDate = new Date("2023-01-14")             // ISO format
let customDate = new Date("01-14-2023");               // US format (MM-DD-YYYY)

// console.log(customDate.toLocaleString());
// Output format can be customized based on how we want to display it

// ---------- Timestamp ----------
// A timestamp shows how much time has passed since Jan 1, 1970 (UNIX Epoch)
// Measured in milliseconds (1 second = 1000 milliseconds)

let currentTimestamp = Date.now();
// console.log(currentTimestamp);
// Output: 1720110900000 (example)

// To get the timestamp of a specific date:
// console.log(customDate.getTime());

// For value in seconds instead of milliseconds:
// console.log(Math.floor(Date.now() / 1000));
// Math.floor -> removes decimal points from the result

// ---------- Extracting Date Parts ----------
let today = new Date();

console.log(today);
console.log(today.getMonth() + 1); // months are zero-indexed, so +1 gives the correct month
console.log(today.getDay());       // returns day of week as a number (0 = Sunday)

// ---------- Formatting with Options ----------
today.toLocaleString('default', {
    weekday: "long",
});
// toLocaleString accepts an options object to customize output format
// e.g. weekday: "long" gives full day name instead of a number