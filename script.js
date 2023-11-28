"use strict";

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let clearCalc = document.querySelector(".clear");
let answer = document.querySelector(".equals");
let inpDisplay = document.querySelector("#numberDisplay");
let dot = document.querySelector(".decimal");
let firstNumber = "";
let operator = null;
let secondNumber = "";
let result = 0;

function operation(firstNumber, secondNumber) {
  if (operator === "+") {
    result = firstNumber + secondNumber;
  } else if (operator === "-") {
    result = firstNumber - secondNumber;
  } else if (operator === "x") {
    result = firstNumber * secondNumber;
  } else if (operator === "/" && secondNumber == "0") {
    result = `To infinity and beyond`;
  } else if (operator === "/") {
    result = firstNumber / secondNumber;
  }
}

let numArr = Array.from(numbers);
numArr.forEach((number) => {
  number.addEventListener("click", function () {
    if (operator === null) {
      firstNumber += number.textContent;
      inpDisplay.value = firstNumber;
      console.log(`first ${firstNumber}`);
    } else if (operator != null) {
      secondNumber += number.textContent;
      inpDisplay.value = secondNumber;
      console.log(`second ${secondNumber}`);
    }
  });
});

console.log(numbers);

let operatorArr = Array.from(operators);
operatorArr.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", function () {
    if (firstNumber != "" && secondNumber != "" && operator != null) {
      operation(Number(firstNumber), Number(secondNumber));
      console.log(result);
      firstNumber = result;
      inpDisplay.value = result;
      secondNumber = "";
    }
    if (firstNumber != "") {
      operator = operatorBtn.textContent;
      // inpDisplay.value = operator;
      console.log(`op ${operator}`);
    }
  });
});

answer.addEventListener("click", function () {
  if (secondNumber != "") {
    operation(Number(firstNumber), Number(secondNumber));
    console.log(result);
    firstNumber = result;
    inpDisplay.value = result;
    secondNumber = "";
    operator = null;
  }
});

clearCalc.addEventListener("click", function () {
  firstNumber = "";
  operator = null;
  secondNumber = "";
  result = 0;
  inpDisplay.value = "";
});

dot.addEventListener("click", function () {
  if (
    operator === null &&
    firstNumber != "" &&
    firstNumber.includes(".") === false
  ) {
    firstNumber += ".";
    inpDisplay.value = firstNumber;
  } else if (
    operator != null &&
    secondNumber != "" &&
    secondNumber.includes(".") === false
  ) {
    secondNumber += ".";
    inpDisplay.value = secondNumber;
  }
});
//keyboard input is janky
// let numRegex = /[0-9]/g;
// let opRegex = /[+\-*/]/g;
// document.addEventListener("keydown", (event) => {
//   if (operator === null && numRegex.test(event.key)) {
//     firstNumber += event.key;
//     inpDisplay.value = firstNumber;
//     console.log(`first ${firstNumber}`);
//   } else if (operator != null && numRegex.test(event.key)) {
//     secondNumber += event.key;
//     inpDisplay.value = secondNumber;
//     console.log(`second ${secondNumber}`);
//   }

//   if (
//     firstNumber != "" &&
//     secondNumber != "" &&
//     operator != null &&
//     opRegex.test(event.key)
//   ) {
//     operation(Number(firstNumber), Number(secondNumber));
//     console.log(result);
//     firstNumber = result;
//     inpDisplay.value = result;
//     secondNumber = "";
//   }
//   if (firstNumber != "" && opRegex.test(event.key)) {
//     operator = event.key;
//   }

//   if (event.key == "Enter") {
//     operation(Number(firstNumber), Number(secondNumber));
//     console.log(result);
//     firstNumber = result;
//     inpDisplay.value = result;
//     secondNumber = "";
//   }
//   console.log(event);
// });
