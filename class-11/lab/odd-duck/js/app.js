"use strict";

// guarda los nombres de todos los productos
const nombreProductos = [
  "bag",
  "banana",
  "bathroom",
  "boots",
  "breakfast",
  "bubblegum",
  "chair",
  "cthulhu",
  "dog-duck",
  "dragon",
  "pen",
  "pet-sweep",
  "scissors",
  "shark",
  "sweep",
  "tauntaun",
  "unicorn",
  "water-can",
  "wine-glass",
];
// guardar cada producto como objeto
const allProductos = [];

// definido mi funcion constructora producto
function Producto(name, path) {
  this.name = name;
  this.path = path;
  this.click = 0;
  this.views = 0;
}

// implementamos un funcion que instancie los 19 objetos
// llenando la bolsa de canicas
// path=img/banana.jpg
// name= banana
function listarProductos() {
  for (let i = 0; i < nombreProductos.length; i++) {
    if (nombreProductos[i] === "sweep") {
      let producto = new Producto(
        nombreProductos[i],
        "img/" + nombreProductos[i] + ".png"
      );
      allProductos.push(producto);
    } else {
      let producto = new Producto(
        nombreProductos[i],
        "img/" + nombreProductos[i] + ".jpg"
      );
      allProductos.push(producto);
    }
  }
}
listarProductos();
console.log(allProductos);

// Se define el objeto que almacena las 3 imagenes que se van a mostar en pantalla
const productRank = {
  totalClick: 0,
  votosRonda: 25,
  objetoIzq: null,
  objetoCent: null,
  objetoDer: null,
  // capturando los tags de html usando 'id'
  elementoIzq: document.getElementById("img1"),
  elementoCent: document.getElementById("img2"),
  elementoDer: document.getElementById("img3"),

  contenedorImagenes: document.getElementById("imagenes"),
  elemntosResultados: document.getElementById("resultados"),

  botonResultados: document.getElementById("mostrarResultados"),
  botonReiniciar: document.getElementById("reiniciar"),

  numeroAleatorio: function () {
    return Math.floor(Math.random() * nombreProductos.length);
  },
  mostrarImagenes: function () {
    // eligo mis 3 imagenes aleatorios
    this.objetoIzq = allProductos[this.numeroAleatorio()];
    this.objetoCent = allProductos[this.numeroAleatorio()];
    this.objetoDer = allProductos[this.numeroAleatorio()];
    if (
      this.objetoIzq === this.objetoCent ||
      this.objetoIzq === this.objetoDer ||
      this.objetoCent === this.objetoDer
    ) {
      this.mostrarImagenes();
    }
    //contabilizando mis visualizaciones
    this.objetoIzq.views += 1;
    this.objetoCent.views += 1;
    this.objetoDer.views += 1;

    //muestra mis imagenes
    // Imagen izquierda
    this.elementoIzq.src = this.objetoIzq.path;
    this.elementoIzq.name = this.objetoIzq.name;
    // Imagen central
    this.elementoCent.src = this.objetoCent.path;
    this.elementoCent.name = this.objetoCent.name;
    // Imagen derecha
    this.elementoDer.src = this.objetoDer.path;
    this.elementoDer.name = this.objetoDer.name;
  },

  contarClick: function (elid) {
    for (let i = 0; i < allProductos.length; i++) {
      if (allProductos[i].name === elid) {
        allProductos[i].click += 1;
        this.totalClick += 1;
        console.log(
          allProductos[i].name + "tiene" + allProductos[i].click + "click"
        );
      }
    }
  },

  mostrarResultados: function () {
    const lista = document.createElement("ul");
    for (let i = 0; i < allProductos.length; i++) {
      const item = document.createElement("li");
      const contenido =
        allProductos[i].name +
        " " +
        "tiene" +
        allProductos[i].click +
        " clicks.";
      item.textContent = contenido;
      lista.appendChild(item);
    }
    const itemFinal = document.createElement("li");
    itemFinal.textContent = "total de click:" + " " + this.totalClick;
    lista.appendChild(itemFinal);
    this.elemntosResultados.appendChild(lista);
  },
  mostrarBoton: function () {
    this.botonResultados.hidden = false;
    this.botonResultados.addEventListener("click", function () {
      this.botonReiniciar.hidden = false;
      this.botonResultados.hidden = true;
      this.mostrarResultados();

      this.botonReiniciar.addEventListener("click", function () {
        this.botonReiniciar.hidden = true;
        location.reload();
      });
    });
  },
  onClick: function (event) {
    if (
      event.target.name === this.objetoIzq?.name ||
      event.target.name === this.objetoCent?.name ||
      event.target.name === this.objetoDer?.name
    ) {
      this.contarClick(event.target.name);

      if (this.totalClick % this.votosRonda === 0) {
        this.contenedorImagenes.removeEventListener("click", this.onClick);
        this.mostrarBoton();
      }
      this.mostrarImagenes();
    } else {
      alert("haz click en una imagen");
      console.log(event);
    }
  },
};
// console.log(productRank.numeroAleatorio());
productRank.contenedorImagenes.addEventListener("click", productRank.onClick);
productRank.mostrarImagenes();
