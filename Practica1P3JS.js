function suma(){
    var num1,num2,resultado;
    num1=prompt("Ingrese un numero ","");
    num2=prompt("Ingrese otro numero ","");
    resultado=parseInt(num1)+parseInt(num2);
    alert("La suma es "+resultado);
}
function restar(){
    var num1,num2,resultado;
    num1=prompt("Ingrese un numero ","");
    num2=prompt("Ingrese otro numero ","");
    resultado=parseInt(num1)-parseInt(num2);
    alert("La diferencia es es "+resultado);
}
function multiplicar(){
    var num1,num2,resultado;
    num1=prompt("Ingrese un numero ","");
    num2=prompt("Ingrese otro numero ","");
    resultado=parseInt(num1)*parseInt(num2);
    alert("El producto es "+resultado);
}
function dividir(){
    var num1,num2,resultado;
    num1=prompt("Ingrese un numero ","");
    num2=prompt("Ingrese otro numero ","");
    resultado=parseInt(num1)/parseInt(num2);
    alert("La división es "+resultado);
}
function mayoromenor(){
    var num;
    num=prompt("Escribe un numero ","");
    if(parseInt(num)>0)
        alert("Número positivo");
        
    else
        alert("Número negativo");
}
