const defaultResult = 0;
let currentResult = defaultResult ;
let logEntries = [];

// Gets input from input field
function getUserInput () {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput (operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, logEntries.join(' ')); // from vendor file
}

// Add functionality
function add() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += parseInt(enteredNumber);
    createAndWriteOutput('+',initialResult,enteredNumber);
    logEntries.push(enteredNumber);
    logEntries.push('+');
    console.log(logEntries);
}

// Multiply functionality
function multiply() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= parseInt(enteredNumber);
    createAndWriteOutput('*',initialResult,enteredNumber);
    logEntries.push(enteredNumber);
    logEntries.push('*');
    console.log(logEntries)
}

// Subtract functionality
function subtract() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= parseInt(enteredNumber);
    createAndWriteOutput('-',initialResult,enteredNumber);
    logEntries.push(enteredNumber);
    logEntries.push('-');
    console.log(logEntries)
}

// Divide functionality
function divide() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= parseInt(enteredNumber);
    createAndWriteOutput('/',initialResult,enteredNumber);
    logEntries.push(enteredNumber);
    logEntries.push('/');
    console.log(logEntries)
}

function calcReset() {
    logEntries = [];
    defaultResult = 0;
    currentResult = defaultResult ;
    outputResult(currentResult, '')
}

// Calling Event Handlers
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
//resetCalc.addEventListener('click', calcReset);