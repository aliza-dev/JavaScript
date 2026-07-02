// FUNCTIONS IN JAVASCRIPT

// ---------- Basic Function ----------
function printName() {
    console.log("A");
    console.log("L");
    console.log("I");
    console.log("Z");
    console.log("A");
}
// printName();
// Output: A L I Z A (each on a new line)


// ---------- Function with Parameters ----------
function addTwoNumbers(num1, num2) {
    return num1 + num2;
    // code after return does not execute
}

const total = addTwoNumbers(4, 6);
console.log("Result: ", total);
// Output: Result: 10


// ---------- Default Parameters ----------
function loginMessage(username = "guest") {
    // if no argument is passed, parameter falls back to default value
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginMessage("aliza"));
// Output: aliza just logged in

console.log(loginMessage());
// Output: guest just logged in


// ---------- Rest Operator ----------
function calculateCartPrice(val1, val2, ...remainingPrices) {
    // remainingPrices collects all extra arguments into an array
    return remainingPrices;
}

console.log(calculateCartPrice(200, 400, 600, 1500));
// Output: [600, 1500]


// ---------- Passing Objects to Functions ----------
const userDetails = {
    username: "aliza tariq",
    price: 250
};

function displayUserInfo(userObj) {
    console.log(`Username is ${userObj.username} and price is ${userObj.price}`);
}

displayUserInfo(userDetails);
// Output: Username is aliza tariq and price is 250

// Objects can also be passed directly without storing them in a variable first
displayUserInfo({
    username: "sana",
    price: 399
});
// Output: Username is sana and price is 399


// ---------- Passing Arrays to Functions ----------
const priceList = [150, 350, 550, 750];

function getSecondItem(arr) {
    return arr[1];
}

console.log(getSecondItem(priceList));
// Output: 350

console.log(getSecondItem([100, 900, 300, 700]));
// Output: 900