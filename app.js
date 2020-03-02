function myFunction() {
    var a = document.getElementById("txt1").value;
   var b = document.getElementById("txt2").value;
   var c = +a + +b;
   document.getElementById("sum").innerHTML = c;
 }