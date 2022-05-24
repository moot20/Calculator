let firstOperand = ''
let secondOperand = ''
let currentOperation = null

const clearButton = document.getElementById('btnDel');
const display = document.getElementById('display');

clearButton.addEventListener('click', clear);

function clear() {
  firstOperand = ''
  secondOperand = ''
  currentOperation = null
  display.textContent = 0;
}

function add(a, b) {
  let number = a + b;
  number = Math.round(number * 1000) / 1000;
  return number;
}

function subtract(a, b) {
  let number = a - b;
  number = Math.round(number * 1000) / 1000;
  return number;
}

function multiply(a, b) {
  let number = a * b;
  number = Math.round(number * 1000) / 1000;
  return number;
}

function divide(a, b) {
  let number = a / b;
  number = Math.round(number * 1000) / 1000;
  return number;
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      return subtract(a, b)
    case '*':
      return multiply(a, b)
    case '/':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}