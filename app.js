function myFunction() {
    var a = document.getElementById("text1").value;
   var b = document.getElementById("text2").value;
   var c = Math.max(a.length,b.length);
   document.getElementById("sum").innerHTML = c;
 }