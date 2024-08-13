# Listas, Box Model y Bucles

## Recap Lab02

- Walther (casi terminado)
- Martin (ingreso hoy 12/08)
- Michael (terminado)
- Jordan (terminado)
- Sheryl (terminado)

## Listas

¿Qué es una lista en `HTML` ?

- Son etiquetas para dar un oden predeterminado a una cantidad elementos
- Objetos que necesitan ser listados
- Son 2 tipo de lista:
  - Ordenas
  - No ordenadas

¿Cómo se crea una lista ordenada?

```html
<!-- ol: ordered list -->
<ol>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ol>
```

1. Elemento 1
2. Elemento 2
3. Elemento 3

¿Cómo se crea una lista desordenada?

```html
<ul>
  <li>Element1</li>
  <li>Element2</li>
  <li>Element4</li>
</ul>
```

## Box Model

¿Qué es el Flex?

- Es una propiedad para poder acomodar listas, elementos, etc, poder centrarlos, darles espacios y una forma de ahorrar codigo en CSS
- Un metodo que permite que los elementos se puedan distribuir a lo largo de un eje segun su contenedor
- Su comportamiento por defecto, es desplazar los elementos en una linea (horizontal)

¿Caules son las propiedades de Flex?

```css
.contenedor {
  /* justify-content: Manipular la posición de un elemento de forma horizontal */
  justify-content: space-between;
  justify-content: center;
  flex-direction: row;
  flex-direction: column;
  flex-direction: row-reverse;
  flex-direction: column-reverse;
  gap: 10px
}
```

¿Para que casos debemos usar Flex?

- Una cabecera (menu)
- Separar elementos
- los footer
- distribuciones sin hacer calculos
- ayuda la responsive

## Bucles

¿Qué es un bucle?

¿Cuántos tipos de bucles existen en `JavaScript`? (Solo menciona los que vimos en clases pasadas)
Estructura de un bucle `for` en `JavaScript`

```js
# Ejemplo
```

Estructura de un bucle `while` en `JavaScript`

```js
# Ejemplo
```
