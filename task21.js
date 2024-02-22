"use strict";
// More Conditional Tests
let programmer = 'Suresh';
// True 
console.log('Is name is "Suresh"? I prediced true.');
console.log(programmer == 'Suresh');
// false 
console.log('Is name != "Suresh"? I predicted False.');
console.log(programmer != 'Suresh');
// True
console.log('Does name contains 6 letters ? I predicted True.');
console.log(programmer.length == 6);
//False
console.log('Does name have more than 6 letters? I predicted False');
console.log(programmer.length > 6);
//True 
console.log('lowercase of the name will be "suresh"? I predicted True . ');
console.log(programmer.toLowerCase() == 'suresh');
//False 
console.log('Uppercase of the name will be "Suresh"? I predicted False.');
console.log(programmer.toUpperCase() == 'Suresh');
//True 
console.log('Is name contains greater than 3 letters and less than 7? I predicted True.');
console.log(programmer.length > 3 && programmer.length < 7);
//False 
console.log('Is name contains greater than 7 letters and ends with "s"? I predicted False.');
console.log(programmer.length > 7 || programmer.charAt(5) == 's');
let programmerNo = [1, 2, 3, 4, 5, 6, 7];
//True 
console.log('Does array contains number 5 ? I predicted True. ');
console.log(programmerNo.includes(5));
//False
console.log('Does array contains number 0 ? I predicted False ');
console.log(programmerNo.includes(0));
