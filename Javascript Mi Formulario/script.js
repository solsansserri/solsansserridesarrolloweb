function mostrarMensaje() {
    var mensajes =document.getElementById("Apellidoynombre").value;
    document.querySelector("h1").textContent = mensajes;
}

var formulario =document.querySelector("#formulario1");
formulario.addEventListener("input", mostrarMensaje);