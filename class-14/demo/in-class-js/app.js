function Persona(name, lastname, age) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
}

Persona.prototype.saludar = function () {
  return "Hola, me llamo " + this.name + " " + this.lastname;
};

const createUser = document.getElementById("create-user");
const getUser = document.getElementById("get-user");

createUser.addEventListener("click", function () {
  const name = prompt("Ingrese su nombre");
  const lastname = prompt("Ingrese su apellido");
  const age = prompt("Ingrese su edad");

  const personaNueva = new Persona(name, lastname, age);
  console.log(personaNueva.saludar());

  localStorage.setItem("personaNueva", JSON.stringify(personaNueva));
});

getUser.addEventListener("click", function () {
  const userFromLocalStorage = JSON.parse(localStorage.getItem("personaNueva"));
  // RE instancia
  const nuevaPersona = new Persona(
    userFromLocalStorage.name,
    userFromLocalStorage.lastname,
    userFromLocalStorage.age
  );
  console.log("Re instancia", nuevaPersona.saludar());
  console.log(userFromLocalStorage);
});
