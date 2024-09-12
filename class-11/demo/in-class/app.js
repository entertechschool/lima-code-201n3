// la funcion constructora es un objeto
function Sede(
  ubicacion,
  horario,
  promedioDeVentas,
  promedioDeVisitas,
  promedioDeClientes,
  consumoMax,
  consumoMin
) {
  // this: es la referencia al objeto Sede
  // estamos agregando diferente propiedades a ese objeto
  // NOMBRE DEL ATRIBUTO = VALOR
  this.ubicacion = ubicacion;
  this.horario = horario;
  this.waltherVentas = promedioDeVentas;
  this.promedioDeVisitas = promedioDeVisitas;
  this.promedioDeClientes = promedioDeClientes;
  this.consumoMaximo = consumoMax;
  this.consumoMininimo = consumoMin;
}

Sede.prototype.calcularVentas = function () {
  // this.
};

new Sede("Peru", "7am");

const persona = {
  name: "Linder",
  lastname: "Hassinger",
};

persona.address = "av mi casa";
