# POO (Programación Orientada a Objetos)

## Funciones constructoras

```js
const carro = {
  marca: 'Jeep',
  modelo: 'Compass',
  imprimir: function () {
    return this.marca + " - " + this.modelo
  }
}
```

### Funcion contructora

```js

```

¿Qué es una función constructora en JavaScript y para qué se utiliza?

### ¿Cómo se usa?

```js
const persona1 = new Persona('Pepe', 'Zapata', 19, 'pepe@gmail.com')
const persona2 = new Persona('Juan', 'Perez', 34, 'juan@gmail.com')
```

## Prototipos

¿Qué es un prototipo en JavaScript?

¿Cómo se añade un método al prototipo de una función constructora?

```js
Persona.prototype.calcularFechaDeNacimiento = function () {
  // como estamos dentro de Persona podemos acceder a sus propiedades
  console.log(this.name)
  console.log(this.age)
}
```

Cuando agregamos una `function` usando `prototype` todos los objetos la van a heredar

## HTML - Tables

¿Qué es una tabla en HTML?

¿Cómo se crea una tabla en HTML?

```html
<table>
  <thead>
    <tr>
      <th>titulo de la cabecera</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>columana</td>
    </tr>
     <tr>
      <td>columana</td>
    </tr>
     <tr>
      <td>columana</td>
    </tr>
     <tr>
      <td>columana</td>
    </tr>
  </tbody>
</table>
```
