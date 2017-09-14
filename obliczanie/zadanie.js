function Oblicz(){
    
var r=Number(document.formularz.r.value);
var H=Number(document.formularz.H.value);

 if (document.getElementById("obk").checked == true)
 { 
  var wynik = 2*Math.PI*r;
  document.getElementById("wynik").innerHTML = wynik;
 }
 
 else if(document.getElementById("pk").checked == true)
 {
 var wynik = Math.PI*Math.pow(r,2);
 document.getElementById("wynik").innerHTML = wynik;
 }
 
 else if (document.getElementById("obs").checked == true)
 {
 var wynik = (1/3)*Math.PI*Math.pow(r,2)*H;
 document.getElementById("wynik").innerHTML = wynik;
 }
 
 }