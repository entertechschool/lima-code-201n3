# Canvas y ChartJS

## Review de **Odd Duck Products**

## Canvas `<canvas></canvas>`

¿Qué es `<canvas></canvas>`?

```html
<canvas id="myCanvas" width="500" height="500" style="border: solid"></canvas>
```

```js
const myCanvas = document.getElementById("myCanvas");
// Para poder dibujar dentro de myCanvas
const context = myCanvas.getContext("2d");
```

¿Qué método de contexto se usa para dibujar un rectángulo relleno en un `<canvas>`?

```js
context.fillStyle = "red";
context.fillRect(x, y, ancho, alto);

context.fillStyle = "blue";
context.fillRect(100, 200, 50, 50);
```

¿Qué método de contexto se usa para dibujar una línea en un `<canvas>`?

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

¿Qué tipo de gráfico puedes crear con ChartJS? Nombra al menos tres.

-
-
-

¿Cómo se crea un nuevo gráfico de barras usando ChartJS en un `<canvas>`?

¿Cómo se actualiza un gráfico existente en ChartJS?

¿Cómo se destruye un gráfico en ChartJS?
