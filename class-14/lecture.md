# CSS Transform, Transition, Animation y JS Reinstansación

## Review de lab 13

- Walther : No pudo ingresar a la clase, se va a poner al día
- Sheryl: Acaba de terminar con sus parciales, se esta poniendo al día y hoy entrega el lab
- Vladimir: Estuvo de viaje recien lo va a revisar
- Michael: Terminado

## Transform

¿ Qué es `transform` ?

- Cambio de estado pero es consecuencia de una acción

### Propiedades

- `translate(x, y)`:
- `rotate(deg/rad/turn)`:
- `scale(x, y)`:
- `skew(x-angle, y-angle)`:

### Ejemplo

```css
.box {
  transform: translate(50px, 50px) rotate(45deg) scale(1.5) skew(10deg, 10deg);
}

/* example in-class-css */

#box {
  height: 200px;
  width: 200px;
  margin-left: 100px;
  background-color: darkgray;
  /* transform: translate(100px, -180px); */

  /* 1 = 100% */
  /* transform: scale(1.3); */
  /* transform: skew(10deg, 310deg); */
  /* 1turn = 360deg */
  /* transform: scale(1.3) rotate(0.3turn); */
}
```

## Transition

¿Qué propiedad CSS usarías para crear una transición suave en el cambio de color de fondo de un elemento?

- Transition

¿Qué cuatro propiedades se pueden especificar en transition?

- `transition`: propiedades
- `transition-property`:
- `transition-duration`:
- `transition-timing-function`:
- `transition-delay`:

## Animation

¿Qué es?

- Puede ser la animación de un gráfico o una image
- Poder derla un moviento a un elemento, no requiere un disparador
- Darle mas interactividad

¿Qué propiedad CSS usarías para crear una animación en un elemento?

Ejemplo:

```css
@keyframes example {
  0% {
    background-color: red;
  }
  50% {
    background-color: yellow;
  }
  100% {
    background-color: green;
  }
}

.box {
  animation-name: example;
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```
