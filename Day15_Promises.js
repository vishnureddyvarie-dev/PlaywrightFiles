//Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous fashion, making it easier to read and maintain. Promises can be in one of three states: pending, fulfilled, or rejected. They can be used to handle asynchronous operations, but they can lead to callback hell if not managed properly.

//outcome of promise or states
// 1. pending - initial state, neither fulfilled nor rejected
// 2. success - operation completed successfully
// 3. failure  - operation failed

let promise= new Promise((resolve, reject) => {
    console.log("Promise is created and pending...");
    let success = true; // Simulating a successful operation
    if (success) {
        resolve("Operation completed successfully!");   
    } else {
        reject("Operation failed.");
    }  

});

//Then Block: Positive Result
//Catch Block: Failure
//Finally: will write cleanup code

promise
.then((result) => {
    console.log( result);
}
)
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Promise is settled (either fulfilled or rejected).");
})


