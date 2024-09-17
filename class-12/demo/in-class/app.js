"use strict";

const myCanvas = document.getElementById("my-canvas");
// para poder dibujar en un canvas tenemos que definir que usaremos
const context = myCanvas.getContext("2d");

// este sirve para poder definir el color de mi dibujo
context.fillStyle = "red";
// context.fillRect(x, y, ancho. alto)
// por defecto la unidad de medida son pixeles
context.fillRect(160, 0, 180, 40);
context.fillRect(120, 40, 300, 20);

context.fillStyle = "#ffb473";
context.fillRect(120, 60, 240, 40);
context.fillRect(120, 100, 300, 40);
context.fillRect(120, 140, 340, 30);
context.fillRect(160, 170, 200, 60);

context.fillStyle = "#a86428";
context.fillRect(120, 60, 100, 40);
context.fillRect(100, 100, 30, 80);
context.fillRect(160, 100, 40, 80);
context.fillRect(120, 160, 40, 20);

// color de la linea
context.strokeStyle = "#000";
// el ancho de la linea
context.lineWidth = 1;
// queremos iniciar a dibujar una linea
context.beginPath();
// el punto de partida
// que se va a empezar a dibujar en el eje x 1600 y el eje y 230
context.moveTo(160, 230);
// punto de llegada
context.lineTo(100, 230);
// dibujar la linea
context.stroke();

// iniciar una nueva linea
context.beginPath();
context.moveTo(100, 230);
context.lineTo(100, 270);
context.stroke();

// iniciar una nueva linea
context.beginPath();
context.moveTo(100, 270);
context.lineTo(60, 270);
context.stroke();

function drawGrid(context, canvasWidth, canvasHeight, cellSize) {
  context.strokeStyle = "#e0e0e0";
  context.lineWidth = 1;

  // Dibujar líneas verticales y numeración en el eje X
  for (let x = 0; x <= canvasWidth; x += cellSize) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvasHeight);
    context.stroke();

    // Añadir números en el eje X
    context.fillStyle = "black";
    context.font = "10px Arial";
    context.fillText(x, x + 2, canvasHeight - 2);
  }

  // Dibujar líneas horizontales y numeración en el eje Y
  for (let y = 0; y <= canvasHeight; y += cellSize) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvasWidth, y);
    context.stroke();

    // Añadir números en el eje Y
    context.fillStyle = "black";
    context.font = "10px Arial";
    context.fillText(y, 2, y - 2);
  }
}

// Dibujar la cuadrícula
drawGrid(context, myCanvas.width, myCanvas.height, 20);
