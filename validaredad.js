            function verificarEdad() {
                
                let edad = prompt("Por favor, ingresa tu edad:");
               
                edad = Number(edad);
    
                if (isNaN(edad) || edad <= 0) {
                    alert("Por favor, ingresa un número válido para la edad.");
                } else {
                   
                    if (edad >= 18) {
                        alert("Acceso permitido. Eres mayor de edad.");
                    } else {
                        alert("Acceso denegado. Eres menor de edad.");
                    }
                }
            }
       