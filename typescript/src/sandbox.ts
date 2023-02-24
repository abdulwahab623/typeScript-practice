 let character = 'mario';
 let age = 30;
 let isBlackBelt = false; 

 //character = 20;  it give error bcoz Type 'number' is not assignable to type 'string'.
character = "usman"; // it change bcoz it is also a string
 console.log(character);

 //age = "youshi" // it give error bcoz type string is not assignable to the number
 age = 49 // it change bcoz type number can be assignable to the the number 
 console.log(age);

 //isBlackBelt = " yess " // it give a error bcoz it assigned boolean value in initially

 isBlackBelt = true ; // no error bcoz it is of same type 
 console.log(isBlackBelt)

// const inputs = document.querySelectorAll('input') //select all input and get data in inputs

// console.log(inputs);

// //main name inputs .forEach second input is a call back function

// inputs.forEach(input =>{
//     console.log(input);
// });


const circ = (diameter :number) => {
    return diameter * Math.PI
}
console.log(circ(6.7));


//arrays in typescript 

let names= ['wahab','ahmad', 'usman'];
console.log(names);
names.push('haseeb');
// names.push(6);
// names[0] = 5;
console.log(names);

let numbers = [10, 98, 75,43];

numbers.push(25);
//numbers.push('shaun');
//number[2] = 'shaun';
console.log(numbers)
let mixed = ['ken',4 , 'chun-li',6,7,'hello'];

mixed.push('ryu');
mixed.push(10);
mixed[0] = 3; 
console.log(mixed);

//object

let ninja = {
    name:'wahab',
    belt: 'black',
    age: 30
};

//ninja.name = 59 //it give error bcoz it name is string cant assign number to it 
ninja.age = 60 

console.log(ninja)


//explicit types
let characters:string;
let agee :number;
let isLoggedIn: boolean;

//age = 'luigi'
agee = 50;
 
//isLoggedIn = 25;
isLoggedIn = true;

//array  
let ninjas: string[] = []; 
// ninjas = [12,23,56,83,79];
// ninjas = ["abc","mario",]
ninjas.push('shaun');
console.log(ninjas)

// union types 
let miixed: (string|number)[] =[];

miixed.push("hello");
miixed.push(5);
//miixed.push(true);

console.log(miixed);

let uid : string|number;
uid = '123';
uid = 123;
//uid = true; // it will give error bcoz we don't assign bollean to uid variable

//objects

let ninjaOne : object;
ninjaOne ={name:"yoshi" , age:30};
ninjaOne = [] //array are allow


let ninjaTwo:{
    name:string,
    age:number,
    beltColor: String
}

ninjaTwo = {name:"mario" , age:20, beltColor:"black"}


//any type  
let agge: any;

agge = "forty";
agge = 45;
agge = true;

agge = {name:"luigi"}

let mixxed : any[] = [];
mixxed.push(5);
mixxed.push('usman');
mixxed.push(false);
console.log(mixxed);

//object with any

let ninjja:{name:any, age:any};

ninjja = {name:'yoshi', age: 24};
console.log(ninjja);