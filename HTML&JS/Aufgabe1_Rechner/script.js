function buttonClickedAdd() {
    console.log("klick");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseInt(num1) + parseFloat(num2);

    document.getElementById("output").innerHTML = result;

}

function buttonClickedSub() {
    console.log("klick");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseInt(num1) - parseFloat(num2);

    document.getElementById("output").innerHTML = result;
}

function buttonClickedDiv() {
    console.log("klick");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseInt(num1) / parseFloat(num2);

    document.getElementById("output").innerHTML = result;
}

function buttonClickedMul() {
    console.log("klick");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseInt(num1) * parseFloat(num2);

    document.getElementById("output").innerHTML = result;
}