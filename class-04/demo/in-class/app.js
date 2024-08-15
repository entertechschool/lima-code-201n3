let nombre = "Linder"; // scope global

function calcularPromedio(nota1, nota2, nota3) {
  // scope local
  const suma = nota1 + nota2;
  const promedio = suma / 3;
  console.log(nombre); // Linder
  return [promedio, suma];
}

// console.log(suma)
const resultado = calcularPromedio(19, 17);
resultado;

function saludar(nombre, edad) {
  if (edad !== undefined) {
    return "Hola me llamo " + nombre + " y tengo " + edad;
  } else {
    return "Hola me llamo " + nombre;
  }
}
saludar("Linder");
saludar("Lucas", 45);
