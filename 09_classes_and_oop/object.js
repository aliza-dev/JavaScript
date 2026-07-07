function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


/*

JavaScript  (Everything is an Object)

In JavaScript, almost everything is fundamentally an object.
Strings and arrays are primitive-like in usage, but all the properties and methods available on objects are also accessible on strings and arrays (via their wrapper objects).
A function is special — it is both a function and an object at the same time. Functions can have properties, be assigned to variables, and be passed around like any other object.
JavaScript keeps taking everything "up the chain" — meaning every object eventually traces back through the prototype chain.
At the very top of this chain, the reference you get is null.
This means the prototype of the base Object is null — it's the end of the chain, with nothing above it.

Classes and Constructor Functions

JavaScript classes do not directly create objects through a constructor function in the traditional sense.
Instead, JavaScript uses the new keyword to invoke the constructor function and create the object.
The new keyword is what actually triggers object creation — the class syntax is just a cleaner wrapper around this constructor function + new keyword mechanism.

*/