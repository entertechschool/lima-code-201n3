const titulo = document.getElementById("titulo");

// vamos a capturar el evento click que hacemos con el mouse en el titulo
titulo.addEventListener("click", function () {
  alert("Hola mundo");
});

const formulario = document.getElementById("formulario");
const parrafo = document.getElementById("user-data");

function Lugar(name, address, city) {
  this.name = name;
  this.address = address;
  this.city = city;
}

const ubicaciones = [];

// El primer parametro de la funcion addEventListener es el evento y el segundo es la funcion
formulario.addEventListener("submit", function (event) {
  // debemos evitar que al hacer submit de refresque la pagina
  // para poder evitar que la web se refresque debo llamar a la funcion
  // event.preventDefault()
  event.preventDefault();
  // solo vamos a capturar información
  // para poder obtener el texto de los inputs vamos a crear una instancia
  // event.target es el objeto donde se guarda todo lo que escribimos en los input
  const inputs = new FormData(event.target);
  // para poder obtener el texto que escribimos vamos a usar el name
  console.log("Nombre de usuario:", inputs.get("user_name"));
  console.log("Apellido de usuario:", inputs.get("user_lastname"));
  parrafo.textContent =
    inputs.get("user_name") + " " + inputs.get("user_lastname");
  // ejemplo
  const nuevaSede = new Lugar(
    inputs.get("ubicacion_nombre"),
    inputs.get("ubicacion_direccion"),
    inputs.get("ubicacion_ciudad")
  );
  // como agregar un nuevo valor a un array
  ubicaciones.push(nuevaSede);
});
