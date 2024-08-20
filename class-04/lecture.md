# Enlaces, Layouts y Funciones

## Review del lab03

| Nombre   | Estado                          |
| -------- | ------------------------------- |
| Walther  |                                 |
| Martin   |                                 |
| Michael  | Terminado (Faltan correcciones) |
| Jordan   | Terminado                       |
| Sheryl   |                                 |
| Vladimir |                                 |

## DRY (Don't Repeat Yourself)

- Se tiene que evitar repetir(duplicar) sentencias, optimizar el codigo
- Reutilizar codigo (reciclar codigo)
- Es parte de refactorizar

## Funciones: scope, params, args, return.

```js
function nombreDeLaFuncion(parametros) {
}

function saludar(nombre) {
  return "Hola " + nombre
}

function comprar() {}
function comprando() {} (Es un mal nombre)

function comprarCarro() {}

saludar("Linder")
const nombreEjemplo = "Lucas"
saludar(nombreEjemplo)
```

- **Scope**

```js
let nombre = "Linder"
// El scope de suma y promedio se limita a el espacio que use la funcion
function calcularPromedio(nota1, nota2, nota2) {
  const suma = nota1 + nota2 + nota3
  const promedio = suma / 3
  console.log(nombre) // Linder
  return promedio
}

console.log(suma) // error
```

- **Params (variables dentro de la funcion)**
- **Args (valores al llamar a la funcion)**
- **Return**

## CSS layout

## Pair Programming
