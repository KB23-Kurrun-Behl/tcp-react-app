import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";


ReactDOM.render(<App />, document.getElementById("root"));

// EXTRA NOTES

/*

Map --- Create a new array by doing something with each item inside the array

var numbers = [3, 4, 5, 6];

function double(x) {
  return x * 2;
}

numbers.map(double);


Filter --- Create a new array by keeping the items that return true

function check(num) {
  return num > 3;
}

const newArray = check(num);
console.log(newArray);


Reduce --- Accumulate a value by doing something to each item inside the array

numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});

---------- The following will return the sum of all the numbers inside the numbers array


Find --- Find the first item that matches a statement from the array

numbers.find(function (num) {
  return num > 3;
});

---------- The following will not check the whole array, but only return the FIRST item to meet the criteria of the conditional statement

*/
