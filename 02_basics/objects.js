// OBJECTS IN JAVASCRIPT

// Objects can be created in two ways:
// 1) Object literals -> using {}
// 2) Singleton objects -> using new Object() or Object.create()

const nameSymbol = Symbol("key1");

const userProfile = {
    name: "aliza tariq",
    "full name": "aliza tariq",
    [nameSymbol]: "mykey1",
    age: 21,
    location: "Faisalabad",
    email: "aliza@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// ---------- Accessing values ----------
// Dot notation works for normal keys
// Bracket notation is required for keys with spaces or symbols

console.log(userProfile.email);
// Output: aliza@google.com

console.log(userProfile["email"]);
// Output: aliza@google.com

console.log(userProfile["full name"]);
// Output: aliza tariq

console.log(userProfile[nameSymbol]);
// Output: mykey1


// ---------- Freezing an object ----------
// Object.freeze() locks the object, preventing further changes

userProfile.email = "aliza@chatgpt.com"; // this update goes through
// Object.freeze(userProfile);
userProfile.email = "aliza@microsoft.com"; // after freeze, this line would be ignored

console.log(userProfile.email);
// Output: aliza@microsoft.com


// ---------- Adding functions to an object ----------
// "this" refers to the object the function belongs to

userProfile.greet = function () {
    console.log("Hello JS user");
};

userProfile.greetWithName = function () {
    console.log(`Hello JS user, ${this.name}`);
};

userProfile.greet();
// Output: Hello JS user

userProfile.greetWithName();
// Output: Hello JS user, aliza tariq


// ---------- Singleton vs Non-Singleton Object ----------
// const appUser = new Object();  -> singleton style

const appUser = {}; // non-singleton, most common way
appUser.id = "123abc";
appUser.name = "aliza tariq";
appUser.isLoggedIn = false;

console.log(appUser);
// Output: { id: '123abc', name: 'aliza tariq', isLoggedIn: false }


// ---------- Nested Objects ----------
const accountDetails = {
    email: "some@gmail.com",
    fullname: {
        legalName: {
            firstname: "aliza",
            lastname: "tariq"
        }
    }
};

console.log(accountDetails.fullname.legalName.firstname);
// Output: aliza


// ---------- Merging Objects ----------
const groupA = { 1: "a", 2: "b" };
const groupB = { 3: "a", 4: "b" };
const groupC = { 5: "a", 6: "b" };

// Spread operator is the modern, preferred way to merge objects
const mergedGroups = { ...groupA, ...groupB, ...groupC };
console.log(mergedGroups);
// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Alternative method:
// const mergedGroups = Object.assign({}, groupA, groupB, groupC);


// ---------- Array of Objects ----------
const registeredUsers = [
    { id: 1, email: "a@gmail.com" },
    { id: 2, email: "b@gmail.com" },
    { id: 3, email: "c@gmail.com" }
];

console.log(registeredUsers[1].email);
// Output: b@gmail.com


// ---------- Object.keys / values / entries ----------
// These methods return object data in array form, useful for looping

console.log(Object.keys(appUser));
// Output: ['id', 'name', 'isLoggedIn']

console.log(Object.values(appUser));
// Output: ['123abc', 'aliza tariq', false]

console.log(Object.entries(appUser));
// Output: [['id', '123abc'], ['name', 'aliza tariq'], ['isLoggedIn', false]]


// ---------- hasOwnProperty() ----------
// Checks if a specific property exists in the object

console.log(appUser.hasOwnProperty('isLoggedIn'));
// Output: true


// DESTRUCTURING

// Destructuring lets you pull values out of arrays/objects
// directly into variables, instead of accessing them repeatedly by index or key

// ---------- Array Destructuring ----------
const themeColors = ["red", "blue", "green"];

// Without destructuring:
console.log(themeColors[0]); // red
console.log(themeColors[1]); // blue

// With destructuring:
const [firstColor, secondColor] = themeColors;
console.log(firstColor);  // red
console.log(secondColor); // blue


// ---------- Object Destructuring ----------
const Box = {
    fruit: "apple",
    drink: "juice"
};

// Without destructuring:
// const fruitItem = Box.fruit;
// const drinkItem = Box.drink;

// With destructuring:
const { fruit, drink } = Box;

console.log(fruit); // apple
console.log(drink); // juice


// ---------- Destructuring with Renaming ----------
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "aliza tariq"
};

// Renaming a key while destructuring
const { courseInstructor: instructor } = course;

console.log(instructor);
// Output: aliza tariq


// ---------- JSON-style Structure Example ----------
// Common structure seen in API responses -> array of objects

// {
//     "name": "aliza tariq",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
];