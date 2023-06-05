/*
Loops Code Challenge:
You have been hired by a company that sells products online. They want you to create a javascript program 
that will help them manage their inventory. The program should be able to loop through an array of products 
and perform certain tasks based on the product information.
*/

/*

Create an array of products with at 
least 5 products. Each product should 
have the following properties:

Name

Price

Quantity
*/

const products=[
    {name:'Product A', price:10, quantity:5},
    {name:'Product B', price:20, quantity:3},
    {name:'Product C', price:15, quantity:7},
    {name:'Product D', price:25, quantity:2},
    {name:'Product E', price:30, quantity:4}

];

//2. Loop through the array using a for loop and print out the name and price of each product.

for(i=0; i<products.length; i++){
    let product = products[i];
    
    console.log(`${product.name} : ${product.price}`)
}

//3. Use a while loop to find the product with the lowest price. Print out the name and price of the product.

let i_1 = 0;
let lowestProduct = products[i_1];


while (i_1 < products.length) {
    if (products[i_1].price < lowestProduct.price) {
        lowestProduct = products[i_1];
      
    }
    i_1++;
}
console.log(`\n${lowestProduct.name} is the cheapest at $${lowestProduct.price}`);

  

  
// Use a for of loop to calculate the total value of all products in the array.

let totalValue= 0;

for (let product of products){
    let Price_Quantity = product.price * product.quantity;

    totalValue += Price_Quantity
}

console.log(`\nTotal value of all products in the arraytotalValue: ${totalValue}`);

/*

 Use a for in loop to print out all the properties of each product in the array.

Example Output:

Name: Product A
Price: $10
Quantity: 4

Name: Product B
Price: $20
Quantity: 3

Name: Product C
Price: $15
Quantity: 7

Name: Product D
Price: $25
Quantity: 2

Name: Product E
Price: $30
Quantity: 4

*/

for (let key in products){
    console.log('Name : '+ products[key].name)
    console.log('Price : '+ products[key].price);
    console.log('Quantity : '+products[key].quantity);
    console.log("");
}

/*
FizzBuzz
Create a program that prints the numbers from 1 to 100, but replaces multiples of 3 with "Fizz", 
multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz".
*/

for(let i=1; i<=100;i++){
    if (i%3===0 && i%5===0){
        console.log('FizzBuzz');
    }

    else if (i%3===0){
        console.log('Fizz');
    }

    else if (i%5===0){
        console.log('Buzz');
    }
    
    else {
        console.log(i);
    }
}