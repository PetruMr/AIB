# Introduction to Number Theory

## 1 ⋅ Introduzione

Andremmo ad usare Number Theory per costruire:
- **Key exchange protocols**
- **Digital signatures**
- **Public-key encryption**

### 1.1 ⋅ Notazioni usate

Da ora in poi:
- $N$ denota un intero positivo
- $p$ denota un numero primo

Notazione $\mathbb{Z}_N = \{0,1,...,N-1\}$

Si possono fare operazioni di somma e prodotto in $\mathbb{Z}_N$ (classe di resto / classi di modulo $N$).

### 1.2 ⋅ Aritmetica modulare

Esempio con $N=12$:
- $9+8=5 \in \mathbb{Z}_{12}$
- $5 \cdot 7 = 11 \in \mathbb{Z}_{12}$
- $5 - 7 = 10 \in \mathbb{Z}_{12}$

L'aritmetica in generale funziona così come te lo aspetteresti, ovvero per esempio $x \cdot (y + z) = x \cdot y + x \cdot z$ in $\mathbb{Z}_N$.

## 2 ⋅ GCD

Il problema del **Greatest Common Divisor** è definito nel modo seguente:

> **Definizione**: siano dati gli interi $x,y$, allora il $\text{gcd}(x,y)$ è il più grande intero $d$ tale che $d|x$ e $d|y$, ovvero è diviso sia da $x$ che $y$ senza resto.

**Proprietà**: per tutti gli interi $x,y$ esistono $a,b$ tali che:

$$
a\cdot x + b \cdot y = gcd(x,y)
$$

In particolare, $a,b$ possono essere trovati in modo efficiente usando l'algoritmo di Euclide esteso.

Se $gcd(x,y)=1$ allora diciamo che $x,y$ sono **coprimi** (*relatively prime*).

**Esempio**:

$$
2 \cdot 12 - 1 \cdot 18 = 6
$$

## 3 ⋅ Modular inversion

Nei numeri razionali, l'inverso in riferimento alla moltiplicazione per $2$, per esempio è $\frac{1}{2}$. In generale è definita come $x^{-1}$ tale che $x \cdot x^{-1} = 1$.

In $\mathbb{Z}_N$ l'inverso è definito come segue:

> L'**inverso** di $x$ in $\mathbb{Z}_N$ è un intero $y \in \mathbb{Z}_N$ tale che $x \cdot y = 1$ in $\mathbb{Z}_N$.
>
> In particolare $y$ è denotato come $x^{-1}$.

Per esempio, sia $N$ un intero dispari, allora l'inverso di $2$ in $\mathbb{Z}_N$ è $\frac{N+1}{2}$ in quanto $2 \cdot \frac{N+1}{2} = N+1 = 1$ in $\mathbb{Z}_N$.

### 3.1 ⋅ Quali elementi hanno un inverso?

Quali numeri hanno un inverso in $\mathbb{Z}_N$?

> **Lemma**: $x$ ha un inverso in $\mathbb{Z}_N$ se e solo se $gcd(x,N)=1$.

> **Definizione**: $\mathbb{Z}^*_N = \{x \in \mathbb{Z}_N \ | \ gcd(x,N)=1\}$
>
> Ovvero è il set di elementi invertibili in $\mathbb{Z}_N$.

Alcuni esempi:
- Per un numero primo $p$, allora $\mathbb{Z}^*_p = \{1,2,...,p-1\} = \mathbb{Z}_p \setminus {0}$
- $\mathbb{Z}^*_{12} = \{1,5,7,11\}$

Per ogni $x$ in $\mathbb{Z}^*_N$ esiste un $x^{-1}$ in $\mathbb{Z}_N$ tale che $x \cdot x^{-1} = 1$ in $\mathbb{Z}_N$ e lo possiamo trovare con l'algoritmo di Euclide esteso.

### 3.2 ⋅ Calcolare l'inverso

Per risolvere:

$$
a \cdot x + b = 0 \in \mathbb{Z}_N
$$

La soluzione è:

$$
x = -b \cdot a^{-1} \in \mathbb{Z}_N
$$

$a^{-1}$ si può trovare usando l'algoritmo esteso di Euclide. La **complessità computazionale di questa cosa** è di $O(\log^2 N)$.

## 4 ⋅ Piccolo teorema di Fermat

> **Teorema**: sia $p$ un numero primo:
>
> $$
> \forall x \in (\mathbb{Z}_p)^* \implies x^{p-1} = 1 \in \mathbb{Z}_p

Per esempio: $p=5, 3^4=81=1 \in \mathbb{Z}_5$

Un esempio di uso pratico di questo teorema potrebbe essere:
- $x\in (\mathbb{Z}_p)^*$
- $\implies x \cdot x^{p-2} = 1 \in \mathbb{Z}_p$
- $\implies x^{p-2}$ è l'inverso di $x$ in $\mathbb{Z}_p$

Si tratta di un altro modo di computare le inverse, ma è meno efficiente dell'algoritmo di Euclide esteso. (La sua complessità è più alta in quanto richiede $O(\log p)$ esponenziazioni).

### 4.1 ⋅ Applicazione - generazione di numeri primi casuali

Supponiamo di voler generare un numero primo $p$ molto grande, per esempio di $1024$ bit (i.e. $p \approx 2^{1024}$).

Un modo per farlo è:
1. Generare un numero casuale $p$ di $1024$ bit ($p\in [2^{1024},2^{1025}-1]$)
2. Testare se $2^{p-1}=1 \text{ in } \mathbb{Z}_p$
3. Se sì, fermarsi, in caso contrario tornare allo step 1.

Questo algoritmo è molto semplice, ma non il più efficiente.

La propabilità che $p$ non sia primo è $Pr[\text{ p not prime }] < 2^{-60}$ (potebbe essere generato anche un numero che non è primo con questo test e spesso si combinano anche altri test per aumentarne l'affidabilità).

## 5 ⋅ Struttura di (Zp)*

> **Teorema** (Eulero): $(\mathbb{Z}_p)^*$ è un **gruppo ciclico** (cyclic group), ovvero:
>
> $$
> \exists g \in (\mathbb{Z}_p)^* \ \text{ such that } \{1, g, g^2,...,g^{p-2}\} = (\mathbb{Z}_p)^*
> $$
>
> $g$ è chiamato il **generatore** di $(\mathbb{Z}_p)^*$.

Per esempio, con $p=7$, abbiamo che $3$ è un generatore:

$$
\begin{aligned}
3^0 &= 1 \\
3^1 &= 3 \\
3^2 &= 2 \\
3^3 &= 6 \\
3^4 &= 4 \\
3^5 &= 5 \\
\end{aligned}
$$

Non tutti gli elementi sono generatori, per esempio con $p=7$ abbiamo che $2$ non è un generatore, in quanto gli unici numeri che riuscirebbe a produrre sono $1,2,4$.

> **Definizione**: l'**ordine** di $g\in (\mathbb{Z}_p)^*$ è il più piccolo intero positivo $r$ tale che $g^r = 1 \in \mathbb{Z}_p$.
>
> $$
> \text{ord}_p(g) = |\langle g \rangle| = (\text{smallest } a > 0 \text{ s.t. } g^a = 1 \text{ in } \mathbb{Z}_p)

Alcuni esempi sono:
- $\text{ord}_7(3) = 6$
- $\text{ord}_7(2) = 3$
- $\text{ord}_7(1) = 1$

> **Teorema** (di Lagrange): $\forall g \in (\mathbb{Z}_p)^*$: $\text{ord}_p(g)$ divide $p-1$

> **Definizione**: per un intero $N$ definiamo $\varphi(N) = |(\mathbb{Z}_p)^*|$
>
> (Euler's $\varphi$ function)

Esempi:
- $\varphi(12) = |\{1,5,7,11\}|=4 \quad ; \quad \varphi(p) = p - 1$
- Per $N=p\cdot q$: $\varphi(N) = N-p-q+1 = (p-1)(q-1)$

> **Teorema** (di Eulero): $\forall x \in (\mathbb{Z}_p)^* : x^{\varphi(p)} = 1 \text{ in } \mathbb{Z}_p$

Per esempio:
- $5^{\varphi(12)} = 5^4 = 1 \text{ in } \mathbb{Z}_{12}$

Questa è una generalizzazione del piccolo teorema di Fermat. Sta alla base della crittografia RSA.

## 6 ⋅ Modular e'th roots

Sappiamo come risolvere una equazione **lineare** del tipo:

$$
a \cdot x + b = 0 \text{ in } \mathbb{Z}_N
$$

La quale ha una soluzione:

$$
x = -b \cdot a^{-1} \text{ in } \mathbb{Z}_N
$$

E invece per polinomi di grado più alto? Per esempio (sia $p$ un numero primo e $c\in\mathbb{Z}_p$):
- $x^2-c = 0$
- $y^3-c=0$
- $z^{37} - c=0$

> **Definizione**: Sia $p$ un numero primo e $c\in \mathbb{Z}_p$. Allora diciamo che:
>
> $x\in \mathbb{Z}_p$ tale che $x^e = c$ in $\mathbb{Z}_p$ è un **e-th root** di $c$ in $\mathbb{Z}_p$.
>
> Ovvero $x$ è un numero tale che $x^e = c$ in $\mathbb{Z}_p$, pertanto $c^{1/e} = x$ in $\mathbb{Z}_p$.

Per esempio:
- $7^{1/3} = 6$ in $\mathbb{Z}_{11}$ in quanto $6^3 = 7$ in $\mathbb{Z}_{11}$
- $3^{1/2} = 5$ in $\mathbb{Z}_{11}$ in quanto $5^2 = 3$ in $\mathbb{Z}_{11}$
- $1^{1/3} = 1$ in $\mathbb{Z}_{11}$ in quanto $1^3 = 1$ in $\mathbb{Z}_{11}$

Da notare che per esempio $2^{1/2}$ non ha soluzione in $\mathbb{Z}_{11}$.

### 6.1 ⋅ Esistenza di e-th roots

Quando esiste $c^{1/e}$ in $\mathbb{Z}_p$? Quando possiamo computarla con efficienza?

#### 6.1.1 ⋅ Caso facile

Supponiamo che 
$$
\text{gcd}(e,p-1)=1
$$

Allora per ogni $c \in (\mathbb{Z}_p)^*$: $c^{1/e}$ esiste in $\mathbb{Z}_p$ ed è facile da trovare.

Mia aggiunta:
- Quest'ultima parte è praticamente equivalente a dire che abbiamo trovato un generatore $g$ di $(\mathbb{Z}_p)^*$ tale che $c=g^k$ per qualche $k$ e quindi $c^{1/e} = g^{k/e}$.

### 6.2 ⋅ Caso e = 2 - radici quadrate

Se $p$ un numero primo dispari allora $\text{gcd}(2, p-1) \neq 1$.

> **Fatto**: In $\mathbb{Z}_p^*$, $x\to x^2$ è una funzione 2 a 1. (Notare che: $x^2 = (-x)^2$)

Alcuni esempi di questa cosa sono per esempi, in $\mathbb{Z}_{11}$:
- $1^2 = 10^2 = 1$
- $2^2 = 9^2 = 4$
- $3^2 = 8^2 = 9$
- $4^2 = 7^2 = 5$
- $5^2 = 6^2 = 3$

> **Definizione** $x$ in $\mathbb{Z}_p^*$ è un **residuo quadratico** (*quadratic residue* / Q.R.) se ha una radice quadrata in $\mathbb{Z}_p^*$.

Da notare che:
- Se $p$ è un numero primo dispari $\implies$ il numero di Q.R. in $\mathbb{Z}_p^*$ è $\frac{p-1}{2} + 1$.

Per esempio, per $p=11$ abbiamo $6$ Q.R. in $\mathbb{Z}_{11}$ (i.e. $1,3,4,5,9,10$).

### 6.3 ⋅ Teorema

> **Teorema** (di Eulero): Sia $x$ in $(\mathbb{Z}_p)^*$ una Q.R. $\iff$ $x^{(p-1)/2} = 1 \text{ in } \mathbb{Z}_p$
>
> Con $p$ un numero primo dispari.

Esempi di questo teorema per esempio in $\mathbb{Z}_{11}$:
- $1^{5} = 1$
- $2^{5} = -1$
- $3^{5} = 1$
- $4^{5} = -1$
- $5^{5} = 1$
- $6^{5} = -1$
- $7^{5} = 1$
- $8^{5} = -1$
- $9^{5} = 1$
- $10^{5} = -1$

Notiamo che quindi per ognuno dei Q.R. abbiamo che $x^{(p-1)/2} = 1$, mentre per tutti gli altri $x^{(p-1)/2} = -1$.

In particolare:

$$
x\neq 0 \implies x^{(p-1)/2} = (x^{p-1})^{1/2} = 1^{1/2} \in \{1,-1\} \text{ in } \mathbb{Z}_p
$$

> **Definizione**: $x^{(p-1)/2}$ è chiamato il **simbolo di Legendre** di $x$ in $\mathbb{Z}_p$. (**Legendre symbol**)

> **Lemma**: se $c \in (\mathbb{Z}_p)^*$ è una Q.R. allora ($\Rightarrow$) $\sqrt{c} = c^{(p+1)/4}$ in $\mathbb{Z}_p$

Dimostrazione: $c^{(p+1)/4}$ è una radice quadrata di $c$ in $\mathbb{Z}_p$ in quanto $(c^{(p+1)/4})^2 = c^{(p+1)/2} = c^{(p-1)/2} \cdot c = 1 \cdot c = c$.

### 6.4 ⋅ Risoluzione equazioni

#### 6.4.1 ⋅ Esempio 1

Se noi abbiamo:

$$
a \cdot x^2 + b \cdot x + c =0 \text{ in } \mathbb{Z}_p
$$

La soluzione è:

$$
x = \frac{-b \pm \sqrt{b^2-4ac}}{2a} \text{ in } \mathbb{Z}_p
$$

I passaggi che dobbiamo fare sono quindi:
- Trovare $(2a)^-1 \text{ in } \mathbb{Z}_p$ usando l'algoritmo di Euclide esteso
- Trovare la radice quadrata di $b^2-4ac$ in $\mathbb{Z}_p$ (se esiste) usando un algoritmo per trovare le radici quadrate.

### 6.5 ⋅ Computazione di e-th roots mod N

Sia $N$ un numero composto e sia $e>1$.

Quando esiste $c^{1/e} \text{ in } \mathbb{Z}_N$? Lo possiamo computare in modo efficiente?

Rispondere a queste domande richiesde fattorizzare $N$ (per quello che noi sappiamo al momento).

### 6.6 ⋅ Problemi facili

Alcuni esempi di problemi facili legati a questo ambito della matematica sono:
- Dato un $N$ composito e $x \in \mathbb{Z}_N$ trovare $x^{-1} \text{ in } \mathbb{Z}_N$
- Dato un numero primo $p$ e un polinomio $f(x)$ in $\mathbb{Z}_p[x]$
  - Trovare $x$ in $\mathbb{Z}_p$ tale che $f(x)=0 \text{ in } \mathbb{Z}_p$ (se esiste)
  - Complessità computazionale: $O(\text{deg}(f))$ (Ovvero aumenta all'aumentare del grado del polinomio)

Ma ci sono anche diversi problemi che sono molto più difficili.

### 6.7 ⋅ Problemi difficili

#### 6.7.1 ⋅ Intractable problems with primes

Dato un numero primo $p>2$ e $g$ in $(\mathbb{Z}_p)^*$ di ordine $q$.

Consideriamo la funzione:

$$
x\mapsto g^x \text{ in } \mathbb{Z}_p
$$

Ora consideriamo la funzione inversa:

$$
\text{Dlog}_g(g^x) = x \text{ dove } x \in {0,...,q-2}
$$

ALcuni esempi sono per esempio (in $\mathbb{Z}_{11}$ e $g=2$):
- $1 \in \mathbb{Z}_{11}, \text{Dlog}_2(1) = 0$ in quanto $2^0 = 1  \ mod \ 11$
- $2 \in \mathbb{Z}_{11}, \text{Dlog}_2(2) = 1$ in quanto $2^1 = 2 \ mod \ 11$
- $3 \in \mathbb{Z}_{11}, \text{Dlog}_2(3) = 8$ in quanto $2^8 = 3 \ mod \ 11$
- ...

#### 6.7.2 ⋅ Intractable problems with composites

Consideriamo il set di interi (per esempio per $n=1024$):

$$
\mathbb{Z}_{(2)}(n) := \{ N = p\cdot q \text{ dove } p,q \text{ sono numeri primi di } n \text{ bit}  \}
$$

Problemi:
1. Fattorizzare un numero a caso $N$ in $\mathbb{Z}_{(2)}(n)$ (per esempio avendo $n=1024$)
2. Dato un polinomio $f(x)$ dove il grado di $f$ è $>1$ e un $N$ casuale $\in \mathbb{Z}_{(2)}(n)$ trovare $x$ tale che $f(x)=0 \text{ in } \mathbb{Z}_N$

> Il problema di distinguere numeri primi da numeri composti e il problema di fattorizzarne i fattori primi di quest'ultimo sono problemi particolarmente importanti e utili in aritmetica

Il miglior algoritmo (NFS) ha un tempo di esecuzione di $O(\exp(1.9 \cdot n^{1/3} \cdot (\log n)^{2/3}))$, quindi $\text{exp}(\tilde{O}(\sqrt[3]{n}))$ per un numero di $n$ bit.

