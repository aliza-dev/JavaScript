// IIFE (Immediately Invoked Function Expression)
// used when we want a function to run right away, the moment it's defined
// common use case: connecting to a database as soon as the app starts

// ---------- Named IIFE ----------
(function connectDB() {
    console.log(`DB CONNECTED`);
})();
// wrap the whole function in () and add () at the end to run it instantly


// ---------- Arrow Function IIFE ----------
// same idea works with arrow functions too, and we can pass arguments directly

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('aliza');