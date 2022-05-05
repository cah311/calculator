
let display = document.querySelector('#numberTxt')


//change numbers on display
let numbers = document.querySelectorAll('.numberBtn');

for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', numbersClicked)
}

function numbersClicked(e) {
    let x = this.innerHTML
   
    
    if (display.textContent == '0000000000'){
        display.textContent = x;
    } else {
        if (display.textContent.length < 10) {
            display.textContent += x
        }
    }

    if (variableCounter > 0) {
        display.textContent = x;
        variableCounter = 0;
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

//equations 

let equationVariable = 0; 
let variableCounter = 0;

//add
let addBtn = document.querySelector('#add')

addBtn.addEventListener('click', addFunction)

function addFunction (e) {
    x = parseInt(display.textContent)
    equationVariable = equationVariable + x;
    variableCounter ++;
    console.log(equationVariable)
    
}
