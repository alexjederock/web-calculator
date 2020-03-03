function calc() {
    var field1 = document.getElementById("number1").value;
    var field2 = document.getElementById("number2").value;
    var operatorSelect = document.getElementById("operator").value;
    var operator = operatorSelect.options[operatorSelect.selectedIndex].value;
    switch (operator) {
        case "+":
            var result = parseInt(field1) + parseInt(field2);

            break;
        case "-":
            var result = parseInt(field1) - parseInt(field2);

            break;
        case "*":
            var result = parseInt(field1) * parseInt(field2);

            break;
        case "/":
            var result = parseInt(field1) / parseInt(field2);

            break;
        default:
            var result = "Nothing to Calculate.";
    }

    document.getElementById('result').innerHTML = result;
}


