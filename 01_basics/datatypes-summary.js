// JavaScript has two categories of data types: Primitive and Non-Primitive (Reference)

// ---------- Primitive Data Types ----------
// Stored by value, immutable, held in stack memory

const totalScore = 100;
const averageScore = 100.3;
const isUserLoggedIn = false;
const currentTemperature = null;
let contactEmail;

// Symbols are always unique, even with identical descriptions
const primaryId = Symbol('123');
const secondaryId = Symbol('123');
console.log(primaryId === secondaryId); // false

// BigInt supports numbers beyond the safe integer limit
// const largeNumber = 3456543576654356754n;

// ---------- Non-Primitive (Reference) Data Types ----------
// Stored by reference, held in heap memory

const comicCharacters = ["spiderman", "batman", "superman"];

let userProfile = {
    name: "Aliza Tariq",
    age: 21,
};

const greetUser = function () {
    console.log("Hello world");
};

// ---------- typeof Behavior ----------
// null returns "object" due to a legacy JavaScript bug
console.log(typeof secondaryId); // "symbol"

// ---------- Value vs Reference Behavior ----------

let a = 10;
let b = a;
b = 20;
console.log(a); // 10 — primitives copy independently

let obj1 = { name: "Aliza" };
let obj2 = obj1;
obj2.name = "Sana";
console.log(obj1.name); // "Sana" — objects share the same memory reference

// ------- typeof Operator Results -------

// 1) Primitive Types:
//    Number     ->  "number"
//    String     ->  "string"
//    Boolean    ->  "boolean"
//    Null       ->  "object"    
//    Undefined  ->  "undefined"
//    Symbol     ->  "symbol"
//    BigInt     ->  "bigint"

// 2) Non-Primitive Types:
//    Array      ->  "object"
//    Function   ->  "function"
//    Object     ->  "object"