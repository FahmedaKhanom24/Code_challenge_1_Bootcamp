/*Arithmetic Operators:
Write a program that declares two variables num1 and num2, assigns them number values, 
and then calculates and prints the product of num1 and num2.
*/

let num1 = 10;
let num2= 20;
console.log(num1*num2) 

/* Arithmetic Operators:
Write a program that declares a variable radius and assigns it a number value 
representing the radius of a circle. Then, use the exponentiation operator to calculate 
the area of the circle (pi times radius squared). Print the resulting area to the console.
*/

let radius = 4;
let calculate_area = Math.PI * (radius ** 2);
console.log(calculate_area);

/*
Assignment Operators:
Write a program that declares a variable count and assigns it an initial value of 5. 
Then, use the addition assignment operator to add 2 to count. Print the resulting value of count to the console.
*/

let count = 5;
count += 2
console.log(count)


/*Assignment Operators:
Write a program that declares a variable price and assigns it an initial value of 10. Then, 
use the multiplication assignment operator to multiply price by 2.5. Print the resulting value of 
price to the console.
*/

let price = 10;
price *= 2.5;
console.log(price)

/*
Comparison Operators:
Write a program that declares two variables age1 and age2, assigns them number values representing 
the ages of two different people, and then uses the greater than operator to determine if age1 is 
greater than age2. Print the resulting boolean value to the console.
*/

let age1 = 30;
let age2 = 20;
let greater_age= age1 > age2;
console.log(greater_age);


/*Comparison Operators:
Write a program that declares a variable name and assigns it a string value representing a person's name. 
Then, use the not equal to operator to determine if name is not equal to the string "John Doe". Print the 
resulting boolean value to the console.
*/

let name_person = 'Fahmeda'
let name_equal = name_person !== 'John Doe'
console.log(name_equal)


/*
Logical Operators:

Write a program that declares two variables isMember and hasCoupon, assigns them boolean values indicating 
whether or not a customer is a member and whether or not they have a coupon code, and then uses the logical 
OR operator to determine if the customer is eligible for free shipping. Print the resulting boolean value to 
the console.
*/

let isMember = false;
let hasCoupon = true;

console.log(isMember || hasCoupon)

/* Logical Operators:

Write a program that declares a variable num and assigns it a number value. Then, use the logical NOT operator 
to determine if num is not equal to 0. Print the resulting boolean value to the console.

*/

let num = 50;
let not_equal = ! (num === 0)
console.log(not_equal) 



/*
Conditional (Ternary) Operator:
Write a program that declares a variable age and assigns it a number value representing a person's age. 
Then, use the conditional operator to determine if the person is old enough to vote. If the person is old 
enough, print the string "You are old enough to vote" to the console. Otherwise, print the string "You are 
not old enough to vote" to the console.
*/

let age = 15;
let ageVote = age >=18 ? 'You are old enough to vote' : 'You are not old enough to vote';
console.log(ageVote)

/*Conditional (Ternary) Operator:
Write a program that declares a variable price and assigns it a number value representing the price of a product. 
Then, use the conditional operator to determine if the product is on sale. If the product is on sale, print the 
string "The product is on sale" to the console. Otherwise, print the string "The product is not on sale" 
to the console.
*/

let price_product = 20;
let productOnSale = price_product > 30 ? 'The product is on sale' : 'The product is not on sale';
console.log(productOnSale);
