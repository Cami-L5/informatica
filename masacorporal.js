const formulario = document.getElementById("formIMC");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (altura <= 0 || peso <= 0) {
        resultado.textContent = "Por favor, ingresa valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);

    let interpretacion = "";
    if (imc < 18.5) {
        interpretacion = "Bajo peso";
    } else if (imc < 25) {
        interpretacion = "Peso normal";
    } else if (imc < 30) {
        interpretacion = "Sobrepeso";
    } else {
        interpretacion = "Obesidad";
    }

    resultado.textContent = `Tu IMC es: ${imc.toFixed(2)} → ${interpretacion}.`;
});
