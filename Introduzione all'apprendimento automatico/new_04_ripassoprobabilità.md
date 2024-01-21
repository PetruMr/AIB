[//]: # "Stili di riferimento per il markdown"

<link rel="stylesheet" href="./res/style.css">

> # Ripasso di statistica

## Variabili aleatorie

Una _variabile aleatoria_ $X$ denota l'esito di un fenomeno riguardo al quale sussiste incertezza, come ad esempio il risultato di un processo stocastico.

**Esempi**:

- $X = true$ se uno studente scelto a caso in questa aula è biondo
- $X = \text{first name of the student}$
- $X = true$ se due studenti scelti a caso sono nati nello stesso giorno dell'anno

Definiamo $P(X)$ (probabilità di $X$) come la frazione di volte per cui $X$ è vero, in esecuzioni ripetute dell'esperimento.

### Definizione formale

L'insieme $\Omega$ dei possibili esiti di un esperimento casuale è detto _spazio campionario_ (sample space).

> Ad esempio, l'insieme degli studenti in questa stanza

A _variabili aleatoria_ si associa una funzione misurabile su $\Omega$:

- Discreta
  - Esempio, $genere: \Omega \rightarrow \{m, f\}$
- Continua
  - Esempio, $altezza: \Omega \rightarrow \mathbb{R}$

Un _evento_ è un qualche sottoinsieme di $\Omega$

> Per esempio:
>
> - $\{x \in \Omega | genere(x) = m\}$
> - $\{ x \in \Omega | altezza(x) > 1.75 \}$

### Campionario

La scelta dello spazio campionario richiede un po' di cautela.

> Spesso la nostra intuizione di probabilità si basa sul presupposto che gli eventi elementari nello spazio campionario abbaino la stessa probabilità (cossa non necessariamente vera)

## La probabilità

### Assiomi

Vi sono i seguenti assiomi che valgono:

$$
P(\Omega) = 1 
\\ \ \\
P(A) \geq 0 \quad \forall A \subseteq \Omega 
\\ \ \\
P(A \cup B) = P(A) + P(B) - P(A \cap B) 
$$

### Teoremi

Vi sono i seguenti teoremi che valgono

$$
P(\neg A) = 1 - P(A)
\\ \ \\
P(A) = P(A \cap B) + P(A \cap \neg B)
$$

### Probabilità condizionata

*Definizione*: La probabilità condizionata dell'evento $A$ **dato** l'evento $B$ è definita come la quantità:

$$
P(A | B) = \frac{P(A \cap B)}{P(B)}
$$

*Corollario*: **Chain rule**:

$$
P(A \cap B) = P(B) P(A | B) = P(A) P(B | A)
$$

### Eventi indipendenti

Due eventi $A$ e $B$ sono indipendenti se:

$$
P ( A | B ) = P (A)
$$

Ovvero, l'evento $B$ non ha influenza sull'evento $A$.

Come *corollario*, abbiamo:

$$
P(A \cap B) = P(A) P(B)
\\ \ \\
P(A | B) = P(A) \Rightarrow P(B | A) = P(B)
$$

### Teorema di Bayes

Il *Teorema di Bayes è il seguente*:

$$
P(A | B) = \frac{P(B | A) P(A)}{P(B)}
$$

Un altra formulazione è la seguente:

$$
P(Y = y_i | X = x_j) = \frac{P(Y = y_i) P(X = x_j | Y = y_i)}{\sum_i P(Y = y_i) P(X = x_j | Y = y_i)}
$$