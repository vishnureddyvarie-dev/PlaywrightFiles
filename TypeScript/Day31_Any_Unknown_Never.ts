//any- Disables typescript type checking for a variable. It can be assigned any value and can be used in any context without type errors.
// you should not use this

let randomValue: any = 10;
randomValue = true;
randomValue = "Hello";
randomValue = { name: "John" };
randomValue = [1, 2, 3];

console.log(randomValue.name); // Output: John
console.log(randomValue.toFixed(4)); // Output: 1


//unknown- is a type-safe counterpart of any. It can be assigned any value, but you must perform type checking before using it in a specific context.

let unknownValue: unknown;
unknownValue = true;
unknownValue = "Hello";
unknownValue = { name: "John" };    

if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // Output: HELLO
}   

if (typeof unknownValue === "object" && unknownValue !== null) {
    console.log((unknownValue as { name: string }).name); // Output: John
}


//Never- it will represent smething that never happen
//1. Functins that never return a value (e.g., functions that throw an error or have an infinite loop) can be typed as never.
//2. Exhaustie conditions checking

function add(): never {
    throw new Error("This function never returns a value.");
}

function infiniteLoop(): never {
    while (true) {
        console.log("This function never returns a value.");
    }
}

//2. Exhaustive condition checking

type Shape = "circle" | "square" | "triangle";
function getShapeArea(shape: Shape): number {
    switch (shape) {
        case "circle":
            return Math.PI * 1 * 1; // Example area calculation for a circle with radius 1
        case "square":
            return 1 * 1; // Example area calculation for a square with side length 1
        case "triangle":
            return (1 * 1) / 2; // Example area calculation for a triangle with base and height of 1
        default:
            const _exhaustiveCheck: never = shape; // This will cause a compile-time error if a new shape is added without handling it here
            throw new Error(`Unhandled shape: ${_exhaustiveCheck}`);
    }  
}


// == will checkthe value and not the data type
// === will check the value and the data type

let num1: number = 10;
let num2: number = "10";    

console.log(num1 == num2); // Output: true (value is equal, but types are different)


let num3: number = 10;
let num4: string = "abc";

console.log(num3 === num4); // Output: false (value and types are different)






