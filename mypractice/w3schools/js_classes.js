// JavaScript Classes
// A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method:

// Example
// Create a Car class, and then create an object called "mycar" based on the Car class:

class Car {  // Create a class
  constructor(brand) {  // Class constructor
    this.carname = brand;  // Class body/properties
  }
}
mycar = new Car("Ford");  // Create an object of Car class


// Class Methods
// constructor()	A special method for creating and initializing objects created within a class


// Class Keywords
// extends	Extends a class (inherit)
// Create a class named "Model" which will inherit the methods from the "Car" class:

class Car1 {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car1 {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new Model("Ford", "Mustang");

// Description
// The extends keyword is used to create a child class of another class (parent).

// The child class inherits all the methods from another class.

// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

// Note: From the example above; The super() method refers to the parent class. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

// Syntax
// class childClass extends parentClass

// static	Defines a static method for a class

    class bar {
        constructor(brand) {
        this.carname = brand;
        }
        static hello() {  // static method
        return "Hello!!";
        }
    }
    
    mycar = new bar("Ford");
    
    console.log(bar.hello())
  
  //and NOT on the 'mycar' object:
  //document.getElementById("demo").innerHTML = mycar.hello();
  //this would raise an error.

//   Description
// The static keyword defines static methods for classes.

// Static methods are called directly on the class (Car from the example above) - without creating an instance/object (mycar) of the class.




// super	Refers to the parent class

// Description
// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods
// Example
// Create a class named "Model" which will inherit the methods from the "Car" class, by using the extends keyword.

// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods:

    class zar {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
    }

    class zodel extends zar {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
    }

    mycar = new zodel("Ford", "Mustang");

   console.log( mycar.show())