
function multiply() {
   
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
  
    var product = num1 * num2;
    var output = document.getElementById("output");
    output.innerHTML = "The Result is: " + product;
  }
  
  function divide() {
  
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
  
    var quotient = num1 / num2;
  
  
    var output = document.getElementById("output");
    output.innerHTML = "The Result is:" + quotient;
  }
  