Lo siguiente es un ejemplo de la implementación más simple de una estructura de datos de un arreglo. Esto se conoce como un <dfn>arreglo unidimensional</dfn>, lo que significa que sólo tiene un nivel, o que no tiene otros arreglos anidados dentro de él. Observa que contiene <dfn>booleanos</dfn>, <dfn>cadenas</dfn> y <dfn>números</dfn>, entre otros tipos de datos válidos de JavaScript:

```js
let simpleArray = ["one", 2, "three", true, false, undefined, null];
console.log(simpleArray.length);
```

La llamada `console.log` muestra `7`.

Todos los arreglos tienen una propiedad de longitud, que como se muestra arriba, se puede acceder muy fácilmente con la sintaxis `Array.length`. A continuación se puede ver una implementación más compleja de un arreglo. Esto se conoce como un <dfn>arreglo multidimensional</dfn>, o un arreglo que contiene otros arreglos. Observa que este arreglo también contiene <dfn>objetos</dfn> JavaScript, que examinaremos muy de cerca en la siguiente sección, pero por ahora, todo lo que necesitas saber es que los arreglos también son capaces de almacenar objetos complejos.

```js
let complexArray = [
    [
        {
            uno: 1,
            dos: 2,
        },
        {
            tres: 3,
            cuatro: 4,
        },
    ],
    [
        {
            a: "a",
            b: "b",
        },
        {
            c: "c",
            d: "d",
        },
    ],
];
```

<hr>

Hemos definido una variable llamada <code>tuArray</code>. Completa la sentencia asignando un arreglo de al menos 5 elementos de longitud a la variable <code>tuArray</code>. Tu arreglo debe contener al menos una cadena (string), un número (number) y un booleano (boolean).

<hr>

### Instrucciones
