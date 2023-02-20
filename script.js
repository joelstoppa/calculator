const cancelButton = document.querySelector('#cancelButton');
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

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayValue += ` ${button.textContent} `
        display.textContent = displayValue
    })
})

clearButton.addEventListener('click', () => {
    displayValue = ''
    display.textContent = displayValue
})

resultButton.addEventListener('click', () => {
    const calculate = displayValue.split(' ');
    let result = parseInt(calculate[0]);
    let operator = null;
    for (let i = 1; i < calculate.length; i++) {
        const token = calculate[i];
        if (['+', '-', '*', '/'].includes(token)) {
            operator = token;
        } else {
            const num = parseInt(token);
            if (operator === '+') {
                result = add(result, num);
            } else if (operator === '-') {
                result = subtract(result, num);
            } else if (operator === '*') {
                result = multiply(result, num);
            } else if (operator === '/') {
                result = divide(result, num);
            }
        }
    }
    displayValue = result.toString();
    display.textContent = displayValue;
});

function add(num1, num2) {
    return (num1 + num2);
};

function subtract(num1, num2) {
    return (num1 - num2)
}

function multiply (num1, num2) {
    return (num1 * num2)
}

function divide(num1, num2) {
    if (num2 === 0){
        return `CAN\'T DIVIDE BY ZERO`
    }
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

