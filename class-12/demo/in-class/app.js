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
