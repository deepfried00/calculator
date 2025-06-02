const add = function(num1 , num2) {
	return Math.round(num1 + num2);
};

const subtract = function(num1 , num2) {
	return  Math.round(num1 - num2);
};

const multiply = function(num1, num2) {
    return Math.round(num1 * num2);

};

const divide = function (num1, num2) {
    if (num1 == 0 && num2 == 0 ){
        return "undefined";
    }
    return Math.round(num1 / num2);
}


const operate = function(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }

}


const buttonContainer = document.querySelector(".buttons");
const screen = document.querySelector(".screen");
let displayResult = false;
buttonContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON'){
        let buttontext =  e.target.textContent;

        console.log(buttontext);

        if (buttontext.trim() === "=") {
                const data = screen.textContent;
                const [number1,operator, number2] = data.split(/([+\-*/])/);
                console.log({ number1, operator, number2});
                
                    if (!number1 || !operator || !number2) {
                    screen.textContent = "Error";
                    return;
                }


                const result = operate(operator, parseFloat(number1), parseFloat(number2));
                screen.textContent = result;
                displayResult = true;
        }
        else if (displayResult) {
            displayResult = false;
            screen.textContent = "";
           }
        else if (buttontext.trim() === "c") {
            screen.textContent = "";
        }
        else{
            screen.textContent += buttontext;
        }
        console.log("screen",screen.textContent);

    }
});




// console.log(add(2,1));
// console.log(subtract(2,1));
// console.log(multiply(2,1));
// console.log(divide(2,1));