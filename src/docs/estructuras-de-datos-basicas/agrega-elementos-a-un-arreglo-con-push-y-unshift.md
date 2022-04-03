La longitud de un arreglo, así como los tipos de datos que puede contener, no es fija. Los arreglos pueden ser definidos con la cantidad de elementos que se desee, y dichos elementos pueden ser agregados o removidos con el tiempo; en otras palabras, los arreglos son <dfn>mutables</dfn>. En este desafío, veremos dos métodos con los que podemos modificar un arreglo: `Array.push()` y `Array.unshift()`.

Ambos métodos toman uno o más elementos como parámetros y los agregan al arreglo que hizo la llamada; el método `push()` agrega los elementos al final del arreglo, mientras que `unshift()` los agrega al inicio. Considera lo siguiente:

```js
let treintaYTres = 'XXIII';
let numerosRomanos = ['XXI', 'XXII'];

numerosRomanos.unshift('XIX', 'XX');
```

`numerosRomanos` tendrá el valor `['XIX', 'XX', 'XXI', 'XXII']`.

```js
numerosRomanos.push(treintaYTres);
```

`numerosRomanos` tendrá el valor `['XIX', 'XX', 'XXI', 'XXII', 'XXIII']`. Ten en cuenta que también podemos pasar variables, que nos permiten una mayor flexibilidad en la modificación dinámica de los datos de nuestro arreglo.

<hr>

Hemos definido una función, `mezclarNumeros`, a la cual le estamos pasando un arreglo como argumento. Modifica la función utilizando `push()` y `unshift()` para agregar `'I', 2, 'tres'` al principio del arreglo y `7, 'VIII', 9` al final, de tal modo que el arreglo devuelto contenga las representaciones de los números del 1 al 9 en orden.

<hr>

### Instrucciones
