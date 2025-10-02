let contador = 100;
let boton = document.getElementById("btnsbajar");
let numero = document.getElementById("conteo");

boton.addEventListener("click", function(){
    contador--;
    numero.textContent = contador;
});
