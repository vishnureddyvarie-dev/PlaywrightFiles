/* 
Single Inheritance 

One childclass inherits resuses cde from one parent class

*/

class Parent {
    name: string="Parent Class";
    display(): void {
        console.log("This is Parent Class");
    }

}

class Child extends Parent {
        display(): void {
        console.log("This is Child Class");
    }
}

let childObj = new Child();

console.log(childObj.name);
childObj.display();




/*
Multiple Inheritance    

CLass inherits from another class which is also inherits from another class

*/

class GrandParent {
    house(): void {
        console.log("This is Grand Parent Class");
    }   
}

    class parent1 extends GrandParent {
        car(): void {
            console.log("This is Parent Class");
        }   
    }

    class child extends parent1 {
        bike(): void {
            console.log("This is Child Class");
        }   
    }

    let childObj2 = new child();
    childObj2.house();
    childObj2.car();
    childObj2.bike();


/* Inherit Inheritance */
class Animal {
    eat(): void {
        console.log("Eating...");
    }  
}

class Dog extends Animal {
    bark(): void {
        console.log("Barking...");
    }
}

class Cat extends Animal {
    meow(): void {
        console.log("Meowing...");
    }
}

let dog = new Dog();
dog.eat();
dog.bark();

let cat = new Cat();
cat.eat();
cat.meow();


/*Multilevel Inheritance 

There is no multiple inheritance with classes
To achieve multiple inheritance we can use interfaces
Abstract Methods - Method without body
*/

interface Vehicle {
    start(): void;
    stop(): void;
}

interface run{
    run(): void;
}

class Breeza implements Vehicle, run {
    start(): void {
        console.log("Vehicle started");
    }
    stop(): void {
        console.log("Vehicle stopped");
    }
    run(): void {
        console.log("Vehicle is running");
    } 
}

let BreezaObj = new Breeza();
BreezaObj.start();
BreezaObj.run();
BreezaObj.stop();

/* Hybrid Inheritance
Extends class
Implements interface
*/

interface GPS {
    location(): void;
    track(): void;  
}

class Car extends parent1 implements GPS {
    start(): void {
        console.log("Car started");
    }
    stop(): void {
        console.log("Car stopped");
    }
    location(): void {
        console.log("Tracking location");
    }
    track(): void {
        console.log("Tracking route");
    }
}   

let carObj = new Car();
carObj.start();
carObj.location();
carObj.track();
carObj.stop();

/* Method Overriding
Method Overriding is a feature that allows a subclass to provide a specific implementation of a method that is already defined in its superclass. The method in the subclass should have the same name, return type, and parameters as the method in the superclass.
*/

class Animal1 {
    sound(): void {
        console.log("Animal makes a sound");
    }
}

class Dog1 extends Animal1 {
    sound(): void {
        super.sound(); // Call the superclass method
        console.log("Dog barks");
    }  
}

let dog1 = new Dog1();
dog1.sound(); // Output: Dog barks



