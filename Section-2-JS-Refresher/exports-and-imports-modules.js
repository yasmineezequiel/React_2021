// imports and exports modules, allows to import and export specific files or specific functions of a file

// app.js
import person from "./person.js";
import prs from "./person.js"; // I can choose whatever name I want such as prs instead of person as long as the file path is correct it should work

import { baseData } from "./utility.js";
import { deleteData } from "./utility.js";
// since both functions are coming from the same file I can have them inside the object together:
import { baseData, deleteData } from "./utility.js";

// person.js
const person = {
  name: "Sith",
};

export default person;

// utility.js
export const deleteData = () => {};
export const baseData = [];

// other ways of importing:
import { smth as Smith } from "./utility.js";
import * as bundled from "./utility.js"; // when you have multiple exports in a file you can import them all like this
