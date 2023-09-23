const btnContainer = document.getElementById("buttons-container");
const numBtns = document.querySelectorAll(".cal-nums");
const screenNum = document.getElementById("num");
const operatorBtns = document.querySelectorAll(".operator-btn");
const result = document.getElementById("result");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const decimal = document.getElementById("decimal");
let decimalAllowed = true;

let number1 = "";
let operator = "";
let number2 = "";
let holdResult = "";


numBtns.forEach(button => button.addEventListener("click", () => {
    if (operator == "") {
        appendNumber(button.textContent)
    } else if(!operator == "") {
        appendNumber2(button.textContent)
    }
}));


operatorBtns.forEach(element => {
    element.addEventListener("click", function buttonFocus() {
        document.querySelector(".focus")?.classList.remove("focus");
        element.classList.add("focus");
    })
})


operatorBtns.forEach(button => button.addEventListener("click", () => {
    let convert = +number1;
    let convert2 = +number2;
     if (!number1 == "" && !number2 == "") {
        operate(convert, convert2)
    } else if (!holdResult == "" && !number2 == "") {
        convert = +holdResult
        operate(convert, convert2)
    }
    if (!number1 == "" || !holdResult == "") {
        decimalAllowed = true
        operator = button.textContent;
    }
}));


function appendNumber(number) {
    if(operator == "" && number1 == "" || screenNum.textContent == 0) {
        screenNum.textContent = "";
    }
    number1 = screenNum.textContent += number
}


function appendNumber2(number) {
    if(!screenNum.textContent == number2) {
        screenNum.textContent = "";
    }
    screenNum.textContent += number
    number2 = screenNum.textContent
}


decimal.addEventListener("click", () => {
    if (screenNum.textContent == 0) {
        screenNum.textContent = "";
    }
    if(decimalAllowed == true && operator == "") {
       number1 = screenNum.textContent += decimal.textContent
        decimalAllowed = false
    } else if(decimalAllowed == true && !operator == "") {
        number2 = screenNum.textContent += decimal.textContent
        decimalAllowed = false
    }
})


result.addEventListener("click", function() {
     convert = +number1;
     convert2 = +number2;
     if(!holdResult == "" && number1 == "" && !number2 == ""){
        convert = +holdResult
        operate(convert, convert2);
        operator = "";
        document.querySelector(".focus")?.classList.remove("focus");
     } else if (!number1 == "" && !number2 == "") {
        operate(convert, convert2);
        operator = "";
        document.querySelector(".focus")?.classList.remove("focus");
     }
})


clearBtn.addEventListener("click", () => {
    screenNum.textContent = 0;
    number1 = "";
    operator = "";
    number2 = "";
    holdResult = "";
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
    screenNum.textContent = Math.round((a + b) * 100) / 100;
    holdResult = screenNum.textContent;
    number1 = "";
    number2 = "";
}


function subtract(a, b) {
    screenNum.textContent = Math.round((a - b) * 100) / 100;
    holdResult = screenNum.textContent;
    number1 = "";
    number2 = "";
}


function multiply(a, b) {
    screenNum.textContent = Math.round((a * b) * 100) / 100;
    holdResult = screenNum.textContent;
    number1 = "";
    number2 = "";
}


function divide(a, b) {
    if(a === 0 && b === 0) {
        screenNum.textContent = "ERROR"
        number1 = "";
        number2 = "";
    } else {
        screenNum.textContent = Math.round((a / b) * 100) / 100;
        holdResult = screenNum.textContent;
        number1 = "";
        number2 = "";
    }
}