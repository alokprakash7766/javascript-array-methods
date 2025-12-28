let num = [1,2,3,4,5,6,7,8,9,10];


let double = num.map((el)=>{
    return el * 2;
} );

console.log("Doubled Array: " + double);


let even= num.filter((el)=>{
    return el % 2 === 0;} );

console.log("Even Numbers: " + even);

let ODD= num.filter((el)=>{
    return el % 2 !== 0;} );

console.log("Odd Numbers: " + ODD);

let every =[1,2,3,4,5,6,7,8,9,10];
let everyResult = every.every(el => el % 2 === 0);
console.log("every result: " + everyResult);


let some = [1,2,3,4,5,6,7,8,9,10];
let someResult = some.some(el => el % 2 === 0);
console.log("some result: " + someResult);


let sum =[1,2,3,4,5,6,7,8,9,10];
let total = sum.reduce((acc, el) => acc + el, 0);
console.log("Sum of numbers: " + total);

let find =  [1,2,3,4,5,6,7,8,9,10];
let findResult = find.find(el => el > 5);
let findIndex =  [1,2,3,4,5,6,7,8,9,10];
let findIndexResult = findIndex.findIndex(el => el > 5);
console.log("Find Index result: " + findIndexResult);