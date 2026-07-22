{ 
let text1 = "A";
let text2 = "B";
let result = text1 < text2;

console.log(result); // Output: true
console.log(text1 < text2); // Output: true
console.log(text1 > text2); // Output: false
console.log(text1 === text2); // Output: false
}
{
    let text1 = "20";
    let text2 = "5";
    let result = text1 < text2;
    console.log(result); // Output: false
    console.log(text1 < text2); // Output: false
    console.log(text1 > text2); // Output: true
    console.log(text1 === text2); // Output: false
}

{
    let age;
    age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
  console.log(voteable);    
}
}