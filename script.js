let Total = 0

function sumaProductos(Valoritem) {
  Total = Total + Valoritem
  document.getElementById("Total").innerHTML = "TOTAL: " + "$" + Total + " Pesos";
}

function Limpiar() {
  Total=0
  document.getElementById("Total").innerHTML = "TOTAL: " + "$" + 0 + " Pesos";
}
