//Promise.resolve() method returns a Promise object that is resolved with a given value. If the value is a promise, that promise is returned; if the value is a thenable (i.e. has a "then" method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value.
let resoledPromise = Promise.resolve('Hello, World!');
resoledPromise.then((value) => {
    console.log(value); // Output: Hello, World!
});

//Promise.reject() method returns a Promise object that is rejected with a given reason. If the reason is a promise, that promise is returned; if the reason is a thenable (i.e. has a "then" method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be rejected with the reason.
let rejectedPromise = Promise.reject('Something went wrong!');
resoledPromise
.then((value) => {
.catch((error) => {
    console.log(error); // Output: Something went wrong!
})

//Multiple Promises can be handled using Promise.all() method. It takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved, or rejects with the reason of the first promise that rejects.
//Promise.all() method is useful when you want to perform multiple asynchronous operations in parallel and wait for all of them to complete before proceeding.
//prmise.all([promise1, promise2, promise3])

//get all 3 promises results
// if one of the promises fails, it will treate all are failed

let promise1 = Promise.resolve(10);
let promise2 = Promise.resolve(20);
let promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
    .then((values) => {console.log(values)}); // Output: [10, 20, 30]
    .catch((error) => {console.log(error)}); // Output: Error message if any promise fails

//Promise.allSettled() method returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.
let promise4 = Promise.resolve(40);
let promise5 = Promise.reject('Promise 5 failed');
let promise6 = Promise.resolve(60);

Promise.allSettled([promise4, promise5, promise6])
    .then((results) => {
        console.log(results);
    });

    //Prmise.race() method returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects, with the value or reason from that promise.
    let raceP1= new Prmise((resolve) => {
        setTimeout(() => {resolve('Promise 1 resolved');
}, 1000);

    })

    let raceP2= new Promise((resolve) => {
        setTimeout(() => {resolve('Promise 2 resolved');
}, 500);

    })

    let raceP3= new Promise((resolve) => {
        setTimeout(() => {resolve('Promise 3 resolved');
}, 1500);

    })

    Promise.race([raceP1, raceP2, raceP3])
    .then((value) => {console.log(value)
    .catch((error) => {console.log(error)}); // Output: Promise 2 resolved
    })