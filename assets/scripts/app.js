const defaultResult = 0;
let currentResult = defaultResult ;
let logEntries = [defaultResult];

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
    logEntries.push('+');
    logEntries.push(enteredNumber);
    console.log(logEntries);
}

// Multiply functionality
function multiply() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= parseInt(enteredNumber);
    createAndWriteOutput('*',initialResult,enteredNumber);
    logEntries.push('*');
    logEntries.push(enteredNumber);
    console.log(logEntries)
}

// Subtract functionality
function subtract() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= parseInt(enteredNumber);
    createAndWriteOutput('-',initialResult,enteredNumber);
    logEntries.push('-');
    logEntries.push(enteredNumber);
    console.log(logEntries)
}

// Divide functionality
function divide() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= parseInt(enteredNumber);
    createAndWriteOutput('/',initialResult,enteredNumber);
    logEntries.push('/');
    logEntries.push(enteredNumber);
    console.log(logEntries)
}

function calcReset() {
    currentResult = defaultResult ;
    logEntries = []
    logEntries.push(defaultResult);
    outputResult(currentResult, '');
    userInput.value = 0
}

// Calling Event Handlers
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
resetCalc.addEventListener('click', calcReset);