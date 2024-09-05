function Tienda(name, address, schedule, contactInfo) {
  this.name = name;
  this.address = address;
  this.schedule = schedule;
  this.contactInfo = contactInfo;
}

const tienda1 = new Tienda("Perú", "Av. lima 123", "8:00am", "peru@gmail.com");
const tienda2 = new Tienda(
  "Tokio",
  "Av china 123",
  "7:00am",
  "china@gmail.com"
);
const tiendas = [tienda1, tienda2];

const ubicationForm = document.getElementById("ubication-form");

ubicationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
  // crear el objeto usando la informacion
  const nuevaTienda = new Tienda(
    data.get("ubication"),
    data.get("address"),
    data.get("schedule"),
    data.get("contact-info")
  );
  tiendas.push(nuevaTienda);
  mostrarTiendas();
});

function mostrarTiendas() {
  const tiendasContainer = document.getElementById("lista-tiendas");

  tiendasContainer.innerHTML = "";

  for (let i = 0; i < tiendas.length; i++) {
    const contenedor = document.createElement("div");
    contenedor.style.border = "solid green";

    const title = document.createElement("h5");
    title.textContent = tiendas[i].name;
    const address = document.createElement("p");
    address.textContent = tiendas[i].address;
    const schedule = document.createElement("p");
    schedule.textContent = tiendas[i].schedule;
    const contactInfo = document.createElement("p");
    contactInfo.textContent = tiendas[i].contactInfo;

    contenedor.appendChild(title);
    contenedor.appendChild(address);
    contenedor.appendChild(schedule);
    contenedor.appendChild(contactInfo);

    tiendasContainer.appendChild(contenedor);
  }
}

mostrarTiendas();
