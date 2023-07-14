/* Return Statement 
   Its return the value to the function and we can use it multiple function or function to function
*/

var items = {
    food: 2000,
    cooldrinks: 3000,
};

var cart = 0;

function addCartvalue(){
    return cart + item;  // you can easily return the result using return statement or keyword
}

function addTocart(){
    cart = addCartvalue(item); //calling function to function
}

addTocart(items.food);
addTocart(items.cooldrinks);

console.log("cart: ", cart);