# POO (Programación Orientada a Objetos)

## Review del lab06

| Nombre   | Estado                            |
| -------- | --------------------------------- |
| Walther  | terminado                         |
| Martin   |                                   |
| Michael  |                                   |
| Jordan   | terminado(falta entender al 100%) |
| Sheryl   | por iniciar                       |
| Johel    |                                   |
| Vladimir | en progreso                       |

```js
const carro = {
  marca: 'Jeep',
  modelo: 'Compass',
  imprimir: function () {
    return this.marca + " - " + this.modelo
  }
}

```

## Funciones constructoras

- Sirve para poder englobar los atributos en una solo funcion
- Nos permite deficinar de manera mas sencilla atributos de un objeto
- Su sintaxis es debe iniciar con mayuscula
- Se usa `this` para guardar los valores en la función

```js
function Carro(color, marca) {
  this.color = color;
  this.marca = marca;
}

const audi = new Carro("black", "Audi")
const mercedes = new Carro("blue", "Mercedes")
```

### Funcion constructora

```js

// ejemplo de this
function example1() {
  this.name = "carlos"
  console.log(this.name) // carlos
  function example2() {
    this.name = "pepe"
    console.log(this.name) // pepe
  }
}

function Persona(nombre, apellido, edad, correo) {
  // this => esto
  // this es un valor que depende del contexto en donde se encuentre
  this.name = nombre; // Persona.name
  this.lastname = apellido;
  this.age = edad;
  this.email = correo;
}
const persona1 = new Persona("Pepe", "Perez", 34, "pperez@gmail.com")
const persona2 = new Persona("Carlos", "Zapata", 22, "czapata@gmail.com")

persona2.name // carlos
```

¿Qué es una función constructora en JavaScript y para qué se utiliza?

- Para poder tener un listado del objetos (carro, tienda, etc) y poder englobarlo en una funcion
- Se usa para tener una mejor organizacion del codigo
- Para manejar una mayor cantidad de datos
- Para agregar funciones a objetos
- Para agregar atributos adicionales a los objetos sin la necesiadad ir uno por uno
- Se vuelve dinamico, hay herencia

## Prototypes

¿Qué es un prototype en JavaScript?

- Se usa para añadir caracteristicas o funcionalidades a los objetos
- Al crear un `prototype` este se hereda a todos los objetos que usen esa función constructora

¿Cómo se añade un método al prototype de una función constructora?

```js
Persona.prototype.saludar = function() {
  return 'Hola, ' + this.name + ", bienvenido!!!"
}

persona1.saludar()
```

Cuando agregamos una `function` usando `prototype` todos los objetos la van a heredar

## HTML - Tables

¿Qué es una tabla en HTML?

- Para organizar los datos en la web

¿Cómo se crea una tabla en HTML?

```html
 <table border="1">
    <!-- cabecera de la tabla-->
    <thead>
      <tr>
        <!-- th solo se usa en la cabecera -->
        <th>Nombre</th>
        <th>Apellido</th>
        <th>DNI</th>
        <th>Correo</th>
        <th>Grado</th>
      </tr>
    </thead>
    <!-- cuerpo de la tabla -->
    <tbody>
      <!-- tr = 1 fila -->
      <tr>
        <td>Pepe</td>
        <td>Perez</td>
        <td>77777777</td>
        <td>pperez@gmail.com</td>
        <td>superior</td>
      </tr>
      <!-- tr = 1 fila -->
      <tr>
        <td>Lucas</td>
        <td>Mamani</td>
        <td>88888888</td>
        <td>lmamani@gmail.com</td>
        <td>colegio</td>
      </tr>
    </tbody>
  </table>
```

```html
<!-- Paso 1 -->
<table>
</table>

<!-- Paso 2 -->
<table>
  <thead></thead>
  <tbody></tbody>
</table>

<!-- Paso 3 -->
<table>
  <thead>
    <tr>
      <th>cabecera1</th>
      <th>cabecera2</th>
      <th>cabecera3</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>

<!-- Paso 4 -->
<table>
  <thead>
    <tr>
      <th>cabecera1</th>
      <th>cabecera2</th>
      <th>cabecera3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>item1</td>
      <td>item2</td>
      <td>item3</td>
    </tr>
    <tr>
      <td>item1</td>
      <td>item2</td>
      <td>item3</td>
    </tr>
  </tbody>
</table>
```
