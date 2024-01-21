# 4 ⋅ Alcuni problemi di MQ in una dimensione

## 4.1 ⋅ Considerazioni generali

Formule diverse.

Appunto finale che dice che le equazioni con un'unica dimensione sono più semplici da risolvere e poi possono venire usate per la soluzione di quelle a più dimensioni. Nell'esempio usare solo $q_i$ piuttosto che $q_i, p_i$.

### 4.1.1 ⋅ Teorema

- La parte **discreta** dello spettro dell'hamiltoniana in un problema **unidimensionale** è sempre non degenere.

**Dimostriamo** questo teorema: lo dimostriamo per assurdo, ovvero faccio vedere che se non fosse così allora ci sarebbe un problema.

Supponiamo che al medesimo autovalore $E$ corrispondano due differenti autofunzioni $\psi_1$ e $\psi_2$ che, rappresentando stati legati, sono normalizzabili e tendenti a zero per $x \rightarrow \pm \infty$.

$$
\begin{cases}
    \hat{H} \psi_1 = E \psi_1 \\
    \hat{H} \psi_2 = E \psi_2
\end{cases}
$$

$$
H\psi_1 = -\frac{\hbar^2}{2m} \frac{d^2 \psi_1}{dx^2} + V(x) \psi_1 = E \psi_1
\\ \ \\
\text{ci andiamo a moltiplicare }\psi_2
\\ \ \\
\psi_2 H \psi_1 = E \psi_2 \psi_1
\\ \ \\
\psi_2 \left( -\frac{\hbar^2}{2m} \frac{d^2 \psi_1}{dx^2} + V(x) \psi_1 \right) = E \psi_2 \psi_1
\\ \ \\
\text{faccio la stessa cosa per } \psi_1
\\ \ \\
\psi_1 H \psi_2 = E \psi_1 \psi_2
\\ \ \\
\text{ora le combino}
\\ \ \\
\psi_2 \left( -\frac{\hbar^2}{2m} \frac{d^2 \psi_1}{dx^2} + V(x) \psi_1 \right) = \psi_1 \left( -\frac{\hbar^2}{2m} \frac{d^2 \psi_2}{dx^2} + V(x) \psi_2 \right)
\\ \ \\
- \psi_2 \frac{\hbar^2}{2m} \frac{d^2 \psi_1}{dx^2} + V(x) \psi_1  = ...
$$

Dimostrazione continua.

> E' da capire e da sapere, per l'esame bisogna saper eil motivo per cui si annullano le cose!

> Cosa fanno le funzioni di $\mathbb{L}^2$ all'infinito? Tendono a zero.

Quindi nella dimostrazione noi andiamo a controllare la costante di differenza tra le due funzioni. Lo facciamo all'infinito, in quanto le due funzioni vanno a 0.

Questo ci dimostra che la costante che vogliamo trovare è 0.

Quindi abbiamo che:

$$
\psi_2 \frac{d\psi_1}{dx} - \psi_1 \frac{d\psi_2}{dx} = 0
$$

Quindi

$$
\psi_2 \frac{d\psi_1}{dx} = \psi_1 \frac{d\psi_2}{dx}
\\ \ \\
\frac{\frac{d\psi_1}{dx}}{\psi_1} = \frac{\frac{d\psi_2}{dx}}{\psi_2}
\\ \ \\
\frac{d}{dx} \log \psi_1 = \frac{d}{dx} \log \psi_2
\\ \ \\
\text{se noi integriamo}
\\ \ \\
\log \psi_1 = \log \psi_2 + C
\\ \ \\
\psi_1 = \psi_2 e^C
$$

Quindi sono proporzionali. Quindi rappresentano lo stesso stato non degenere.

### 4.1.2 ⋅ Teorema (della parità)

- Se un sistema ha hamiltoniana pari, le sue autofunzioni hanno necessariaemtne parità definita, sono cioè o pari o dispari.

$$
\hat{H} = \frac{\hat{p}^2}{2m}+V(x) = - \frac{\hbar^2}{2m}\frac{d^2}{dx^2} + V(x)
$$

Vogliamo avere dei sistemi fisici che hanno uno stato fondamentale, un minimo potenziale, dobbiamo volere che la funzione del potenziale abbia un minimo, non che sia per esempio descritto da $x^3$ che ha un potenziale minimo $-\infty$.

Lasciamo quindi stare i potenziali dispari, analizziamo i potenziali pari. (Se non è pari o dispari allora non ci interessa).

Se è pari, allora la hamiltoniana commuta con il fattore di parità, ovvero:

$$
\left[ \hat{H}, \hat{P} \right] = 0
$$

Da notare che l'operatore della parità mi fa capire come è l'hamiltoniana:

$$
\hat{P} \psi(x) = \psi(-x) = \psi(x) \quad , \quad \text{se pari}
\\ \ \\
\hat{P} \psi(x) = \psi(-x) = -\psi(x) \quad , \quad \text{se dispari}
\\ \ \\
$$

> "Applicare la parità in hamiltoniana ci manda la $x$ da $+$ a $-$.
>
> La parità è tale che
>
> $$
> \hat{P}^{-1} \hat{H} \hat{P} = \hat{H}
> \\ \ \\
> \hat{H} \hat{P} = \hat{P} \hat{H}
> $$
>
> Quindi da questa breve dimostrazione (che diamo per scontato sia vera right now) notiamo che c'è parità.

### 4.1.3 ⋅ Teorema (del minimo)

- Se $V(x)$ ha un minimo assoluto $V_{min}$, allora tutti gli autovalori $E$ dell'hamiltoniana (sotto) sono tali che $E \geq V_{min}$.

$$
H = - \frac{\hbar^2}{2m} \frac{d^2}{dx^2} + V(x)
$$

Viene dimostrato sulle slide.

Nella dimostrazione in particolare c'è una parte dove si moltiplica $V(x)$ per $\left|\psi(x)\right|^2$, per ogni $x$. Ma noi notiamo che il modulo sarà sempre positivo e che $V(x)$ sarà sempre maggiore o uguale a $V_{min}$, quindi il prodotto sarà sempre maggiore o uguale a $V_{min}$.

## 4.2 ⋅ Buca di potenziale infinita

Il più semplice esempio di potenziale confinante è quello della buca di potenziale infinita, definita come:

$$
V(x) = \begin{cases}
    0 \quad , \quad 0 < x < L \quad \Rightarrow \psi(x)=0 \\
    +\infty \quad , \quad \text{altrove} \quad \Rightarrow \frac{d^2}{dx^2}\psi(x) + \frac{2mE}{\hbar^2} \psi(x) = 0
\end{cases}
$$

Anche in meccanica classica, l'unico comportamento della particella sarebbe quello di muoversi solo tra questi due punti lati, al massimo.

come grafico è essenzialmente una retta che va da 0 a L e poi due "muri" ai lati.

Tutte le regioni dove il potenziale è infinito sono proibite: $\psi(x)$ nelle $x$ al di fuori dell'intervallo $[0,L]$ è $0$.

Pertanto è equivalente andare a risolvere l'integrale tra $[0,L]$ o tra $[-\infty,+\infty]$, in quanto tanto nel resto dello spazio la funzione è $0$.

**Nota**: l'equazione qua sotto si dice "in forma standard", non c'è un termine e si dice funzione "omogenea". Se ci fosse una funzione di $x$ all'interno, allora si direbbe "disomogenea". In generale in MQ useremo solo eq. omogenee:

$$
\frac{d^2}{dx^2}\psi(x) + \frac{2mE}{\hbar^2} \psi(x) = 0
$$

Notiamo che questa è pressoché la funzione delle molle armoniche:

$$
\psi + k^2 \psi = 0
\\ \ \\
\psi(x) = A \sin(kx) + B \cos(kx)
$$

Questo perché:

$$
k = \frac{\sqrt{2mE}}{\hbar}
$$

Abbiamo che le funzioni d'onda non possono avere dei salti, quindi devono essere continue. Quindi la funzione d'onda deve essere continua in $x=0$ e $x=L$. Questo vuol dire che devono partire da 0, diciamo.

Non possiamo avere un "salto", dove per $0^+$ la funzione sia $n$ e non $0$. Questo dato da quello che ho scritto sopra.

Altre cose in mezzo...

Ad un certo punto parla di $n$ e di come avere i numeri negativi sia inutile. Questo perché fare $\sin (- \alpha) = - \sin (\alpha)$. Quindi è come se avessimo un $-1$ d'avanti al $\sin$. Ma noi sappiamo che $-1 = e^{i \pi}$, quindi è un cambio di fase. [...C'è un certo motivo per cui non ha senso ma non lo so].

> Quindi nella buca di potenziale **si hanno $n>1$**.

Richiediamo che il modulo quadro sia 1, pertanto facciamo l'integrale da 0 a L:

$$
\langle \psi_n | \psi_n  \rangle = \int_0^L \left| A \sin \frac{\pi n}{L} x^2 \right|^2 dx = 1
$$

Il resto della dimostrazione sta a slide 6, nelle slide 4.2.

Da questo noi otteniamo che:

$$
A = \sqrt{\frac{2}{L}}
$$

Perciò la funzione d'onda stazionara normalizzata è:

$$
\psi_n(x)=\sqrt{\frac{2}{L}} \sin \frac{\pi n}{L} x
$$

> In questo caso specifico non c'è la fase, quindi è uguale andare a scrivere $A^2$ e $|A|^2$

> Possiamo misurare l'energia avendo:
>
> $$
> k = k_n = \frac{\pi}{L}n \quad , \quad E=E_n = \frac{\hbar^2 k_n^2}{2m} = \frac{\hbar^2 \pi^2}{2mL^2}n^2
> $$
>
> Quindi abbiamo che l'energia è quantizzata. 

Il valor medio della posizione, $\langle x \rangle$, qual'è? C'è alla fine: calcolo infinito lunghissimo della morte che risulta in $\frac{L}{2}$. Un trucco per fare questo calcolo è per usare la parità della funzione d'onda e quindi andare a calcolare gli integrali da $[-\frac{L}{2}, \frac{L}{2}]$.

Il valor medio dei momenti, $\langle p \rangle$ è $0$.

> Un buon esercizio è andare a calcolare il valore di $\langle p^2 \rangle$ e $\langle x^" \rangle - \frac{L^2}{4}$. Da notare che $\sqrt{\langle x^" \rangle - \frac{L^2}{4}} = \Delta x$, mentre $\sqrt{\langle p^2 \rangle} = \Delta p$.

Da notare che l'$n$-esimo stato eccitato ha $n$ zeri (si può dimostrare).