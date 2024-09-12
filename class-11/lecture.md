# Audio y Video en HTML

## Review de Salmon Cookies

- Michael:
  - Chevere
    - Manejo de eventos
    - Manejo de objectos
  - Problemas
    - tablas desde js (abstracción)
- Walther
  - Chevere
    - Ver el producto terminado
  - Problemas
    - CSS
- Jordan
  - Chevere
    - Forms
    - Mezclar HTML + CSS + JS
  - Problemas
    - Tablas desde JS
    - Bucles
    - funciones (en sintaxis)
- Sheryl
  - Chevere
    - CSS
  - Problemas
    - Tablas - JS
    - Continuidad de los labs
- Johel
  - Chevere
    - CSS
  - Problemas
    - Tablas - JS

## Audio y Video

- Videos explicativos
- Videos descriptivos
- Videos de anuncios
- Videos empresariales

- OJO: No es lo mismo tener un video propio que usar uno de youtube

¿Cuál es la etiqueta HTML para incrustar video en una página web?

```html
<!-- Es una etiqueta native donde podemos colocar la URL del video y se va a mostrar con la interface por defecto que use el navegador -->
<video></video>

<!-- Podemos customizar la UI del video usando JS y CSS -->
```

¿Qué atributo se utiliza en la etiqueta `<video>` para especificar el ancho del reproductor de video?

```html
<video src="ruta.mp4" width="100" height="300"></video>
```

¿Cuál es la etiqueta HTML para incrustar audio en una página web?

```html
<audio></audio>
```

¿Qué atributo se utiliza en la etiqueta `<audio>` para añadir controles de reproducción?

```html
<audio controls></audio>
```

### Atributos

- controls: Permite incluir herramientas para la gestion del audio/vide, es decir muestra los controles
- src: Sirve para vincular el audio/vide con una URL, puede ser un archivo local o remoto
- muted: Permite quitar el audio por defecto sea de audio/video (manualmente lo podemos activar)
- autoplay: Sirve para reproducir de manera automatica audio/video
- loop: Si el video/audio termina este se va a reproducir de manera infinita
- poster: Una imagen que podemos colocar para que se muestre antes de darle play

¿Cuál es el propósito de incluir múltiples etiquetas `<source />` dentro de las etiquetas `<audio>` y/o `<video>`?

- Sirve para prevenir que si no funciona el video/audio en un formate pase al otro y asi de forma consecutiva
- Para mejorar el SEO de nuestra web

## Modelos de Dominio (Objetos)

- El poder definir los objetos a nivel estructural

<!-- atributos de una tienda -->

- ubicacion
- horario
- promedio de ventas
- promedio de visitas
- promedio de clientes
- consumo max
- consumo min

```js
// Function constructora llamada Sede
// lo que esta dentro de los parentesis de la funcion con PARAMETROS
function Sede(
  ubicacion,
  horario,
  promedioDeVentas,
  promedioDeVisitas,
  promedioDeClientes,
  consumoMax,
  consumoMin
) {
  this.ubicacion = ubicacion;
  this.horario = horario;
  this.promedioDeVentas = promedioDeVentas;
  this.promedioDeVisitas = promedioDeVisitas;
  this.promedioDeClientes = promedioDeClientes;
  this.consumoMax = consumoMax;
  this.consumoMin = consumoMin;
}
```
