"use strict";
/*Conditional Test Program*/
let car = 'subaru';
//1 TRUE
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
//2 FALSE 
console.log('Is car == "audi"? I predict False .');
console.log(car == 'audi');
//3 TRUE
console.log('Is car  != "supra " ? I predict True.');
console.log(car != 'supra');
//4 FALSE 
console.log('Is car == "SUBARU"? I predict false '); //Will show false because subaru is in lowercase
console.log(car == 'SUBARU');
//5 TRUE
console.log('Is car.length == 6? I predict true');
console.log(car.length == 6);
//6 FALSE
console.log('Is car.length != 6? I predict False ');
console.log(car.length != 6);
//7 TRUE 
console.log('Is car includes "ar" ? I predict True');
console.log(car.includes('ar'));
//8 FALSE
console.log('Is car includes "sub " ? I predict False.'); //Will Show False because of space after b
console.log(car.includes('sub '));
//9 True
console.log('Is car last letter is "u" ? I predict True');
console.log(car.charAt(5) == 'u');
//10 False
console.log('Is car first letter is "S"? I predict False'); //First letter is capital S
console.log(car.charAt(0) == 'S');
