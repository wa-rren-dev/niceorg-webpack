import { remove } from "lodash";

const array = ["one", "two", "three", "four", "five"];

remove(array, item => {
  return item === "one";
});

console.log(array);

console.log("working");

console.log("whooooo");
