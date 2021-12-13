// Reference and primitive types in js

// Primitive types are: boolean, string, numbers. When you re-assign a variable into another variable it will copy the value

const num = 1;
const num2 = num;

console.log(num2); // num2 is a copy of num
// 1

// Reference types are: Objects and Arrays. When you re-assign a variable into another variable it will copy the POINTER, which points to the same object in memory as person in the below example and it's the same for arrays

const person = {
  name: "Foo",
};

const secondPerson = person;
console.log(secondPerson);
// [object Object] {
//   name: "Foo"
// }

person.name = "Moo";
console.log(secondPerson);
// [object Object] {
//   name: "Moo"
// }

// Reference types can lead to unexpected behavior in React cause maybe we manipulate one object/array in one place of the application and accidentaly having another usage in other place of the app. To avoid this issue with object and arrays we use the spread operator.

const person = {
  name: "Foo",
};

const secondPerson = {
  ...person,
};

person.name = "Moo";
console.log(secondPerson);
// [object Object] {
//   name: "Foo"
// }
