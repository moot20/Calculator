let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetScreen = false

const clearButton = document.getElementById('btnDel');
const display = document.getElementById('display');
const numbButton = document.querySelectorAll('.btnNum')
const operatorButton = document.querySelectorAll('.btnOp')
const equalButton = document.getElementsByClassName('btnEqual')

clearButton.addEventListener('click', clear);

numbButton.forEach((button) => {
    button.addEventListener('click', () => setNumb(button.textContent));
});

operatorButton.forEach((button) => {
  button.addEventListener('click', () => {
    if (firstOperand !== '') {
      display.textContent = operate(currentOperation, firstOperand, display.textContent);
      firstOperand = display.textContent;
      currentOperation = button.textContent;
      shouldResetScreen = true;
    } else {
      currentOperation = button.textContent;
      firstOperand = display.textContent;
      shouldResetScreen = true;
    }
  })
})

function setNumb (number) {
  if (display.textContent === '0' || shouldResetScreen)
    resetScreen()
      display.textContent += number;
}

function resetScreen() {
  display.textContent = ''
  shouldResetScreen = false
}

function clear() {
  firstOperand = ''
  secondOperand = ''
  currentOperation = null
  display.textContent = '';
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
    case 'X':
      return multiply(a, b)
    case '/':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}