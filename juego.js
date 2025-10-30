function jugar() {
    let numeroSecreto = 5;

    let intento = prompt("Adivina el número secreto (entre 1 y 10):");

    intento = Number(intento);

    if (isNaN(intento)) {
        alert("Por favor, ingresa un número válido.");
    } else {

        if (intento === numeroSecreto) {
            alert("¡Felicidades! Adivinaste el número secreto.");
        } else {
            alert("No adivinaste. El número secreto era " + numeroSecreto + ".");
        }
    }
}
