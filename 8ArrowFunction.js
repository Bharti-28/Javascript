/* ES6 ->
   Arrow Function
   It is new function of ES6 to declare variables or const as function.
   Arrow function is new way to declare variables as functions.
 */
 
var items = {
    food: 2000,
    cooldrinks: 3000,
};

var cart = 0;

//If you have multi lines of logic you have to use like this syntax of curly brackets -
// const addCartvalue = (item) => { //Declaration of Arrow Function
//     //we have take const that we dont want anyone accidentally take our value
//     return cart + item;  
// }

//We can also write arrow function like this -
const addCartvalue = (item) => cart + item;  

// const addTocart = (item) => {
//     cart = addCartvalue(item); 
// }

//It is simple as easy way to write -
const addTocart = (item) => cart = addCartvalue(item); 

addTocart(items.food);
addTocart(items.cooldrinks);

console.log("cart: ", cart);