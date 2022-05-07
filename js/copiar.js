var botonCopiar = document.querySelector("#copiar");

botonCopiar.addEventListener("click",function(event){

    event.preventDefault();
    var mensajeFinal = document.querySelector(".ajustar-mensaje").textContent;
   
    navigator.clipboard.writeText(mensajeFinal);
    if (mensajeFinal.length > 0){
        alert("Mensaje copiado con exito");
        location. reload();  
    }    
});

