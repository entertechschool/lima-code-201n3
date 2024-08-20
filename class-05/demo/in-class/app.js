// Problema1: Crear una función que retorne un mensaje donde indique si la persona
// es mayor de edad, para esto la funcion va a recibir la edad como parametro

// function verificarSiEsMayorDeEdad(edad) {
//   if (edad >= 18) {
//     return "Es mayor de edad";
//   } else {
//     return "Es menor de edad";
//   }
// }

// function verificarSiEsMayorDeEdad(edad) {
//   let mensaje = "";
//   if (edad >= 18) {
//     mensaje = "Es mayor de edad";
//   } else {
//     mensaje = "Es menor de edad";
//   }
//   return mensaje;
// }

function verificarSiEsMayorDeEdad(edad) {
  let mensaje = "Es menor de edad";
  if (edad >= 18) {
    mensaje = "Es mayor de edad";
  }
  return mensaje;
}

console.log(verificarSiEsMayorDeEdad(22));
console.log(verificarSiEsMayorDeEdad(17));

// Problema2: Evaluar si el promedio del alumno es Excelente, Bueno ó Malo
// 17...20 Excelente
// 14...16 Bueno
// 0...13 Malo
// function evaluarPromedioDeAlumno(promedio) {
//   // Primero evaluamos los posibles errores
//   if (promedio > 20 || promedio < 0) {
//     // Recuerden que el return tambien termina la ejecución de la función
//     return "Promedio no valido";
//   }

//   if (promedio <= 13) {
//     return "Malo";
//   }

//   if (promedio >= 14 && promedio <= 16) {
//     return "Bueno";
//   }

//   return "Excelente";
// }

function evaluarPromedioDeAlumno(promedio) {
  // if anidado
  if (promedio > 20 || promedio < 0) {
    return "Promedio no valido";
  } else if (promedio <= 13) {
    return "Malo";
  } else if (promedio >= 14 && promedio <= 16) {
    return "Bueno";
  } else {
    return "Excelente";
  }
}

console.log("Promedios");
console.log("-1", evaluarPromedioDeAlumno(-1));
console.log("0", evaluarPromedioDeAlumno(0));
console.log("1", evaluarPromedioDeAlumno(1));
console.log("2", evaluarPromedioDeAlumno(2));
console.log("3", evaluarPromedioDeAlumno(3));
console.log("4", evaluarPromedioDeAlumno(4));
console.log("5", evaluarPromedioDeAlumno(5));
console.log("6", evaluarPromedioDeAlumno(6));
console.log("7", evaluarPromedioDeAlumno(7));
console.log("8", evaluarPromedioDeAlumno(8));
console.log("9", evaluarPromedioDeAlumno(9));
console.log("10", evaluarPromedioDeAlumno(10));
console.log("11", evaluarPromedioDeAlumno(11));
console.log("12", evaluarPromedioDeAlumno(12));
console.log("13", evaluarPromedioDeAlumno(13));
console.log("14", evaluarPromedioDeAlumno(14));
console.log("15", evaluarPromedioDeAlumno(15));
console.log("16", evaluarPromedioDeAlumno(16));
console.log("17", evaluarPromedioDeAlumno(17));
console.log("18", evaluarPromedioDeAlumno(18));
console.log("19", evaluarPromedioDeAlumno(19));
console.log("20", evaluarPromedioDeAlumno(20));
console.log("21", evaluarPromedioDeAlumno(21));
