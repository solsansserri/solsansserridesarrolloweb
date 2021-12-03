function mostrarMensaje(parametro) {
    parametro.preventDefault();
    var mensaje = document.querySelector("#texto").value;
    document.querySelector("#mensaje").textContent = mensaje;
    console.log(mensaje);
    
}

var formulario =document.querySelector("#formulario");
formulario.addEventListener("input", mostrarMensaje);