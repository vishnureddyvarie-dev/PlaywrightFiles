//Class and Objects in JavaScript

// Class is a blueprint for creating objects. It encapsulates data for the object and methods to manipulate that data.
//Class won't exist in real time
// Class is a template for creating objects. It defines the properties and methods that the objects created from the class will have. In JavaScript, classes were introduced in ECMAScript 6 (ES6) and provide a more structured way to create objects compared to the traditional prototype-based approach.
// Class contains variables and methods. 


// Objects are instances of classes. When you create an object from a class, you are creating an instance of that class.
//Which is created by using a class
// Objects are real-time entities that have state and behavior. 


// Syntax of class in JavaScript
// class ClassName {
//     variables and methods    {
//         // Initialization code
//     }

class Person {
name;
age;

//method
goesToSchool() {
    console.log(`goes to school.`);
}


//Creating an object of the class
//new classname()

new Person() // Constructor  

// Default constructor and userdefined constructor
// Default constructor is a constructor that is automatically provided by the JavaScript engine if no constructor is defined in the class. It initializes the object with default values.
// User-defined constructor is a constructor that is explicitly defined by the programmer in the class. It allows for custom initialization of the object with specific values. 

let person1 = new Person("", 0);




