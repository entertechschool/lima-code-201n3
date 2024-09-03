# Formularios en HTML y Events en JS

## Revision de la clase anterior

- Michael (terminado)
- Walther lab A (terminado) - lab B (70%)
- Vladimir (urgencia)
- Johel (terminado)
- Jordan lab A (terminado) - lab B (en progreso)
- Martin (por temas laborales esta en el lab7)

## Estructura de un formulario en HTML

```html
<form action="">
  <label for="input-email">
    Ingrese su email
    <input
      id="input-email"
      type="text"
      placeholder="Email: example@gmail.com"
    />
  </label>
  <label for="input-nombre">
    Ingrese su nombre
    <input id="input-nombre" type="text" placeholder="nombre" />
  </label>
  <label for="input-apellido">
    Ingrese su apellido
    <input id="input-apellido" type="text" placeholder="apellido" />
  </label>
  <label for="input-password">
    Ingrese su contraseña
    <input id="input-password" type="text" placeholder="password" />
  </label>
</form>
```

### Tipos de la etiqueta input:

- text (más común donde podemos escribir cualquier cosa)
- email
- password (contrasenas)
- number (para números)
- checkbox ()
- radio
- file (archivos)
- color (paleta de colores)
- submit

```html
<input type="text" />
<input type="email" />
<input type="password" />
<input type="number" />
<input type="checkbox" />
<input type="radio" />
<input type="files" />
<input type="submit" />
```

- Si queremos una opción mas custom para nuestro boton, recordemos que la etiqueta `button` tiene la opción de ser `type='submit`

### Example

Ejercicio: Formulario para adoptar a una mascota

## Eventos en JavaScript
