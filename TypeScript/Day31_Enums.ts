/*

Enums - are used to store a group of related values that can be numeric or string values. Enums are a way to give more friendly names to sets of numeric or string values.

Instead of writing hardcoded values everywhere

*/

enum Status {
    Active = 1,
    Inactive = 2,
    Pending = 3
}

let userStatus: Status = Status.Active;
console.log(userStatus); // Output: 1

/* Syntax for Enum
enum EnumName {
    Value1,
    Value2,
    Value3
}
*/

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}   
    console.log(Direction.Up); // Output: "UP"

enum apiStatusCode {
    Success = 200,
    NotFound = 404,
    InternalServerError = 500
}
console.log(apiStatusCode.Success); // Output: 200
console.log(apiStatusCode.NotFound); // Output: 404
console.log(apiStatusCode.InternalServerError); // Output: 500

// Auto Incriment enums
enum Numbers{
    a=15,
    b,
    c,      
}

console.log(Numbers.a); // Output: 15
console.log(Numbers.b); // Output: 16
console.log(Numbers.c); // Output: 17   


//String enums
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
console.log(Color.Red); // Output: "RED"
console.log(Color.Green); // Output: "GREEN"
console.log(Color.Blue); // Output: "BLUE"

enum Browser {
    Chrome = "CHROME",
    Firefox = "FIREFOX",    
    Safari = "SAFARI",
    Edge = "EDGE"
}
console.log(Browser.Chrome); // Output: "CHROME"    
console.log(Browser.Firefox); // Output: "FIREFOX"
console.log(Browser.Safari); // Output: "SAFARI"
console.log(Browser.Edge); // Output: "EDGE"

// Heterogeneous enums
enum MixedEnum {
    Yes = 1,    
    No = "NO",
    Maybe = 2
}
console.log(MixedEnum.Yes); // Output: 1
console.log(MixedEnum.No); // Output: "NO"  
console.log(MixedEnum.Maybe); // Output: 2

//Reverse mapping of enums
enum apiResponse {
    Success = 200,
    NotFound = 404,
    InternalServerError = 500,
    BadRequest = "400",
    Unauthorized = "401"
}
console.log(apiResponse.Success);
console.log(apiResponse[400]); // Output: BadRequest
console.log(apiResponse["401"]); // Output: Unauthorized


//Constant enums
const enum Days {
    Monday,
    Tuesday,
    Wednesday,  
    Thursday,
    Friday,
    Saturday,
    Sunday
}
let today: Days = Days.Monday;
console.log(today); // Output: 0
