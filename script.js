let firstVar = 0;
let operator = "";
let secondVar = 0;
let displayValue = "";
const digits = document.querySelectorAll(".digit");
const display = document.getElementById("result");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
const operators = document.querySelectorAll(".operator");

// add eventListeners
clearButton.addEventListener("click", () => {
    firstVar = 0;
    operator = "";
    secondVar = 0;
    displayValue = "";
    updateDisplay();
});

operators.forEach(btn => {
    btn.addEventListener("click", ()=>{
        operator = btn.id;
        firstVar = parseFloat(displayValue);
        displayValue = "";
        updateDisplay();
    });
});

digits.forEach(digit => {
    digit.addEventListener("click", () => {
        if(displayValue.length < 23){
            displayValue += digit.id;
        }
        updateDisplay();
    });
});

equalsButton.addEventListener("click", ()=>{
    secondVar = parseFloat(displayValue);
    operate();
});


function updateDisplay(){
    display.textContent = displayValue;
}

function operate(){
    switch (operator){
        case "plus":
            displayValue = (firstVar+secondVar).toString();
            firstVar = parseFloat(displayValue);
            secondVar = 0;
            updateDisplay();
            break;
        case "minus":
            displayValue = (firstVar-secondVar).toString();
            firstVar = parseFloat(displayValue);
            secondVar = 0;
            updateDisplay();
            break;
        case "multiply":
            displayValue = (firstVar*secondVar).toString();
            firstVar = parseFloat(displayValue);
            secondVar = 0;
            updateDisplay();
            break;
        case "divide":
            displayValue = (firstVar/secondVar).toString();
            firstVar = parseFloat(displayValue);
            secondVar = 0;
            updateDisplay();
            break;
        default:
            console.log("Invalid operator");
    }
}