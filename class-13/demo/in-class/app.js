const image1 = document.getElementById("image-1");
const image2 = document.getElementById("image-2");
const image3 = document.getElementById("image-3");

// RECUERDEN: Estos son los <span></span> donde vamos a mostrar la cantidad click
const contadorImage1 = document.getElementById("contador-image-1");
const contadorImage2 = document.getElementById("contador-image-2");
const contadorImage3 = document.getElementById("contador-image-3");

// BOTON PARA GUARDAR EN LOCALSTORAGE
const saveInLocalStorage = document.getElementById("save-localStorage");

// BOTON PARA OBTENER LA INFORMACION DE LOCALSTORAGE
const getFromLocalStorage = document.getElementById("get-localStorage");

const removeFromLocalStorage = document.getElementById("remove-localStorage");

const clearFromLocalStorage = document.getElementById("clear-localStorage");
// Este objeto se va a encargar de poder almacenar la cantidad de click que le de a cada imagen
const cantidadDeClicks = {
  imagen1: 0,
  imagen2: 0,
  imagen3: 0,
};

image1.addEventListener("click", function () {
  cantidadDeClicks.imagen1++;
  contadorImage1.textContent = cantidadDeClicks.imagen1;
});

image2.addEventListener("click", function () {
  cantidadDeClicks.imagen2++;
  contadorImage2.textContent = cantidadDeClicks.imagen2;
});

image3.addEventListener("click", function () {
  cantidadDeClicks.imagen3++;
  contadorImage3.textContent = cantidadDeClicks.imagen3;
});

saveInLocalStorage.addEventListener("click", function () {
  // Vamos a guardar el objeto cantidadDeClick en localStorage
  localStorage.setItem("obj_cantidad_click", JSON.stringify(cantidadDeClicks));
});

function renderDataFromLocalStorage() {
  // vamos a crear una validacion en caso localStorage retorne un null

  // obtener la informacion de localStorage usando el key
  const datos = JSON.parse(localStorage.getItem("obj_cantidad_click"));

  // Si el objeto que queremos obtener de localStorage no existe este va a retornar null

  // if (datos === null) return

  if (datos !== null) {
    contadorImage1.textContent = datos.imagen1;
    contadorImage2.textContent = datos.imagen2;
    contadorImage3.textContent = datos.imagen3;

    // actualizando el objeto padre
    cantidadDeClicks.imagen1 = datos.imagen1;
    cantidadDeClicks.imagen2 = datos.imagen2;
    cantidadDeClicks.imagen3 = datos.imagen3;
  }
}

renderDataFromLocalStorage();

getFromLocalStorage.addEventListener("click", function () {});

removeFromLocalStorage.addEventListener("click", function () {
  localStorage.removeItem("obj_cantidad_click");
});

clearFromLocalStorage.addEventListener("click", function () {
  localStorage.clear();
});
