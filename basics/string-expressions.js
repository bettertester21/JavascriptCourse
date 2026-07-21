let fname = "John";
let lname = "Doe";

console.log('fname: ' + fname);
console.log('lname: ' + lname);

let fullName = fname + " " + lname;
console.log('fullName: ' + fullName);

console.log('fname.length: ' + fname.length);
console.log('lname.length: ' + lname.length);   
console.log('fullName.length: ' + fullName.length);

console.log('fname.toUpperCase(): ' + fname.toUpperCase());
console.log('lname.toLowerCase(): ' + lname.toLowerCase());

console.log('fullName.indexOf("D"): ' + fullName.indexOf("D"));
console.log('fullName.indexOf("o"): ' + fullName.indexOf("o"));

console.log('fullName.lastIndexOf("o"): ' + fullName.lastIndexOf("o"));

console.log('fullName.slice(0, 4): ' + fullName.slice(0, 4));
console.log('fullName.slice(5): ' + fullName.slice(5)); 

console.log('fullName.replace("John", "Jane"): ' + fullName.replace("John", "Jane"));
console.log('fullName.replace("Doe", "Smith"): ' + fullName.replace("Doe", "Smith"));
console.log('fullName.replace("John", "Jane").replace("Doe", "Smith"): ' + fullName.replace("John", "Jane").replace("Doe", "Smith"));
console.log('fullName.replace("John", "Jane").replace("Doe", "Smith").toUpperCase(): ' + fullName.replace("John", "Jane").replace("Doe", "Smith").toUpperCase());

console.log('fullName.split(" "): ' + fullName.split(" "));
console.log('fullName.split(" ")[0]: ' + fullName.split(" ")[0]);
console.log('fullName.split(" ")[1]: ' + fullName.split(" ")[1]);

console.log('fullName.charAt(0): ' + fullName.charAt(0));
console.log('fullName.charAt(5): ' + fullName.charAt(5));

console.log('fullName.includes("John"): ' + fullName.includes("John"));
console.log('fullName.includes("Jane"): ' + fullName.includes("Jane"));

console.log('fullName.startsWith("John"): ' + fullName.startsWith("John"));
console.log('fullName.endsWith("Doe"): ' + fullName.endsWith("Doe"));   

console.log('fullName.trim(): ' + fullName.trim());
console.log('fullName.trim().length: ' + fullName.trim().length);
console.log('fullName.trim().toUpperCase(): ' + fullName.trim().toUpperCase());

console.log('fullName.repeat(2): ' + fullName.repeat(2));

console.log('fullName.padStart(20, "*"): ' + fullName.padStart(20, "*"));
console.log('fullName.padEnd(20, "*"): ' + fullName.padEnd(20, "*"));

console.log('fullName.replace(/o/g, "0"): ' + fullName.replace(/o/g, "0"));
console.log('fullName.replace(/o/gi, "0"): ' + fullName.replace(/o/gi, "0"));

console.log('fullName.match(/o/g): ' + fullName.match(/o/g));
console.log('fullName.match(/o/gi): ' + fullName.match(/o/gi));

console.log('fullName.search(/Doe/): ' + fullName.search(/Doe/));
console.log('fullName.search(/Smith/): ' + fullName.search(/Smith/));

console.log('fullName.split(" ").join("-"): ' + fullName.split(" ").join("-")); 
console.log('fullName.split(" ").join("-").toUpperCase(): ' + fullName.split(" ").join("-").toUpperCase());

console.log('fullName.split(" ").join("-").toUpperCase().replace(/O/g, "0"): ' + fullName.split(" ").join("-").toUpperCase().replace(/O/g, "0"));
console.log('fullName.split(" ").join("-").toUpperCase().replace(/O/g, "0").padStart(30, "*"): ' + fullName.split(" ").join("-").toUpperCase().replace(/O/g, "0").padStart(30, "*"));


