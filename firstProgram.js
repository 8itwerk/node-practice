// Variable stored in a number data type
var a = 35;
console.log(typeof a);

// Variable stored in a string data type
a = "This is a string";
console.log(typeof a);

// Variable stored in a string data type
a = true;
console.log(typeof a);

// Variable stored in a undefined data type
a = undefined;
console.log(typeof a);

a = {
    a1: 5,
    a2: true
};
console.log(typeof a);
console.log(a.a1)
console.log(a);

// Do these vars change types dynamically???

// Here is an example of an object
var company = {
    Name: "Jeff Co",
    Address: "Portland, OR",
    Contact: "503.709.2786",
    Email: "jeffrey.jernstrom@gmail.com"
};

// Display the object information
console.log("Information in the variable company: ", company);

// Display the object type
console.log("Type of the company var: ", typeof company);

// Function example
function multiply(num1, num2) {
    return num1 * num2;
}

var x = 2;
var y = 3;

console.log(x, " times ", y, " = ", multiply(x,y));