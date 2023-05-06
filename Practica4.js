function resultado(){
    var nom, apep,apem, anio, mes, dia;
    nom=document.getElementById("nombre").value;
    apep=document.getElementById("ap").value;
    apem=document.getElementById("am").value;
    anio=document.getElementById("anio").value;
    mes=document.getElementById("mes").value;
    dia=document.getElementById("dia").value;
    var obtNom=nom.substring(0,1);
    var obtApep=apep.substring(0,2);
    var obtApem=apem.substring(0,1);
    var obtAnio=anio.substring(anio.length-2);
    var juntar=obtApep+obtApem+obtNom+obtAnio+mes+dia;
    var rfc=juntar.toUpperCase();
    document.getElementById("resul").value=rfc;
}