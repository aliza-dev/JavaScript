// SCOPE IN JAVASCRIPT (let, const, var)

// Curly braces {} define a "block"
// let and const are block-scoped -> only accessible inside that block
// var is function-scoped / global -> ignores block boundaries

function checkScope() {
    let x = 15;
    const y = 25;
    var z = 35;
}

// console.log(x); // Error -> let is block-scoped, not accessible outside
// console.log(y); // Error -> const is block-scoped, not accessible outside
// console.log(z); // Error -> var is function-scoped, still not accessible outside the function

// Key point: if the same variable name exists both outside and inside a block,
// the inner (block-scoped) variable takes priority within that block


// ---------- Nested Block Scope Example ----------
if (true) {
    const currentUser = "aliza";

    if (currentUser === "aliza") {
        const platform = "youtube";
        console.log(currentUser + platform);
        // Output: alizayoutube
    }

    // console.log(platform); // Error -> platform only exists inside the nested block
}

// console.log(currentUser); // Error -> currentUser only exists inside the outer block


// ---------- Function Scope Example ----------
function outerFunction() {
    const appName = "instagram";

    function innerFunction() {
        const feature = "reels";
        console.log(appName); // inner function can access outer variable (closure)
    }

    // console.log(feature); // Error -> feature is scoped only inside innerFunction

    innerFunction();
}

outerFunction();
// Output: instagram


// FUNCTION DECLARATION TYPES

// ---------- 1) Function Declaration ----------
// Can be called even before its definition, due to hoisting

function incrementByOne(num) {
    return num + 1;
}

console.log(incrementByOne(7));
// Output: 8


// ---------- 2) Function Expression ----------
// Stored in a variable, NOT hoisted -> must be defined before calling

const incrementByTwo = function (num) {
    return num + 2;
};

console.log(incrementByTwo(7));
// Output: 9

// Calling before definition would cause an error, since the variable 
// only gets assigned the function once this line executes

// -------------------------------------- FUNCTION DECLERATION TYPES -------------------------------------

// (no error occur if we call it before the definition)
console.log(addone(5))

function addone(num){
    return num + 1
}


// (hoisting concept) sometimes we called it expression function because we assign it to a variable(eroor occur if we call it before the definition)
addTwo(5)
const addTwo = function(num){
    return num + 2
}