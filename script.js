function calc() {
    var field1 = document.getElementById("number1").value;
    var field2 = document.getElementById("number2").value;
   
    var result = parseFloat(field1) + parseFloat(field2);

    if(!isNaN(answer))
    {
        document.getElementById("result").innerHTML="The answer is "
         +  result;
    }



}