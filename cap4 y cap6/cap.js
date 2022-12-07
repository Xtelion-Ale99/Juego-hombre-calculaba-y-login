function camellos() {  
  var x
  var suma,resultado;  
  x = document.getElementById("num1").value;  
    
  if (isNaN(x)) {  
    resultado = "Es necesarios introducir dos números válidos";  
    x=x+1;
  } else {  
    
    pyo=x
    suma=parseFloat(pyo)/6;  
    resultado = suma;
    r=resultado.toFixed(0)  
  }  
  document.getElementById("camellos").innerHTML = r+" camellos";  
}   