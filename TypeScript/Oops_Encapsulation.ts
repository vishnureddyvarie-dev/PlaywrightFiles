/*
Wrapping up data (variables) and methods (functions) into a single unit is called encapsulation. 
It is one of the fundamental concepts in object-oriented programming (OOP). 
Encapsulation helps to protect the internal state of an object from unintended interference and misuse. 
By restricting access to certain components, encapsulation allows for better control over how data is accessed and modified.

Data or Variables can access or edit through its own class public methods.


*/

//Without encapsulation
class BankAccount {
    balance: number=10000; //Data/Variables/fileds/Properties
}

let account = new BankAccount();
console.log("Initial Balance:", account.balance); // Accessing the balance directly

account.balance=15000; // Modifying the balance directly
console.log("Updated Balance:", account.balance); // Accessing the updated balance directly


/* Encapsulation with Access Modifiers
This will control who can access your class members
Variables, methods and constructors can be declared as public, private, or protected.
They help in encapsuation, data security


Public: Accessible from anywhere (default)
Private: Accessible only within the class
Protected: Accessible within the class and its subclasses   

*/

//Protected Access Modifier
class Animal {
    protected sound:string='Roar'; // Protected property
}

class Lion extends Animal {
    public makeSound(): void {
        console.log("Lion Sound:", this.sound); // Accessing the protected property from the subclass
    }
}
let lion = new Lion();
lion.makeSound(); // Output: Lion Sound: Roar

//out side the class or subclass, we cannot access the protected property directly
//console.log(lion.sound); // Error: Property 'sound' is protected and only accessible within class 'Animal' and its subclasses.

//let animal = new Animal();
//animal.sound; // Error: Property 'sound' is protected and only accessible within class 'Animal' and its subclasses.




//Private Access Modifier - within the class only
class BankKotakAccunt {
    private balance: number=10000; // Private property

    displayBalance(): void {
        console.log("Balance:", this.balance); // Accessing the private property within the class
    }
}

class BankKotakAccuntChild extends BankKotakAccunt {
    // Trying to access the private property from the subclass will result in an error
    displayBalanceFromChild(): void {
         console.log("Balance from Child:", this.balance); // Error: Property 'balance' is private and only accessible within class 'BankKotakAccunt'.
    }
}


/*Encapsulation with Getters and Setters
1.Loosely coupled - Variables and methds willl be public and can be accessed from anywhere
2.Tightly coupled - Variables will be private and can be accessed only through public methods (getters and setters)

For Every variable, we can create a getter and setter method to access and modify the variable.
*/

class Employee {
    private salary: number=50000; // Private property

    // Getter method to access the private property
    public getsalary(): number {
        return this.salary;
        console.log("Salary:", this.salary); // Accessing the private property within the class
    }
    setSalary(amount: number) {
        if (amount >= 0) {
            this.salary = amount;
        } else {
            console.log("Invalid salary amount");
        }       
}
}





