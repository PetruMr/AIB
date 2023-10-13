[//]: # (Stili di riferimento per il markdown)
<link rel="stylesheet" href="./res/style.css">

> # Qualcosa

---

## Esercizi

### Esercizio 7.2

Calcolare se la funzione $f(z) = z^{n}$, $n \in \mathbb{Z}$ è olomorfa.

Olomorfismo lo dimostriamo usando le condizioni di Cauchy-Rienmann, più dettagli a [pagina wikipedia](https://it.wikipedia.org/wiki/Funzione_olomorfa).

Abbiamo $z = x + iy$

Per esempio se noi avessi $z = 4$ allora otterremmo:

$$
f(z) = z^{4} = (x+iy)^{4} = \sum_{p=0}^{4}{x^{p}*(iy)^{4-p}}*\frac{4!}{p!(4-p)}!
$$

Quindi continuiamo con le equazioni, troviamo una equazione del tipo:

$$
= f(z) = (x^4 - 6x^2y^2 + y^4) + i(4x^3y - 4xy^3)
$$

Il primo (la prima cosa tra parentesi tonda) è $u(x,y)$, p pari. 

Il secondo (la seconda parentesi tonda, esclusa la i) è $v(x,y)$, p dispari.

Quindi ora calcoliamo le derivate parziali:

$$
\frac{\partial u}{\partial x} = 4x^3-12xy^2  \quad \quad  \frac{\partial u}{\partial y} = 12x^2y + 4y
\\ \quad \\
\frac{\partial v}{\partial x} = 12x^2y-4y^3  \quad \quad  \frac{\partial v}{\partial y} = 4x^3-12xy^2
$$

Confrontiamo a "croce" le 4 espressioni e notiamo che quella in alto a destra e quella in basso a sinistra hanno simbolo opposto mentre le altre sono uguali. questo vuol dire che sono olomorfe. Quindi lo sono per il caso $z=4$

Ci sono 3 punti con un and e non ho capito cosa vogliono dire. (Probabilmente si riferiscono ad una derivata terza)

Adesso che lo abbiamo fatto per 4, dobbiamo andare a farlo per $n$, quindi dobbiamo generalizzare la dimostrazione lavorando in modo intelligente con la sommatoria.

$$n > 0$$

Andrà a considerare due casi, ovvero assumendo che p è pari o che p è dispari.

Si inizia con il caso p pari, che ci permette di usare $q = 2p$

Poi verranno confrontate di nuovo le derivate parziali.

In particoalre, Quella in alto a sinistra e quella in basso a destra (rispetto a come le ho scritte prima) che sono uguali dopo alcuni passaggi. 

D'altro canto, le altre saranno leggermente diverse, e si farà un magheggio dio cane non capisco dove boh sono comunque diverse ma funziona e andiamo avanti.

E' olomorfa!

---

In particolare, per $n \in \mathbb {Z}$:

Se $f(z)$ è olomorfa in un dominio $D \in \mathbb(C)$, $g(z)= \frac{1}{f(z)}$ è olomorfa in $D \setminus \mathcal{Z}$, dove $\mathcal{Z}$ è l'insieme degli zeri di $f(z)$, in questo caso $\mathcal{Z} = \{0\}$.

In particolare possiamo notare che $g(z) = z^{-n}$, $n > 0$ è olomorfa in $\mathbb{C} \setminus \{0\}$.

---

### Esercizio 7.3

Adesso dobbiamo dimostrare che:

$$
\frac{d}{dz} z^{n} = n z^{n-1}
$$

Dalla parte 1 dell'esercizio abbiamo che $\frac{df}{dt} = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$ per f olomorfa.

---

### Esercizio 7.4

Dobbiamo verificare l'olomorfismo di $f(z) = sin(z), cos(z), exp(z)$

Le funzioni che si trovano in seguito sono provenienti dalle Maclaurin series, che si posso trovare al [link seguente](https://mathworld.wolfram.com/MaclaurinSeries.html).

$$
sin(z)=\sum_{k=0}^{\infty}{(-1)^k \frac{z^{2k+1}}{(2k+1)!}}
$$

Somma di $z^n$, che è una funzione olomorfa in $\mathbb{C}$, $n >= 0$.

$\rightarrow$ proprietà, $f(z)$ è derivata in $F$, $g(z)$ è derivata in $G$.

Pertanto $f(z)+g(z)$ è derivata in $F \cap G$.

Quindi $sin(z)$ è olomorfa in $\mathbb{C}$.

Lo stesso vale per:

$$
cos(z)=\sum_{k=0}^{\infty}{(-1)^k \frac{z^{2k}}{(2k)!}}
\\ \quad \\
exp(z)=\sum_{k=0}^{\infty}{\frac{z^{k}}{k!}}
$$

*Derivate:*

$$
\frac{d}{dz} sin(z) = cos(z)
\\ \quad \\
= \sum_{k=0}^{\infty}{(-1)^k \frac{z^{2k}}{(2k)!}}
\\ \quad \\
\frac{d}{dz} cos(z) = -sin(z)
$$

(Lo dimostra facendo operazioni con le sommatorie per passare da una all'altra espressione descritta sopra, e funziona tutto).

---

### Esercizio 7.5

Sfruttando le regole su somma e prodtto di funzioni olomorfe, si mostri che anche le funzioni: 

$$
tan(z), \quad cot(z), \quad sinh(z), \quad cosh(z), \quad tanh(z), \quad coth(z)
$$

Sono olomorfe e per ognuna se ne scriva in dettaglio il dominio di olomorfismo.

La soluzione del prof inizia come segue:

$$
tan(z) = \frac{sin(z)}{cos(z)}, \quad cot(z) = \frac{cos(z)}{sin(z)}

\\ \quad \\

cos(z) = \frac{e^{iz} + e^{-iz}}{2}, \quad sin(z) = \frac{e^{iz} - e^{-iz}}{2i}

\\ \quad \\

\Leftrightarrow e^{iz} = -e{-iz}, \quad z=x+iy

\\ \quad \\

e^{ix-y} = -e^{-ix+y} \Leftrightarrow e^{-y}e^{ix} = -e^{y}e^{-ix}

\\ \quad \\

\Leftrightarrow e^{-y}e^{ix}=e^{i(\pi - x)} \Leftrightarrow e^{-y} = e^{i(\pi - 2x)}

$$

poi boh altre cose ma non ho copiato in tempo, dovrebbero essere cose scritte usando le formule e mettendo delle condizioni per renderle vere sicuramente.

---

### Esercizio per casa

Dimostrare che se $f$ è olomorfa e reale allora è costante.

