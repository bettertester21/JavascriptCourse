// JavaScript Program to Demonstrate Data Types

// 1. Number
let age = 21;
let price = 99.99;

// 2. String
let name = "Alice";

// 3. Boolean
let isStudent = true;

// 4. Undefined
let city;

// 5. Null
let account = null;

// 6. BigInt
let bigNumber = 1234567890123456789012345678901234567890n;

// 7. Symbol
let uniqueId = Symbol("id");

// 8. Object
let person = {
    name: "Alice",
    age: 21
};

// Display all data types
console.log("Number (age):", age, "Type:", typeof age);
console.log("Number (price):", price, "Type:", typeof price);

console.log("String:", name, "Type:", typeof name);

console.log("Boolean:", isStudent, "Type:", typeof isStudent);

console.log("Undefined:", city, "Type:", typeof city);

console.log("Null:", account, "Type:", typeof account); // typeof null returns "object"

console.log("BigInt:", bigNumber, "Type:", typeof bigNumber);

console.log("Symbol:", uniqueId, "Type:", typeof uniqueId);

console.log("Object:", person, "Type:", typeof person);