[//]: # (Stili di riferimento per il markdown)
<link rel="stylesheet" href="./res/style.css">

> # Problemi classici

---

> ## Produttore / Consumatore

### Definizione

Esiste un processo "produttore" *Producer* che genera valori (record, caratteri, oggetti, etc.) e vuole trasferirli ad un processo "consumatore" *Consumer* che prende i valori generati e li "consuma".

La comunicazione avviene attraverso un'unica variabile condivisa.

### Proprietà da garantire

Dobbiamo avere che:
- *Producer* non deve scrivere nuovamente l'area di memoria condivisa prima che *Consumer* abbia effettivamente utilizzato il valore precedente.
- *Consumer* non deve leggere due volte lo stesso valore, ma deve attendere che *Producer* abbia generato il successivo.
- Deve esserci l'assenza di deadlock.

### Implementazione

```Java
shared Object buffer;

Semaphore empty = new Semaphore(1);
Semaphore full = new Semaphore(0);

process Producer {
    while (true) {
        Object item = produce();
        empty.P();
        buffer = item;
        full.V();
    }
}

process Consumer {
    while (true) {
        full.P();
        Object item = buffer;
        empty.V();
        consume(item);
    }
}
```

> ## Buffer limitato

### Definizione

In questo caso, a differenza di quello dei produttori e dei consumatori, lo scambio tra produttore e consumatore non avviene tramite un singolo elemento, ma tramite un buffer di dimensione limitata, ovvero un vettore di elementi.

### Proprietà da garantire

Dobbiamo avere che:
- *Producer* non deve sovrascrivere elementi del buffer prima che *Consumer* abbia effettivamente utilizzato i relativi valori.
- *Consumer* non deve leggere due volte lo stesso valore, ma deve attendere che *Producer* abbia generato il successivo.

### Implementazione

```Java
shared Queue buffer = new Queue(maxsize = SIZE);
Semaphore empty = new Semaphore(SIZE);
Semaphore full = new Semaphore(0);
Semaphore mutex = new Semaphore(1);

process Producer {
    while (true) {
        Object item = produce();
        empty.P();
        mutex.P();
        buffer.enqueue(item);
        mutex.V();
        full.V();
    }
}

process Consumer {
    while (true) {
        full.P();
        mutex.P();
        Object item = buffer.dequeue();
        mutex.V();
        empty.V();
        consume(item);
    }
}
```

> ## Cena dei Filosofi

### Definizione

Cinque filosofi passano la loro vita a pensare e a mangiare (alternativamente).

Per mangiare fanno uso di una tavola rotonda con 5 sedie, 5 piatti e 5 posate fra i piatti.

Per mangiare, un filosofo ha bisogno di entrambe le posate (destra e sinistra).

Per pensare, un filosofo lascia le posate da dove le ha prese.

### Proprietà da garantire

Abbiamo un accesso ad insiemi di risorse a intersezione non nulla, in quanto più filosofi competono per le stesse risorse.

### Pseuodocodice del funzionamento

Ogni filosofo si comporta in questo modo:

```Java
process Filosofo[i] { // ∀i ∈ {0, ..., 4}
    while (true) {
        // pensa
        // prendi posate
        // mangia
        // lascia posate
    }
}

// Le bacchette sono:
chopstick[i]; // con i = 0, ..., 4

// Ogni filosofo accede alle posate
chopstick[i] e chopstick[(i + 1) % 5]
```


### Implementazione errata

```Java
Semaphore chopstick[5] = {1, 1, 1, 1, 1};

process Filosofo[i] { // ∀i ∈ {0, ..., 4}
    while (true) {
        // pensa
        chopstick[i].P();
        chopstick[(i + 1) % 5].P();
        // mangia
        chopstick[i].V();
        chopstick[(i + 1) % 5].V();
        // lascia posate
    }
}
```

Ma con questa prima soluzione, ogni filosofo potrebbe prendere la bacchetta di sinistra, ma non quella di destra, e quindi non potrebbe mangiare, causando un deadlock.

### Implementazione corretta

Ve ne sono diverse, elenchiamone un paio:
- Che si rompa la simmetricità: un filosofo, l'ultimo per esempio, prende prima la destra e poi la sinistra. In questo modo sicuramente almeno 1 può iniziare e poi terminare e quindi tutti gli altri di conseguenza.
- I filosofi a indice pari iniziano con la sinsitra, gli altri con la destra. Questo aumenta le nostre possibilità che i filosofi inizino a mangiare, aumentando il parallelismo
- Al più quattro filosofi possono mangiare, però questo necessita di un agente esterno che controlla
- Le bacchette devono essere prese insieme, ma questo necessita di un'altra CS. (*pretty good*)

> ## Lettori e Scrittori

### Definizione

Un database è condiviso tra un certo numero di processi.

Esistono due tipi di processi:
- I *lettori* accedono al database per leggerne il contenuto.
- Gli *scrittori* accedono al database per aggiornare il contenuto.

### Proprietà da garantire

Dobbiamo avere che:
- Se uno scrittore accede ad un dato per aggiornarlo, esso opera in mutua esclusione, nessun altro lettore o scrittore può accedere al database.
- Se nessuno scrittore sta accedendo al database, un numero arbitrario di lettori può accedere al database in lettura.

### Implementazione

```Java
Semaphore mutex = new Semaphore(1);
Semaphore rw = new Semaphore(1);
int nr = 0;

process Writer {
    while (true) {
        startWrite();
        // write
        endWrite();
    }
}

process Reader {
    while (true) {
        startRead();
        // read
        endRead();
    }
}

void startWrite() {
    rw.P();
}

void endWrite() {
    rw.V();
}

void startRead() {
    mutex.P();
    if (nr == 0)
        rw.P();
    nr++;
    mutex.V();
}

void endRead() {
    mutex.P();
    nr--;
    if (nr == 0)
        rw.V();
    mutex.V();
}
```

Il problema di questa soluzione è che di lettura difficile, in quanto certi punti è difficile capire, a prima lettura, da dove spuntino.

Inoltre, è limitata a priorità per i lettori.

> # Andrews

### Definizione

- Sia *B* una condizione booleana.
- Sia *S* uno statement (possibilmente composto)

Allora

- **< S >**
  - Esegui lo statement S in modo atomico
- **< Await(B) -> S >**
  - Attendi fino a che la condizione *B* è verificata e quindi esegui *S*
  - L'attesa e il comando vengono eseguiti in modo atomico
  - Quindi, quando S viene eseguito, B è verificata (sicuramente)


### A cosa ci servono?

Andres ci suggerisce la seguente procedura a partire da queste definizioni:
1. **Definire il problema con precisione**
   1. Identificare i processi, specificare i problemi di sincronizzazione, introdurre le variabili necessarie a definire un'invariante
2. **Abbozzare una soluzione**
   1. Produrre un primo schema di soluzione, e identificare le regione che richiedono accesso atomico o mutualmente esclusivo
3. **Garantire l'invariante**
   1. Verifica che l'invariante sia sempre verificato
4. **Implementare le azioni atomiche**
   1. Esprimere le azioni atomiche e gli statement await utilizzando le primitive di sincronizzazione disponibili

### Usiamolo per gli scrittori e i lettori

1. **Definire il problema con precisione**
   1. In primis abbiamo la consegna.
   2. Poi, definiamo le variabili:
      1. nr: numero di lettori che stanno leggendo
      2. nw: numero di scrittori che stanno scrivendo
2. **Invariante**
   1. (nr ≤ 0 && nw == 0) || (nr == 0 && nw == 0)
3. **Abbozzare una soluzione**:

```Java
process Reader {
    < await (nw == 0) -> nr ++ >
    // read the database
    < nr-- > 
}

process Writer {
    < await (nr == 0 && nw == 0) -> nw++ >
    // write the database
    < nw-- >
}
```

Utilizziamo quindi:
- Un semaforo *mutex*
  - Utilizzato per garantire mutua esclusione (init 1)
- Un array di semafori *sem*, dove ad ogni condizione *Bj* inclusa nelle istruzione è associato il semaforo *sem[j]*
  - Su questi semafori verranno posti in attesa i processi che attendono il verificarsi di una situazione; sono inizializzati a 0
- Un array di interi *waiting*, dove ad ogni condizione *Bj* inclusa nelle istruzioni await è associato l'intero *waiting[j]*
  - Questi interi vengono utilizzati per contare il numero di processi in attesa di una certa condizione

Trasformiamo ora i semafori (**Passaggio del testimone**):
    
```Java
// La < S > diventa

mutex.P();
S;
SIGNAL();

// La < await(Bi) -> Si > diventa

mutex.P();
if (!Bi) {
    waiting[i]++;
    mutex.V();
    sem[i].P();
    waiting[i]--;
}
Si;
SIGNAL();

// E poi definiamo la SIGNAL (non deterministica)
void SIGNAL() {
    if (B0 && waiting[0] > 0) 
        sem[0].V();
    else if (B1 && waiting[1] > 0) {
        sem[1].V();
    } 
    ...
    else if (Bn && waiting[n] > 0) {
        sem[n].V();
    }
    else 
        mutex.V();
}
```

Questa trasformazione si chiama passaggio del testimone ("**passing the baton**").

SIGNAL:
- Verifica se esiste un processo, fra quelli in attesa, che possono proseguire
- Se esiste, "gli passa il testimone"
  - Ovvero gli "passa" la mutua esclusione
- Altrimenti, rilascia la mutua esclusione

Questa tecnica prende il nome di "split binary semaphore"
- Il sistema agise come un semaforo binario "suddiviso" tra i vari semafori

MIA SPIEGAZIONE:
- Praticamente lo stesso che deve fare l'operazione chiama la P del mutex, però sarà l'ultimo della catena a chiamare la V, dopo aver passato il testimone a tutti i semafori in attesa.

### Implementazione

```Java
/* Introdotti dalla trasformazione */
Semaphore mutex = new Semaphore(1);     // Mutual exclusion
Semaphore semr = new Semaphore(0);      // Reader semaphore
Semaphore semw = new Semaphore(0);      // Writer semaphore

int waitingr = 0;       // Number of waiting readers
int waitingw = 0;       // Number of waiting writers

/* Problem variables */
int nr = 0;             // Number of current readers
int nw = 0;             // Number of current writers

process Reader {
    while (true) {
        mutex.P();
        if (nw > 0) {
            waitingr++;
            mutex.V();
            semr.P();
            waitingr--;
        }
        nr++;
        SIGNAL();
        // read the database
        mutex.P();
        nr--;
        SIGNAL();
    }
}

process Writer {
    while (true) {
        mutex.P();
        if (nr > 0 || nw > 0) {
            waitingw++;
            mutex.V();
            semw.P();
            waitingw--;
        }
        nw++;
        SIGNAL();
        // write the database
        mutex.P();
        nw--;
        SIGNAL();
    }
}

void SIGNAL () {
    if ( (nw == 0) && waitingr > 0 ) {
        semr.V();
    } else if ( (nr == 0 && nw == 0) && waitingw > 0 ) {
        semw.V();
    } else {
        mutex.V();
    }
}
```

Soluzione con SIGNAL ridotto:

```Java
process Reader {
    while (true) {
        mutex.P();
        if (nw > 0) {
            waitingr++;
            mutex.V();
            semr.P();
            waitingr--;
        }
        nr++;
        if (waitingr > 0) {
            semr.V();
        } else {
            mutex.V();
        }
        // read the database
        mutex.P();
        nr--;
        if (nr == 0 && waitingw > 0) {
            semw.V();
        } else {
            mutex.V();
        }
    }
}

process Writer {
    while (true) {
        mutex.P();
        if(nr > 0 || nw > 0) {
            waitingw++;
            mutex.V();
            semw.P();
            waitingw--;
        }
        nw++;
        mutex.V();
        // write the database
        mutex.P();
        nw--;
        if (waitingr > 0) {
            semr.V();
        } else if (waitingw > 0) {
            semw.V();
        } else {
            mutex.V();
        }
    }
}
```

C'era un barbatrucco fin'ora.

Tutti gli else if sono non deterministici.

E l'else finale è una condizione.

Quella che ho scritto è essenzialmente la trasformazione in deterministica del problema, però goddamn.

### Priorità agli scrittori

```Java
process Reader {
    while (true) {
        < await(nw == 0) -> nr++ >
        // read DB
        < nr-- >
    }
}

process Writer {
    while (true) {
        < await(nr == 0 && nw == 0) -> nw++ >
        // write db
        < nw-- >
    }
}


// Questo diventa

process Reader {
    while (true) {
        mutex.P();
        if (nw != 0 || waitingw > 0) {
            waitingr++;
            mutex.V();
            semr.P();
            waitingr--;
        }
        nr++
        if (waitingr > 0)
            semr.V()
        else
            mutex.V()
        // read the db
        mutex.P();
        nr--;
        if (waitingw > 0 && nr == 0) {
            semw.V();
        } else {
            mutex.V();
        }
    }
}

process Writer {
    while (true) {
        mutex.P();
        if (nw != 0 || nr != 0) {
            waitingw++;
            mutex.V();
            semw.P();
            waitingw--;
        }
        nw++;
        mutex.V()
        // read the db
        mutex.P();
        nw--;
        if (waitingw > 0) {
            semw.V();
        } else if (waitingr > 0) {
            semr.V();
        } else {
            mutex.V();
        }
    }
}

```