const defaultResult = 0;
let currentResult = defaultResult ;

// Gets input from input field
function getUserInput () {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput (operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

// Add functionality
function add() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult + parseInt(enteredNumber);
    createAndWriteOutput('+',initialResult,enteredNumber);
}

// Multiply functionality
function multiply() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult * parseInt(enteredNumber);
    createAndWriteOutput('*',initialResult,enteredNumber);
}

// Subtract functionality
function subtract() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult - parseInt(enteredNumber);
    createAndWriteOutput('-',initialResult,enteredNumber);
}

// Divide functionality
function divide() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult / parseInt(enteredNumber);
    createAndWriteOutput('/',initialResult,enteredNumber);
}

// Calling Event Handlers
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);