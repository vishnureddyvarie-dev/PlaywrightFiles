let username='10';
username=10;
username=true;
console.log(username);



function add(a:number,b:number){
    return a+b;
}
console.log(add(100,5))

// TS is a compile time - JS is run time
// Catches errors before running
// Error show while you typing
//Safer chnages
//Playwright +typescript

//let variableName:type=value;
let a:number=10;
let b:string='vishnu';
let isactive:boolean;

//string array
let browser:string[]=['chromium','firefox'];
let scores:number[]=[20,40];
let data:any=10;
data='vishnu';

//if we dont gie the type TS will understand based on the value assigned

//TS will be converted to JS and will be execuited in node JS

// functions
// function functionname(para1:type,para2;type):returntype{
//}

function greeting(a:number,b:number):void{
    console.log('TypeScript Function')
}

//optional parameters
//b? is an optional parameter
function greeting1(a:number,b?:number):void{
}
greeting1(10);

//Default Pramaters
function openBrowser(browsername:string='chrome'){
    console.log(browsername);
}
openBrowser(); //user default
openBrowser('Firefox'); //b? is an optional parameter