[//]: # (Stili di riferimento per il markdown)
<link rel="stylesheet" href="./res/style.css">

> # Appunti su message passing

---

> ## Introduzione

### Cosa è

Si tratta di un *paradigma di comunicazione*, in quanto i processi si comunicano le informazioni.

La sincronizzazione avviene attraverso lo scambio di messaggi, non più semplici segnali.

Un *messaggio* è un insieme di informazioni formattate da un processo **mittente** e interpretate da un processo **destinatario**.

Esso copia le informazioni di un messaggio da uno spazio di indirizzamento di un processo allo spazio di indirizzamento di un altro processo.

### Operazioni

Le operazioni fondamentali sono:
- *send*
  - Utilizzata dal processo mittente per "spedire" un messaggio ad un processo destinatario
  - Il processo destinatario deve essere specificato
- *receive*
  - Utilizzata dal processo destinatario per "ricevere" un messaggio da un processo mittente
  - Il processo mittente può essere specificato, o può essere qualsiasi

**NOTE:** 
- Il passaggio dello spazio di indirizzamento del mittente a quello del destinatario è mediato dal sistema operativo (protezione di memoria)
- Il processo destinatario deve eseguire un'operazione **receive** per ricevere qualcosa

### Tipologie

Esistono due tipologie di message passing:
- *MP sincrono*
  - `send` sincrono
  - `receive` sincrono
- *MP asincrono*
  - `send` asincrono
  - `receive` sincrono
- *MP completamente asincrono*
  - `send` asincrono
  - `receive` asincrono

I nomi dei vari send e receive sono:
- `send` diventa:
  - `ssend(messaggio, destinatario)`
  - `asend(messaggio, destinatario)`
  - `asend(messaggio, destinatario)`
- `receive` diventa: (il mittente può essere ANY)
  - `sreceive(mittente)` 
  - `areceive(mittente)`
    - Non è effettivamente asincrono, ma c'è comunque una "a" davanti. E' identi a `sreceive`.
  - `nb-receive(mittente)`

### MP sincrono dato quello asincrono

```java
void ssend(Object msg, Process q) {
    Asend(<getpid(), msg>, q);
    ack = areceive(q); // Così sfruttiamo la sincronicità del areceive
}

Object sreceive(Process q) {
    <pid, msg> = Areceive(q);
    Asend(ack, pid);
    return msg; 
}
```

### MP asincrono dato quello sincrono (senza gestione ANY)

```java
/* p è il processo che chiama (asend o areceive) */
void asend(Object m, Process q) {
    ssend("SND(m,p,q)", server); // Il server riceve e se lo salva, quindi questa non è bloccante
}

void areceive(Process q) {
    ssend("RCV(p,q)", server); // Il server la riceve quindi non è bloccante
    Object m = sreceive(server); // Questa è bloccante se non c'è un messaggio che deve ricevere
    return m;
}

process server {
    /* Un elemento per ogni paio di processi */
    int [][] waiting; // ini tutti 0
    Queue [][] queue; // ini tutti 0
    while (true) {
        handleMessage();
    }

    void handleMessage() {
        msg = sreceive(*);
        if (msg == <SND(m,p,q)>) {
            if (waiting[p,q] > 0) {
                ssend(m,q);
                waiting[p,q]--;
            } else {
                queue[p,q].add(m);
            }
        } else if (msg == <RCV(q,p)>) {
            if (queue[p,q].isEmpty()) {
                waiting[p,q]++;
            } else {
                m = queue[p,q].remove();
                ssend(m,q);
            }
        }
    }
}
```

Gli esempi fatti con questo paradigma sono molto semplici, quindi risolverò direttamente gli esercizi più avanti.

Si tratta spesso di avere un server che fa da intermediario tra i processi che vogliono comunicare. Non so perché tutti gli esempi lo usino, ma lo usano, quindi boh.




```java

boolean inp, inq = false, false;
Turn requestP = false, requestQ = false, turn = P;

process P {
  while (true) {
    turn = P;
    while (turn = Q || inq)
      ;
    inp = true;
    // CS
    turn = Q
    inp = false
  }
}

process Q {
  while (true) {
    turn = Q;
    while (turn = Q)
  }
}


```