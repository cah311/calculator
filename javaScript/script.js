
let display = document.querySelector('#numberTxt')


//change numbers on display
let numbers = document.querySelectorAll('.numberBtn');

for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', numbersClicked)
}

function numbersClicked(e) {
    let x = this.innerHTML
    console.log(x);
    
    if (display.textContent == '0000000000'){
        display.textContent = x;
    } else {
        if (display.textContent.length < 10) {
            display.textContent += x
        }
    }
    
}

//delete button
let deleteBtn = document.querySelector('#delete')
deleteBtn.addEventListener('click', deleteNumber )

function deleteNumber(e) {
    let x = display.textContent 

    x = x.slice(0, -1);
    display.textContent = x;
    if (display.textContent.lenth === 0) {
        display.textContent == '0';
    }
}