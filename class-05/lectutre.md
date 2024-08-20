# Clase #5

## Review del lab04

| Nombre   | Estado                      |
| -------- | --------------------------- |
| Walther  |                             |
| Martin   |                             |
| Michael  | Terminado                   |
| Jordan   | Debe ponerse al día (falto) |
| Sheryl   |                             |
| Johel    | Terminado (falta CSS)       |
| Vladimir |                             |

## Funciones repaso

- Es una definición de algo que queremos ejecutar.
- Es un proceso el cual cumple una acción y podemos llamarla cada vez que la necesitemos.
- Es una forma de agrupar una serie de codigo para poder reutilizarlos solo como llamarlos

```js
function nombreDeLaFuncion(parametros) {
  // codigo
}

/*
Tips:
- Debe usar verbo infinitivo
- Debe ser lo mas descriptivo posible
*/
```

- Return (Opcional)

```js
function saludar() {
  return "Hola, como estas?"
}

saludar()

function llamar() {
  alert("hola")
  prompt("hola2")
  console.log("Llamar al banco")
}

llamar()

// Como se ejecuta la function?

// Lo que la funcion retorne se va a guardar en la variable valor
// Solo creo la variable si es que queremos guardar el valor, si no no hace falta
const valor = saludar()
saludar()

// La funcion llamar no retorna nada, al ser así no hay ni un valor que guardar en la variable valor2
// cuando creamos una variable pero esta no tiene un valor es de tipo
// undefined (no definido)
llamar()
```

### Pair programming

Problema: Crear una funcion que reciba un arreglo de numeros y devuelva la suma de todos los numeros.

## Flex y Grid

- Flexbox

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

- Grid

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
```
