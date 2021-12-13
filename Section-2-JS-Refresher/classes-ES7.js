// in next gen js is not needed to have constructor inside of a class when assigning a property or method:

// ES6 property
class Building {
  constructor() {
    this.property = "value";
  }
}

// ES7 property
class Building {
  property = "value";
}

// ES6 method
class Building {
  myMethod() {
    this.property;
  }
}

// ES7 method (no need of this keyword in es7)
class Building {
  myMethod = () => {
    property;
  };
}

// example using './classes-ES6.js'

class Human {
  gender = "female";

  printMyGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Bar";

  printMyName = () => {
    console.log(this.name);
  };
}
const person = new Person();
person.printMyName();
person.printMyGender();
// Bar
// female
