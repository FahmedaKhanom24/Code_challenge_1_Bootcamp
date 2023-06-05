
// Declare a new string variable with name coder and set value to 'I am a good programmer'

let coder = 'I am a good programmer';

// Find out the type of the variable coder
console.log(`The type of the variable coder is ${typeof coder}`)

//OUTPUT : The type of the variable coder is string


// Find out the length of the variable coder

console.log(`The length of the variable code is ${coder.length}`)

//OUTPUT: The length of the variable code is 22

//Convert to all uppercase

console.log(`Convert sentence to UpperCase: ${coder.toUpperCase()}`)

//OUTPUT: Convert sentence to UpperCase: I AM A GOOD PROGRAMMER

//Convert to all lowercase

console.log(`Convert sentence to LowerCase: ${coder.toLowerCase()}`)

//OUTPUT: Convert sentence to LowerCase: i am a good programmer

//Find out if it includes the word ‘good’

console.log(`The sentence includes good: ${coder.includes('good')}`);

//OUTPUT: The sentence includes good: true

//Strip out the word  ‘programmer’ from variable

console.log(`Strip out the word programmer from variable coder : ${coder.replace('programmer','')} `)
//OUTPUT: Strip out the word programmer from variable coder : I am a good

//Find out if variables ends with the word `programmer`

console.log(`Variable ends with the word programmer: ${coder.endsWith('programmer')}`)
//OUTPUT: Variable ends with the word programmer: true

//Split the variable into two variable at `good` word
console.log(`Split the variable into two variable at good word: ${coder.split('good')}`)

//OUTPUT: Split the variable into two variable at good word: I am a , programmer


let name = 'Fahmeda is stupid'; 

console.log(name.replace(/Fahmeda/g, 'Touheda'));


let str1="Fahmeda"; 
let str2='Fahmedadjkghssglksj';
let str3=' student';
console.log(str1.length);
let padstring = (str1.padStart(20,'*'));
console.log(padstring.padEnd(50,'*'))

console.log(str1.split('Fa','hmeda'));