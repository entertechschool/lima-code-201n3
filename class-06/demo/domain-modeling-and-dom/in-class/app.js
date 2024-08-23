const persona = {
  nombre: "Pepe",
  edad: 19,
  deporteFavorito: "Futbol",
  esMayorDeEdad: true,
  nombre: "Luis",
  comer: function (a, b) {
    return "Comer arroz con pollo " + a + b;
  },
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
// Si no existe el atributo este va a darnos undefined
console.log(persona.direccion);
console.log(persona.comer("chifa", "pollo"));

console.log("Agregando un nuevo atributo");

persona.apellido = "Perez";
persona.dni = 8888;
persona.hermanos = ["Juan", "Maria"];

console.log(persona);

console.log("Actualizando valores");
persona.nombre = "Luchito";
persona.autoFavorito = {
  modelo: "GLE 450",
  precio: 400000,
};
persona.esMayorDeEdad = {
  edad: 19,
  fechaDeNacimiento: "01/01/2003",
};

console.log(persona);
