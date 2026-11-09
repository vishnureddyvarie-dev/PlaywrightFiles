//splice - Mutate Method - add, remove, replace elements in an array
let fruits10 = ['Apple', 'Banana', 'Mango', 'Orange']   
fruits10.splice(1, 2) // removes 2 elements from index 1 and adds 'Grapes' and 'Pineapple'
console.log(fruits10) // ['Apple', 'Grapes', 'Pineapple', 'Orange']

fruits10.splice(1, 0, 'Grapes', 'Pineapple') // removes 2 elements from index 1 and adds 'Grapes' and 'Pineapple'
console.log(fruits10) // ['Apple', 'Grapes', 'Pineapple', 'Orange']

// Map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.
let numbers = [1, 2, 3, 4, 5]    
let doubledNumbers = numbers.map((num) => num * 2)
console.log(doubledNumbers) // [2, 4, 6, 8, 10] 

// Filter() - Creates a new array with all elements that pass the test implemented by the provided function.
let numbers1 = [1, 2, 3, 4, 5]    
let evenNumbers = numbers1.filter((num) => num % 2 === 0)
console.log(evenNumbers) // [2, 4]              

// Reduce() - Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let numbers2 = [1, 2, 3, 4, 5]    
let sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum) // 15

//search Methods
//find() - Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
let numbers3 = [1, 2, 3, 4, 5]
let foundNumber = numbers3.find((num) => num > 3)
console.log(foundNumber) // 4

//findIndex() - Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
let numbers4 = [1, 2, 3, 4, 5]
let foundIndex = numbers4.findIndex((num) => num > 3)
console.log(foundIndex) // 3

//findLast() - Returns the value of the last element in the array that satisfies the provided testing function. Otherwise undefined is returned.
let numbers5 = [1, 2, 3, 4, 5]
let foundLastNumber = numbers5.findLast((num) => num < 4)
console.log(foundLastNumber) // 3   

//findLastIndex() - Returns the index of the last element in the array that satisfies the provided testing function. Otherwise -1 is returned.
let numbers6 = [1, 2, 3, 4, 5]
let foundLastIndex = numbers6.findLastIndex((num) => num < 4)
console.log(foundLastIndex) // 2


//indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let numbers7 = [1, 2, 3, 4, 5]
let index = numbers7.indexOf(3)
console.log(index) // 2     

//lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
let numbers8 = [1, 2, 3, 4, 5, 3]
let lastIndex = numbers8.lastIndexOf(3)
console.log(lastIndex) // 5






