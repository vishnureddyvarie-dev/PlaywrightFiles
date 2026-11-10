/*
Type Alias: it allows to create new coustme type name

*/

type EmployeeName = string|number;
let employee1:EmployeeName;
employee1='Ram'

type Student={
    id:number;
    name:string
    address:string

}

let student1 : Student={
    id:100,
    name:'Vishnu',
    address:'Bangalore'
}

type Person = {
    name:string,
    age:number
}

type EmployeeDetails = {
    employeeId:number,
    department:string
}

type employee = Person & EmployeeDetails;

let employee2:employee;
employee2={
    name:'Vardhan',
    age:36,
    employeeId:123,
    department:'QA'

}


/*

Type Annotations => Explicitly weare teling the type 
f the data type of a variable 

*/

//variable
let studentname:string;
let salar:number;
let isPermenant:boolean;

// with Array
let numbers:number[];
let names:string[];

numbers =[1,2,3,4,5]

//tuple
let employeedet:[number,string];

//functions
function add(a:number,b:number){
    return a+b;
}


//Objects
let emplyeeObj:{
    id:number,
    name:string,
    salary:number
};


/*

Union Types- it allows to accept more than one data type
with pipe symbol

*/

let x:number|string;
x='Ram';
x=123;


//type inference- if we dont proide the data typeit will assume the data type
let empID=101; //It will assume as number
console.log('empID');


