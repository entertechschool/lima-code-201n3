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
];

const respuestas = ["Pollo a la brasa", "VML", "12", "Aston Martin"];
let cantidadDePreguntasCorrectas = 0;
let cantidadDePreguntasIncorrectas = 0;

// cada pregunta debe ser mostrada en un prompt

// nota: cuando creamos una variable sin usar un profijo este adopta VAR por defecto
// nombre = "Linder";
// console.log(nombre);

for (let i = 0; i < preguntas.length; i++) {
  const resputaDeUsuario = prompt(preguntas[i]); // pollo a la brasa
  // vamos a comparar la respuestas del usuario con la resputa que tengo guardada
  if (respuestas[i].toLowerCase() === resputaDeUsuario.toLowerCase()) {
    cantidadDePreguntasCorrectas++;
  } else {
    cantidadDePreguntasIncorrectas++;
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
