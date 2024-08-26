// Permite que busquemos etiqueta por el id
const titulo = document.getElementById("title");
console.log(titulo);
// MODIFICANDO EL TEXTO DE LA ETIQUETA H1
titulo.textContent = "Cambiamos el texto desde JS";

const cover = document.getElementById("cover");
cover.width = 200;
cover.src =
  "https://www.enter.edu.pe/_next/image?url=%2Fassets%2Fprogram_software_girl_2600x1090.png&w=3840&q=75";

// vamos a ver como podemos crear una interface desde JS
const container = document.getElementById("container");

// Para poder crear una etique desde JS debemos hacer lo siguiente
const tituloSecundario = document.createElement("h2"); // <h2></h2>
tituloSecundario.textContent = "Ejemplo de create element"; // <h2>Ejemplo de create element</h2>

// Como insertamos una etique dentro del contenedor
container.appendChild(tituloSecundario);

const parrafo = document.createElement("p");
parrafo.textContent = "Este es un parrafo creado desde JS";
container.appendChild(parrafo);

const imagen = document.createElement("img");
imagen.width = 200;
imagen.src = "https://lenguajejs.com/dom/introduccion/que-es/que-es-dom.png";
container.appendChild(imagen);

const tienda = {
  nombre: "Enter Tech",
  direccion: "Av reducto 1518",
  docentes: ["Linder", "Bruno", "Alex"],
};

const escuelas = document.getElementById("escuelas");

const tituloEscuela = document.createElement("h3");
tituloEscuela.textContent = tienda.nombre;

escuelas.appendChild(tituloEscuela);

const direccionEscuela = document.createElement("p");
direccionEscuela.textContent = tienda.direccion;
escuelas.appendChild(direccionEscuela);

const listaDocentes = document.createElement("ul"); // <ul></ul>
console.log(listaDocentes);

for (let i = 0; i < tienda.docentes.length; i++) {
  const listaElemento = document.createElement("li"); // <li></li>
  listaElemento.textContent = tienda.docentes[i];
  console.log(listaElemento);
  listaDocentes.appendChild(listaElemento);
}

escuelas.appendChild(listaDocentes);

//   listaElemento.textContent = tienda.docentes[i]; // <li>Linder</li>
//   listaDocentes.appendChild(listaElemento); // <ul><li>Linder</li> </ul>
// }

// escuelas.appendChild(listaDocentes);
