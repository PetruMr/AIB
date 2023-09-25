[//]: # (Stili di riferimento per il markdown)
<link rel="stylesheet" href="./res/style.css">

> # Appunti su monitor

---

> ## Definizioni dei monitor

### Cosa sono

Sono un paradigma di programmazione concorrente che fornisce un approccio più strutturato alla programmazione concorrente.

Un monitor è un modulo software che consiste di:
- **Dati locali**
- Una **sequenza di inizializzazione**
- Una o più **procedure**

Caratteristiche:
- I dati locali sono accessibili solo alle procedure del modulo stesso.
- Un processo entra in un monitor invocando una delle sue procedure
- Solo un processo alla volta può essere all'interno del monitor; gli altri processi che invocano il monitor sono sospesi, in attesa che il monitor diventi disponibile.

### Sintassi

Per descrivere un monitor si scrive nel seguente modo:

```java
monitor name {
    variable declarations...    // Variabili private del monitor

    procedure entry type procedurename1 (args...) {
        ...                     // Procedure visibili all'esterno
    }

    type procedurename2 (args...) {
        ...                     // Procedure private
    }

    name(args...) {
        ...                     // Inizializzazione
    }
}
```

Assomiglia ad un oggetto della programmazione object oriented.

La sintassi si basa su quella di Pascal, originariamente (usiamo var, procedure entry, etc.). In questi lucidi useremo la stessa sintassi di C/Java.

*Solo un processo alla volta può essere all'interno del monitor*:
- Il monitor fornisce un semplice meccanismo di mutua esclusione
- Struttura dati condivisa tra i processi possono essere messe all'interno del monitor

Per essere utile alla programmazione concorrente, è necessario un meccanismo di sincronizzazione. Abbiamo necessità di:
- Poter sospendere i processi in attesa di qualche condizione
- Far uscire i processi dalla mutua esclusione mentre sono in attesa
- Permettergli di rientrare quando la condizione è verificata

*Dichiarazione di variabili di condizione (CV)*:
- `condition c`

*Le operazioni definite sulle CV sono*:
- `c.wait()`
  - Attende il verificarsi di una condizione
    - Mette il processo in una coda di attesa della condizione "c".
    - Si rilascia la mutua esclusione
- `c.signal()`
  - Segnala che la condizione è vera
    - Causa la riattivazione immediata di un processo (secondo una politica FIFO)
    - Il chiamante viene posto in attesa fino a quando il processo risvegliato avrà rilasciato la mutua esclusione (*urgent stack*)
    - Se nessun processo sta attendendo `c` la chiamata non avrà nessun effetto

### Differenze con i semafori

I comandi `wait` e `signal` potrebbero sembrare molto simili alle operazioni sui semafori `P` e `V`.

Questo non è vero:
- `signal` non ha alcun effetto se nessun processo sta attendendo la condizione *MENTRE* `V` "memorizza" il verificarsi dell'evento
- `wait` è sempre bloccante *MENTRE* `P` può non essere bloccante se il semaforo ha valore positivo
- Il processo risvelgiato da `signal` viene eseguito per primo, prima anche del processo che ha chiamato `signal`. L'ordine per i semafori invece non è importante.

### Politiche di signaling

Ne esistono 4:
- **SU** - *Signal urgent*
  - La polticica classica di signaling, nei compiti è quella da usare di default, a meno che non sia specificato diversamente.
- **SW** - *Signal wait*
  - No urgent stack, signaling process viene messo nella entry queue
- **SR** - *Signal and return*
  - Dopo la signal si esce subito dal monitor
- **SC** - *Signal and continue*
  - La signal segnala solamente che un processo può continuare, il chiamante procesgue l'esecuzione
  - Quando lascia il monitor viene riattivato il processo segnalato

### Implementare i semafori usando i monitor

```java
monitor Semaphore {
    int value;
    condition c;

    procedure entry void P() {
        if (value == 0)
            c.wait();
        value--;
    }

    procedure entry void V() {
        value++;
        c.signal();
    }

    Semaphore (int init) {
        value = init;
    }
}
```

### Implementiamo i monitor usando i semafori

```java
// Ci servono alcuni "ingredienti"
interface Stack { // Per urgent
    void push(Object x);
    Object pop(void);
    boolean empty(void);
}
interface Queue { // Per waiting queue
    void enqueue(Object x);
    Object dequeue(void);
    boolean empty(void);
}
// Un semaforo mutex


// Implementiamo il monitor
class Monitor {
    Semaphore mutex = new Semaphore(1);
    Queue entryQueue = new Queue();
    Stack urgentStack = new Stack();

    void entry () {
        mutex.P();
    }

    void wait(int i) { // wait on condition i
        Semaphore ws = new Semaphore(0);
        waiting[i].enqueue(ws);
        if (urgent.empty())
            mutex.V();
        else {
            Semaphore s = urgent.pop();
            s.V();
        }
        ws.P();
        free(ws);
    }

    void signal (int i) { // signal on condition i
        if (!waiting[i].empty()) {
            Semaphore ws = waiting[i].dequeue();
            Semaphore s = new Semaphore(0);
            urgent.push(s);
            ws.V();
            s.P();
            free(s);
        }            
    }

    void exit () {
        if (urgent.empty())
            mutex.V();
        else {
            Semaphore s = urgent.pop();
            s.V();
        }
    }
}
```

### Implementiamo R/W tramite monitor

```java
process Reader {
    while (true) {
        rwController.startRead();
        // CS
        rwController.endRead();        
    }
}

process Writer {
    while (true) {
        rwController.startWrite();
        // CS
        rwController.endWrite();        
    }
}
```

Ora implementiamo i vari metodi e il `rwController`:

```java
monitor rwController {
    int nr = 0;
    int nw = 0;
    condition okToRead;
    condition okToWrite;

    procedure entry void startRead() {
        if (nw > 0)
            okToRead.wait();
        nr++;
        okToRead.signal();
    }

    procedure entry void endRead() {
        nr--;
        if (nr == 0)
            okToWrite.signal();
    }

    procedure entry void startWrite() {
        if (nr > 0 || nw > 0)
            okToWrite.wait();
        nw++;
    }

    procedure entry void endWrite() {
        nw--;
        okToRead.signal();
        if (nw == 0 && nr == 0) {
            okToWrite.signal();
        }
    }
}

```

Implementiamo ora una versione che evita starvation:

```java
monitor rwController {
    int nr = 0; nw = 0; ww = 0;
    condition okToRead, okToWrite;

    procedure entry void startRead() {
        if (nw > 0 || ww > 0) 
            okToRead.wait();
        nr++;
        okToRead.signal();
    }

    procedure entry void endRead() {
        nr--;
        if (nr == 0)
            okToWrite.signal();
    }

    procedure entry void startWrite() {
        if (nr > 0 || nw > 0) {
            ww++;
            okToWrite.wait();
            ww--;
        }
        nw++;
    }

    procedure entry void endWrite() {
        nw--;
        okToRead.signal();
        if (nr == 0) okToWrite.signal();
    }
}
```

### Produttore - consumatore tramite Monitor

```java
process Producer {
    Object x;
    while (true) {
        x = produce();
        buffer.insert(x);
    }
}

process Consumer {
    Object x;
    while (true) {
        x = buffer.remove();
        consume(x);
    }
}
```

Implementiamo ora il buffer:

```java
monitor buffer {
    Object buffer;
    condition empty, full;
    Boolean isFull = false;

    procedure entry void insert(Object x) {
        if (isFull)
            empty.wait();
        buffer = x;
        full.signal();
    }

    procedure entry Object remove() {
        if(!isFull)
            full.wait();
        Object x = buffer;
        isFull = false;
        empty.signal();
        return x;
    }
}
```


### Buffer limitato tramite monitor

```java
monitor buffer {
    Object buffer;
    condition empty, full;
    int count = 0;

    procedure entry void insert(Object x) {
        if (count == N)
            empty.wait();
        buffer = x;
        count++;
        full.signal();
    }

    procedure entry Object remove() {
        if(count == 0)
            full.wait();
        Object x = buffer;
        count--;
        empty.signal();
        return x;
    }
}
```

### Filosofi a cena

```java
process Philo[i] {   // i = 0, 1, ..., N-1
    // think
    dpController.startEating();
    // eat
    dpController.endEating();
}

monitor dpController {
    condition [n] chopstickUsed;
    bool [n] chopstickFree;

    procedure entry void startEating() {
        int left = i;
        int right = (i+1) % N;
        if (left > right) {
            int tmp = left;
            left = right;
            right = tmp;
        }
        if (chopstickFree[left] && chopstickFree[right]) {
            chopstickFree[left] = false;
            chopstickFree[right] = false;
        } else {
            chopstickUsed[left].wait();
            chopstickUsed[right].wait();
        }
    }

    procedure entry void endEating() {
        int left = i;
        int right = (i+1) % N;
        if (left > right) {
            int tmp = left;
            left = right;
            right = tmp;
        }
        chopstickFree[left] = true;
        chopstickFree[right] = true;
        chopstickUsed[left].signal();
        chopstickUsed[right].signal();
    }
}
```