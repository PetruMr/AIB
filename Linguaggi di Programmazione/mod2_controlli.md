[//]: # (Date: 2023-03-29 13:00)
[//]: # (Stili di riferimento per il markdown)
<link rel="stylesheet" href="./res/style.css">

> ### Espressioni, comandi, iterazione, ricorsione 
> # Strutturare il controllo

---

> ## Espressioni

### Valutazione delle espressioni

#### Sintassi

Ci sono tre tipi di notazioni principali:
- *Infissa* (infix): `a + b`
- *Prefissa* (polacca): `+ a b`
- *Postfissa* (polacca inversa): `a b +`

#### Note sulla semantica dell'infissa

**Precedenza** fra gli operatori, che dipende da linguaggio a linguaggio.

Alcuni danno precedenza a quelli aritmetici su quelli logici, altri viceversa e altri ancora non hanno precedenze.

**Associatività**: se due operatori hanno la stessa precedenza, allora si deve decidere quale eseguire per primo:
- `15-4-3` è `15-(4-3)` o `(15-4)-3`?

Quando vogliamo esprimere con precisione l'ordine di esecuzione, al di là della precedenza e dell'associatività, possiamo usare le **parentesi**, che a volte sono proprio necessarie.

#### Postfissa

Non ha bisogno di precedenza, associatività o parentesi. Si usa semplicemente una *pila*.

Valutazione usando la pila:
1. **Leggi** il prossimo simbolo dell'espressione e mettilo sulla pila
2. **Se** il simbolo letto è un **operatore**:
   1. Applica a operandi immediatamente precedenti sulla pila
   2. Memorizza il risultato in R
   3. Elimina operatore ed operandi dalla pila
   4. Memorizza il valore di R sulla pila
3. **Se** la sequenza da leggere **non è vuota torna a (1)**
4. **Se** il simbolo letto è **un operando torna a (1)**

Occorre però conoscere l'arietà di ogni operando! (ovvero il numero di operandi che accetta).

#### Prefissa

Sempre più semplice della infissa, in quanto non usa precedenza, associatività o parentesi.

Valuta il tutto sempre usando una pila, ma è più complicata di quella postfissa.

#### Alberi delle espressioni
 
Le espressioni, internamente, sono rappresentate da alberi. Diverse visite degli alberi producono le varie notazioni:
- *Infissa*: visita in ordine simmetrico
- *Anticipata*: visita in ordine prefisso
- *Differita*: visita in ordine postfisso

A partire da questo albero, il compilatore produce il codice oggetto oppure l'interprete valuta l'espressione. In entrambi i casi, l'ordine di valutazione delle sottoespressioni è importante per vari motivi:
- **Effetti collaterali**
  - Per esempio `(a+f(b)) * (c+f(b))`
  - Se f modifica b, allora il risultato da sinistra a destra è diverso da quello da destra a sinistra
  - In alcuni linguaggi non è permesso, in altri è specificato l'ordine (tipo Java, dove è da sinistra a destra)
  - In generale, per effetto collaterale si intende qualcosa che modifica lo stato della computazione (spesso senza restituzione di un valore)
- Aritmetica finita
- Operandi non definiti
- Ottimizzazione

Si possono poi considerare le valutazioni di tipo *lazy* oppure di tipo *eager*:
- **lazy**: valuta solo le sottoespressioni necessarie
  - Viene anche detta *corto-circuito* per le espressioni booleane
- **eager**: valuta tutte le sottoespressioni in qualsiasi caso

---

### Comandi

Un comando è un'entità sintattica la cui valutazione non necessariamente restituisce un valore, ma può avere un effetto collaterale.

- Effetto collaterale: modifica dello stato della computazione senza restituzione di un valore

I comandi:
- Sono tipici del paradigma imperativo
- Non sono presenti nei paradigmi funzionale e logico
- In alcuni casi restituiscono un valore (es. = in C)

---

### Variabili

In matematica la variabile è un'incognita che può assumere i valori di un insieme predefinito:
- non è modificabile!

Nei linguaggi imperativi (Pascal, C, Ada, ...) la **variabile è modificabile**:
- La variabile è un contenitore di valori che ha un nome
- Il valore nel contenitore può essere modificato mediante il comando di assegnamento

---

### Assegnamento

L'assegnamento è un comando che assegna un valore ad una variabile.

In generale:
- `exp1 Opass exp2`

Normalmente la valutazione di un assegnamento *non restituisce un valore* (tranne in C e alcuni altri linguaggi, dove restituisce il valore assegnato) e produce un *side-effect*.

Prendiamo come esempio: `X := X + 1`. In questo caso abbiamo:
- Doppio accesso alla locazione di A (a meno di ottimizzazione del compilatore)
- Poco chiaro e a volte può causare errori
  - Per esempio `A[index(i)] := A[index(i)] + 1`, index(i) potrebbe causare un side effect.
  - Sarebbe meglio fare:
    - ```c
      int temp = index(i);
      A[temp] = A[temp] + 1;
      ```

In C vi sono diversi operatori di assegnamento, incremento e decremento prefissi e postfissi:
- `+=`, `-=`, `*=`, `/=`, `%=`
- Si può usare anche `++` e `--` per incrementare e decrementare di 1, dove:
  - `++e` : incrementa e prima di fornire il valore al contesto
-  `e++` : incrementa e dopo aver fornito il valore al contesto 

L'incremento di un puntatore tiene conto della dimensione degli oggetti puntati, ovvero `p+=3` è equivalente a `p = p + 3*sizeof(*p)`.

#### L-value e R-value

Facciamo l'esempio di `X = X + 1`. In questo caso abbiamo una differenza tra la prima e la seconda X. Sono rispettivamente:
- **L-value**: espressione che può essere usata come destinazione di un assegnamento
  - Es. `x`, `a[i]`, `a[i][j]`, `a[i].f`
- **R-value**: espressione che può essere usata come origine di un assegnamento
  - Es. `x`, `a[i]`, `a[i][j]`, `a[i].f`, `f(x)`, `f(x, y)`

---

### Modelli di variabili diverse

Abbiamo diversi modelli su come vengono gestite le variabili:
- *Linguaggi funzionali* (Lisp, ML, Haskell, Smalltalk): le variabili sono immutabili. Denotano un valore e non sono modificabili.
- *Linguaggi logici* (Prolog): è un modello analogo a quello dei funzionali, ma con la possibilità di modificare (entro certi limiti) il valore associato alla variabile.
- *Modello a riferimento*: le variabili sono riferimenti a valori. Il valore associato alla variabile può essere modificato.

Per esempio Java usa:
- Variabili modificabili per i tipi primitivi (int, float, ...)
- Modello a riferimento per i tipi classe

---

### Modello a riferimento

Nel modello a riferimento, una variabile è un riferimento ad un valore, che ha un nome.

Analogo alla nozione di puntatore, ma senza le possibilità di manipolazione delle locazioni dei puntatori: le locazioni qui possono essere manipolate solo implicitamente.

---

### Ambienti e memoria

Due variabili diverse possono denotare lo stesso oggetto (aliasing)
- Come si rappresenta questa situazione in termini di stato?
- La semplice funzione Stato: Nomi $\rightarrow$ Valori non basta

Nei linguaggi imperativi sono presenti tre importanti domini semantici:
- **Valori denotabili** (Quelli a cui si può dare un nome)
- **Valori memorizzabili** (Quelli che possono essere memorizzati)
- **Valori esprimibili** (Risultato di un'espressione)

La semantica dei linguaggi imperativi usa:
- *Ambiente*: Nomi $\rightarrow$ Valori denotabili
- *Memoria*: Locazione $\rightarrow$ Valori memorizzabili

I linguaggi funzionali usano solo l'ambiente.

---

### Comandi per il controllo sequenza

Vi sono diversi programmi per controllare la linea dove ci troviamo:
- Controllo sequenzia esplicito
  - `;`
  - `blocchi`
  - `goto`
- Comandi condizionali
  - `If`
  - `Case` (switch)
- Comandi iterativi
  - `Iterazione determinata` (for)
  - `Iterazione indeterminata` (while)

#### Comando sequenziale e blocchi

`C1 ; C2` è il costrutto di base dei linguaggi imperativi:
- Ha senso solo se ci sono side-effects
- In alcuni linguaggi il comando `;` non è sequenziale ma un terminatore.

Comando composto:
- Può essere usato al posto di un comando semplice
- Algol 68, C: il valore di un comando composto è quello dell'ultimo comando

#### Comando Goto

Il comando `goto` è un comando che permette di saltare a un'altra parte del programma. Inizialmente era dibattuto se fosse utile o meno. In seguito, viene considerato **dannoso**. Alcuni linguaggi lo hanno, altri non lo permettono.

#### Programmazione strutturata

Il goto è stato "sconfitto" perché considerato contrario ai principi della programmazione strutturata:
- Design *top-down* (raffinamenti successivi) o bottom-up
- *Codice modulare*
- *Nomi identificatori significativi*
- Uso esteso dei *commenti*
- Tipi di *dato strutturati* (array, record, ...)
- Comandi per il *controllo strutturati*
  - Con un solo punto di ingresso ed un solo punto di uscita
    - La scansione lineare del testo corrisponde al flusso di esecuzione
    - Fondamentale per la comprensione del codice
  - Comandi strutturati sono:
    - `for`, `if`, `while`, `do-while`, `switch`, `case`, ...
  - Comandi non strutturali:
    - `goto`, ...
- ...

---

### If e Switch-Case

Introdotti in Algol 60, il comando condizionale è del tipo:
- `if (cond) then C1 else C2`

Ci sono diversi modi per evitare le ambiguità in presenza di if annidati, per esempio le parentesi per indicare i blocchi oppure specificando `endif`. 

Abbiamo poi il `case`:

- ```pascal
  case exp of
    label_1 : C1
    label_2 : C2
    ...
    label_n : Cn
  else
  ```
  - `exp` è un'espressione a valori discreti
  - `label` sono valori costanti, disgiunti e di tipo compatibile con exp.

Ci sono molte versioni in altri linguaggi. Per esempio, in alcuni vi è un ramo di default, in altri vi è la possibilità di mettere range come valori delle etichette, oppure bisogna mettere un etichetta per ogni possibile valore, oppure il viceversa di tutte queste proprietà, ...

Nel C, per esempio, le eitchette non ammettono range, ma si può fare una cosa simile scrivendo, per esempio:

```c
switch (exp) {
  case 1:
  case 2:
  case 3:
    C1;
    break;
  case 4:
  case 5:
  case 6:
    C2;
    break;
  default:
    C3;
}
```

#### If o case?

Rispetto all'uso di `if ... then ... else`, il `case` offre:
- Un'alternativa più leggibile
- Maggiore efficienza del codice prodotto, se compilato in modo astuto, in quanto si salta direttamente al ramo corrispondente piuttosto che eseguire tutti i controlli.

---

### Iterazione

Iterazione e ricorsione sono i due meccanismi che permettono di ottenere formalismi di calcolo Turing completi. Senza di essi avremmo automomi a stati finiti.

**Iterazione**:
- *Indeterminata* (while, repeat)
  - Cicli controllati logicamente
- *Determinata* (do, for)
  - Cicli controllati numericamente
  - Con numero di ripetizioni del ciclo determinante al momento dell'inizio del ciclo

#### Iterazione indeterminata

```C
while condizione do comando
```

Introdotto da Algol-W, rimasto in Pascal e in molti altri linguaggi, più semplice semanticamente del `for`.

In *Pascal* vi è anche la versione del post-test:

```pascal
repeat comando until condizione
```

Viene chiamata *indeterminata* perché il numero di iterazioni non è noto a priori.

L'iterazione indeterminata permette il potere espressivo delle macchine di Turing.

Di facile implementazione usando l'istruzione di salto condizionato della macchina fisica.

#### Iterazione determinata

```Pascal
for indice := inizio to fine by passo do ... end
```

Non si possono modificare *indice*, *inizio*, *fine* o *passo* all'interno del loop.

Il numero di ripetizioni del ciclo è *determinato* all'inizio dell'esecuzione del ciclo.

Il potere espressivo è minore rispetto all'iterazione indeterminata: non si possono esprimere computazioni che non terminano.

In molti linguaggi, come nel C, il for **non è un costrutto di iterazione determinata**.

#### Differenze tra i vari linguaggi

I vari linguaggi differiscono nei seguenti aspetti:
- Possibilità di *modificare gli indici* primo, ultimo, passo nel loop (se sì, non si tratta di iterazione determinata)
- *Numero di iterazioni* (dove avviene il controllo indice < fine)
- Incremento *negativo*
- *Valore* di indice al termine del ciclo
- Possibilità di *salto* dall'esterno all'interno

I linguaggi moderni non permettono proprio tutto, mentre per esempio il **do** di Fortran permetteva di fare tutto.

#### Il valore dell'indice alla fine

Il valore di `indice` alla fine del ciclo dipende dal linguaggio:
- Può essere l'ultimo assegnato, ovvero il primo valore che eccede il limite `fine`
- Può essere l'ultimo valido
- Può essere indefinito

In molti linguaggi moderni non si può saltare all'interno di un loop usando goto, ma se ne può uscire.

---

### Ricorsione

Modo alternativo all'iterazione per ottenere il potere espressivo delle macchine di Turing.

Una funzione è ricorsiva se *definita in termini di se stessa*, come per esempio la funzione di Fibonacci:

```pascal
function fib(n: integer): integer;
begin
  if n < 2 then
    fib := n
  else
    fib := fib(n-1) + fib(n-2)
end;
```

Definizioni usando l'induzione:
- *Numeri naturali*
  - Minimo insieme X che soddisfa le due seguenti regole
    1. 0 è in X
    2. Se n è in X allora n+1 è in X
- *Principio di induzione*
  - Una proprietà P(n) è vera su tutti i numeri naturali se
    1. P(0) è vera
    2. Per ogni n, se P(n) è vera allora è vera anche per P(n+1)
- *Definizioni induttive*
  - Se g: (Nat x A) -> A totale allora esiste una unica funzione totale f: Nat -> A tale che:
    1. f(0) = a;
    2. f(n+1) = g(n, f(n))

#### Ricorsione e definizioni induttive

La definizione di una funzione ricorsiva è analoga alla definizione induttiva di una funzione:
- Il valore di F su un argomento è definito in termini dei valori di F su argomenti più piccoli

Nei programmi tuttavia sono possibili anche definizioni non "corrette". Possiamo infatti avere funzioni che non terminano mai e sono ricorsive, che non corrispondono a nessuna definizione induttiva.

**Note**:
- Ogni programma ricorsivo può essere trasformato in un programma iterativo e viceversa.
- La ricorsione è più naturale con linguaggi funzionali e logici
- Iterazione più naturale con linguaggi imperativi

#### Ottimizzare la ricorsione con la tail recursion

Una chiamata di `g` in `f` si dice "chiamata in coda" (o tail call) se `f` restituisce il valore restituito da `g` senza ulteriore computazione.

`f` è tail recursive se contiene solo chiamate in coda.

- Non serve allocazione dinamica della memoria con pila: basta un unico RdA.
- Più efficiente
- Possibile la generazione di codice tail-recursive usando *continuation passing style*.

**Esempio di fattoriale tail-recursive**:

```C
int fattrc (int n, int res) {
  if (n <= 1)
    return res;
  else 
    return fattrc(n-1, n*res);
}
```

Abbiamo aggiunto un parametro per memorizzare "il resto della computazione" e quindi *ci basta un RdA*, in quanto possiamo cancellare quelli precedenti dopo ogni chiamata.