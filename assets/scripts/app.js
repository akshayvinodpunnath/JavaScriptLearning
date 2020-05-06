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

function numberButton(num) {
    userInput.value = num
}

// Calling Event Handlers
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
resetCalc.addEventListener('click', calcReset);

oneBtn.addEventListener('click', function() {
    numberButton(1);
},false);

twoBtn.addEventListener('click', function() {
    numberButton(2);
},false);


threeBtn.addEventListener('click', function() {
    numberButton(3);
},false);

fourBtn.addEventListener('click', function() {
    numberButton(4);
},false);

fiveBtn.addEventListener('click', function() {
    numberButton(5);
},false);

sixBtn.addEventListener('click', function() {
    numberButton(6);
},false);

sevenBtn.addEventListener('click', function() {
    numberButton(7);
},false);

eightBtn.addEventListener('click', function() {
    numberButton(8);
},false);

nineBtn.addEventListener('click', function() {
    numberButton(9);
},false);

zeroBtn.addEventListener('click', function() {
    numberButton(0);
},false);