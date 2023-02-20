const numberOneButton = document.querySelector('#numberOneButton');
const numberTwoButton = document.querySelector('#numberTwoButton');
const numberThreeButton = document.querySelector('#numberThreeButton');
const numberFourButton = document.querySelector('#numberFourButton');
const numberFiveButton = document.querySelector('#numberFiveButton');
const numberSixButton = document.querySelector('#numberSixButton');
const numberSevenButton = document.querySelector('#numberSevenButton');
const numberEightThreeButton = document.querySelector('#numberEightButton');
const numberNineButton = document.querySelector('#numberNineButton');
const numberZeroButton = document.querySelector('#numberZeroButton');
const resultButton = document.querySelector('#resultButton');
const plusButton = document.querySelector('#plusButton');
const minusButton = document.querySelector('#minusButton');
const multiplyButton = document.querySelector('#mulitplyButton');
const divideButton = document.querySelector('#divideButton');
const percentButton = document.querySelector('#percentButton');
const plusMinusButton = document.querySelector('#plusMinusButton');
const clearButton = document.querySelector('#clearButton');
const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.numberButtons');
const operationButtons = document.querySelectorAll('.operationButtons');

let displayValue = ''

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayValue += button.textContent
        display.textContent = displayValue
    });
});

clearButton.addEventListener('click', () => {
    displayValue = ''
    display.textContent = displayValue
})

function add(num1, num2) {
    return (num1 + num2)
}

function subtract(num1, num2) {
    return (num1 - num2)
}

function multiply (num1, num2) {
    return (num1 * num2)
}

function divide(num1, num2) {
    return (num1 / num2)
}

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2)
    }
    else if (operator === "-") {
        return subtract(num1, num2)
    }
    else if (operator === "*") {
        return multiply(num1, num2)
    }
    else if (operator === "/") {
        return divide(num1, num2)
    }
}

