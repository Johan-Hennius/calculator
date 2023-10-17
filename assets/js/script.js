

document.addEventListener("DOMContentLoaded", function () {

    const display = document.getElementById("display");
    const buttons = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"];
    const calculatorButtons = document.getElementById("calculator-buttons");

    //create calculator buttons
    buttons.forEach(button => {
        const btnElement = document.createElement("button");
        btnElement.textContent = button;

        btnElement.classList.add("btn", button === "=" || button === "C" ? "btn-danger" : "btn-primary");

        btnElement.addEventListener("click", function() {
            handleButtonClick(button);
        });

        calculatorButtons.appendChild(btnElement);
    });

    // initialise calculation variables
    let operand1 = "";
    let operand2 = "";
    let operator = "";
    let sum = "";


    function handleButtonClick(button) {
        if (button >= "0" && button <= "9") {

            operand2 += button;
            display.value = button;

        } else if (["+", "-", "*", "/"].includes(button)) {

            operator = button;

            if (sum != result) {     
                         
                operand1 = operand2;
                operand2 = "";

            } else {

                operand1 = sum;
                operand2 = operand2;

            }               

        } else if (button === "C") {

            operand1 = operand2 = operator = "";
            display.value = "";

        } else if (button === "=") {

            // sum here
            result = 0;
            operand1 = parseFloat(operand1);
            operand2 = parseFloat(operand2);

            if (sum != result) { 

                switch (operator) {
                    case "+":
                        result = operand1 + operand2;
                        break
                    case "-":
                        result = operand1 - operand2;
                        break
                    case "*":
                        result = operand1 * operand2;
                        break
                    case "/":
                        result = operand1 / operand2;
                        break
                };

                display.value = result;
                sum = result;
                operand1 = sum;
                operand2 = "";  

            } else {

                switch (operator) {
                    case "+":
                        result = sum + operand2;
                        break
                    case "-":
                        result = sum - operand2;
                        break
                    case "*":
                        result = sum * operand2;
                        break
                    case "/":
                        result = sum / operand2;
                        break
                };

                display.value = result;
                sum = result;
                operand1 = sum;
                operand2 = "";
            }

        }

    }

});