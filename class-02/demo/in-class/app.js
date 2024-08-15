// al cliente debemos preguntarle como se llama?
const nombreDeUsuario = prompt("Hola usuario 👋 puedes decirme tu nombre?");

// luego nos podie crear 5 preguntas
// como podemos guardar mas de 1 dato en un variable
// cuando queremos guardar una lista de datos dentro de una variable usamos los arrays (Arreglos)
const preguntas = [
  "Cual es mi comida favorita?",
  "En que empresa trabajo actualmente?",
  "A que edad empece a programar?",
  "Cual es mi marca de autos favorita",
  "Cuales son mis salsas favoritas?",
];

const respuestas = [
  "Pollo a la brasa",
  "VML",
  "12",
  "Aston Martin",
  ["Ketchup", "Mayo", "Ají"],
];
let cantidadDePreguntasCorrectas = 0;
let cantidadDePreguntasIncorrectas = 0;
let cantidadDeIntentos = 0;
const cantdadMaximaDeIntentos = 6;

// cada pregunta debe ser mostrada en un prompt

// nota: cuando creamos una variable sin usar un profijo este adopta VAR por defecto
// nombre = "Linder";
// console.log(nombre);

for (let i = 0; i < preguntas.length; i++) {
  // vamos a comparar la respuestas del usuario con la resputa que tengo guardada
  if (typeof respuestas[i] === "string") {
    const respuestaDeUsuario = prompt(preguntas[i]); // pollo a la brasa
    if (respuestas[i].toLowerCase() === respuestaDeUsuario.toLowerCase()) {
      cantidadDePreguntasCorrectas++;
    } else {
      cantidadDePreguntasIncorrectas++;
    }
  } else {
    while (cantidadDeIntentos <= cantdadMaximaDeIntentos) {
      const respuestaBucle = prompt(preguntas[i]);
      let seEncontroUnaRespuesta = false;
      for (let j = 0; j < respuestas[i].length; j++) {
        // respuestas[i][j]
        if (respuestas[i][j].toLowerCase() === respuestaBucle.toLowerCase()) {
          console.log("respuesta correcta", respuestas[i][j]);
          seEncontroUnaRespuesta = true;
          break;
        }
      }

      if (seEncontroUnaRespuesta) {
        alert("Se encontro la respuesta");
        break;
      } else {
        cantidadDeIntentos++;
      }
    }
  }
}

console.log(
  "Hola",
  nombreDeUsuario,
  "respondiste correctamente",
  cantidadDePreguntasCorrectas
);
console.log(
  nombreDeUsuario,
  "respondiste incorrectamente",
  cantidadDePreguntasIncorrectas
);
