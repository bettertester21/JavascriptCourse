try
{
var x = 2;     // Allowed
const x = 2;   // Not allowed
console.log(x); // Output: 2

{
let x = 2;     // Allowed
const x = 2;   // Not allowed
console.log(x); // Output: 2    
}

{
const x = 2;   // Allowed
const x = 2;   // Not allowed
console.log(x); // Output: 2
}

}catch(error){
    console.error("Error: " + error.message);
}

