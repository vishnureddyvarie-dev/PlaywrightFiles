// Arrays - is a ariable which will store multiple values in a single variable. It is a data structure that can hold a collection of items, which can be of different types such as numbers, strings, or even other arrays. Arrays are commonly used in programming to manage and manipulate lists of data efficiently.
// Syntax: let arrayName = [item1, item2, item3, ...];

let fruits = ['Apple', 'Banana', 'Mango', 'Orange']
let numbers = [1, 2, 3, 4, 5];

// Heterogeneous Array: An array that can hold elements of different data types.
let personalDetails = ['Hello', 42, true, { name: 'John' }, [1, 2, 3]]

// To check the Data type of an array, we can use the Array.isArray() method. This method returns true if the given value is an array, and false otherwise.
console.log(typeof(fruits))

//Accessing Array Elements: We can access individual elements of an array using their index. The index of the first element is 0, the second element is 1, and so on.
console.log(fruits[1])

//To find the length of an array, we can use the length property. This property returns the number of elements in the array.
console.log(fruits.length)

//Index of the Last Index: We can find the index of the last element in an array by subtracting 1 from the length of the array. The last index is always equal to the length of the array minus 1.
console.log(fruits[fruits.length - 1])

// Last second index: We can find the second last index of an array by subtracting 2 from the length of the array. The second last index is always equal to the length of the array minus 2.
console.log(fruits[fruits.length - 2])

let cars = ['BMW', 'Audi', 'Mercedes', 'Toyota', 'Honda'] 
console.log(cars)
// Modifying Array Elements: We can modify the elements of an array by accessing them using their index and assigning a new value to that index.
cars[2] = 'Lamborghini'
console.log(cars)


//Predefined Methonds
//Mutates Methnods - Modify original array Directly
//1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
let fruits1 = ['Apple', 'Banana', 'Mango']
fruits1.push('Orange', 'Grapes', 'Pineapple')
console.log(fruits1)


//2. pop() - Removes the last element from an array and returns that element. This method changes the length of the array.
let fruits2 = ['Apple', 'Banana', 'Mango', 'Orange']
let removedFruit = fruits2.pop()
console.log(fruits2)
console.log(removedFruit)

//3.Shift() - Removes the first element from an array and returns that removed element. This method changes the length of the array.
let fruits3 = ['Apple', 'Banana', 'Mango', 'Orange']
let removedFruit1 = fruits3.shift()
console.log(fruits3)
console.log(removedFruit1)

//4. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
let fruits4 = ['Apple', 'Banana', 'Mango', 'Orange']
let newLength = fruits4.unshift('Grapes', 'Pineapple')
console.log(fruits4)
console.log(newLength)

//5.Includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let fruits5 = ['Apple', 'Banana', 'Mango', 'Orange']
console.log(fruits5.includes('Banana')) // true
console.log(fruits5.includes('Grapes')) // false


//6. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let fruits6 = ['Apple', 'Banana', 'Mango', 'Orange']
console.log(fruits6.indexOf('Mango')) // 2
console.log(fruits6.indexOf('Grapes')) // -1


//7.Slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
let fruits7 = ['Apple', 'Banana', 'Mango', 'Orange']
let slicedFruits = fruits7.slice(1, 3)
console.log(slicedFruits) // ['Banana', 'Mango']
console.log(fruits7) // ['Apple', 'Banana', 'Mango', 'Orange']

//8.Merge() - Combines two or more arrays and returns a new array. The original arrays will not be modified.
let fruits8 = ['Apple', 'Banana', 'Mango']
let vegetables = ['Carrot', 'Broccoli', 'Spinach']  
let combined = fruits8.concat(vegetables)
console.log(combined) // ['Apple', 'Banana', 'Mango', 'Carrot', 'Broccoli', 'Spinach']


//9. Reverse() - Reverses the order of the elements in an array in place. The first array element becomes the last, and the last array element becomes the first.
let fruits9 = ['Apple', 'Banana', 'Mango', 'Orange']
fruits9.reverse()
console.log(fruits9) // ['Orange', 'Mango', 'Banana', 'Apple']  

//Adance Methods
//1.Sort() - Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
let fruits10 = ['Banana', 'Apple', 'Mango', 'Orange']
fruits10.sort()
console.log(fruits10) // ['Apple', 'Banana', 'Mango', 'Orange'] 

let numbers1 = [40, 100, 1, 5, 25, 10]
numbers1.sort((a, b)=> a - b)
console.log(numbers1) // [1, 5, 10, 25, 40, 100]    

