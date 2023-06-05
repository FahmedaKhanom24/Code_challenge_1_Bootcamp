/**
 * Write a function that takes in two arrays of numbers and returns a new array containing all the elements 
 * of both arrays
 */

function Arrays(array1, array2){
    const twoArrays =[...array1, ...array2]
    return(twoArrays);
}

const printArrays = Arrays([1,2,3,4],[5,6,7,8])
console.log(printArrays);

/**
 * Write a function that takes in an array of strings and a string to add to the beginning of the array,
 *  and returns a new array with the string added to the beginning.
 */

function arraysOfStrings(orginalArray, string ){
    const newArray=[string, ...orginalArray]
    return(newArray);
}

const printArrayOfStrings = arraysOfStrings(['banana','apple','cheery'],'mango')
console.log(printArrayOfStrings);



/**
 * Write a function that takes in an object and a key-value pair to add to the object, 
 * and returns a new object with the key-value pair added.
 */

function Object(originalObject){
    const newObject = {...originalObject, occupation: 'Software Engineer', salary: 80000, yrsOfExperience: 5}
    return newObject
}


console.log(Object({name:'john', age:30}));

/**
 * Write a function that takes in an array of numbers and returns the largest number in the array.
 */

function largestNumber(numbersArray) {
    let largestNumber = numbersArray[0];
    
    for (let i = 1; i < numbersArray.length; i++) {
      if (numbersArray[i] > largestNumber) {
        largestNumber = numbersArray[i];
      }
    }
    
    return largestNumber;
  }

  const numbersArray=[4,8,1,6,9,2,20]

  const largestNumberIs= largestNumber(numbersArray)
  console.log(largestNumberIs);


/**
 * Write a function that takes in an array of strings and returns a new array 
 * containing all the strings in alphabetical order.
 */

function stringAlphabeticalOrger(strings) {
    return strings.sort()
}

const originalArray=['banana','apple','cherry']

console.log(stringAlphabeticalOrger(originalArray))