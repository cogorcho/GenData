## Synopsis

Aplicacion en nodejs q genera datos de personas o familias para una base de datos mongo.
La base se llama familias y las colecciones familias y personas.
Para el proximo release, esto deberia ser configurable, aun no lo es.
La idea es poder generar data para probar una aplicacion para una escuela.

## Code Example

EN app.js, al final esta esto:

let cargar1000 = () => {
    for (let i = 0; i < 1000; i++) {
        let flia = new dbFam.Familia(genFlia());
        flia.save( (err) => err ? console.log(err) : null);
    }
}

Aca, dbFam es lo q maneja donde (a q collection) va la data y en lugar de Familia se puede usar Persona.

La funcion getOne() en Familia.js y Persona.js aun no anda como se debe.

## Motivation

Para los alumnos de la TSSI de la UTN FRSN, para el 2017, esto es el primer ejercicio.
Incluye javascript (node), algo de programacion funcional y mongo usando mongoose.

## Installation

Bajar o clonar la app, npm install y levantar mongo en el puerto default.

## API Reference

Nada por ahora.

## Tests

node app, por ahora. No hay mucho mas. Este proyecto solo genera data.
LO divertido es q se pueden generar muchos registros y, por el lado de la basede datos,
verificar q no haya numeros de DNI repetidos. Por el lado de node, se pueden agregar funciones
e ir armando un nucleo para una app q acceda a la base via web.

## Contributors

Juan Arce, por ahora.

## License

Totalmente libre, copiable y reproducible sin costo alguno para nadie.
