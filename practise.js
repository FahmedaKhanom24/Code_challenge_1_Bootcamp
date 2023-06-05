// let str1='my name is fahmeda'.toLowerCase();
// let str2='My name is Fahmeda'.toLowerCase();


// let localCompareResult = str1.localeCompare(str2);

// let isEqual = localCompareResult === 0;

// console.log(`are two strings equal to each other: ${isEqual}`)

// let sports ='helLO'

// let length = sports
// let lengthlower = length.toLowerCase()
// let split = lengthlower.split()
// let splitindex= split[0].toUpperCase()
// let add= 
// console.log(sportsarray)
// console.log(sportsarrayuppercase)
// // console.log(sportsothers);


// let a ='CAT'

// let b= 'I love CAT. CAT is very cute CAT'

// let result= b.split(a)

// console.log(result)

// let resultLength= result.length
// console.log(resultLength);

// let resultminus1= resultLength-1
// console.log(resultminus1);

// let var1=10;
// console.log(++var1)
// console.log(var1++)
// console.log(var1);

// var1 = var1+1

// var1+=1


// let x= 10
// let y= x++ + --x + x-- + ++x + x++ + x
// console.log(x);
// console.log(y);

/**
 * Convert the given 4-word sentence into Titlecase
 * 
 * 'You liVe OnlY oncE'     ->      'You Live Only Once'
 * 'gooD MorninG to YOu'    ->      'Good Morning To You'
 * 
//  */

// let str1='You liVe OnlY oncE';
// let str1_lowercase= str1.toLowerCase()
// console.log(str1_lowercase);
// console.log(str1_lowercase[0].toUpperCase());
// let str1_lowercase_split = str1_lowercase.split(' , ')
// let length_split_index= str1_lowercase.length-1
// console.log(length_split_index);

// console.log(str1_lowercase_split[1].toUpperCase());

const orginalArray= [1,2,2,3]
const copyorginalarray= [...orginalArray]
console.log(copyorginalarray);

const orginalArray2=[4,5,6,7]

const copyorginalarray2=[...orginalArray,...orginalArray2]
console.log(copyorginalarray2);

const object= {a:1, b:2}

const newobject= {...object, c:3}
console.log(newobject);
