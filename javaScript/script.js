
let display = document.querySelector('#numberTxt') //Number display for calculator


//change numbers on display
let numbers = document.querySelectorAll('.numberBtn');

for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', numbersClicked)
}

function numbersClicked(e) {
    let x = this.innerHTML
   
    //Limit number aditions so digits dont go outside display 
    if (display.textContent.length <= 9) {
        if (display.textContent == '0'){
            display.textContent = x;
        } else {
            display.textContent += x
        }
    }

    //Allows number to change after a function button has been selected
    if (variableCounter > 0) {
        display.textContent = x;
        variableCounter = 0;
    }
    
    //Allows number to change after solve or clear
    if (mathEquation == 'solve' || mathEquation == 'cleared') {
        display.textContent = x;
        mathEquation = "";
    } 
}

//delete button
let deleteBtn = document.querySelector('#delete')
deleteBtn.addEventListener('click', deleteNumber )

function deleteNumber(e) {
    let x = display.textContent 

    x = x.slice(0, -1);
    display.textContent = x;
    
}

//Button Functions

let equationVariable = 0; 
let variableCounter = 0;
let mathEquation;

//equal button
let equalBtn = document.querySelector('#equal')
equalBtn.addEventListener('click', equalFunction)

function equalFunction(e) {
    
    if (mathEquation == 'add') {
        
        x = parseFloat(display.textContent)
        let solution = x + equationVariable;
        display.textContent = solution;
        while (display.textContent.length > 9) {
            display.textContent = display.textContent.slice(0, -1);
        }
        equationVariable = 0;
        mathEquation = 'solve';
        
    } else if (mathEquation == 'subtract') {
        
        x = parseFloat(display.textContent) 
        let solution = equationVariable - x;
        display.textContent = solution;
        equationVariable = 0;
        mathEquation = 'solve';
        
    } else if (mathEquation == 'multiply') {
        
        x = parseFloat(display.textContent) 
        let solution = equationVariable * x;
        display.textContent = solution;
        while (display.textContent.length > 9) {
            display.textContent = display.textContent.slice(0, -1);
        }
        equationVariable = 0;
        mathEquation = 'solve';
        
    } else if (mathEquation == 'divide') {
        x = parseFloat(display.textContent) 
        let solution = equationVariable / x;
        display.textContent = solution;
        while (display.textContent.length > 9) {
            display.textContent = display.textContent.slice(0, -1);
        }
        equationVariable = 0;
        mathEquation = 'solve';
        
    }
    
}

//clear

let acBtn = document.querySelector('#clear');
acBtn.addEventListener('click', clearFunction)

function clearFunction (e) {
    display.textContent = 0;
    let equationVariable = 0; 
    let mathEquation = 'cleared';
}

//add
let addBtn = document.querySelector('#add')
addBtn.addEventListener('click', addFunction)

function addFunction (e) {

    x = parseFloat(display.textContent)
    equationVariable = parseFloat(equationVariable) + x;
    x = 0;
    variableCounter ++;
    mathEquation = 'add';
    
}

//subtract
let subBtn = document.querySelector('#minus')
subBtn.addEventListener('click', subFunction)

function subFunction (e) {

    x = parseFloat(display.textContent)
    equationVariable = parseFloat(equationVariable) + x;
    variableCounter ++;
    mathEquation = 'subtract';
    
}

//multiply
let multBtn = document.querySelector('#multiply')
multBtn.addEventListener('click', multFunction)

function multFunction (e) {
    let x = parseFloat(display.textContent)
    equationVariable = x;
    variableCounter ++;
    mathEquation = 'multiply';
    
}

//divide
let divideBtn = document.querySelector('#divide')
divideBtn.addEventListener('click', divideFunction)

function divideFunction (e) {

    let x = parseFloat(display.textContent)
    equationVariable = x;
    variableCounter ++;
    mathEquation = 'divide';
    
}


