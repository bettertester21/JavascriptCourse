// JavaScript Program to Demonstrate Different Data Types

// 1. String
let name = "John";
console.log("String:", name);
console.log("Type:", typeof name);

// 2. Number
let age = 20;
console.log("\nNumber:", age);
console.log("Type:", typeof age);

// 3. BigInt
let bigNum = 1234567890123456789012345678901234567890n;
console.log("\nBigInt:", bigNum);
console.log("Type:", typeof bigNum);

// 4. Boolean
let isStudent = true;
console.log("\nBoolean:", isStudent);
console.log("Type:", typeof isStudent);

// 5. Object
let person = {
    name: "John",
    age: 20
};
console.log("\nObject:", person);
console.log("Type:", typeof person);

// 6. Undefined
let address;
console.log("\nUndefined:", address);
console.log("Type:", typeof address);

// 7. Null
let value = null;
console.log("\nNull:", value);
console.log("Type:", typeof value); // Returns "object" (this is a known JavaScript behavior)

// 8. Symbol
let id = Symbol("ID");
console.log("\nSymbol:", id);
console.log("Type:", typeof id);