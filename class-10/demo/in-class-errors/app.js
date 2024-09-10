for (let i = 0; i < 10; i++) {
  console.log(i);
}
// vamos a crear una calculadora que nos pida 2 numeros y retorne la suma
const numero1 = parseInt(prompt("Ingrese el numero1"));
const numero2 = parseInt(prompt("Ingrese el numero2"));
// 1 + 1 = 11

// if (!isNaN(numero1) && !isNaN(numero2)) {
//   const resultado = numero1 + numero2;
//   alert("La suma es: " + resultado);
// } else {
//   alert("Algun valor ingresa no es un número");
// }

// Un tip: Primero siempre debemo evaluar el error
if (isNaN(numero1) || isNaN(numero2)) {
  alert("Algun valor ingresa no es un número");
} else {
  // Nos muestra porque por defecto numero1 y numero2 son string
  // Error lógico
  const suma = numero1 + numero2;
  alert("La suma es: " + suma);
}
console.log("Esto se muestra en info");
console.warn("Esto es para mensajes de adventencia");
console.error("Esto es para mensajes de error");
