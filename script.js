let Total = 0;

function sumarprecio(valorproducto) {
  Total = Total + valorproducto;
  document.getElementById("Total").innerHTML =
    "TOTAL: " + "$" + Total + " Pesos";
}

function borrar() {
  Total = 0;
  document.getElementById("Total").innerHTML = 
    "TOTAL: " + "$" + 0 + " Pesos";
}
