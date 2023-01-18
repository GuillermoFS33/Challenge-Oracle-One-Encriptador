function encriptar(){

    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado = frase.replace(/e/img,"enter");
    var textoEncriptado = textoEncriptado.replace(/o/igm,"ober");
    var textoEncriptado = textoEncriptado.replace(/i/igm,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/igm,"ai");
    var textoEncriptado = textoEncriptado.replace(/u/igm,"ufat");

    document.getElementById("imagenMuñeco").style.display = "none";
    document.getElementById("mensajeCaja").style.display = "none";
    document.getElementById("mensajeParrafo").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function desencriptar(){

    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado = frase.replace(/enter/img,"e");
    var textoEncriptado = textoEncriptado.replace(/ober/igm,"o");
    var textoEncriptado = textoEncriptado.replace(/imes/igm,"i");
    var textoEncriptado = textoEncriptado.replace(/ai/igm,"a");
    var textoEncriptado = textoEncriptado.replace(/ufat/igm,"u");

    document.getElementById("imagenMuñeco").style.display = "none";
    document.getElementById("mensajeCaja").style.display = "none";
    document.getElementById("mensajeParrafo").innerHTML = textoEncriptado;
    document.getElementById("copoiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function copy(){
    var texto = document.getElementById("mensajeParrafo");
    texto.select();
    document.execCommand("cut");
    alert("¡El mensaje se ha copiado con exito!"); 
}