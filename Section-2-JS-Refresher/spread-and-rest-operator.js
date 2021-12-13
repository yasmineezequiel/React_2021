// Spread and Rest Operators

// The operator of both are the same (...) but will depend of where do we call to identify as spread or as rest operators

// Spread; Used to split up array elements or object properties. Example:
oldArray = [1, 2, 3];
newArray = [...oldArray, 4, 5, 6];
console.log(newArray);
// [1, 2, 3, 4, 5, 6]

oldObject = { address: "somewhere", phone: 1234 };
newObject = { ...oldObject, country: "Narnia" };
console.log(newObject);
// {address: 'somewhere', phone: 1234, country: 'Narnia'}

// Rest: Used to merge a list of function arguments/params into an array

function sortArgs(...args) {
  return args.sort();
}

function filterArgs(...args) {
  return args.filter((element) => element === 1);
}
console.log(filterArgs(1, 11, 111, 300));
// [1]
