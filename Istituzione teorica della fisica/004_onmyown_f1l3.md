# Classical Mechanics - Lecture 3

## 1 ⋅ Principle of least action

In realtà il nome è sbagliato: non è il principio dell'azione minima, ma è il principio dell'azione stazionaria. In generale minimo e stazionario sono intercambiabili, o almeno lui li usa come intercambiabili.

Pensiamo alle leggi della fisica e consideriamone una molto specifica:
- Le leggi dell'equilibrio
  - Un oggetto che non si muove da che leggi è governato
  - La somma delle forze è uguale a 0 (diciamo che non accellera)

In particolare l'equilibrio lo possiamo scrivere in questo modo:

$$
F(x) = \frac{dV(x)}{dx} = 0
$$

Quindi cosa vuol dire che la forza è 0? Che la derivata dell'energia potenziale è 0. Immaginiamo l'energia potenziale come delle collinette che va a percorrere la particella. I casi dove questa ha forza 0 sono quelli dove si trova su un punto di minimo o massimo locale. **Da notare** che non solo quando è in un punto di **minimo** e sopratutto non solo quanto è in un punto di **minimo assoluto**.

Un altro modo di scriverlo, una "notazione utile che useremo più avanti" è:

$$
\frac{dV}{dx} \delta x = \delta V
$$

Il significato intuitivo è che sei in equilibrio quando sei in un punto dove se ti muovi un pochetto non succede nulla.

In più dimensioni si scrive come:

$$
\forall i, \ \frac{\partial V(x)} {\partial x_i} = 0
$$

Per ora abbiamo finito con la fisica di tutto ciò che ci dice la meccanica classica, ignorando il tempo.

### 2 ⋅ Traiettorie

Dati due punti, qual'è la curva più corta che collega questi punti? E' una linea retta da uno all'altro.

Come possiamo impostare questa domanda da un punto di vista matematico?

$$
\text{Siano:} \quad A=(x_1,y_1) \quad B=(x_2,y_2)
$$

Sia la funzione della curva che noi tracciamo tra questi due punti $y(x)$.

Una lunghezza di un piccolo segmento è data da:

$$
\sqrt{dx^2 + dy^2} = ds \quad, \quad (d \text{ segment})
\\ \ \\
ds = \sqrt{1 + \left(\frac{dy}{dx}\right)^2} dx
$$

Quindi la lunghezza della curva è:

$$
L = \int_A^B ds = \int_{x_1}^{x_2} \sqrt{1 + \left(\frac{dy}{dx}\right)^2} dx
$$

Per indicare che noi scegliamo il minimo, impostiamo che la derivata di questo integrale sia 0. Questo è un "principio":

$$
\delta \int_{x_1}^{x_2} \sqrt{1 + \left(\frac{dy}{dx}\right)^2} dx = 0
$$

Questo in particolare lo sappiamo risolvere, in quanto sappiamo che la risposta è una linea retta, però in generale questo metodo verrà usato per risolvere problemi più complessi.

Come li risolviamo? Non potremmo probabilmente farlo in modo completo, ma andremmo ad usare approssimazioni.

Questa equazione si potrebbe generalizzare anche per ottenere la distanza minore tra due punti su qualsiasi superficie, non solo nel piano cartesiano. Per esempio sulla terra o su un terreno accidentato.

#### Luce

La luce si propaga in linea retta, ma non è la distanza minima tra due punti. La luce si propaga in modo che il tempo sia minimo.

Per descrivere la luce, possiamo considerare questo: sappiamo già qual'è la distanza tra due punti, per trovare il tempo dividiamo la distanza per la velocità.

$$
\text{Tempo} = \frac{\text{Distanza}}{\text{Velocità}}
\\ \ \\
\text{Tempo} = \frac{ds}{c} = \frac{\sqrt{dx^2 + dy^2}}{c(x,y)}
\\ \ \\
\text{Tempo} = \frac{\sqrt{1 + \frac{dy}{dx}^2}}{c(x,y)}dx
$$

[27:30 lecture 3]
