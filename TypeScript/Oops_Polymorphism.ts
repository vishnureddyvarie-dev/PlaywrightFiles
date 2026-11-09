/* Polymorphism
1. Method Overriding
2. Method Overloading - One function behaving differently based on the number of parameters passed to it
    Step1: Give multiple function declarations => oerload signatures
    Step2: Only one implementation which satisfies all the overload signatures

*/
// without overriding
function getUserByID(id: number): void;{
}

function getUserByEmailID(email: string): void;{
}

function getUser(id: number): void;
function getUser(email: string,age: number): void 

// Function overloading
function getUser(input: string | number,age?:number): void {
    console.log("User fetched successfully");{
    }
}
getUser(1); // Calls the function with a number parameter
getUser("john@example.com", 25); // Calls the function with a string parameter

// Method Overloading
class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any;
    add(a:number|string, b:string|number): number|string{
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        } else {
            return a.toString() + b.toString();
        }
    }
}

let calculator = new Calculator();
console.log(calculator.add(5, 10)); // Calls the method with number parameters
console.log(calculator.add("Hello, ", "World!")); // Calls the method with string parameters
console.log(calculator.add(5, " apples")); // Calls the method with mixed parameters
console.log(calculator.add(10000, " oranges")); // Calls the method with mixed parameters


