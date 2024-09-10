# Depuración en JS y manejo de errores

## Revisión del lab anterior

- Michael: Todo bien (terminado)
- Jordan: Casi terminado (manejo de eventos JS)
- Walther: En progreso
- Vladimir: Hoy lo sube (09/09)
- Sheryl: Hoy lo sube (09/09)

## ¿Qué entienden por depuración en el contexto de la programación?

- Detectar algun error de sintaxis, nuestro editor nos puede ayudar
- Pueden ser errores de ejecución, puede ser 1 o todo
- Darnos cuenta de los errores usando el depurador

## Error de sintaxis:

- Pueden ser palabras o simbolos al momento de escribir
- Tiene que ver con los errores al momento de escribir codigo, cuando no seguimos los estandares correctos
- Errores comunes que podemos cometer al momento de escribir nuestro codigo
- Errores comunes que pueden pasar desapercibidos

## Ejemplo de errores de sintaxis

```js
const n1 = 10;

function saludar(nombre) {
  return "Hola" + nombre;
}

// == compara el valor
// === compara el tipo de dato y el valor

if (n1 === n2) {
}

for (let i = 0; i < 10; i++) {}
```

## Errores lógicos

- Por ejemplo un blucle infinito `while(true)`
- Son errores, producto de estructurar mal o codificar de forma equivocada las instrucciones en JS
- Son codificaciones redudantes, por lo cual hacen que codigo sea mas largo y menos entendible
- Por ejemplo: Buscar elementos fuera de rango usando `for`

```js
let numero = parseInt("hola"); // NaN (Not a Number)
while (true) {}

for (let i = 0; i < "nada"; i++) {}
```

## Tipos de consoles

- `console.log`
- `console.warn`
- `console.error`

## chrome dev tools (debugger)

- Sirve para hacer revisiones de codigo
- Se puede usar para ver el codigo de otras webs y aprender y/o copiar cosas
- Podemos hacer seguimiento de nuestro codigo para encontrar errores
- Es una herramiento para poder hacer seguimiento del codigo fuente que se ha escrito

## `console.log` vs `debugger`

- El debugger puede detener la ejecucion del codigo en tiempo real, mientras que el console no
- El debugger es mas analitico, el console es algo mas sencillo
- En el debugger tenemos que indicar donde se detiene el codigo, el console solo muestra un mensaje no sirve para ver una parte especifica del codigo
- El console.log permite ver el valor para prevenir errores y usar el debugger cuando el codigo no funcione y queramos ver exactamente donde esta el error o donde esta ocurriendo
