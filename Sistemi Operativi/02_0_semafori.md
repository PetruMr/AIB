[//]: # (Stili di riferimento per il markdown)
<link rel="stylesheet" href="./res/style.css">

> # Appunti su semafori

---

> ## Definizioni dei semafori

### Cosa sono

Un modo per sincronizzare i processi. Usano dei segnali per indicarsi se una risorsa è disponibile o meno.

### Tipo

Il semaforo è un tipo di dato astratto con definite le operazioni:
- *V* (Verhogen)
  - Invocata per inviare un segnale, quale il verificarsi di un evento o il rilascio di una risorsa
- *P* (Proberen)
  - Invocata per attendere il segnale (ovvero, per attendere un evento o il rilascio di una risorsa)

### Descrizione informale

Un semaforo può essere visto come una *variabile intera* il cui valore iniziale è **non negativo**.

L'operazione *P*:
- Attende che il valore del semaforo sia positivo
- Decrementa il valore del semaforo

L'operazione *V*:
- Incrementa il valore del semaforo

Le azioni P e V sono atomiche: questo può venire fatto in diversi modi:
- Se uniprocessore: disabilitando gli interrupt. In questo modo, nessun altro processo può intervenire. Questo è sicuro in quanto le operazioni P e V sono implementate dal Kernel, pertanto dal sistema operativo, e pertanto sono sicure per il sistema operativo stesso.
- Sennò si posso usare Dekker, Peterson oppure i lock.

### Invariante

Siano:
- *np* il numero di operazioni **P** completate
- *nv* il numero di operazioni **V** completate
- *init* il valore iniziale del semaforo

Allora vale il seguente invariante:
- *np ≤ nv + init*

Sia *nv + init - np* il **valore del semaforo**:
- Il valore del samforo deve essere sempre non negativo.

Il semaforo ha due casi d'uso:
- Eventi (*init = 0*)
  - Il numero di eventi triggerati deve essere non superiore al numero di volte che l'evento si è verificato
- Risorse (*init > 0*)
  - Il numero di richieste soddisfatte non deve essere superiore al numero iniziale di risorse + il numero di risorse restituite.

### Semaforo nelle CS

```Java
Semaphore s = new Semaphore(1);
process p {
    while (true) {
        s.P();
        // CS
        s.V();
        // no CS
    }
}
```

### Politiche di gestione dei processi bloccati

Per ogni semaforo occorre mantenere una struttura dati contenente l'insieme dei processi sospesi.

Quando un processo deve essere svegliato, è necessario selezionare uno dei processi sospesi.

Si usa una politica FIFO per risvegliare tali processi, quindi quello che è stato sospeso più a lungo viene svegliato per primo. Garantisce pertanto assenza di starvation. Si usa quindi una cosa per gestire i processi bloccati.

---

> ## Primitive P e V

<br/>

### Semaforo
    
```Java
class Semaphore {
    Semaphore(int v);
    void P(void);
    void V(void);
}
```


### P

```Java
void P () {
    if (this.value > 0);
        this.value--;
    else {
        pid = currentProcess.pid; // Pid del processo invocante
        queue.add(pid);
        suspend(pid);
    }
}
```

### V

```Java
void V () {
    if (queue.isEmpty())
        this.value++;
    else {
        pid = queue.remove();
        wakeup(pid);
    }
}
```

Con *suspend*, il S.O. mette il processo nello stato **blocked**.

Con *wakeup*, il S.O. mette il processo nello stato **ready**.

> ## Semafori binari

### Definizione

Sono semafori che possono assumere soltanto i valori 0 e 1.

Servono a garantire mutua esclusione, semplificando il lavoro del programmatore.

**Hanno lo stesso potere espressivo dei semafori normali**.

*Invariante*:
- *0 ≤ nv + init - np ≤ 1*
- 0 ≤ s.value ≤ 1

**Nota**:
- Molti autori considerano una situazione di errore un'operazione V su un semaforo binario che abbia già valore 1.

### Implementazione dei semafori binari nei SO

```javascript
let value = ["zero", "one"];

class BinarySemaphore {
    let semValue;
    let queue1 = [], queue2 = [];
    
    BinarySemaphore(v) {
        semvalue = v;
    };

    void P() {
        if (semValue == "zero") {
            queue0.add(currentProcess.pid);
            suspend(currentProcess.pid);
        } else if (queue1.length > 0) {
            pid = queue1.remove();
            wakeup(pid);
        } else
            semValue = "zero";
        }
    };

    void V() {
        if (semValue == "one") {
            queue1.add(currentProcess.pid);
            suspend(currentProcess.pid);
        } else if (queue0.length > 0) {
            pid = queue0.remove();
            wakeup(pid);
        } else
            semValue = "one";
        }
    }
}
```

Praticamente se faccio V con P0, e poi V con P1, P1 aspetta di poter "mettere in pratica" la sua V, quindi rimane in attesa.

Se faccio P, libero P1 dall'attesa e consumo la sua "risorsa" che doveva liberare.

### Implementazione di un semaforo usando semafori binari e code

```Java
class Semaphore {

    private BinarySemaphore mutex = new BinarySemaphore(1);
    QueueOfBinSem queue = new QueueOfBinSem();
    int value;

    Semaphore(int v) {
        value = v;
    }

    void P() {
        mutex.P();
        if (value > 0) {
            value--;
            mutex.V();
        } else {
            S = new BinarySemaphore(0);
            queue.enqueue(S);
            mutex.V();
            S.P();
            free(S);
        }
    }

    void V() {
        mutex.P();
        if (queue.empty()) {
            value++;
        } else {
            BinarySemaphore s = queue.dequeue();
            s.V();
        }
        mutex.V();
    }
}
```

### Implementazione di un semaforo binario usando semafori generali

```Java
class BinarySemaphore {
    private Semaphore s0, s1;
    int value;

    BinarySemaphore(int v) {    // fallisce se v ∉ {0,1}
        s0 = new semaphore(v);
        s1 = new semaphore(1-v);
    }

    void P() {
        s0.P();
        s1.V();
    }

    void V() {
        s0.V();
        s1.P();
    }
}
```

### Differenze che ho dedotto

Se con un semaforo binario faccio due volte V, allora alla seconda il processo che l'ha fatta va in attesa.

Se con un semaforo generale faccio due volte la V, allora ho due risorse in più e nessun processo è bloccato.

Se con un semaforo binario faccio due volte P, prima vedo se il valore è 0 e mi addormento se lo è, se non è 0 provo a sbloccare una V, se non ci sono V allora diminuisco il valore.

Con un semaforo generale, se faccio due volte P, prima vedo se il valore è 0 e mi addormento se lo è, altirmenti diminuisco il valore.