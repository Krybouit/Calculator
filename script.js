const btnContainer = document.getElementById("buttons-container");
const numBtns = document.querySelectorAll(".cal-nums");
const screenNum = document.getElementById("num");
const operatorBtns = document.querySelectorAll(".operator-btn");
const result = document.getElementById("result");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");

let number1 = "";
let operator = "";
let number2 = "";



numBtns.forEach(button => button.addEventListener("click", () => {
    if(operator === "") {
        appendNumber(button.textContent)
    } else {
        appendNumber2(button.textContent)
    }
}));

operatorBtns.forEach(button => button.addEventListener("click", () => {
    number1 = screenNum.textContent;
    operator = button.textContent;
    
}));

result.addEventListener("click", function() {
    let convert1 = +number1;
    let convert2 = +number2;
    operate(convert1, convert2);
})


function appendNumber(number) {
    if(screenNum.textContent === "0") {
      screenNum.textContent = "";
    }
    screenNum.textContent += number;
    number1 = screenNum.textContent;
}

function appendNumber2(number) {
    if(screenNum.textContent === number1) {
        screenNum.textContent = "";
      }
    screenNum.textContent += number
    number2 = screenNum.textContent
}


clearBtn.addEventListener("click", () => {
    screenNum.textContent = 0;
    number1 = "";
    operator = "";
    number2 = "";
})

deleteBtn.addEventListener("click", () => {
    if(screenNum.textContent === number1) {
        number1 = number1.slice(0, -1);
       screenNum.textContent = number1
    } else if(screenNum.textContent === number2) {
        number2 = number2.slice(0, -1);
        screenNum.textContent = number2
    }
 })


function operate(num1, num2) {
    if(operator === "+") {
        add(num1, num2)
    } else if (operator === "-") {
        subtract(num1, num2)
    }  else if (operator === "x") {
        multiply(num1, num2)
    }   else if (operator === "÷") {
        divide(num1, num2)
    }
}


function add(a, b) {
    screenNum.textContent = a + b;
}

function subtract(a, b) {
    screenNum.textContent = a - b;
}

function multiply(a, b) {
    screenNum.textContent = a * b;
}

function divide(a, b) {
    screenNum.textContent = a / b;
}



