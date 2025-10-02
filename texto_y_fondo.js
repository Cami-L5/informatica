const button = document.getElementById('btnCambiarFondo');
boton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
});

let boton = document.getElementById("btntexto");
let parrafo = document.getElementById("texto");

boton.addEventListener("click", function() {
    parrafo.innerHTML = "Te quiero :3";
});