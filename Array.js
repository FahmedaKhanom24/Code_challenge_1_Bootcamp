/*Assignment
Create an array of student names (Add at least 5 names)
Find the length of an array
Demonstrate the usage of array manipulation on students array by showing example of pop, push, shift, unshift, splice functions
Find out if array includes the value ‘John’
Find index of student ‘Kate’
Reverse your array and print last Index value
Find out if the first index value equals to last index value (Hint: use comparison operator. NOT LOOP )
*/

//Create an array of student names (Add at least 5 names)

let names=['Fahmeda','Touheda','Tasnia','Sumaiya','Nowshin'];

//Find the length of an array

let lengthNames= names.length;                  // 5

console.log(`\n\nLength of the length: ${lengthNames}`);

//Demonstrate the usage of array manipulation on students array by showing example of pop, push, 
//shift, unshift, splice functions
console.log(`\n\nBefore Pop the array is: ${names}`) //Before Pop the array is: Fahmeda,Touheda,Tasnia,Sumaiya,Nowshin
let namesPop= names.pop();  //Nowshin
console.log(`The names pop: ${namesPop}`);
console.log(`After the pop array is : ${names}`);  //After the pop array is : Fahmeda,Touheda,Tasnia,Sumaiya


console.log(`\nBefore Push array is: ${names}`)   //Before Push array is: Fahmeda,Touheda,Tasnia,Sumaiya
let namesPush= names.push('Nowhsin');      //5
console.log(`The length of the array after push: ${namesPush}`);
console.log(`After push array is: ${names}`);   //After push array is: Fahmeda,Touheda,Tasnia,Sumaiya,Nowhsin



let namesShift= names.shift();            //Fahmeda
console.log(`\nThe first value that is removed from the array using shift is : ${namesShift}`);


let namesUnshift= names.unshift('Fahmeda')   //5
console.log(`\nAfter using unshift the length of the array is: ${namesUnshift}`);

let namesSplice= names.splice(2,0,'Naima')
console.log(namesSplice);
console.log(names)  //[ 'Fahmeda', 'Touheda', 'Naima', 'Tasnia', 'Sumaiya', 'Nowhsin']

//Find out if array includes the value ‘John’

let nameIncludes= names.includes('John')     //false
console.log(`\nis names array includes kate: ${nameIncludes}`);


//Find index of student ‘Kate’

let namesAddKate = names.push('Kate')   //6

console.log(`\nAdd Kate in the array and length is: ${namesAddKate}`);

let indexNameKate= names.indexOf('Kate');        //5
console.log(`\n The index number of name Kate is :${indexNameKate}`);   

//Reverse your array and print last Index value


let namesReverse = names.reverse();    // [ 'Kate', 'Nowhsin', 'Sumaiya', 'Tasnia', 'Touheda', 'Fahmeda' ]
console.log(`\nReverse array is: ${namesReverse}`);
let lastIndexNumber = namesReverse.length-1;
let lastIndexValue = namesReverse[lastIndexNumber];  //Fahmeda
console.log(lastIndexValue);

//Find out if the first index value equals to last index value (Hint: use comparison operator. NOT LOOP )

let firstEqualLastValue = namesReverse[0]===namesReverse[lastIndexNumber]
console.log(firstEqualLastValue); //false


