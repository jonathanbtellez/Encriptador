var botonEncriptar = document.querySelector ("#encriptar-mensaje");

botonEncriptar.addEventListener("click", function(event){
    event.preventDefault();

    var mensajeInicial = document.querySelector("#mensaje-introducido");
    var mensaje = mensajeOriginal();
    var mensajeEnc = mensajeEncriptado(mensaje);
    var nuevoMensaje = insertarMensaje(mensajeEnc);
    mensajeNuevoP.classList.add("ajustar-mensaje");

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

function mensajeOriginal(){
    var mensajeIntroducido = document.querySelector("#mensaje-introducido");

    var mensaje = mensajeIntroducido.value;

    return mensaje;
}

function mensajeEncriptado(mensaje){

    mensaje = mensaje.toLowerCase();
    var matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    for(var i = 0; i < matriz.length; i++){
        if (mensaje.includes(matriz[i][0])){
            mensaje = mensaje.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }



    return mensaje;
}



function insertarMensaje(mensaje){
    
    form = document.querySelector("#insetar-mensaje");
    
    mensajeNuevoLi = document.createElement("li");
    mensajeNuevoP = document.createElement("p");

    mensajeNuevoP.textContent = (mensaje);
    
    mensajeNuevoLi.appendChild(mensajeNuevoP);
    form.appendChild(mensajeNuevoLi);
    
    return mensajeNuevoP;
}
