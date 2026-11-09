/* Abstraction

*/

abstract class payment {
    abstract makePayment(): void;

//Concrete class implementing the abstract class
paymentSuccess(): void {
    console.log("Payment Successful");
}
}
