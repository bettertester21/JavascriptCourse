
try{
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

console.log(cars); // Output: ["Toyota", "Volvo", "BMW", "Audi"]

cars = ["Mercedes", "Honda"]; // This will cause an error because you cannot reassign a constant array

console.log(cars); // This line will not be executed due to the error above

}catch(error){
    console.error("Error: " + error.message);
}