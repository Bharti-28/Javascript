/* Arrays & Objects
   We have already learnt that how to initialize/create them bu here 
   will learn here how to alter and manipulate them-

   //methods as gateway - essintially this methods are nothing but functions 

   If you have function inside the objects its known as methods.

   So we have methods in arrays and objects, this are inbuilt methods in js-

*/

//methods for arrays

const array1 = [1,2,3,4,5,6];
console.log(array1);

//let suppose we have to add 7 in array

//push method is something that which add/push the value in end of the array

array1.push(7);  //we can add the array in end by push method
console.log(array1);

//In js we dont have fixed arrays, its dynamically by default. Increase the value that array will increase 
//it automaically

//let suppose we have to remove 7 from array

//pop method is something that which remove the value from end of the array

array1.pop(); //this method has no arguments we use push and pop at the same time so we dont have to give 
//specific arguments to it it will easily remove the 7 what we had add using push method
console.log(array1);

//let add 0 in first place in array

//unshift method is something that which will add value in first place of array

array1.unshift(0); //we can add the value in array at the first place using unshift method
console.log(array1);

//let remove 0 from first place in array

//unshift method is something that which will remove value from first place of array

array1.shift(); //we can remove the value from array at the first place using shift method
console.log(array1);

//old way
//let call/print all elements one by one(cause its access each element individually)

//forEach is function that call each elements of the array at the time
array1.forEach((element) => console.log(element));

console.log("-------------------");

//new way
//map is similar like foreach
array1.map((element) => console.log(element));

//In above example both will give same output but the diffrence b/w forEach and map is

//forEach will undefined the output and
const forEachArray = array1.forEach((element) => element + 1)
console.log(forEachArray);

//map will copy the element first and modify it as we will want 
const mapArray = array1.map((element) => element + 1)
console.log(mapArray);

/* the diffrence is forEach doesn't return anything it will directly modify and manipulate only your existing
array, it wont return any array and any value but map will create the copy of the array do updation and
return new copy */

/* If you want to add element in the center of the array you can use forEach and map instead of looping.

*forEach will reduce looping and have control over the code, cause forEach run for each element you dont 
have to provide any condition 

* If you want modify and get in return new value you can use map */

//array.filter() It is exactly opposite of map


//methods of Objects

const student = {  //student is object here
   name: "Bharti", //and name, isGoodStudent are properties of object
   isGoodStudent: false,
};

//to get all keys of the object(name, isGoodStudent)

console.log(Object.keys(student)); //Object is official of object here, keys is function/method here to we have
//pass arguments object which is student now we can see objects properties here in output as an array format

//to get all values of the object
console.log(Object.values(student)); //we will get values of keys here

//to get both(keys and values) 
console.log(Object.entries(student)); //it will give two array- array inside array, it is combinig of both

//another security feature in js is-

//lets freeze some objects that no one can modify it later and it will be secured forever
Object.freeze(student);

student.isGoodStudent = true; //if we try to modify data, we cannot 
console.log(student);

//to check object is frozen or not we do like this
console.log(Object.isFrozen(student)); //its shows output in boolean as we asked it frozen or not


