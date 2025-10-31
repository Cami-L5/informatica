const formulario = document.getElementById("formAsistencia");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita recargar la página

    const nombre = document.getElementById("nombre").value;
    const asistencia = document.querySelector('input[name="asistencia"]:checked').value;

    resultado.textContent = `El estudiante ${nombre} ${asistencia === "Sí" ? "asistirá" : "no asistirá"} a la fiesta de fin de año.`;
});