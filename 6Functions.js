/* Functions
   Functions are block of code which perform specific task, it is reausable, helps to make work fast using it 
   again and again also To resuse our logic and give the meaningful name to the function, its ensure to code 
   readable and manageable
 */

var items = {
    food: 2000,
    cooldrinks: 3000,
};

var cart = 0;

// cart += cart+items.food;        //Instead of this we will use function
// cart += cart+items.cooldrinks;

function addTocart(item){      //Declaration and define of function
    cart += item;
}

/* parameters -> while declaring the function and depends on which data types you giving
   in javascript we do not have to give its datatypes in parameters, Its not compulsory like other langs
   You can use any nos of parameters there is not limit
*/

/* arguments -> value given at the moment of function call
   while passing arguments we have to ensure that if its string then parameter should also have to be string
   value, if its char as same, if float as same, if boolean, if arrays so on...
*/

addTocart(items.food)
addTocart(items.cooldrinks);   //Calling function

console.log("cart: ", cart);   //print function 