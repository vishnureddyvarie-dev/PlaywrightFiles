// Tuple - Datasctructure just like array
//It will store a fix number of values with specific datatypes in a particular order

// Tuple VS object


let numbers = [10,"Vishnu",30] // JS syntax

let numbers: number[]=[10,20,30] //TS Syntax
numbers.push(60)
console.log(numbers);

//Tuple
let employee : [string,number,boolean]
employee = ['Vishnu',36,true]
console.log(employee);

