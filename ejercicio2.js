function pedirNombre() {
    let nombre = prompt("¿Cómo te llamas?"); 
    if (nombre) {
        alert("Hola " + nombre + ", ¡bienvenido a la clase de JavaScript!");
        } else {
        alert("Ah, sos bldo Walter eh...")
     
 }
}
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
   
   
 function edad() {
    let edades = prompt("¿Cuantos años tienes?");
    if (edades) = <18 {
        alert("Hola " + ", ¡bienvenido a la clase de JavaScript!");
        } else {
        alert("ANDATE");
        } 
    }
       