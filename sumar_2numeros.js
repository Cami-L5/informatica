function calcular() {
    let numero1 = prompt("Ingresa el primer número:");
    let numero2 = prompt("Ingresa el segundo número:");
    numero1 = Number(numero1);
    numero2 = Number(numero2);
    if (!isNaN(numero1) && !isNaN(numero2)) {
    let suma = numero1 + numero2;
    alert("La suma de " + numero1 + " + " + numero2 + " es: " + suma);
    } else {
    alert("Debes ingresar solo valores numéricos.");
    }
   }
   
   

   