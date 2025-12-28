let arr = [10, 20, 30, 40, 50];

let print = function(el){
    console.log("Element is: " + el);
}


arr.forEach(print);

// Or using an anonymous function

arr.forEach(function(el){
    console.log("Element using anonymous function: " + el);
});

arr.forEach(el => {
    console.log("Element using arrow function: " + el);
});



let array = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35} ,
];

array.forEach((student) =>{
    console.log(`${student.name} is ${student.age} years old.`);
});