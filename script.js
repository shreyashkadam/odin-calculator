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

