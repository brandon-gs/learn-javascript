El término matemático <dfn>diferencia simétrica</dfn> (`△` or `⊕`) de dos conjuntos es el conjunto de elementos que están en cualquiera de los dos conjuntos, pero no en ambos. Por ejemplo, para los conjuntos `A = {1, 2, 3}` y `B = {2, 3, 4}`, `A △ B = {1, 4}`.

Diferencia simétrica es una operación binaria, significa que opera en solo dos elementos. Entonces, para evaluar una expresión que involucra diferencias simétricas entre * tres * elementos (`A △ B △ C`), tienes que completar una operación a la vez. Asi, para los conjuntos `A` y `B` encima, y `C = {2, 3}`, `A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}`.

<hr>

Cree una función que tome dos o más arrays y devuelva una array de sus diferencias. La array que se devuelve debe contener solo valores únicos (*no duplicados*).

<hr>

### Instrucciones
