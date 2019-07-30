/**
 * Vehicle Class
 * */

//  Parent Class
class Vehicle {
  // constructor function - called before everything else; used to set initial data or setup methods
  constructor(make, model, year) {
    //   use 'this' keyword to set each property to that particular object instance
    this._make = make;
    this._model = model;
    this._year = year;
    console.log(
      "Vehicle Class Constructor (Parent Class) :  Runs automatically before anything else!"
    );
  }

  //   Setter - Encapsulation - used to set a property of an object
  set make(newMake) {
    this._make = newMake;
  }

  // Getter - Encapsulation - used to retrieve the value of a property
  get make() {
    return this._make;
  }

  set model(newModel) {
    this._model = newModel;
  }

  get model() {
    return this._model;
  }

  set year(newYear) {
    this._year = newYear;
  }

  get year() {
    return this._year;
  }

  //   default method offered by the class
  getPropulsion() {
    return "Gas powered";
  }
}

// Child Class
// Child class inherits from the Parent class - Inheritance
class Car extends Vehicle {
  constructor(make, model, year, type) {
    // super() is used for setting the properties inherited from the Parent class - mandatory
    super(make, model, year);
    this._type = type;
    console.log(
      "Car Class Constructor :  Runs automatically before anything else!"
    );
  }

  set type(newType) {
    this._type = newType;
  }

  get type() {
    return this._type;
  }
  // Method override : Child class creates its own method instead of defualt one provided by the Parent class
  getPropulsion() {
    return "Electric powered";
  }

  hybridCars() {
    console.log(
      "Hybrid cars are " +
      super.getPropulsion() + // fetch method from parent class
        " and " +
        this.getPropulsion() // call method from current child class
    );
  }

  // static method : can be called directly using the class name; no need of object.
  static getDefaultTyres() {
    console.log("Car has 4 wheels!");
  }
}

// Instantiating an Object using the Class
const myCar = new Car("Tesla", "Model S", 2019, "Sedan");
console.log("myCar Object : ", myCar);

// using the getter methods to fetch the object properties
console.log("The car is a " + myCar.make + " " + myCar.model);

// using the setter methods to set new property values to the object
myCar.make = "Mercedes";
myCar.model = "GLC 350e 4MATIC";
myCar.type = "SUV";

console.log("The car is a " + myCar.make + " " + myCar.model);
myCar.getPropulsion();
myCar.hybridCars();

// calling a static method directly from a class and not using an object
Car.getDefaultTyres();
// myCar.getDefaultTyres(); // ERROR : static methods throw error when called using an object

console.log("The type of class is : ", typeof Vehicle); // class type is a function
console.log("The type of class object is : ", typeof myCar); // object type is object
console.log("Is object an instance of class? ", myCar instanceof Car); // true
console.log(
  "Is object an instance of parent class? ",
  myCar instanceof Vehicle
); // true

// A class can also be created as a variable to pass around like a first-class function.
let bike = class Motorcycle extends Vehicle {
  constructor(make, model, year, engine) {
    super(make, model, year);
    this._engine = engine;
    console.log(
      "Motorcycle Class Constructor :  Runs automatically before anything else!"
    );
  }
  /**
   * NOTE:
   * If the child class has a constructor and does not call the super() function, an error is thrown
   * by the JS compiler :
   * 'Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or
   * returning from derived constructor'.
   * This error is not thrown when the child class does not have a constructor!
   */
  set engine(newEngine) {
    this._engine = newEngine;
  }

  get engine() {
    return this._engine;
  }

  //   Method override over parent class
  getPropulsion() {
    return "Gas powered";
  }
};

// new bike(); // calling a class with a variable

// Instantiating an object with a class variable instead of using the class name itself.
const ducati = new bike("Ducati", "SuperSport S", 2019, 937);
console.log("The engine displacement is ", ducati.engine + "cc");
ducati.getPropulsion();

// Class as a first class citizen
/**
 * In ES6, classes are first class citizens.
 * In other words, they can be passed around in your scripts just like you would pass
 * variables, objects, and functions.
 */

//  Step I : create a class using a variable
let motion = class Movement {
  constructor() {
    console.log("Moving...");
  }
};

// Step II : Function takes class as an argument
const moveForward = movement => {
  new movement(); // Moving...
};

// Step II : Function takes class as an argument
const moveBackward = () => console.log("backward"); // backwards

// Step III : Call the function and pass the class variable as an argument
moveForward(motion);

// Alternate one-off method : declare class in the argument itself
moveBackward(
  new (class {
    constructor() {
      console.log("Moving, again..."); // Moving, again..
    }
  })()
);
