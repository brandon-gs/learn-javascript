La principal característica de cualquier estructura de datos es, por supuesto, la habilidad no solo de guardar datos, sino también de ser capaz de recuperar esos datos cuando le es requerido. Entonces, ahora que hemos aprendido como crear un arreglo, comencemos a pensar en cómo podemos acceder a la información de ese arreglo.

Cuando definimos un arreglo simple como el que se ve a continuación, hay 3 elementos en él:

```js
let nuestroArray = ["a", "b", "c"];
```

En un arreglo, cada elemento tiene un <dfn>índice</dfn>. Este índice funciona como la posición de ese elemento en el arreglo y es como puedes referenciarlo. Sin embargo, es importante tener en cuenta, que los arreglos en JavaScript son <dfn>indexados en base cero</dfn>, es decir que el primer elemento de un arreglo está en la posición **_cero_**, no en la uno. Para recuperar un elemento de un arreglo podemos encerrar un índice entre corchetes y agregarlo al final de este, o más comúnmente, a una variable que hace referencia a un objeto tipo arreglo. Esto es conocido como <dfn>notación de corchetes</dfn>. Por ejemplo, si queremos recuperar la `a` de `nuestroArray` y asignársela a una variable, podemos hacerlo con el siguiente código:

```js
let nuestraVariable = nuestroArray[0];
```

Ahora `nuestraVariable` tiene el valor de `a`.

Además de acceder al valor asociado con un índice, también puedes _establecer_ un índice a un valor usando la misma notación:

```js
nuestroArray[1] = "no b nunca más";
```

Utilizando la notación de corchetes, ahora hemos restablecido el elemento en el índice 1 de la cadena `b`, a `no b nunca más`. Ahora `nuestroArray` es `["a", "no b nunca más", "c"]`.

<hr>

Para completar este desafío, establece la segunda posición (índice `1`) de `myArray` a cualquier cosa que quieras, además de la letra `b`.

<hr>

### Instrucciones