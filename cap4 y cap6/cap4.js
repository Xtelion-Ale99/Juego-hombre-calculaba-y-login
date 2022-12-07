function panes() {  
    var x,y,p1,p2;  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if((x%2==0 && y%2==0) || (x%2==1 && y%2==1)){
      p1=x*3;
      p2=y*3;
      p4=p1;
      p5=p2; 
      text = "Es necesarios introducir dos números válidos";  
     p3=((parseFloat(p1)+parseFloat(p2))/3); 
     p6=p4-p3;
     p7=p5-p3;
     p8=p1-p6;
     p9=p2-p7;
     p1=p1-p3;
     p2=p2-p3;
    }
    else{
      document.write("la cantidad de panes de ambos debe ser pares o impares");
    }
    document.getElementById("p1").innerHTML ="persona uno dio "+p4+" pedazos, comio "+p8+", dio al viajero "+p6+" y recibio "+p1+" monedas de oro";  
    document.getElementById("p2").innerHTML ="persona dos dio "+p5+" pedazos, comio "+p9+", dio al viajero "+p7+" y recibio "+p2+" monedas de oro";  
  } 