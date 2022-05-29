var botonDesencriptar = document.querySelector("#Desencriptar");

botonDesencriptar.addEventListener("click", function(event){
    event.preventDefault();

    var mensajeInicial = document.querySelector("#mensaje-introducido");
    
    var mensaje = mensajeOriginal();
    var mensajeDes = mensajeDesencriptado(mensaje);
    var nuevoMensaje = insertarMensaje(mensajeDes);
    nuevoMensaje.classList.add("ajustar-mensaje");

    mensajeInicial.value = "";
    mensajeInicial.focus();
    

    
    var imagenMuneca = document.querySelector("#imagen-muñeco");
    var ningunMensaje = document.querySelector("#ningun-mensaje-encontrado");
    var textoInformativo = document.querySelector("#mensaje-ingrese-texto");

    if (nuevoMensaje.textContent.length > 1){
        imagenMuneca.classList.add("fadeOut");
        ningunMensaje.classList.add("fadeOut");
        textoInformativo.classList.add("fadeOut");
    }
    
    return nuevoMensaje;
});

function mensajeDesencriptado(mensaje){
    mensaje = mensaje.toLowerCase();

    var matriz = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];

    for(var i = 0; i < matriz.length; i++){
        if (mensaje.includes(matriz[i][0])){
            mensaje = mensaje.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }

    return mensaje; 
    
}

