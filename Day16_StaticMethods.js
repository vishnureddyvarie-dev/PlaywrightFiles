//StaticMethods or Static ariablesarebeongs to class
class empdetails {

    static empname = "John Doe"; // Static variable
    static empage = 30; // Static variable

    company; // Instance variable

    EMpdetails(company) {
        this.company = company; // Assigning value to instance variable
    }

}

//let emp1 = new empdetails('ABC Corp');
//let emp2 = new empdetails('XYZ Inc');

console.log(empdetails.empname); // Accessing static variable

class MathOperations {
    static add(a, b) {
        return a + b; // Static method
    }
    multiply(a, b) {
        return a * b; // Instance method
    }

}
let result= MathOperations.add(5, 10); // Calling static method
console.log(result); // Output: 15

let mathOp = new MathOperations();
mathOp.multiply(5, 10); // Calling instance method
console.log(mathOp.multiply(5, 10)); // Output: 50
