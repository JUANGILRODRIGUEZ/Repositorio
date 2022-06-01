let Total = 0

function sumarprecio(Valoritem) {
  Total = Total + Valoritem
  document.getElementById("Total").innerHTML = "TOTAL: " + "$" + Total + " Pesos";
}

function borrar() {
  Total=0
  document.getElementById("Total").innerHTML = "TOTAL: " + "$" + 0 + " Pesos";
}
