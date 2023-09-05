[//]: # (Stili di riferimento per il markdown)
<link rel="stylesheet" href="./res/style.css">

> # Appunti su concorrenza

---

> ## Passaggi per algoritmo di Dekker

<br/>

### 1. Prima prova di soluzione

<table>
<tr>
    <th> P </th>
    <th> Q </th>
</tr>

<tr>
    <td>
    ```C
    shared int turn = P;
    process P {
        while (true) {
            /* Entry protocol */
            while (turn == Q)
                ; /* do nothing */
            "critical section"
            turn = Q;
            "non-critical section"
        }
    }
    ```
    </td>
    <td>
    ```C
    shared int turn = P;
    process Q {
        while (true) {
            /* Entry protocol */
            while (turn == P)
                ; /* do nothing */
            "critical section"
            turn = P;
            "non-critical section"
        }
    }
    ```
    </td>
</tr>
</table>