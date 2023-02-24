let greet:Function;
greet = ()=>{
    console.log('hello,again');
}
const add = (a:number, b:number, c:number | string =10): void=>{
    console.log(a + b );
    console.log (c)
}
add(5 , 7 ,50);

const minus = (a: number, b:number ): number =>{
    return a - b ;
}

let result = minus(10 , 7);
console.log(result)

//type Aliases

type StringOrNum = string | number
type objWithName = {name: string , uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
console.log(`${item} has a uid of ${uid}`);
}

const greeet = (user: objWithName)=>{
    console.log(`${user.name} says hello`);
}

const greeetagain = (user: objWithName) =>{
    console.log(`${user.name} says hello `)
}


//function signature 

//let greett: function;

//Example
let gree : (a:string, b:string) => void;
gree =(name:string, greeting: string) =>{
    console.log(`${name}says ${greeting}`);
}

//Example 2 

// if a function does not return any value then you can specify void as return type.
let calc:(a:number, b:number , c:string) => number;
calc = (numOne: number , numTwo:number, action:string) =>{
if (action ==='add'){
    return numOne + numTwo;
}else {
    return numOne - numTwo;
}
}

// Example 3
let  loggg:(obj:{name:string,age:number}) => void;

loggg = (ninjaa:{name:string, age:number}) =>{
    console.log(`${ninjaa.name} is ${ninjaa.age}year old`);
}
