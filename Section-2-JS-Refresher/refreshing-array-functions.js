// Refreshinf Array Functions such as .map (more examples https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

const numbs = [1, 2, 3, 4];

const newNumbs = numbs.map((num) => {
  return num * 2;
});

console.log(numbs);
// [1, 2, 3, 4];
console.log(newNumbs);
// [2, 4, 6, 8]
