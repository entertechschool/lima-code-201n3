function SalmonCookiesSite(name, address, schedule, averageClientPerHour) {
  this.name = name;
  this.address = address;
  this.schedule = schedule;
  this.averageClientPerHour = averageClientPerHour;
}

const lima = new SalmonCookiesSite(
  "Lima",
  "av reducto 1518",
  "8:00 am - 21:00 pm",
  100
);

const paris = new SalmonCookiesSite(
  "Paris",
  "av Paris 1518",
  "8:00 am - 21:00 pm",
  200
);

const tokio = new SalmonCookiesSite(
  "Tokio",
  "av Tokio 1518",
  "8:00 am - 21:00 pm",
  100
);

const roma = new SalmonCookiesSite(
  "Roma",
  "av Roma 1518",
  "8:00 am - 21:00 pm",
  100
);

const santiago = new SalmonCookiesSite(
  "Santiago",
  "av Santiago 1518",
  "8:00 am - 21:00 pm",
  100
);

const miraflores = new SalmonCookiesSite(
  "Miraflores",
  "Av 28 de julio",
  "8:00 am - 21:00 pm",
  100
);

const tiendas = [lima, paris, tokio, roma, santiago, miraflores];
const horario = [
  "6:00am",
  "7:00am",
  "8:00am",
  "9:00am",
  "10:00am",
  "11:00am",
  "12:00pm",
  "01:00pm",
  "02:00pm",
  "03:00pm",
  "04:00pm",
  "05:00pm",
  "06:00pm",
  "07:00pm",
  "Total diario de la ubicación",
];

// CABECERA DE LA TABLA
const tableRowHeader = document.getElementById("table-row-header");

const tableHeadEmpty = document.createElement("th");
tableRowHeader.appendChild(tableHeadEmpty);

for (let i = 0; i < horario.length; i++) {
  const tableHeadTitle = document.createElement("th");
  tableHeadTitle.textContent = horario[i];
  tableRowHeader.appendChild(tableHeadTitle);
}

// CUERPO DE LA TABLA
const tableBody = document.getElementById("table-body");

for (let j = 0; j < tiendas.length; j++) {
  const tableRow = document.createElement("tr");
  tableBody.appendChild(tableRow);

  const tableData = document.createElement("td");
  tableData.textContent = tiendas[j].name;

  tableRow.appendChild(tableData);

  for (let k = 0; k < horario.length; k++) {
    const tableDataHorario = document.createElement("td");
    tableRow.appendChild(tableDataHorario);
  }
}

// const tableRow1 = document.createElement("tr");
// tableBody.appendChild(tableRow1);

// const tableData1 = document.createElement("td");
// tableData1.textContent = "Lima";

// tableRow1.appendChild(tableData1);

// const tableData11 = document.createElement("td");
// tableRow1.appendChild(tableData11);

// const tableRow2 = document.createElement("tr");
// tableBody.appendChild(tableRow2);

// const tableData2 = document.createElement("td");
// tableData2.textContent = "Paris";
// tableRow2.appendChild(tableData2);

// const tableRow3 = document.createElement("tr");
// tableBody.appendChild(tableRow3);
// const tableRow4 = document.createElement("tr");
// tableBody.appendChild(tableRow4);
// const tableRow5 = document.createElement("tr");
// tableBody.appendChild(tableRow5);
