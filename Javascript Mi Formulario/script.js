function mostrarMensaje() {
   
    var uno = document.querySelector("#Nombre").value;
    var dos = document.querySelector("#Apellido").value;
    
    var resultado = parseFloat(uno, dos);

    mensaje = dos, uno;

    document.querySelector("#mensaje").textContent = mensaje;  
}

var formulario =document.querySelector("#formulario1");
formulario.addEventListener("input", mostrarMensaje);