function calc() {
    var field1 = document.getElementById("number1").value;
    var field2 = document.getElementById("number2").value;
   
    var result = parseInt(field1) + parseInt(field2);
     document.getElementById('result').innerHTML = result;
}