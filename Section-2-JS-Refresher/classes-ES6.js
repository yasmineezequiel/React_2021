// classes are blue prints for js objects, a class can have properties and methods.
// Methods are simply functions related to a class and properties are varibles related to a class.
// Create js objects with classes as blue prints.

class Person {
  name = "Foo"; // property
  call = () => {}; // method
}

// a class can be instantiated with the new keyword in js:
const myPerson = new Person();
myPerson.call();
console.log(myPerson.name);

class Human {
  constructor() {
    this.gender = "unknow";
  }
  printMyGender() {
    console.log(this.gender);
  }
}
const human = new Human();
human.printMyGender();
// unknow

class Person {
  constructor() {
    this.name = "Foo";
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
// Foo

// How to create class inheritance in js using the above class example as Person inheriting from Human:

class Person extends Human {
  constructor() {
    super(); // this super needs to be called inside the constructor
    this.name = "Foo";
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printMyGender();
// Foo
// unknow
