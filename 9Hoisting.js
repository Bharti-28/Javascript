/* Difference between normal functions and arrows functions -
   And why we use arrows functions
*/

/* Reasons are-
   1)Hoisting 
    - Normal functions
    Hoisting is something that we can call to our function before of declaring logic to it. And still it will work.
    Hoisting will copied the whole function and moved it to the top of the call that is why it will execute in js.

    - Arrows functions can not use hoisting
    It will show error. What happen is it is essentially variable which is a function here so js only copy 
    and paste the variable when we call the function and doesnt declare anything else.

   2)this keyword
*/


//Hoisitng example for normal function-

addtocart(); //calling funtion before declaring logic

function addtocart(){
    console.log("Hey its normal function!"); //Declarig function after calling and still it will run
}


//Hoisting example for arrow functions

// const addtocart; //cause it will be variable or constant we cannot call it 

// addtocart();

// const addtocart = () => console.log("Hey its arrow function!");