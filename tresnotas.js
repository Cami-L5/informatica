const formulario = document.getElementById("formNotas");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); 

    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    const promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 6) {
        resultado.textContent = `El promedio es ${promedio.toFixed(2)}. El estudiante APRUEBA.`;
    } else {
        resultado.textContent = `El promedio es ${promedio.toFixed(2)}. El estudiante NO APRUEBA.`;
    }
});
