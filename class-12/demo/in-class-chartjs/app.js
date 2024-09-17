"use strict";

const contexto = document.getElementById("myChart");
const createChart = document.getElementById("create-chart");

function createGrafico() {
  /**
instanciar => recuerden que se usa new
new Chart recibe 2 parametros
1 => contexto
2 => configuracion del grafico
 * 
 */

  // la configuracion de ChartJS es un objeto
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
}

createChart.addEventListener("click", function () {
  createGrafico();
});
