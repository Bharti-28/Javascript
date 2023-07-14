/* this - it is keyword
It has purpose of showing the current executing objects 
If you on browser - it will access windnow

If you on pc/system/nodejs - give {} empty
 */

// console.log(this);    
/* this keyword here wil show windows properties which are related to browser
but if i run this in pc and put the node index command in terminal it will show {} empty cause what is 
happening here its reffering Current Executing Object (which object is currently running) that will be 
access by this keyword.
for now we dont have any logic here that is why this keyword will shows properties of windows browser, 
cause current running object in browser is windows, thats why its accessed window.
*/

//this example for normal function

// const thisExample = {  //here thisExample is current object thats why this keyword will show this objects 
// //properties only
//     name: "bharti",
//     getThis: function(){
//         console.log(this);
//     },
// };

// thisExample.getThis();

//this example for arrow function
/* Inside the- window it will show only window properties if we worked with arrow function cause arrow 
function by default only access/referes its parents properties which is window here.
And 
Inside the-  pc/system/nodejs it will show empty object/ no object
So whenever you use arrow function with this keyword it wont refer current object instead it refer parents
object */

const thisExample = {
    name: "bharti",
    getThis: () => {
      console.log(this);  
    },
};

thisExample.getThis();



