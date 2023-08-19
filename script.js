const btnContainer = document.getElementById("buttons-container");
const numBtns = document.querySelectorAll(".cal-nums")
const screenNum = document.getElementById("num");

let num1 = 0;
let operator = 0;
let num2 = 0;


numBtns.forEach(el => el.addEventListener("click", (event) => {
    let cow1 = screenNum.innerText = event.target.innerText;
    num1 = event.target.innerText;
    
    
}))





function add(number1, number2) {
    return number1 + number2;
}

function sub(num, num2) {
    return num - num2;
}

function multi(num, num2) {
    return num * num2;
}

function divide(num, num2) {
    return num / num2;
}



function operate() {
    let number1 = parseInt(prompt("first num here"));
    let operator = prompt("ope");
    let number2 = parseInt(prompt("sec"));
    

    if(operator == "add") {
        alert(add(number1, number2));
    }
}
