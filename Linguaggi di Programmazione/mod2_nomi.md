<style>
  body {max-width:700px}
  h1 {color:rgb(255,120,100);font-size:30pt;font-weight:bolder}
  h2 {color:rgb(50,200,200);font-size:20pt;font-weight:bold}
  h3 {color:rgb(100,255,100);font-size:15pt;font-weight:bold}
  h4 {color:rgb(255,255,100);font-size:12pt;font-weight:100}
  p {padding-left:10px}
  

  em {color:rgb(255,255,155);font-weight:bold}

  strong {color:rgb(250,100,200)}
  b1 {color:rgb(255,100,100);text-decoration:none;font-weight:bold}
  b2 {color:rgb(255,100,100);text-decoration:none;font-weight:bold}
</style>


> # Nomi

---

> ## Nomi

**Nome**:
- Sequenza di caratteri usata per denotare qualche cos'altro
  - const pi = 3.14 
  - int x
  - void f(){...}
    - Hanno rispettivamente i nomi pi, x, f e denotato rispettivamente degli oggetti che sono la costante 3.14, una variabile e la definizione di f.
- Nei linguaggi i nomi sono spesso *identificatori* (token alfa-numerici)
  - Ma possono essere anche altro (+, :=, ...)
- L'*uso* di un nome serve ad indicare l'oggetto denotato

Sono oggetti simbolici più facili da ricordare, e si possono trarre delle astrazioni quali i dati (variabili, tipi, ...) e controllo (sottoprogrammi)

---

> ## Dettagli

### Alcune definizioni

**Oggetto denotabile**:
- Quando può essergli associato un nome

**Nomi definiti dall'utente**
- Variabili, parametri formali, procedure (in senso lato), tipi definiti dall'utente, etichette, moduli, costanti definite dall'utente, eccezioni

**Nomi definiti dal linguaggio**:
- Tipi primitivi, operazioni primitive, costanti predefiniti

**Terminologia**:
- *Legame* (binding), o associazione, tra nome e oggetto

### Binding time
**Statico**:
- Progettazione del linguaggio
  - Tipi primitivi, nomi per operazioni e costanti predefinite ecc.
- Scrittura del programma
  - Definizione di alcuni nomi (variabili, funzioni, ecc.) il cui legame sarà completato più tardi
- Compilazione (+ collegamento e caricamento)
  - Legame di alcuni nomi (var globali)

**Dinamico**:
- Esecuzione
  - Legame definito di tutti i nomi non ancora legati (per esempio variabili locali ai blocchis)

---

> ## Ambiente

**Ambiente** è l'insieme delle associazioni fra nomi e oggetti denotabili esistenti a run-time in uno specifico punto del programma ed in uno specifico momento dell'esecuzione

La **dichiarazione** è un meccanismo (implicito o esplicito) col quale si crea un'associazione in ambiente

**Lo stesso nome** può denotare oggetti **distinti** in diversi punti del programma

Si parla di **aliasing** quando si danno **nomi diversi** che denotano lo **stesso oggetto**. Per esempio il passaggio per riferimento, i puntatori, etc. 


---

> ## Blocco

I blocchi sono una regione testuale del programma, identificata da un segnale di inizio ed uno di fine, che può contenere dichiarazioni *locali* a quella regione.

In diversi linguaggi:
```
 - begin ... end        // Algol, Pascal
 - { ... }              // C, Java
 - ( ... )              // Lisp
 - let ... in ... end   // ML
```

#### Dettagli
Sulla generale definizione di blocco:
- I blocchi sono **anonimi** (o in-line).
- Sono associati alle **procedure**.
  - Cosa è una procedura? E' una funzione che non ritorna alcun valore;
  - Cosa è una funzione? E' una procedura che ritorna un valore;
  - Al tempo queste due cose erano distinte, oggi viene usato "void" per dire che una funzione non ritorna nulla

Visibilità delle variabili:
- Una dichiarazione locale ad un blocco è visibile in quel blocco e in tutti i blocchi in esso annidati, a meno che non intervenga in tali blocchi una nuova dichiarazione dello stesso nome (che nascone, o maschera, la precedente)


#### Sono utili?
I blocchi di testo **non sono necessari** alla creazione di un linguaggio di programmazione. Sono tuttavia utili per la comprensione del codice.

#### A cosa servono?
I blocchi di testo servono a **strutturare l'ambiente**, grazie all'avere delle variabili locali, che non interferiscano con le variabili globali e che quindi possono avere nomi più appropriati per il loro uso.

### Annidamento
I blocchi possono essere sovrapposti solo se sono annidati, non posso avere un blocco che è in parte dentro e in parte fuori un altro blocco.

### Suddividere l'ambiente
L'ambienete (in uno specifico blocco) può essere suddiviso in:
- *Ambiente locale*:
  - Associazioni create all'ingresso nel blocco
    - Variabili locali
    - Parametri formali
- *Ambiente non locale*:
  - Associazioni ereditate da altri blocchi
- *Ambiente globale*:
  - Quella parte di ambiente non locale relativo alle associazioni comuni a tutti i blocchi
    - Dichiarazioni esplicite di  variabili globali
    - Dichiarazioni del blocco più esterno
    - Associazioni esportate da moduli ecc.

### Operazioni sull'ambiente
- **Creazione** associazione nome-oggetto denotato (naming)
  - Dichiarazione locale in blocco
- **Riferimento** oggetto denotato mediante il suo nome (referencing)
  - Uso di un nome
- **Disattivazione** associazione nome-oggetto denotato
  - Una dichiarazione maschera un nome
- **Riattivazione** associazione nome-oggetto denotato
  - Uscita da un blocco con dichiarazione che maschera
- **Distruzione** associazione nome-oggetto denotato (unnaming)
  - Uscita da blocco con dichiarazione locale

### Operazioni sugli oggetti denotabili
- **Creazione**
- **Accesso**
- **Modifica** (se l'oggetto è modificabile)
- **Distruzione**

Creazione e distruzione di un oggetto non coicidono con creazione e distruzione dei legami per esso.

### Vita di un oggetto
**Gli eventi fondamentali**:
1. Creazione di un oggetto
2. Creazione di un legame per l'oggetto
3. Riferimento all'oggetto, tramite il legame
4. Disattivazione di un legame
5. Riattivazione di un legame
6. Distruzione di un legame
7. Distruzione di un oggetto

Il tempo tra 1 e 7 è la *vita* (o il tempo di vita: lifetime) *dell'oggetto*.

Il tempo tra 2 e 6 è la *vita dell'associazione*.

<br/>

La vita di un oggetto non coicide con la vita dei legame per quell'oggetto.

- Vita dell'oggetto più lunga di quella del legame:
```C
void fun (int x) {...}
...
int A = 5;
...
fun(A);

/* Variabile alla funzione: durante l'esecuzione di fun esiste un legame tra X e un oggetto che esiste prima e dopo tale esecuzione */ 
```

- Vita dell'oggetto più corta di quella del legame:
```C
int *x, *y;
...
x = (int *) malloc (sizeof (int));
y = x;
...
free (x);
x = null;
...

/* Dopo la free non esiste più l'oggetto, ma esiste ancora un legame ("pendente") per esso (y): dangling reference */
```

---

> ## Regole di scope

### Regole
**Come interpretare il codice**:
- Una dichiarazione locale ad un blocco è visibile in quel blocco e in tutti i blocchi in esso annidati, a meno che non intervenga in tali blocchi una nuova dichiarazione dello stesso nome (che nasconde, o maschera, la precedente)

### Esempi
Cosa stampa questo programma?
```C
{
  int x = 0;
  void pippo (int n) {
    x = n + 1;
  }
  pippo(3);
  write(x);
  {
    int x = 0;
    pippo(3);
    write(x);
  }
  write(x);
}

/* Stampa 3, poi 0 e poi 3 di nuovo nella maggior parte dei linguaggi di programmazione */
```