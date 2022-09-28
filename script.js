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

const eqBtn = document.getElementById("eq-btn");
const multBtn = document.getElementById("mult-btn");
const addBtn = document.getElementById("add-btn");
const divBtn = document.getElementById("div-btn");
const subBtn = document.getElementById("sub-btn");

const clearBtn = document.getElementById("clear-btn");

const displayLowerContainer = document.querySelector(".display-lower-container");
const displayUpperContainer = document.querySelector(".display-upper-container");

displayLowerContainer.textContent = 0;
displayUpperContainer.textContent = 0;

let currentNumber = 0;
let tempNumber = 0;
let currentFun = null;
let result = 0;
let funFlag = false;

function populateLowerDisplay(num) {
    if (displayLowerContainer.textContent == "0") {
        displayLowerContainer.textContent = null;
    }
    displayLowerContainer.textContent = displayLowerContainer.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim() + num;
    tempNumber = parseInt(displayLowerContainer.textContent);
};

function setOperator(fun, sign) {
    if (funFlag == false) {
        currentFun = fun;
        currentNumber = tempNumber;
        if (displayUpperContainer.textContent == "0") {
            displayUpperContainer.textContent = null;
        }
        displayUpperContainer.textContent = (tempNumber + " " + sign + " ");
        displayLowerContainer.textContent = 0;
    } else {
        result = operate(currentFun, currentNumber, tempNumber);
        currentFun = fun;
        currentNumber = result;
        displayUpperContainer.textContent += (tempNumber + " " + sign + " ");
        displayLowerContainer.textContent = 0;
    }
    funFlag = true;
};

addBtn.addEventListener('click', () => {
    setOperator(add, "+");
});

subBtn.addEventListener('click', () => {
    setOperator(subtract, "-");
});

multBtn.addEventListener('click', () => {
    setOperator(multiply, "*");
});

divBtn.addEventListener('click', () => {
    setOperator(divide, "/");
});

eqBtn.addEventListener('click', () => {
    let num = operate(currentFun, currentNumber, tempNumber);
    displayUpperContainer.textContent = Math.round((num + Number.EPSILON) * 100000) / 100000;
    displayLowerContainer.textContent = 0;
});

clearBtn.addEventListener('click', () => {
    window.location.reload();
})

numZero.addEventListener('click', () => {
    populateLowerDisplay(0);
});

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



