const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const resetCalc = document.getElementById('reset-calc');
const zeroBtn = document.getElementById('btn-zero');
const oneBtn = document.getElementById('btn-one');
const twoBtn = document.getElementById('btn-two');
const threeBtn = document.getElementById('btn-three');
const fourBtn = document.getElementById('btn-four');
const fiveBtn = document.getElementById('btn-five');
const sixBtn = document.getElementById('btn-six');
const sevenBtn = document.getElementById('btn-seven');
const eightBtn = document.getElementById('btn-eight');
const nineBtn = document.getElementById('btn-nine');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
