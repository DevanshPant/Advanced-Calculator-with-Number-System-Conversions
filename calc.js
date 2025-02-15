function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function convertToBinary() {
    let num = parseInt(document.getElementById("display").value);
    if (!isNaN(num)) {
        document.getElementById("display").value = num.toString(2);
    } else {
        document.getElementById("display").value = "Error";
    }
}

function convertToOctal() {
    let num = parseInt(document.getElementById("display").value, 2);
    if (!isNaN(num)) {
        document.getElementById("display").value = num.toString(8);
    } else {
        document.getElementById("display").value = "Error";
    }
}

function convertToGray() {
    let num = parseInt(document.getElementById("display").value, 2);
    if (!isNaN(num)) {
        let gray = num ^ (num >> 1);
        document.getElementById("display").value = gray.toString(2);
    } else {
        document.getElementById("display").value = "Error";
    }
}

function calculateFactorial() {
    let num = parseInt(document.getElementById("display").value);
    if (num < 0 || isNaN(num)) {
        document.getElementById("display").value = "Error";
        return;
    }
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    document.getElementById("display").value = fact;
}
