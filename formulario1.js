<script>
 function saludar() {
 let nombre = document.getElementById("nombre").value;
 if (!nombre) {
    alert('Escribe tu nombre.');
    return;
    } 
}
 </script> 
let radio = document.querySelector('input[name="genero"]:checked');
if (!radio) {
alert('Selecciona un género.');
return; } 
if (radio.value === 'hombre') {
    saludo = 'Bienvenido';
    } else {
    saludo = 'Bienvenida';
    }
    alert(`${saludo}, ${nombre}`);

    let pais = document.getElementById("pais").value;
 let frasePais = "";
 if (pais === "arg") frasePais = "Gracias por visitarnos";
 if (pais === "bra") frasePais = "Obrigado por nos visitar";
 if (pais === "usa") frasePais = "Thanks for visiting us";
 alert(`${saludo} ${nombre}! ${frasePais}.`);