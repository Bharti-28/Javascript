/* Array 
   Array is non-primitive data type which store same data types in contigeous memory location.  
   Creates value 1 to 100 or we have big data to store then we use arrays.
*/

var num = [1,2,3,4,5,6,100] //we can store value in one var Arrays Declaration

/* Array Index
   To access array we have to know their index value. We use index to indentify arrays.
   Array is always starts from 0.
*/

console.log(num[3]); //Array Access 

/* In array we can put differents data types in one array and in javascript only
*/
var num = [1,2,3,4,5,6,100, "string"]



/* Objects
   Objects are use to define real world data or objects.
   Object is like group. Inside group it has so many values.
*/

var obj = {
    name: "bharti"
}

var student = {
    name: "bharti",
    id: 123,
    class: "s1",
    section: "A",
    grade: "3rd"
};

/* How to access objects
   objects access by directly its name or its obj values with . dot
*/

console.log(student.name); //objects access
console.log(student.id);
console.log(student);

/*If you want multiple students data then you can combine array with objects.
*/

var classA = [{ //declaration of multiple objects using array
    name: "bharti", //key: value
    id: 123,
    class: "s1",
    section: "A",
    tests: ["pass", "fail"], //we can have array also inside object and diff. types of data 
    grade: "3rd"
},
{
    name: "bharti2",
    id: 123,
    class: "s1",
    section: "A",
    grade: "3rd"
}, 
{
    name: "bharti3",
    id: 123,
    class: "s1",
    section: "A",
    grade: "3rd"
},
{
    name: "bharti4",
    id: 123,
    class: "s1",
    section: "A",
    grade: "3rd"
}];

console.log(classA); //Objects access
