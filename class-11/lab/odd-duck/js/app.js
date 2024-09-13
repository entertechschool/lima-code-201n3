'use strict';

// guarda los nombres de todos los productos
const nombreProductos = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];
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
        if (nombreProductos[i] === 'sweep') {
            let producto = new Producto(nombreProductos[i], 'img/' + nombreProductos[i] + '.png');
            allProductos.push(producto);
        } else {
            let producto = new Producto(nombreProductos[i], 'img/' + nombreProductos[i] + '.jpg');
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
    elementoIzq: document.getElementById('img1'),
    elementoCent: document.getElementById('img2'),
    elementoDer: document.getElementById('img3'),

    contenedorImagenes: document.getElementById('imagenes'),
    elemntosResultados: document.getElementById('resultados'),

    botonResultados: document.getElementById('mostrarResultados'),
    botonReiniciar: document.getElementById('reiniciar'),

    numeroAleatorio: function () {
        return Math.floor(Math.random() * nombreProductos.length);
    },


    mostrarImagenes: function () {
        // eligo mis 3 imagenes aleatorios 
        productRank.objetoIzq = allProductos[productRank.numeroAleatorio()];
        productRank.objetoCent = allProductos[productRank.numeroAleatorio()];
        productRank.objetoDer = allProductos[productRank.numeroAleatorio()];
        if (productRank.objetoIzq === productRank.objetoCent || productRank.objetoIzq === productRank.objetoDer || productRank.objetoCent === productRank.objetoDer) {
            productRank.mostrarImagenes();
        }
        //contabilizando mis visualizaciones
        productRank.objetoIzq.views += 1;
        productRank.objetoCent.views += 1;
        productRank.objetoDer.views += 1;

        //muestra mis imagenes
        // Imagen izquierda 
        productRank.elementoIzq.src = productRank.objetoIzq.path;
        productRank.elementoIzq.name = productRank.objetoIzq.name;
        // Imagen central 
        productRank.elementoCent.src = productRank.objetoCent.path;
        productRank.elementoCent.name = productRank.objetoCent.name;
        // Imagen derecha
        productRank.elementoDer.src = productRank.objetoDer.path;
        productRank.elementoDer.name = productRank.objetoDer.name;
    },

    contarClick: function (elid) {
        for (let i = 0; i < allProductos.length; i++) {
            if (allProductos[i].name === elid) {
                allProductos[i].click += 1;
                this.totalClick += 1;
                console.log(allProductos[i].name + 'tiene' + allProductos[i].click + 'click');
            }
        }
    },

    mostrarResultados: function () {
        const lista = document.createElement('ul');
        for (let i = 0; i < allProductos.length; i++) {
            const item = document.createElement('li');
            const contenido = allProductos[i].name + ' ' + 'tiene' + allProductos[i].click + ' clicks.';
            item.textContent = contenido;
            lista.appendChild(item);
        }
        const itemFinal = document.createElement('li');
        itemFinal.textContent = 'total de click:' + ' ' + productRank.totalClick;
        lista.appendChild(itemFinal);
        this.elemntosResultados.appendChild(lista);
    },
    mostrarBoton: function () {
        this.botonResultados.hidden = false;
        this.botonResultados.addEventListener('click', function () {
            productRank.botonReiniciar.hidden = false;
            productRank.botonResultados.hidden = true;
            productRank.mostrarResultados();

            productRank.botonReiniciar.addEventListener('click', function () {
                productRank.botonReiniciar.hidden = true;
                location.reload();
            });
        });
    },
    onClick: function (event) {
        if (event.target.name === productRank.objetoIzq.name || event.target.name === productRank.objetoCent.name || event.target.name === productRank.objetoDer.name) {
            productRank.contarClick(event.target.name);

            if (productRank.totalClick % productRank.votosRonda === 0) {
                productRank.contenedorImagenes.removeEventListener('click', productRank.onClick);
                productRank.mostrarBoton();
            }
            productRank.mostrarImagenes();
        } else {
            alert('haz click en una imagen');
            console.log(event);
        }
    }

}
// console.log(productRank.numeroAleatorio());
productRank.contenedorImagenes.addEventListener('click', productRank.onClick);
productRank.mostrarImagenes();
