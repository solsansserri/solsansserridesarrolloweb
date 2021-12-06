function mostrarMensaje() {
    var mensajes =document.getElementById("datosIngresados").value;
    document.querySelector("h1").textContent = mensajes;
}

var formulario =document.querySelector("#formulario");
formulario.addEventListener("input", mostrarMensaje);