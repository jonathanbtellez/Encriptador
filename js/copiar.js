var botonCopiar = document.querySelector("#copiar");

botonCopiar.addEventListener("click",function(event){

    event.preventDefault();

    
    var mensajeFinal = document.querySelector(".ajustar-mensaje").textContent;
   
    mensajeCopiado = navigator.clipboard.writeText(mensajeFinal);

    var i=0;
    do
        if (mensajeFinal.length > 0){
            alert("Mensaje copiado con exito, pulse control + V para pegar.");
            location. reload(); 
            i++;
        }

    while(i == 0);
    i=0;
    
});