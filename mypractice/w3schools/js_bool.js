// JavaScript Booleans
// JavaScript booleans can have one of two values: true or false.

// The Boolean() Function
// You can use the Boolean() function to find out if an expression is true:

// Example
console.log(Boolean(10 > 9))

// constructor	Returns the function that created JavaScript's Boolean prototype
// Example
let bool = false;
let text = bool.constructor;
console.log(text)//[Function: Boolean]
// Description
// The constructor property returns the function that created the Boolean prototype.

// For JavaScript booleans the constructor property returns:

// function Boolean() { [native code] }

// Syntax
// boolean.constructor
// Return Value
// function Boolean() { [native code] }

// prototype	Allows you to add properties and methods to the Boolean prototype
// Make a new method for JavaScript booleans:

Boolean.prototype.myColor = function() {
  if (this.valueOf() == true) {
    return "green";
  } else {
    return "red";
  }
};
// Create a boolean, then call myColor():

let a = true;
let color = a.myColor();

console.log(color)//green

// Description
// prototype allows you to add new properties and methods to booleans.

// prototype is a property available with all JavaScript objects.

// Syntax
// Boolean.prototype.name = value


// toString()	Converts a boolean value to a string, and returns the result
// Example
let bool1 = true;
let text1 = bool1.toString();
console.log(text1) //true
// Description
// The toString() method returns a boolean as a string.
// Syntax
// boolean.toString()
// Parameters
// NONE
// Return Value
// Type	Description
// A string	"true" or "false".



// valueOf()	Returns the primitive value of a boolean
let bool2 = false;
let value2 = bool2.valueOf(); 

console.log(value2) //false

// Description
// valueOf() returns the primitive value of a boolean.

// valueOf() is usually called by JavaScript behind the scenes, and not explicitly in code.

// Syntax
// boolean.valueOf()
// Return Value
// Type	Description
// A boolean	true or false.