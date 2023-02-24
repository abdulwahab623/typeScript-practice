// const anchor = document.querySelector('a')!;
// // if (anchor){
// //     console.log(anchor)
// // }
// console.log(anchor.href)
//interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number
// }
// const me: IsPerson = {
//     name: 'wahab',
//     age: 30,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log('I spent', amount);
//         return amount;
//     }
// };
// const greetPerson = (person: IsPerson) =>{
//     console.log('hello',person.name)
// }
// greetPerson(me);
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
//console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance 
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
    // console.log(doc);
});
// GEneric
// const addUID  = <T extends {name: string}> (obj : T) => {
//     let uid = Math.floor(Math.random()* 100);
//     return {...obj, uid};
// }
// let docOne = addUID({name:'yoshi', age: 40});
// console.log(docOne.age);
// with interface
// interface Resource <T> {
//     uid: number;
//     resourceName : String;
//     data: T;
// }
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: 'person',
//     data:{name:'shaun'}
// }
// const docFour : Resource<string[]> = {
//     uid:2,
//     resourceName : 'shoppingList',
//     data:['bread', 'milk','toilet roll']
// }
// console.log(docThree, docFour)
//ENUMS
// enum ResourceType{BOOK, AUTHOR, FILM, DIRECTION, PERSON}
// interface Resource<T> {
//     uid:number;
//     resourceType: ResourceType;
//     data: T;
// }
// const docOne:Resource<object>={
//     uid:1,
//     resourceType:ResourceType.BOOK,
//     data:{title:'name of the wind'}
// }
// const docTwo : Resource<object> = {
//     uid:10,
//     resourceType:ResourceType.PERSON,
//     data: {name:'yoshi'}
// }
//  console.log(docOne,docTwo)
//tuples / array
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 30;
// let students:[string,number];
// student = [234234,'ken'];
// student = ['chun-li', 223423];
