
//change numbers on display
let numbers = document.querySelectorAll('.numberBtn');
let display = document.querySelector('#numberTxt')

for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', numbersClicked)
}

function numbersClicked(e, ) {
    let x = this.innerHTML
    console.log(x);
    if (display.textContent == '0000000000'){
        display.textContent = x;
    } else {
        display.textContent += x
    }
    
}

