const formulario = document.getElementById("formEvento");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombreEvento = document.getElementById("nombreEvento").value;
    const fechaIngresada = new Date(document.getElementById("fechaEvento").value);
    const hoy = new Date();

    hoy.setHours(0, 0, 0, 0);
    fechaIngresada.setHours(0, 0, 0, 0);

    const diferencia = fechaIngresada - hoy;

    const diasFaltantes = Math.round(diferencia / (1000 * 60 * 60 * 24));

    if (diasFaltantes > 0) {
        resultado.textContent = `Faltan ${diasFaltantes} días para ${nombreEvento}.`;
    } else if (diasFaltantes === 0) {
        resultado.textContent = `¡El evento "${nombreEvento}" es HOY!`;
    } else {
        resultado.textContent = `El evento "${nombreEvento}" ya ocurrió.`;
    }
});