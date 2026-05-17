// The Array object is used to store multiple values in a single variable.

/*
* 
*/
[ ]	//The [ ] constructor creates a new empty array object.:

const cars = [];
// Add Values to the Set
cars.push("Saab");
cars.push("Volvo");
cars.push("BMW");

console.log(cars) //output: [ 'Saab', 'Volvo', 'BMW' ]

// Description
// The [ ] constructor creates a new array object.

// Syntax
// [iterable]

// Parameters
// iterable	Required: An iterable object with values.

// Return Value
// A new Array object.

/*
* 
*/

// new Array()	//another way of createing a new Array ex:

const vehicles = new Array();
// Add Values to the Set
vehicles.push("Saab");
vehicles.push("Volvo");
vehicles.push("BMW");

console.log(vehicles) //output: [ 'Saab', 'Volvo', 'BMW' ]

// Description
// The new Array() constructor creates an Array object.

// Syntax
// new Array(iterable)

// Parameters
// iterable	Required: An iterable object with values.

// Return Value
// A new Array object.


/*
* 
*/

 //at()	//Returns an indexed element of an array

// Get the third element of fruits:
const fruitd = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruitd.at(2);
console.log(fruit) //output: Apple

// Description
// The at() method returns an indexed element from an array.

// The at() method returns the same as [].

// The at() method is supported in all modern browsers since March 2022:

// Syntax
// array.at(index)

// Parameters
// Optional: The index (position) of the array element to be returned.Default is 0.-1 returns the last element.

// Return Value
// The element of the given position (index) in the array.



/*
* 
*/

//concat()	//Joins arrays and returns an array with the joined arrays

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
console.log(children); //output: [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]

// Description
// The concat() method concatenates (joins) two or more arrays.

// The concat() method returns a new array, containing the joined arrays.

// The concat() method does not change the existing arrays.


// Syntax
// array1.concat(array2, array3, ..., arrayX)

// Parameters
// array1,...	Required: The array(s) to be concatenated.

// Return Value
//The content from the joined arrays.

/*
* 
*/

//constructor	//Returns the function that created the Array prototype


const fruitz = ["Banana", "Orange", "Apple", "Mango"];
let text1 = fruitz.constructor;
console.log(text1) //output: [Function: Array]

// Description
// The constructor property returns the function that created the Array prototype.

// For JavaScript arrays the constructor property returns:

// function Array() { [native code] }

// Syntax
// array.constructor

// Return Value
// function Array() { [native code] }



/*
* 
*/

//copyWithin()	//Copies array elements within the array, to and from specified positions

const fruitas = ['bellend', 'orangaid', 'leland manego', 'purple nurple', 'kiwi'];
console.log(fruitas)
fruitas.copyWithin(1,0); //Copy to index 1, all elements from index 0:
console.log(fruitas)

// Description
// The copyWithin() method copies array elements to another position in an array.

// The copyWithin() method overwrites the existing values.

// The copyWithin() method does not add items to the array.


// Syntax
// array.copyWithin(target, start, end)

// Parameters

// target	Required: The index (position) to copy the elements to.
// start	Optional: The start index (position). Default is 0.
// end	Optional: The end index (position). Default is the array length. 

// Return Value: The changed array.



/*
* 
*/

// entries()	Returns a key/value pair Array Iteration Object


// Create an Array
const fruita = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterator
const list = fruita.entries();

console.log(list) //array iterator

// List the Entries

for (let x of list) {
    console.log(x)
}


// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// [3, "Mango"]

// The entries() method does not change the original array.

// Description
// The entries() method returns an Iterator object with the key/value pairs from an array:


// Syntax
// array.entries()

// Parameters
// NONE

// Return Value: An Iterable object with the key/value pairs from the array.

/*
* 
*/

// every()	Checks if every element in an array pass a test


//create an array

let ages = [32, 33, 16, 40];

//create a Test Function

function checkAge(age){
    return age > 18;
}

//Are all ages over 18? 
console.log(ages.every(checkAge)) //output false

// Description

// The every() method executes a function for each array element.

// The every() method returns true if the function returns true for all elements.

// The every() method returns false if the function returns false for one element.

// The every() method does not execute the function for empty elements.

// The every() method does not change the original array

// Syntax
// array.every(function(currentValue, index, arr), thisValue)

// Parameters

// function()	Required: A function to be run for each element in the array.
// currentValue	Required:The value of the current element.
// index	Optional:The index of the current element.
// arr	Optional:The array of the current element.
// thisValue	Optional: Default undefined. A value passed to the function as its this value.

// Return Value: Boolean	true if all elements pass the test, otherwise false.


/*
* 
*/

// fill()	Fill the elements in an array with a static value

// Fill all the elements with a value:

const fruite = ["Banana", "Orange", "Apple", "Mango"];
fruite.fill("Kiwi");
console.log(fruite) //output:[ 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi' ]
// Fill the last two elements:

const fruitr = ["Banana", "Orange", "Apple", "Mango"];
fruitr.fill("Kiwi", 2, 4);
console.log(fruitr) //output: [ 'Banana', 'Orange', 'Kiwi', 'Kiwi' ]

// Description
// The fill() method fills specified elements in an array with a value.

// The fill() method overwrites the original array.

// Start and end position can be specified. If not, all elements will be filled.

// Syntax
// array.fill(value, start, end)

// Parameters
// value	Required: The value to fill in.
// start	Optional: The start index (position). Default is 0.
// end	Optional: The stop index (position).Default is array length.
// Return Value:	The filled array.

/*
* 
*/

// filter()	Creates a new array with every element in an array that pass a test

// Return an array of all values in ages[] that are 18 or over:

const ages1 = [32, 33, 16, 40];
const result1 = ages1.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(result1) //output: [ 32, 33, 40 ]

// Description
// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.


// Syntax
// array.filter(function(currentValue, index, arr), thisValue)

// Parameters

// function()	Required:A function to run for each array element.
// currentValue	Required:The value of the current element.
// index	Optional:The index of the current element.
// arr	Optional:The array of the current element.
// thisValue	Optional: Default undefined. A value passed to the function as its this value.

// Return Value
// Array: An array of elements that pass the test.
// An empty array if no elements pass the test.


/*
* 
*/

// find()	Returns the value of the first element in an array that pass a test
const ages2 = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

console.log(ages2.find(checkAge)) //20

// Description
// The find() method returns the value of the first element that passes a test.

// The find() method executes a function for each array element.

// The find() method returns undefined if no elements are found.

// The find() method does not execute the function for empty elements.

// The find() method does not change the original array.

// Syntax
// array.find(function(currentValue, index, arr),thisValue)

// Parameters
// function()	Required: A function to run for each array element.
// currentValue	Required:The value of the current element.
// index	Optional:The index of the current element.
// arr	Optional:The array of the current element.
// thisValue	Optional: Default undefined.A value passed to the function as its this value.

// Return Value:The value of the first element that pass the test.
// Otherwise it returns undefined.


/*
* 
*/

// findIndex()	Returns the index of the first element in an array that pass a test

const ages3 = [3, 10, 18, 20];

ages3.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}

console.log(ages3.findIndex(checkAge)) //3

// Description
// The findIndex() method executes a function for each array element.

// The findIndex() method returns the index (position) of the first element that passes a test.

// The findIndex() method returns -1 if no match is found.

// The findIndex() method does not execute the function for empty array elements.

// The findIndex() method does not change the original array.

// Syntax
// array.findIndex(function(currentValue, index, arr), thisValue)
// Parameters

// function()	Required:A function to be run for each array element.
// currentValue	Required:The value of the current element.
// index	Optional:The index of the current element.
// arr	Optional:The array of the current element.
// thisValue	Optional. Default undefined. A value passed to the function as its this value.

// Return Value
// Number	The index of the first element that passes the test.
// Otherwise -1.
/*
* 
*/


// findLast()	Returns the value of the last element in an array that pass a test

const ages4 = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

console.log(ages4.findLast(checkAge)) //20
// Description
// The findLast() method returns the value of the last element that passes a test.

// The findLast() method executes a function for each array element.

// The findLast() method returns undefined if no elements are found.

// The findLast() method does not execute the function for empty elements.

// The findLast() method does not change the original array.


// Syntax
// array.findLast(function(currentValue, index, arr),thisValue)

// Parameters
// function()	Required:A function to run for each array element.
// currentValue	Required:The value of the current element.
// index	Optional:The index of the current element.
// arr	Optional:The array of the current element.
// thisValue	Optional. Default undefined. A value passed to the function as its this value.

// Return Value
// A value	The value of the last element that pass the test.
// Otherwise it returns undefined.


/*
* 
*/


// findLastIndex()	Returns the index of the last element in an array that pass a test
const ages5 = [3, 10, 18, 20];

ages5.findLastIndex(checkAge);

function checkAge(age) {
  return age > 18;
}

console.log(ages5.findLastIndex(checkAge)) //3


// Description
// The findLastIndex() method executes a function for each array element.

// The findLastIndex() method returns the index (position) of the last element that passes a test.

// The findLastIndex() method returns -1 if no match is found.

// The findLastIndex() method does not execute the function for empty array elements.

// The findLastIndex() method does not change the original array.

// Syntax
// array.findLastIndex(function(currentValue, index, arr), thisValue)
// Parameters

// function()	Required: A function to be run for each array element.
// currentValue	Required:The value of the current element.
// index	Optional: The index of the current element.
// arr	Optional: The array of the current element.
// thisValue	Optional. Default undefined. A value passed to the function as its this value.

// Return Value
// Number	The index of the last element that passes the test.
// Otherwise -1.


/*
* 
*/

// flat()	Concatenates sub-array elements

// Create a new array with the sub-array elements concatenated:

const myArr1 = [[1,2],[3,4],[5,6]];
const newArr1 = myArr1.flat();
console.log(newArr1) //[ 1, 2, 3, 4, 5, 6 ]


const myArr2 = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr2 = myArr2.flat(2);
console.log(newArr2) //[1, 2, 3, 4,5, 6, 7, 8]

// Description
// The flat() method concatenates sub-array elements.

// Syntax
// array.flat(depth)

// Parameters

// depth	Optional: How deep a nested array should be flattened. Default is 1.
// Return Value An array	The flattened array.


/*
* 
*/

// flatMap()	Maps all array elements and creates a new flat array

const myArr3 = [1, 2, 3, 4, 5, 6];
const newArr3 = myArr3.flatMap((x) => x * 2);

console.log(newArr3) //[ 2, 4, 6, 8, 10, 12 ]



// Description
// The flatMap() method maps all array elements and creates a new flat array.

// flatMap() creates a new array from calling a function for every array element.

// flatMap() does not execute the function for empty elements.

// flatMap() does not change the original array.

// Syntax
// array.flatMap(function(currentValue, index, arr), thisValue)
// Parameters

// function()	Required: A function to be run for each array element.
// currentValue	Required:The value of the current element.
// index	Optional:The index of the current element.
// arr	Optional:The array of the current element.
// thisValue	Optional:Default value undefined.
// A value passed to the function to be used as its this value.

// Return Value
// An array:An array with the elements as a result of a callback function and then flattened.



/*
* 
*/

// forEach()	Calls a function for each array element

// Calls a function for each element in fruits:

let sum = 0;
const numbers1 = [65, 44, 12, 4];
numbers1.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

console.log(sum)//125


// Description
// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.

// Syntax
// array.forEach(function(currentValue, index, arr), thisValue)

// Parameters
// function()	Required: A function to run for each array element.
// currentValue	Required:The value of the current element.
// index	Optional:The index of the current element.
// arr	Optional:The array of the current element.
// thisValue	Optional. Default undefined.
// A value passed to the function as its this value.

// Return Value
// undefined

/*
* 
*/


// from()	Creates an array from an object

// Create an array from a string:

let chicken = Array.from("ABCDEFG")
console.log(chicken) //['A', 'B', 'C','D', 'E', 'F','G']

// Description
// The Array.from() method returns an array from any object with a length property.

// The Array.from() method returns an array from any iterable object.

// Syntax
// Array.from(object, mapFunction, thisValue)
// Parameters

// object	Required.
// The object to convert to an array.
// mapFunction	Optional.
// A map function to call on each item.
// thisValue	Optional.
// A value to use as thisfor the mapFunction
// Return Value
// Type	Description
// An array	The values from the iterable object.


/*
* 
*/

// includes()	Check if an array contains the specified element

const fruitf = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruitf.includes("Mango")); // true

// Description
// The includes() method returns true if an array contains a specified value.

// The includes() method returns false if the value is not found.

// The includes() method is case sensitive.

// Syntax
// array.includes(element, start)
// Parameters

// element	Required.
// The value to search for.
// start	Optional.
// Start position. Default is 0.
// Return Value
// Type	Description
// A boolean	true if the value is found, otherwise false.



/*
* 
*/


// indexOf()	Search the array for an element and returns its position

// Find the first index of "Apple":

const fruitG = ["Banana", "Orange", "Apple", "Mango"];
let index1 = fruitG.indexOf("Apple");

console.log(index1) // 2

// Description
// The indexOf() method returns the first index (position) of a specified value.

// The indexOf() method returns -1 if the value is not found.

// The indexOf() method starts at a specified index and searches from left to right (from the given start postion to the end of the array).

// By default the search starts at the first element and ends at the last.

// Negative start values counts from the last element (but still searches from left to right).

// Syntax
// array.indexOf(item, start)
// Parameters

// item	Required.
// The value to search for.
// start	Optional.
// Where to start the search.
// Default value is 0.
// Negative values start the search from the end of the array.	
// Return Value
// Type	Description
// A number	The index (position) of the first item found.
// -1 if the item is not found.

/*
* 
*/

// isArray()	Checks whether an object is an array

// Check if an object is an array:

const fruitH = ["Banana", "Orange", "Apple", "Mango"];
let result = Array.isArray(fruitH);
console.log(result) //true

// Description
// The isArray() method returns true if an object is an array, otherwise false.

// Syntax
// Array.isArray(obj)
// Parameters

// obj	Required.
// An object (or any data type) to be tested.
// Return Value
// Type	Description
// A boolean	true if the object is an array, otherwise false.


/*
* 
*/

// join()	Joins all elements of an array into a string

const fruitJ = ["Banana", "Orange", "Apple", "Mango"];
let text2 = fruitJ.join();

console.log(text2) // Banana,Orange,Apple,Mango

// Description
// The join() method returns an array as a string.

// The join() method does not change the original array.

// Any separator can be specified. The default is comma (,).

// Syntax
// array.join(separator)
// Parameters

// separator	Optional.
// The separator to be used.
// Default is a comma.
// Return Value
// Type	Description
// A string.	The array values, separated by the specified separator.


/*
* 
*/



// keys()	Returns a Array Iteration Object, containing the keys of the original array

// Create an Array Iterator object, containing the keys of the array:

// Create an Array
const fruitk = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterable
const list1 = fruitk.keys();

// List the Keys
let text3 = "";
for (let x of list1) {
    text3 += x + "<br>";
}

console.log(text3) //0<br>1<br>2<br>3<br>


// Description
// The keys() method returns an Iterator object with the keys of an array.

// The keys() method does not change the original array.


// Syntax
// array.keys()
// Parameters
// NONE
// Return Value
// Type	Description
// An array	An Array Iterator object containing the keys of an array.




// lastIndexOf()	Search the array for an element, starting at the end, and returns its position

// Find the last index of "Apple":

const fruitl = ["Apple", "Orange", "Apple", "Mango"];
let index = fruitl.lastIndexOf("Apple");

console.log(index)//2
// Description
// The lastIndexOf() method returns the last index (position) of a specified value.

// The lastIndexOf() method returns -1 if the value is not found.

// The lastIndexOf() starts at a specified index and searches from right to left (from the given postion to the beginning of the array).

// By defalt the search starts at the last element and ends at the first.

// Negative start values counts from the last element (but still searches from right to left).


// Syntax
// array.lastIndexOf(item, start)
// Parameters

// item	Required.
// The value to search for.
// start	Optional.
// Where to start the search.
// Default is the last element (array.length-1).
// Negative start values counts from the last element (but still searches from right to left).	
// Return Value
// Type	Description
// A number	The position of the specified item.
// -1 if the item is not found.




// length	Sets or returns the number of elements in an array
const fruitm = ["Banana", "Orange", "Apple", "Mango"];
let length = fruitm.length;

console.log(length)// 4

// Description
// The length property sets or returns the number of elements in an array.

// Syntax
// Return the length of an array:

// array.length
// Set the length of an array:

// array.length = number
// Return Value
// Type	Description
// A number	The number of elements in the array.


// map()	Creates a new array with the result of calling a function for each array element

// Return a new array with the square root of all element values:

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)

console.log(newArr)// [ 2, 3, 4, 5 ]

// Description
// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.

// Syntax
// array.map(function(currentValue, index, arr), thisValue)
// Parameters

// function()	Required.
// A function to be run for each array element.
// currentValue	Required.
// The value of the current element.
// index	Optional.
// The index of the current element.
// arr	Optional.
// The array of the current element.
// thisValue	Optional.
// Default value undefined.
// A value passed to the function to be used as its this value.
// Return Value
// Type	Description
// An array	The results of a function for each array element.



// of()	Creates an array from a number of arguments

// Examples
// Create a new array from a number of arguments:

let fruitw = Array.of("Banana", "Orange", "Apple", "Mango");

console.log(fruitw)// [ 'Banana', 'Orange', 'Apple', 'Mango' ]
// document.getElementById("demo").innerHTML = fruits;


// Description
// The Array.of() method creates a new array from any number of arguments.

// The Array.of() method can take any type of arguments.

// Syntax
// Array.of(element1, element2, ... , elementN)
// Parameters

// elements	Optional.
// Any number of elements regardless of type.
// Return Value
// Type	Description
// An Array	A new array created from the arguments.
// The arguments can be strings, numbers, arrays, or any other allowed type.



// pop()	Removes the last element of an array, and returns that element
// Examples
// Remove (pop) the last element:

const fruitx = ["Banana", "Orange", "Apple", "Mango"];
fruitx.pop();

console.log(fruitx)//[ 'Banana', 'Orange', 'Apple' ]

// Description
// The pop() method removes (pops) the last element of an array.

// The pop() method changes the original array.

// The pop() method returns the removed element.


// Syntax
// array.pop()
// Parameters
// NONE
// Return Value
// Type	Description
// A variable	The removed item.
// A string, a number, an array, or any other type allowed in an array.


// prototype	Allows you to add properties and methods to an Array object

// Create a method that transforms array values into upper case:

// Array.prototype.myUcase = function() {
//   for (let i = 0; i < this.length; i++) {
//     this[i] = this[i].toUpperCase();
//   }
// };

// Description
// prototype allows you to add new properties and methods to arrays.

// prototype is a property available with all JavaScript objects.

// Syntax
// Array.prototype.name = value

// Warning
// You are not advised to change the prototype of an object that you do not control.

// You should not change the prototype of built in JavaScript datatypes like:

// Numbers
// Strings
// Arrays
// Dates
// Booleans
// Function
// Objects
// Only change the prototype of your own objects.

// push()	Adds new elements to the end of an array, and returns the new length

// Add a new item to an array:

const fruitc = ["Banana", "Orange", "Apple", "Mango"];
fruitc.push("Kiwi");

console.log(fruitc)//[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

// Description
// The push() method adds new items to the end of an array.

// The push() method changes the length of the array.

// The push() method returns the new length.


// Syntax
// array.push(item1, item2, ..., itemX)
// Parameters
// Parameters	Description
// item1
// item2
// ..
// itemX	The item(s) to add to the array.
// Minimum one item is required.

// Return Value
// Type	Description
// A number	The new length of the array.



// reduce()	Reduce the values of an array to a single value (going left-to-right)


// Description
// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.

// Syntax
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// Parameters

// function()	Required.
// A function to be run for each element in the array.
// Reducer function parameters:
// total	Required.
// The initialValue, or the previously returned value of the function.
// currentValue	Required.
// The value of the current element.
// currentIndex	Optional.
// The index of the current element.
// arr	Optional.
// The array the current element belongs to.
// initialValue	Optional.
// A value to be passed to the function as the initial value.
// Return Value
// The accumulated result from the last call of the callback function.

// // reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// Description
// The reduceRight() method executes a reducer function for each array element.

// The reduceRight() method works from right to left.

// The reduceRight() method returns a single value: the function's accumulated result.

// The reduceRight() method does not execute the function for empty elements.

// Syntax
// array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)
// Parameters

// function()	Required.
// A function to be run for each element in the array.
// Reducer function parameters:
// total	Required.
// The initialValue, or the previously returned value of the function.
// currentValue	Required.
// The value of the current element.
// currentIndex	Optional.
// The index of the current element.
// arr	Optional.
// The array the element belongs to.
// initialValue	Optional.
// A value to be passed to the function as the initial value
// Return Value
// The accumulated result from the last call of the callback function.


// reverse()	Reverses the order of the elements in an array
const fruitn = ["Banana", "Orange", "Apple", "Mango"];
fruitn.reverse();
console.log(fruitn)// [ 'Mango', 'Apple', 'Orange', 'Banana' ]


// Description
// The reverse() method reverses the order of the elements in an array.

// The reverse() method overwrites the original array.

// Syntax
// array.reverse()
// Parameters
// NONE
// Return Value
// Type	Description
// Array	The array after it has been reversed.


// shift()	Removes the first element of an array, and returns that element
// Examples
// Shift (remove) the first element of the array:

const fruitv = ["Banana", "Orange", "Apple", "Mango"];
fruitv.shift();

console.log(fruitv)//[ 'Orange', 'Apple', 'Mango' ]

// Description
// The shift() method removes the first item of an array.

// The shift() method changes the original array.

// The shift() method returns the shifted element.

// Syntax
// array.shift()
// Parameters
// NONE
// Return Value
// Type	Description
// A variable	The removed item.
// A string, a number, an array, or any other type allowed in an array.

// slice()	Selects a part of an array, and returns the new array

// Examples
// Select elements:

const fruitb = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruitb.slice(1, 3);

console.log(citrus) // [ 'Orange', 'Lemon' ]

// Description
// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.

// Syntax
// array.slice(start, end)
// Parameters

// start	Optional.
// Start position. Default is 0.
// Negative numbers select from the end of the array.
// end	Optional.
// End position. Default is last element.
// Negative numbers select from the end of the array.
// Return Value
// A new array containing the selected elements.



// some()	Checks if any of the elements in an array pass a test

// Check if any values are over 18:

const ages6 = [3, 10, 18, 20];

ages6.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}

// Description
// The some() method checks if any array elements pass a test (provided as a callback function).

// The some() method executes the callback function once for each array element.

// The some() method returns true (and stops) if the function returns true for one of the array elements.

// The some() method returns false if the function returns false for all of the array elements.

// The some() method does not execute the function for empty array elements.

// The some() method does not change the original array.

// Syntax
// array.some(function(value, index, arr), this)
// Parameters

// function	Required.
// A function to run for each array element.
// Function parameters:
// value	Required.
// The value of the current element.
// index	Optional.
// The index of the current element.
// arr	Optional.
// The array the current element belongs to.
// this	Optional. Default undefined.
// A value passed to the function to be used as its "this" value.
// Return Value
// Type	Description
// A boolean	true if any of the aray elements pass the test, otherwise false.

// sort()	Sorts the elements of an array

// Examples
// Create an Array
const fruitt = ["Banana", "Orange", "Apple", "Mango"];

// Sort the Array
fruitt.sort();

console.log('sorted ', fruitt)// [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// Description
// The sort() method sorts the elements of an array.

// The sort() method sorts the elements as strings in alphabetical and ascending order.

// The sort() method overwrites the original array.



// Sort Compare Function
// Sorting alphabetically works well for strings ("Apple" comes before "Banana").

// But, sorting numbers can produce incorrect results.

// "25" is bigger than "100", because "2" is bigger than "1".

// You can fix this by providing a "compare function" (See examples below).

// Syntax
// array.sort(compareFunction)
// Parameters

// compareFunction	Optional.
// A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments:
// function(a, b){return a-b}
// When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// Example:

// The sort function will sort 40 as a value lower than 100.

// When comparing 40 and 100, sort() calls the function(40,100).

// The function calculates 40-100, and returns -60 (a negative value).

// Return Value
// Type	Description
// Array	The array with the items sorted.





// splice()	Adds or Removes array elements
// Create an Array
const fruity = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
fruity.splice(2, 0, "Lemon", "Kiwi");

console.log(fruity)// [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

// Description
// The splice() method adds and/or removes array elements.

// The splice() method overwrites the original array.

// Syntax
// array.splice(index, count, item1, ....., itemX)
// Parameters

// index	Required.
// The index (position) to add or remove items.
// A negative value counts from the end of the array.
// count	Optional.
// Number of items to be removed.
// item1, ...,	Optional.
// The new elements(s) to be added.
// Return Value
// Type	Description
// Array	An array containing the removed items (if any).



// toReversed()	Reverses the order of array elements (to a new array) // apparently not standard in node
// Create an Array
// const fruitu = ["Banana", "Orange", "Apple", "Mango"];

// // Reverse the Array
// const fruits18 = fruitu.toReversed();

// console.log(fruits18)

// // Description
// The toReversed() method reverses the order of the elements in an array.

// The toReversed() method returns a new array.

// The toReversed() method does not overwrites the original array.

// The toReversed() method is the copying version of the reverse() method.

// Syntax
// array.toReversed()
// Parameters
// NONE
// Return Value
// Type	Description
// Array	A new array with the items reversed.


// toSorted()	Sorts the elements of an array (to a new array)

// Examples
// Create an Array
const fruit6 = ["Banana", "Orange", "Apple", "Mango"];

// Sort the Array
fruit6.sort();

console.log(fruit6)// [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// Description
// The toSorted() method sorts the elements of an array in alphabetical order.

// The toSorted() method returns a new array.

// The toSorted() method does not overwrite the original array.

// The toSorted() method is the copying version of the sort() method.

// Sort Compare Function
// Sorting alphabetically works well for strings ("Apple" comes before "Banana").

// But, sorting numbers can produce incorrect results.

// "25" is bigger than "100", because "2" is bigger than "1".

// You can fix this by providing a "compare function" (See examples below).

// Syntax
// array.sort(compareFunction)
// Parameters

// compareFunction	Optional.
// A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments:
// function(a, b){return a-b}
// When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// Example:

// The sort function will sort 40 as a value lower than 100.

// When comparing 40 and 100, sort() calls the function(40,100).

// The function calculates 40-100, and returns -60 (a negative value).

// Return Value
// Type	Description
// Array	A new array with the items sorted.



// toSpliced()	Adds or Removes array elements (to a new array) // not a standard method

// Examples
// Create an Array
// const fruits7 = ["Banana", "Orange", "Apple", "Mango"];

// // At position 2, add "Lemon" and "Kiwi":
// const fruits2 = fruits7.toSpliced(2, 0, "Lemon", "Kiwi");

// console.log(fruits2)

// Description
// The toSpliced() method adds and/or removes array elements.

// The toSpliced() method returns a new array.

// The toSpliced() method does not change the original array.

// The toSpliced() method is the copying version of the splice() method.

// Syntax
// array.toSpliced(index, count, item1, ....., itemX)
// Parameters

// index	Required.
// The index (position) to add or remove items.
// A negative value counts from the end of the array.
// count	Optional.
// Number of items to be removed.
// item1,...	Optional.
// The new elements(s) to be added.
// Return Value
// Type	Description
// Array	A new array including the changes.



// toString()	Converts an array to a string, and returns the result

// Example
// Convert an array to a string:

const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits8.toString();

console.log(text)// Banana,Orange,Apple,Mango

// Description
// The toString() method returns a string with array values separated by commas.

// The toString() method does not change the original array.

// Syntax
// array.toString()
// Parameters
// NONE
// Return Value
// Type	Description
// A string	The array values separated by commas.




// unshift()	Adds new elements to the beginning of an array, and returns the new length

// Example
// Add new elements to an array:

const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
fruits9.unshift("Lemon","Pineapple");

console.log(fruits9) //[ 'Lemon', 'Pineapple', 'Banana', 'Orange', 'Apple', 'Mango' ]


// Description
// The unshift() method adds new elements to the beginning of an array.

// The unshift() method overwrites the original array.

// Syntax
// array.unshift(item1, item2, ..., itemX)
// Parameters
// Type	Description
// item1
// item2
// ..
// itemX	The item(s) to add to the array.
// Minimum one item is required.

// Return Value
// Type	Description
// A number	The new length of the array.

// valueOf()	Returns the primitive value of an array

// Examples
// Get the value of fruits:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits.valueOf();

console.log('values?',myArray)


// Description
// The valueOf() method returns the array itself.

// The valueOf() method does not change the original array.

// fruits.valueOf() returns the same as fruits.

// Syntax
// array.valueOf()
// Parameters
// NONE
// Return Value
// Type	Description
// An array	The valueOf() method returns itself!

// // // with()	Returns a new array with updated elements // not a standard library


// // Example
// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(2, "March");

// Description
// The with() method updates a specified array element.

// The with() method returns a new array.

// The with() method does not change the original array.

// Syntax
// array.with(index, value)
// Parameters

// index	Required.
// The index (position) of the item to change.
// A negative index counts from the end of the array.
// value	Required.
// The new value.
// Return Value
// A new array containing the changed element.

