# Equivalenze di TM con linguaggi di programmazione

Materiale usato è disponibile [qui](https://virtuale.unibo.it/pluginfile.php/1762950/mod_resource/content/3/Lezione4.pdf)

## 1 ⋅ Cosa si farà nella lezione

Nella scorsa lezione, ovvero [qua](./03_churchturing.md), siamo andati a definire la tesi di Church-Turing e abbiamo visto come diversi miglioramenti fatti alle macchine di Turing in realtà non le migliorano (nondeterminismo / più nastri).

In questa lezione vedremmo due modelli di calcolo alternativi e dimostreremo la loro equivalenza alle macchine di Turing. Questi sono:
- **Macchine a registri**
- **Programmi scritti nel linguaggio WHILE** (un basicale linguaggio di programmazione che permette di fare qualsiasi cosa)

## 2 ⋅ Macchine a registri

### 2.1 ⋅ Perché questo modello

Una differenza importante tra le macchine di Turing e le architetture hardware a noi familiare è che le TM possono accedere ai dati della computazione solamente in **maniera sequenziale**, scorrendo appunto il nastro.

Introduciamo quindi un modello astratto di calcolo che non ha tale limitazione: le **macchine a registri** (Chiamate anche *unlimited register machines*, o **URM**)

Nel mostrare che le TM e le URM sono equivalenti, raggiungiamo due scopi:
- Dimostriamo che la sequenzialità non è una limitazione intrinseca delle macchine di Turing
- Diamo ulteriore supposto alla tesi di Church-Turing

Le URM sono state introdotte nel 1963 come modello alternativo alle macchine di Turing.

### 2.2 ⋅ Inrtoduzione

Una macchina a registri ha *infiniti* registri $R_1, R_2, ..., R_n, ...$.

Ogni registro $R_n$ ospita un numero naturale, indicato con $r_n$.

Le URM calcolano funzioni di tipo $\mathbb{N}^k \to \mathbb{N}$

L'**input** $x \in \mathbb{N}^k$ di una URM è suddiviso tra i primi $k$ registri $R_1, R_2, ..., R_k$ nel modo ovvio. Tutti gli altri registri sono inizializzati con valore $0$.

Se una computazione ha termine (come al solito, non è necessario che questo avvenga) allora l'**output** sarà il valore $r_1$ del primo registro.

### 2.3 ⋅ Linguaggio

Una computazione procede seguendo un **programma** $P$. I programmi per URM assomigliano al codice assembler.

$P$ è una sequenza di **istruzioni** $I_1, I_2, ..., I_j$. Ci sono quattro tipi di istruzioni:
- **Zero** 
  - $Z(n)$
  - Imposta il valore di $R_n$ uguale a $0$
- **Successor**
  - $S(n)$
  - Aggiunge uno al valore di $R_n$
- **Move**
  - $M(n, m)$
  - Imposta il valore di $R_m$ come uguale al valore $r_n$ di $R_n$
  - (Per ricordare: $r_n \to r_m$, ovvero muove da $n$ a $m$)
- **Jump**
  - $J(n, m, p)$
  - Fa saltare il programma all'istruzione $I_p$ se $r_n = r_m$ e continua regolarmente in caso contrario
  - (Per ricordare: $(r_n = r_m) \to I_p$)

### 2.4 ⋅ Computazioni di URM

Descriviamo una computazione URM usando un insieme di step:
- Una computazione coinvolge un programma $P= I_1, I_2, ..., I_j$ e un input $x \in \mathbb{N}^k$ diviso tra i primi $k$ registri $R_1, R_2, ..., R_k$
- La computazione comincia leggendo la prima istruzione $I_1$ in $P$
- Ad ogni passo,
  - Se abbiamo eseguito $I_i$ e non è un'istruzione jump, allora proseguiamo con $I_{i+1}$
  - Se $I_i$ è un'istruzione *jump* $J(n,m,p)$ e $r_n = r_m$, allora proseguiamo dall'istruzione $I_p$. Altrimenti, continuiamo con l'istruzione $I_{i+1}$
- Una computazione termina se proseguiamo oltre l'ultima istruzione $I_j$.

### 2.5 ⋅ Esempi

#### 2.5.1 ⋅ Somma

Definiamo il seguente programma:

```js
I1 : J(2,3,6)
I2 : S(1)
I3 : S(3)
I4 : J(2,3,6)
I5 : J(1,1,2)
```

Questo programma calcola la somma dei valori in $R_1$ e $R_2$ e salva il risultato in $R_1$, usando $R_3$ come registro utile a capire quando deve terminare con la somma.

#### 2.5.2 ⋅ Moltiplicazione

Definiamo il seguente programma:

```js
I1  : J(1,3,16)
I2  : J(2,3,16)
I3  : S(3)
I4  : J(2,3,17)
I5  : M(1,3)
I6  : S(5)
I7  : Z(4)
I8  : S(1)
I9  : S(4)
I10 : J(3,4,12)
I11 : J(1,1,8)
I12 : Z(4)
I13 : S(5)
I14 : J(2,5,17)
I15 : J(1,1,8)
I16 : Z(1)
```

Questo programma calcola il prodotto dei valori in $R_1$ e $R_2$ e salva il risultato in $R_1$.

- Prima controlla se uno dei primi due registri è 0: in quel caso il risultato è 0 e si esce dal programma restituendo 0
- Altrimenti, si somma $R_3$ e si moltiplica $R_1$ per $R_2$ fino a che $R_3$ non è uguale a $R_2$
- $R_4$ funziona come contatore per le singole somme che vengono effettuate

### 2.6 ⋅ Equivalenza con TM

Una funzione **parziale** è una il cui valore non è necessaraimente definito su tutti gli argomenti.

Sia URM che TM calcolano funzioni parziali di tipo $\mathbb{N}^k \to \mathbb{N}$, in quanto su alcuni input potrebbero non terminare.

> **Teorema**: Una funzione (parziale) è calcolabile da una URM $\iff$ è calcolabile da una TM.

**Idea della dimostrazione**: il punto cruciale è comprnedere come passare da un formato di memoria all'altro (nastri vs registri)

#### 2.6.1 ⋅ TM simula URM

Per dimostrare quindi la prima direzione dell'equivalenza, costruiamo una macchina di Turing con **sei nastri**:
- **Nastro 1** 
  - Mantiene il "contatore del programma", cioè l'indice dell'istruzione che stiamo eseguendo al momento dell'URM
- **Nastro 2**
  - Mantiene il codice del programma
- **Nastro 3**
  - Mantiene i valori nei registri, scritti in notazione unaria e separati da $\sqcup$ (una cella vuota)
- **Nastri 4-6**
  - Saranno dei "fogli di brutta" (cache)
  - Serviranno ad eseguire i calcoli e gestire la logica

La macchina di Turing simula la computazione dell'URL come segue:
1. Usiamo il contatore (nastro 1) per identificare qual è l'istruzione corrente da eseguire nel codice del programma (nastro 2)
2. Eseguiamo l'istruzione (una tra Zero, Move, Successor e Jump)
3. Ripeti da 1.

Notiamo che ciascun tipo di istruzione modifica il valore di qualche registro (nastro 3), eccetto Jump. La modifica del valore di un registro $R_k$ avviene usando i nastri ausiliari 4-6. Concettualmente:
- Nel nastro 4 ci mettiamo il nuovo valore di $R_k$, ovvero $r_k = x$
- Nel nastro 5 ci mettiamo i valori $r_1, ..., r_{k-1}$
- Nel nastro 6 ci mettiamo i valori $r_{k+1}, ..., r_n$
- Poi andiamo a spostare nel nastro 3 i valori del nastro 5, il valore di $r_k$ e i valori del nastro 6

#### 2.6.2 ⋅ URM simula TM

Per l'altro verso dell'equivalenza, vogliamo costruire una URM che simuli l'esecuzione di una TM descritta come segue:

$$
\mathcal{M} = \langle \Sigma, Q, q_0, H, \delta \rangle
$$

La costruzione richiede la definizione di uno **schema di codifica** che traduca la definizione ed il comportamento di $\mathcal{M}$ in numeri naturali (da immagazzinare nei registri).

Per cominciare, introduciamo un registro $\text{TAPE}$ il cui contenuto codifica il contenuto corrente del nastro della TM $\mathcal{M}$.

Possiamo assumere senza perdere generalità che $\Sigma = \{0, 1, \sqcup\}$. Introduciamo quindi la codifica:
- $\text{code}(\sqcup) = 0$
- $\text{code}(0) = 1$
- $\text{code}(1) = 2$

E possiamo poi esprimere il contenuto del nastro in modo univoco come un numero a base-3, per esempio:
- Il numero $801$:
  - In base 3 corrisponde a $1 \cdot 3^0 + 0 \cdot 3^1 + 1 \cdot 3^2 + 0 \cdot 3^3 + 2 \cdot 3^4$
  - Codifica quindi un nastro del tipo: $[0, \sqcup, 0, \sqcup, 1, \sqcup, ...]$

**Idea della dimostrazione nel suo complesso**:
1. Introduciamo registri che codifichino la funzione di transizione di $\mathcal{M}$ per ogni tupla $(q_{in}, \sigma_{in}, q_{out}, \sigma_{out})_i$ in $\delta$:

$$
\text{Q-IN}_i \quad \sigma\text{-IN}_i \quad \text{Q-OUT}_i \quad \sigma\text{-OUT}_i
$$

2. Introduciamo registri che codifichino qualsiasi configurazione di $\mathcal{M}$, ovvero:

$$
\text{TAPE} \quad \text{HEAD-POS} \quad \text{HEAD-SYM} \quad \text{HEAD-STATE}
$$

3. Definiamo nuovi tipi di istruzione ausiliari Read, Write, Move-Left, Move-right utilizzando ripetutamente i quattro tipi di istruzione di base.
4. Scriviamo un programma di URM che usi queste istruzioni su questi registri per simulare una computazione di $\mathcal{M}$

## 3 ⋅ Linguaggio WHILE

Si tratta di un linguaggio di programmazione di alto livello.

Entrambi i modelli che abbiamo visto fin'ora (TM e URM) sono più simili al linguaggio macchine che ad un linguaggio di alto livello di cui possiate avere esperienza quotidiana come Python, Java o C.

Nonostante le apparenze, la tesi di Church-Turing implica che anche questi linguaggi non hanno più potere espressivo di modelli apparentemente più primitivi come le TM e le URM.

Dimostriamo ciò introducendo un linguaggio di programmazione 'prototipico', WHILE, e mostrandolo equivalente alle TM.

### 3.1 ⋅ Sintassi informale

Il linguaggio WHILE ha tutti gli ingredienti di base di un linguaggio imperativo standard:
- **Assegnazione** di un valore ad una variabile:
  - `X := 3`
  - I valori sono numeri naturali
- **Cicli while**
  - `while X != Y do PROGRAM`
- **Sequenziamento di programmi**
  - `PROGRAM1; PROGRAM2`
- Altri costrutti come **if-then-else** possono essere definiti in termini di questi primitivi

### 3.2 ⋅ Sintassi fomrale

$$
\begin{align*}
\text{PROG} & ::= \text{begin end | begin SEQCMD end}
\\ 
\text{SEQCMD} & ::= \text{CMD | CMD; SEQCMD}
\\ 
\text{CMD} & ::= \text{ASS | while TEST do CMD | PROG}
\\
\text{ASS} & ::= \text{VAR := 0 | VAR := s(VAR) | VAR := p(VAR)}
\\
\text{TEST} & ::= \text{VAR} \neq \text{VAR} 
\\
\text{VAR} & ::= \text{CHAR | VAR CHAR | VAR DIGIT}
\\
\text{CHAR} & ::= \text{A | B | ... | Z}
\\ 
\text{DIGIT} & ::= \text{0 | 1 | ... | 9}
\end{align*}
$$

### 3.3 ⋅ Esempio

Esempio di programma:

```ps
begin
  begin 
    Z := s(X);
    Z := p(Z)
  end;
  begin
    U := 0;
    while U != Y do
      begin
        Z := s(Z)
        U := s(U)
      end
  end
end
```

Questo programma stampa la somma tra X e Y.


### 3.4 ⋅ Semantica

Un programma WHILE computa una funzione parziale $\mathbb{N}^k \to \mathbb{N}^k$

Ovvero, per esempio, il programma di prima computa la funzione:

$$
(x,y,z,u) \mapsto (x,y,x+y,y)
$$

(La definizione completa della semantica si può trovare in un libro. Lo scrivo anche qui ma boh)

### 3.4 ⋅ Equivalenza

> **Teorema**: una funzione (parziale) è computabile da un programma WHILE $\iff$ è computabile da una macchina di Turing

**Idea della dimostrazione**: ci focalizziamo sulla simulazione di un programma WHILE da parte di una macchina di Turing. Questa è forse la parte più 'sorprendere' del teorema, dal momento che le macchine di turing sono all'apparenza più primitive.

La dimostrazione si fa per induzione:
- Si definiscono delle macchine di Turing per i casi base, ovvero per l'assegnazione e i test
- Si definiscono poi una sequenza di queste macchine che simulano tutte le operazioni, prima per il caso delle sequenze e poi per il caso del ciclo while.
