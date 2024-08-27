function SalmonCookiesSite(name, address, schedule, averageClientPerHour) {
  this.name = name;
  this.address = address;
  this.schedule = schedule;
  this.averageClientPerHour = averageClientPerHour;
}

function estimarVentas(numero) {
  return numero * 5
}

// prototype
SalmonCookiesSite.prototype.vender = function () {
  console.log(estimarVentas(this.averageClientPerHour))
}

SalmonCookiesSite.prototype.saludar = function () {
  console.log(this.name + " " + this.schedule)
}

const lima = new SalmonCookiesSite(
  "Salmon Lima cookies",
  "av reducto 1518",
  "8:00 am - 21:00 pm",
  100
);

console.log(lima.vender())

const paris = new SalmonCookiesSite(
  "Salmon Paris cookies",
  "av Paris 1518",
  "8:00 am - 21:00 pm",
  200
);

console.log("Paris")
paris.vender()
console.log("-----------")

const tokio = new SalmonCookiesSite(
  "Salmon Tokio cookies",
  "av Tokio 1518",
  "8:00 am - 21:00 pm",
  100
);

const roma = new SalmonCookiesSite(
  "Salmon Roma cookies",
  "av Roma 1518",
  "8:00 am - 21:00 pm",
  100
);

const santiago = new SalmonCookiesSite(
  "Salmon Santiago cookies",
  "av Santiago 1518",
  "8:00 am - 21:00 pm",
  100
);



// azul
const contenedor = document.getElementById("container");

// verde - 1
const containerTienda1 = document.createElement("div");
contenedor.appendChild(containerTienda1);

// estamos creando un h2
const limaTitle = document.createElement("h2");
const limaAddress = document.createElement("h6");
const limaSchedule = document.createElement("p");
// le estamos dando valor (texto) al h2
limaTitle.textContent = lima.name;
limaAddress.textContent = lima.address;
limaSchedule.textContent = lima.schedule;

containerTienda1.appendChild(limaTitle);
containerTienda1.appendChild(limaAddress);
containerTienda1.appendChild(limaSchedule);

// verde - 2
const containerTienda2 = document.createElement("div");
contenedor.appendChild(containerTienda2);
