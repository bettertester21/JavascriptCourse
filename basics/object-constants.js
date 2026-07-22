try{
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

console.log(car); // Output: {type: "Fiat", model: "500", color: "red", owner: "Johnson"}

car = {type:"Volvo", model:"XC90", color:"black"}; // This will cause an error because you cannot reassign a constant object

console.log(car); // This line will not be executed due to the error above

}catch(error){
    console.error("Error: " + error.message);
}
