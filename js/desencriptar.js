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
    var regla = '';
    for (var i = 0; i < mensaje.length;i++) {
      switch(mensaje[i]) {
      case 'e': 
        if (mensaje[i + 4] === 'r') { regla += 'e'; i += 4; }
        else { return false; }
        break;
      case 'i': 
        if (mensaje[i + 3] === 's') { regla += 'i'; i += 3; }
        else { return false; }
        break;
      case 'a': 
        if (mensaje[i + 1] === 'i') { regla += 'a'; i += 1; }
        else { return false; }
        break;
      case 'o': 
        if (mensaje[i + 3] === 'r') { regla += 'o'; i += 3; }
        else { return false; }
        break;
      case 'u': 
        if (mensaje[i + 3] === 't') { regla += 'u'; i += 3; }
        else { return false; }
        break;
      default:
        regla += mensaje[i];
      }
    }
    return regla;
}

