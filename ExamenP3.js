function descuento()
{
    var desc, mesAct, actual, mesBirth;
    desc=new Date(document.getElementById("birth").value)
    actual= new Date();
    mesAct=actual.getMonth();
    mesBirth=desc.getMonth();
    if(mesAct=mesBirth)
    {
        var mensaje = "¡Felicidades! Obtuviste un 2x1.";
        var imagen = document.createElement("img");
    }else(mesAct!==mesBirth)
    {
        mensaje = "No obtuviste descuento ¡Suerte para la próxima!"
    }
    var mensajeFinal=document.getElementById("resultado");
    mensajeFinal.innerHTML=mensaje;
} 