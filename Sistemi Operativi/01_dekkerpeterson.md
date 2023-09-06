[//]: # (Stili di riferimento per il markdown)
<link rel="stylesheet" href="./res/style.css">

> # Appunti su concorrenza

---

> ## Passaggi per algoritmo di Dekker

<br/>

### 1. Prima prova di soluzione

Note:
- Turn è condivisa, vi si può accedere solo da un processo alla volta in lettura o scrittura
- Il controllo iterativo su una condizione di accesso viene detto *busy waiting*

<table>
<tr>
    <th> P </th>
    <th> Q </th>
</tr>
<tr>
<td>

```C
shared int turn = P;
process P {
    while (true) {
        /* Entry protocol */
        while (turn == Q)
            ; /* do nothing */
        "critical section"
        turn = Q;
        "non-critical section"
    }
}
```

</td>
<td>

```C
process Q {
    while (true) {
        /* Entry protocol */
        while (turn == P)
            ; /* do nothing */
        "critical section"
        turn = P;
        "non-critical section"
    }
}
```

</td>
</tr>
</table>

Problemi:
- Non rispetta il requisito di *assenza di delay non necessari*
  - Un processo fuori dalla CS non deve ritardare l'ingresso nella CS da parte di un altro processo

Si consideri l'esecuzione:
- P entra nella sezione critica
- P esce dalla sezione critica
- P cerca di nuovo di entrare nella sezione critica
- Però Q non è ancora nella sezione critica, ma è il suo turno, quindi P aspetterà che Q finisca la sua sezione non critica + sezione critica prima di entrare lui stesso di nuovo


### 2. Seconda prova di soluzione


Note:
- Ogni processo è associato ad un flag
- Ogni processo può esaminare il flag dell'altro, ma non può modificarlo


<table>
<tr>
    <th> P </th>
    <th> Q </th>
</tr>
<tr>
<td>

```C
shared bool inp = false;
shared bool inq = false;

process P {
    while (true) {
        /* Entry protocol */
        while (inq)
            ; /* do nothing */
        inp = true;
        "critical section"
        inp = false;
        "non-critical section"
    }
}
```

</td>
<td>

```C
process Q {
    while (true) {
        /* Entry protocol */
        while (inp)
            ; /* do nothing */
        inq = true;
        "critical section"
        inq = false;
        "non-critical section"
    }
}
```

</td>
</tr>
</table>

Problemi:
- Non rispetta la *mutua esclusione*

Si consideri l'esecuzione:
- P passa oltre il while in quanto inq è falso
- Q passa oltre il while in quanto inp è falso
- P mette inp = true ed entra nella sezione critica
- Q mette inq = true ed entra nella sezione critica


### 3. Terza prova di soluzione

<table>
<tr>
    <th> P </th>
    <th> Q </th>
</tr>
<tr>
<td>

```C
shared bool inp = false;
shared bool inq = false;

process P {
    while (true) {
        /* Entry protocol */
        inp = true;
        while (inq)
            ; /* do nothing */
        "critical section"
        inp = false;
        "non-critical section"
    }
}
```

</td>
<td>

```C
process Q {
    while (true) {
        /* Entry protocol */
        inq = true;
        while (inp)
            ; /* do nothing */
        "critical section"
        inq = false;
        "non-critical section"
    }
}
```

</td>
</tr>
</table>

Problemi:
- Non rispetta la *assenza di deadlock*

Si consideri l'esecuzione:
- P mette inp = true
- Q mette inq = true
- P non può andare avanti
- Q non può andare avanti


### 4. Quarta prova di soluzione

<table>
<tr>
    <th> P </th>
    <th> Q </th>
</tr>
<tr>
<td>

```C
shared bool inp = false;
shared bool inq = false;

process P {
    while (true) {
        /* Entry protocol */
        inp = true;
        while (inq) {
            inp = false;
            /* delay */
            inp = true;
        }
        "critical section"
        inp = false;
        "non-critical section"
    }
}
```

</td>
<td>

```C
process Q {
    while (true) {
        /* Entry protocol */
        while (inp) {
            inq = false;
            /* delay */
            inq = true;
        }
        "critical section"
        inq = false;
        "non-critical section"
    }
}
```

</td>
</tr>
</table>

Problemi:
- Non rispetta la proprietà *eventual entry*

Si consideri l'esecuzione:
- P mette inp = false e poi inp = true
- Q mette inq = false e poi inq = true
- P non può entrare quindi mette inp = false e poi inp = true
- Q non può entrare quindi mette inq = false e poi inq = true

Non viene mantenuta a lungo ma comunque da evitare.

### 5. Algoritmo di Dekker

<table>
<tr>
    <th> P </th>
    <th> Q </th>
</tr>
<tr>
<td>

```C
shared bool needq = false;
shared bool needp = false;
shared int turn = P;

process P {
    while (true) {
        /* Entry protocol */
        needp = true;
        while (needq) {
            if (turn == Q) {
                needp = false;
                while (turn == Q)
                    ; /* do nothing */
                needp = true;
            }
        }
        "critical section"
        needp = false; turn = Q;
        "non-critical section"
    }
}
```

</td>
<td>

```C
process Q {
    while (true) {
        /* Entry protocol */
        needq = true;
        while (needp) {
            if (turn == P) {
                needq = false;
                while (turn == P)
                    ; /* do nothing */
                needq = true;
            }
        }
        "critical section"
        needq = false; turn = P;
        "non-critical section"
    }
}
```

</td>
</tr>
</table>

Essenzialmente:
- Si passano i turni per poter entrare quando entrambi vogliono entrare
- Se non vogliono entrare entrambi, allora basta il "needX" per entrare in quanto il need dell'altro processo sarà falso.

Quindi:
- C'è *mutua esclusione* in quanto:
  - Supponiamo Q e P siano nella CS
  - Q entra per primo (supponiamo), quindi needq è vero
  - P è in CS, ma l'unico modo nel quale P può entrare in CS è se in un istante tra quando Q ha finito il suo loop (quindi ha impostato needq a true) ed è entrato in CS, P ha avuto needq = falso, che è impossibile
  - ASSURDO!
- *Assenza di deadlock*:
  - Dimostrazione per assurdo, supponendo che ne P ne Q possono entrare in CS
  - Questo vuol dire che sono stuck nel loop
  - Supponiamo che turn = P senza perdere di generalità
  - Sia needp che needq sono veri
  - Però ci sarà un istante dove Q entrerà nel suo if dove disaibliterà needq fino a quando è il turno di P
  - Quindi adesso P può entrare
  - Quindi non ci possono essere deadlock
- *Assenza di ritardi non necessari*
  - Se Q sta eseguendo codice non critico, allora needq è falso
  - Quindi P può entrare nella CS, anche se il turno è di Q in quell'istante
- *Assenza di starvation*
  - Se Q richiede di accedere alla CS
  - Se P eseguendo codice non critico, allora Q entra
  - Se P sta eseguendo il codice critico, allora Q entra quando P ha finito


### 6. Algoritmo di Peterson

<table>
<tr>
    <th> P </th>
    <th> Q </th>
</tr>
<tr>
<td>

```C
shared bool needq = false;
shared bool needp = false;
shared int turn = P;

process P {
    while (true) {
        /* Entry protocol */
        needp = true;
        turn = Q;
        while (needq && turn == Q)
            ; /* do nothing */
        "critical section"
        needp = false;
        "non-critical section"
    }
}
```

</td>
<td>

```C
process Q {
    while (true) {
        /* Entry protocol */
        needq = true;
        turn = P;
        while (needp && turn == P)
            ; /* do nothing */
        "critical section"
        needq = false;
        "non-critical section"
    }
}
```

</td>
</tr>
</table>

Si possono dimostrare anche qua tutte le proprietà. Funziona praticamente nello stesso modo ma fa un controllo in meno.

Praticamente al posto di entrare in un loop quando non è il proprio turno ed entrambi vogliono entrare, la condizione li distingue.

Se non è il proprio turno, ma l'altro non vuole accedere alla CS, quindi ha needX falso, allora ci si può accedere in quanto si ha un AND, quindi entrambe le condizionid evono essere verificate

### 7. Algoritmo di Peterson - Generalizzato per N processi

```C
shared int[] stage = new int[N];    /* 0-initialized */
shared int[] last = new int[N]      /* 0-initialized */

process Pi { /* ∀i ∊ {0, ..., N-1} */
    while (true) {
        /* Entry protocol */
        for (int j = 0; j < N; j++) {
            stage[i] = j;
            last[j] = i;
            for (int k = 0; k < N; k++) {
                if (k != i) {
                    while (stage[k] >= stage[i] && last[j] == i)
                        ; /* do nothing */
                }
            }
        }
        "critical section"
        stage[i] = 0;
        "non-critical section"
    }
}
```


Immaginiamo l'esecuzione con 2 processi: P0 e P1

- Inizia P0
  - Entra nel for, j = 0, i = 0
  - stage[0] = 0, last[0] = 0
    - Entra nel secondo for, k = 0, i = 0
    - i == k, quindi salta il while
    - k = 1
    - i != k, stage[1] >= stage[0] && last[0]==0 quindi si blocca
- Inizia P1
  - Entra nel for, j = 0, i = 1
  - stage[1] = 0, last[0] = 1
    - Entra nel secondo for, k = 0, i = 1
    - i != k, stage[0] >= stage[1] && last[0]==1, vero, quindi si blocca
- Torna P0
  - Il while adesso è falso, in quanto last[0] == 1,
  - Quindi esce dal for
  - Torna nel primo for, j=1
  - stage[0] = 1, last[1] = 0
    - Entra nel secondo for, k = 0, i = 0
    - i == k, quindi salta il while
    - k = 1
    - i != k, stage[1] >= stage[0] && last[1]==0, falso
  - Può entrare nella CS
- Se torno a P1 esso non esce dal loop
- Quando P0 ha finito, allora stage[0] = 0;
- Adesso ha resettato la prioprità di P0.
- P1 può entrare in CS in quanto adesso stage[0]!>=stage[1], quindi j = 1, i = 1
  - E poi stage[1] = 1, last[1] = 1
  - stage[0] >= stage[1] && last[1] == 1, falso in quanto stage[0] = 0
  - Quindi ha precedenza P1
  - Quindi può entrare nella cs
  - Poi imposta stage[1] = 0
- P1 può ritornare nel for
  - stage[1] = 0, last[0] = 1
    - Entra nel secondo for, k = 0, i = 1
    - i != k, stage[0] >= stage[1] && last[0]==1, falso
  - stage[1] = 1, last[1] = 1
    - Entra nel secondo for, k = 0, i = 1
    - stage[0] >= stage[1] && last[1]==1, falso
- Entra P0
  - stage[0] = 0, last[0] = 0
    - Entra nel secondo for, k = 0, i = 0
    - i == k, quindi salta il while
    - k = 1
    - i != k, stage[1] >= stage[0] && last[0]==0, vero
      - Ha trovato qualcosa che ha una priorità maggiore, anche se è l'ultimo ad aver cercato di accedere a quella priorità.



Stage indica la precedenza che si ha: quindi stage[0] = 1 vuol dire che siamo nella precedenza 1. Last ci dice qual'è l'ultimo processo ad aver raggiunto tale precedenza.
L'ultimo dei processi che sale alla precedenza desiderata sarà quello che potrà eseguire.
Sennò i processi saliranno prima uno e poi l'altro, uno ad uno, nelle varie precedenze.