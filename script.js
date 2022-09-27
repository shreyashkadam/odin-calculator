const numZero = document.getElementById('num-0')
const numOne = document.getElementById('num-1')
const numTwo = document.getElementById('num-2')
const numThree = document.getElementById('num-3')
const numFour = document.getElementById('num-4')
const numFive = document.getElementById('num-5')
const numSix = document.getElementById('num-6')
const numSeven = document.getElementById('num-7')
const numEight = document.getElementById('num-8')
const numNine = document.getElementById('num-9')

const displayLowerContainer = document.querySelector(".display-lower-container");

displayLowerContainer.textContent = 0;

let firstNumber = 0;


function maintainNumber(num) {
    firstNumber = firstNumber + num * (10 ** steps);
    steps++; 
}

function populateLowerDisplay(num){
    if(displayLowerContainer.textContent == "0"){
        displayLowerContainer.textContent = null;
    } 
    displayLowerContainer.textContent = displayLowerContainer.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim() + num;
    firstNumber = parseInt(displayLowerContainer.textContent);
}


numZero.addEventListener('click', () => {
    populateLowerDisplay(0);
})

numOne.addEventListener('click', () => {
    populateLowerDisplay(1);
})

numTwo.addEventListener('click', () => {
    populateLowerDisplay(2);
})

numThree.addEventListener('click', () => {
    populateLowerDisplay(3);
})

numFour.addEventListener('click', () => {
    populateLowerDisplay(4);
})

numFive.addEventListener('click', () => {
    populateLowerDisplay(5);
})

numSix.addEventListener('click', () => {
    populateLowerDisplay(6);
})

numSeven.addEventListener('click', () => {
    populateLowerDisplay(7);
})

numEight.addEventListener('click', () => {
    populateLowerDisplay(8);
})

numNine.addEventListener('click', () => {
    populateLowerDisplay(9);
})























function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

function subtract() {
    return arguments[0] - arguments[1];
}

function multiply() {
    prod = 1;
    for (let i = 0; i < arguments.length; i++) {
        prod = prod * arguments[i];
    }

    return prod;
}

function divide() {
    return arguments[0] / arguments[1];
}

function operate(fun, a, b) {
    return fun(a, b);
};



