# Modelos de Dominio, Introducción al DOM y Notaciones de Objetos Literales

## Review del lab05

| Nombre   | Estado             |
| -------- | ------------------ |
| Walther  | terminado 6/6      |
| Martin   |                    |
| Michael  | falta terminar 4/6 |
| Jordan   |                    |
| Sheryl   |                    |
| Johel    |                    |
| Vladimir |                    |

## ¿Qué es un objeto?

- Un conjunto de datos, que permite crear cosas por ejemplo productos
- Es cualquier cosa que podamos definir e incluso podemos tener un objetos dentro de otro objeto

### Atributos

Los atributos siempre deben tener un valor

Example

```js
const persona = {
  nombre: "Pepe",
  edad: 19,
  deporteFavorito: "Futbol",
  esMayorDeEdad: true,
  comer: function () {
    return "Comer arroz con pollo"
  }
}
```

### Acceder a las propiedades de un objeto

```js
// Forma 1
persona.nombre // Pepe
persona.edad
persona.deporteFavorito
// Si no existe el atributo este va a darnos undefined
persona.direccion // undefined
// para funciones
console.log(persona.comer());
```

### Modificar las propiedades de un objeto

- Para poder agregar atributos a un objetos simplemente haremos lo siguiente

```js
persona.apellido = "Perez"

console.log("Agregando un nuevo atributo");

persona.apellido = "Perez";
persona.dni = 8888;
persona.hermanos = ["Juan", "Maria"];

console.log(persona);

console.log("Actualizando valores");
persona.nombre = "Luchito";

```

## ¿Qué es el DOM (Document Object Model)?

-
-
-

### Como acceder al DOM

```js
```

## Ejemplo de Abtracción

- Crear un objeto que represente un libro

### Monitor

| Atributos (Propiedades) | Metodos (funciones) |
| ----------------------- | ------------------- |
| pulgadas                | subirBrillo()       |
| resolución              | encenderMonitor()   |
| marca                   | apagarMonitor()     |
| color                   | visualizarLaUI()    |
| precio                  | subirVolumen()      |
| tipoDePantalla          | bajarVolumen()      |
| tipoDeEnchufe           | tocarPantalla()     |
| voltaje                 | calibrarColores     |

## Laptop

| Atributos (Propiedades) | Metodos (funciones/acciones) |
| ----------------------- | ---------------------------- |
| tamañoDePantalla        | prender()                    |
| cantidadDePuertos       | apagar()                     |
| procesador              | subirVolumen()               |
| memoriaRam              | bajarBrillo()                |
| teclado                 | cargar()                     |
| tipoDePantala           | grabar()                     |
| modelo                  | hibernar()                   |
| marca                   | editar()                     |
| añoDeFabricacion        | reiniciar()                  |
| numeroDeSerie           | abrir()                      |
| tarjetaGrafica          | bajarVolumen()               |
| memoriaDeAlmacenamiento | conectar()                   |
| precio                  | alamacenarArchivos()         |
| tieneGarantia           | encenderCamara()             |
|                         |                              |

```js
const laptop = {
  tamañoDePantalla: "16",
  cantidadDePuertos: "5",
  procesador: "m2",
  memoriaRam: "16gb",
  teclado: "membrana",
  tipoDePantala: "2k",
  modelo: "macbook pro",
  marca: "apple",
  añoDeFabricacion: 2020
  numeroDeSerie: 12321321312,
  tarjetaGrafica: "integrada",
  memoriaDeAlmacenamiento: "512gb",
  precio: 14000,
  tieneGarantia: true,
  prender: function () {},
  apagar: function () {},
  subirVolumen: function () {},
  bajarBrillo: function () {},
  cargar: function () {},
  grabar: function () {},
  hibernar: function () {},
  editar: function () {},
  reiniciar: function () {},
  abrir: function () {},
  bajarVolumen: function () {},
  conectar: function () {},
  alamacenarArchivos: function () {},
  encenderCamara: function () {},
}
