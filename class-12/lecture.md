# Canvas y ChartJS

## Review de **Odd Duck Products**

- Aún no esta terminado mañana martes 17 sep van a revisarlo con Alex

Michael: Entender las funciones que estaban dentro del objeto
Vladimir: Va a volverlo a revisar para ordenarlo
Johel: La solución fue muy extensa

## Canvas `<canvas></canvas>`

¿Qué es `<canvas></canvas>`?

- Es un elemento que contiene graficos, creado por scripts, pueden ser
  - cuadrados
  - lineas
  - imágenes
  - texto
  - colores
- Es para hacer diseños
- Es parecido a la etiquete img pero no tiene `src` ni `alt` y se puede crear figuras geometricas, es necesario un `id` para poder usarlo desde `JS`

```html
<canvas id="myCanvas" width="500" height="500" style="border: solid"></canvas>
```

```js
const myCanvas = document.getElementById("myCanvas");
// Para poder dibujar dentro de myCanvas
const context = myCanvas.getContext("2d");
```

¿Qué método de contexto se usa para dibujar un rectángulo relleno en un `<canvas>`?

Usamos la funcion `fillRect` para poder crear una figura con relleno

- Parametros que recibe la funcion `fillRect`

`filRect(x, y, ancho, alto)`

- Para poder asignare un color usamos la funcion `fillStyle`
- El color puede ser en ingles, hexadecimal, hsl, rgb, rgba

```js
context.fillStyle = "red";
context.fillRect(x, y, ancho, alto);

context.fillStyle = "blue";
context.fillRect(100, 200, 50, 50);
```

¿Qué método de contexto se usa para dibujar una línea en un `<canvas>`?

- `beginPath()`: Sirve para inicar a dibujar una nueva linea
- `moveTo(x, y)`: Sirve para definir el punto de inicio
- `lineTo(x, y)`: Sirve para definir el punto de fin
- `stroke()`: Dibuja la linea

```js
context.beginPath();
context.moveTo(200, 200);
context.lineTo(100, 100);
context.stroke();

context.beginPath();
context.moveTo(0, 200);
context.lineTo(100, 100);
context.stroke();

context.beginPath();
context.moveTo(0, 200);
context.lineTo(200, 200);
context.strokeStyle = "green";
context.lineWidth = 2;
context.stroke();
```

### Tarea:

¿Cómo se borra el contenido de todo el `<canvas>` usando su contexto?

## ChartJS

¿Qué es ChartJS?

- Es una libreria de JS (empaquetado de funciones), se pueda usar para crear gráficos (barras, puntos, areas, lineales, pies)

¿Qué tipo de gráfico puedes crear con ChartJS? Nombra al menos tres.

- doughnut
- bar
- pie
- linear

¿Cómo se crea un nuevo gráfico de barras usando ChartJS en un `<canvas>`?

- contexto: Es la referencia al `canvas` creando en el `HTML`
- configuracion: Es el objeto que me permite definir los datos a mostrar el el grafico

```js
const configuracion = {
  // lo primero que debemos definir es el tipo de grafico
  type: "bar",
  // luego vamos a definir la data

  data: {
    // los label vienen a ser los textos que aparecen en el eje x
    labels: ["Michael", "Vladimir", "Johel"],
    datasets: [
      {
        label: "Cantidad de assistencias en Enero",
        data: [108, 7, 6],
      },
      {
        label: "Cantidad de assistencias en Febrero",
        data: [18, 27, 36],
      },
    ],
  },
};

new Chart(contexto, configuracion);
```

### Tarea

- [Enlace de referencia](https://www.chartjs.org/docs/latest/developers/updates.html)

¿Cómo se actualiza un gráfico existente en ChartJS?

¿Cómo se destruye un gráfico en ChartJS?
