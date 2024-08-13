// vamos a crear la tabla de multuplicar
// const numero = parseInt(
//   prompt("Ingrese un numero para mostar la tabla de multiplicar")
// );

// for (let i = 0; i < 13; i++) {
//   console.log(i + " x " + numero + " = ", i * numero);
// }

// TODO: Realizar un bloque donde se pueda imprimir toda las tablas desde el 0 hasta el 12
const alumnos = ["Chester", "Jordan", "Martin"];
for (let i = 0; i < alumnos.length; i++) {
  console.log("Vuelta", i);
  for (let j = 0; j < 12; j++) {
    console.log("j", j);
  }
  if (i === 1) {
    console.log("Hemos encontrado a Jordan");
  } else {
    console.log(alumnos[i]);
  }
}
