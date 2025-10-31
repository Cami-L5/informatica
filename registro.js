const formulario = document.getElementById("formEstudiante");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const curso = document.getElementById("curso").value;

    const nuevaVentana = window.open("", "_blank");
    nuevaVentana.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Bienvenida</title>
        </head>
        <body>
            <h1>¡Bienvenido, ${nombre} ${apellido}!</h1>
            <p>Te has registrado en el curso: <strong>${curso}</strong>.</p>
            <p>¡Te deseamos mucho éxito!</p>
        </body>
        </html>
    `);
});