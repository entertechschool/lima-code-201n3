'use strict';
const seattle={
    location:"seattle",
    minConsumidoresPorHora:23,
    maxConsumidorePorHora:65,
    promedioGalletasPorPersona:6.3,
    galletasVendidasPorHora:[],
    vender:function(){
        this.galletasVendidasPorHora=estimarVentas(this);
    }
}
const tokyo={
    location:"tokyo",
    minConsumidoresPorHora:3,
    maxConsumidorePorHora:24,
    promedioGalletasPorPersona:1.2,
    galletasVendidasPorHora:[],
    vender:function(){
        this.galletasVendidasPorHora=estimarVentas(this);
    }
}
const dubai={
    location:"dubai",
    minConsumidoresPorHora:11,
    maxConsumidorePorHora:38,
    promedioGalletasPorPersona:3.7,
    galletasVendidasPorHora:[],
    vender:function(){
        this.galletasVendidasPorHora=estimarVentas(this);
    }
}
const paris={
    location:"paris",
    minConsumidoresPorHora:20,
    maxConsumidorePorHora:38,
    promedioGalletasPorPersona:2.3,
    galletasVendidasPorHora:[],
    vender:function(){
        this.galletasVendidasPorHora=estimarVentas(this);
    }
}
const lima={
    location:"lima",
    minConsumidoresPorHora:2,
    maxConsumidorePorHora:16,
    promedioGalletasPorPersona:4.6,
    galletasVendidasPorHora:[],
    vender:function(){
        this.galletasVendidasPorHora=estimarVentas(this);
    }
}
const horasAtencion=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const tiendas=[seattle,tokyo,dubai,paris,lima];
function random(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
function estimarVentas(tienda){
    const sale=[];
    for(let i=0;i<horasAtencion.length;i++){
        const numeroConsumidores=random(tienda.minConsumidoresPorHora,tienda.maxConsumidorePorHora);
        const ventaPorHora=Math.ceil(numeroConsumidores*tienda.promedioGalletasPorPersona);
        sale.push(ventaPorHora);
        console.log(sale);
    }
    return sale;
}
function mostrarVentas(tienda){
    let totalGalletasDelDia=0
    const root=document.getElementById('root');
    const location=document.createElement('section');
    location.classList.add('location');
    root.appendChild(location);
    const title=document.createElement('h2');
    title.textContent=tienda.location;
    location.appendChild(title);
    const lista=document.createElement('ul');
    location.appendChild(lista);
    for(let i=0;i<horasAtencion.length;i++){
        const listItem=document.createElement('li');
        listItem.textContent=horasAtencion[i]+':'+tienda.galletasVendidasPorHora[i]+'galletas';
        lista.appendChild(listItem);
        totalGalletasDelDia += tienda.galletasVendidasPorHora[i];
    }
    const ventaTotal=document.createElement('li');
    ventaTotal.textContent='total de galletas del dia:'+totalGalletasDelDia + 'galletas';
    lista.appendChild(ventaTotal);
}
function correModelo(){
    for(let i=0;i<tiendas.length;i++){
        tiendas[i].vender();
        mostrarVentas(tiendas[i]);
    }
}
correModelo();
/*
Math.ceil-redondea hacia arriba
Math.floor-redondea hacia abajo
como se calcula las ventas por hora
(numeroClientes/hora)*(galletascompran/persona)=galletasCompradas/hora
*/