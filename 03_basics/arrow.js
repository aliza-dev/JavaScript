// THIS KEYWORD & ARROW FUNCTIONS

// arrow function referes current context 
// "window" is like the main object in a browser. Everything lives inside it.

const user = {
    username: "aliza",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // "this" means whoever is calling the function, its value can change
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()         // now it will show "sam" because the object changed
// console.log(this);      // this will show empty brackets because there is no global context here
// but if we check in a real browser console, it will show window object properties instead

// _________________ARROW FUNCTION ________________
function chai(){
    let username = "aliza"
    console.log(this);           // "this" inside a normal function brings a lot of extra stuff from the node environment
     console.log(this.username);   // this will show undefined         
}
chai()
// we cannot use "this" the normal way inside a simple function like this

// this is a simple function, if we remove the word "function" and add an arrow, it becomes an arrow function
// const chai = function () {
//     let username = "aliza"
//     console.log(this.username);
// }
const chai =  () => {
    let username = "aliza"
    console.log(this);
}
chai()

const add  =(num1 , num2) =>{
    return num1 + num2
}
console.log(add(4 , 5))

// Explicit return  => when we write the word "return"
// Implicit return  => when we skip the word "return"
// if we use curly braces in an arrow function, we must write "return"
// if we don't use curly braces, we don't need "return" either, just parentheses work

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "aliza"})   // the object will only work if we use parentheses along with curly braces
console.log(addTwo(3, 4))