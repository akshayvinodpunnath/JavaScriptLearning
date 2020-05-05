const defaultResult = 0;
let currentResult = defaultResult ;

function add() {
    const enteredNumber = parseInt(userInput.value);
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + parseInt(enteredNumber);
    outputResult(currentResult, calcDescription);
}

function multiply() {
    const enteredNumber = parseInt(userInput.value);
    const calcDescription = `${currentResult} * ${enteredNumber}`;
    currentResult = currentResult * parseInt(enteredNumber);
    outputResult(currentResult, calcDescription);
}

function subtract() {
    const enteredNumber = parseInt(userInput.value);
    const calcDescription = `${currentResult} / ${enteredNumber}`;
    currentResult = currentResult / parseInt(enteredNumber);
    outputResult(currentResult, calcDescription);
}

function divide() {
    const enteredNumber = parseInt(userInput.value);
    const calcDescription = `${currentResult} / ${enteredNumber}`;
    currentResult = currentResult / parseInt(enteredNumber);
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);