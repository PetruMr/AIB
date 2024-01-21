# Classical Mechanics - Lecture 1

## 1 ⋅ States of a system

Una legge della fisica è una descrizione del cambiamento dello stato.

Immaginiamo di avere un sistema che può trovarsi in due stati: $T$ e $H$ (un mondo formato da $H$ e $T$), per esempio una moneta. Possiamo andare a descrivere delle leggi della fisica come per esempio:
- In ogni istante in cui si guarda la moneta, se la moneta era in uno stato $T$, rimarrà nello stato $T$. Se era nello stato $H$, rimarrà nello stato $H$.
  - Questo lo possiamo descrivere con delle frecce, quindi indicare: $T \rightarrow T$ e $H \rightarrow H$.
  - Questa è una legge molto noiosa, ma non è banale.
  - Se noi guardassimo gli stati della moneta per ogni istante di tempo essi potrebbero essere $T,T,T,..$ oppure $H,H,H,...$
- In ogni istante in cui si guarda la moneta, essa passa da uno stato ad un altro, quindi: $T \rightarrow H$ e $H \rightarrow T$.
  - Questa è una legge molto più interessante
  - Possiamo capire dove si trovava prima e dove si troverà dopo.
  - Quindi se noi guardassimo gli stati della moneta per ogni istante di tempo saranno del tipi $H,T,H,T,...$
    - Questa è la nostra "storia del mondo"

> Una **configurazione** è lo stato nel quale il nostro mondo si trova in un dato istante

Creiamo una **equazione di movimento** che lo descriva. Creiamo una variabile che prende due valori: $\sigma$ (chiamata sigma in quanto è tendenzialmente associata a equazioni con due valori).

> In particolare scriviamo **l'equazione di movimento**: $\sigma = 1$ ci indica che è una testa, mentre $\sigma = -1$ ci indica che è una croce.

Immaginiamo di avere $t$, ovvero il tempo, che nel nostro mondo stroboscopico è rappresentato da un intero ($t\in\mathbb{Z}$)

Quindi descriviamo l'equazione della prima legge trascritta sopra come:

$$
\sigma(t + 1) = \sigma(t)
$$

L'altra legge invece la possiamo descrivere come:

$$
\sigma(t + 1) = - \sigma(t)
$$

Così abbiamo l'alternanza dei due stati.

Da notare che è **perfettamente deterministico**, ovvero se conosciamo uno stato, conosciamo ogni singolo altro stato nel quale il sistema si è trovato e si troverà.

Da notare che noi potremmo intervenire, per esempio girando noi stessi la moneta: nel nostro linguaggio questo vuol dire che il **sistema non era chiuso**.

> Per un **sitema chiuso**, le leggi sono completamente deterministiche per la meccanica classica.

### 2 ⋅ Dado piuttosto che moneta

Un dado ha 6 possibili stati (il nostro mondo) che sono $1,2,3,4,5,6$.

Possiamo descrviere quindi delle leggi:
- Di nuovo, una legge dove ogni cosa con la quale ciò con cui si inizia è ciò con cui si continua: $1 \rightarrow 1$, $2 \rightarrow 2$, $3 \rightarrow 3$, $4 \rightarrow 4$, $5 \rightarrow 5$, $6 \rightarrow 6$.
- Una legge più interessante è quella dove si passa da uno stato ad un altro: $1 \rightarrow 2$, $2 \rightarrow 3$, $3 \rightarrow 4$, $4 \rightarrow 5$, $5 \rightarrow 6$, $6 \rightarrow 1$.
  - Dato un punto iniziale, possiamo capire tutti gli altri.
  - Questa sarebbe la nostra teoria del mondo e di come i suoi stati si muovono nel tempo.

> Da notare che possiamo scrivere queste frecce come un grafo.

Possiamo anche fare cose diverse:
- Invertire l'ordine
- Fare cose più "complicate"
  - $1 \rightarrow 2$
  - $2 \rightarrow 5$
  - $5 \rightarrow 3$
  - $4 \rightarrow 6$
  - $6 \rightarrow 1$
  - Questa legge però notiamo che è *logicamente equivalente* all'altra scritta prima, l'unica cosa che cambia è l'ordine degli stati.
- Fare leggi che non sono *logicamente equivalenti*
  - Per esempio far sì che i primi 3 ciclino e che gli altri 3 ciclino:
  - $1 \rightarrow 2$, $2 \rightarrow 3$, $3 \rightarrow 1$
  - $4 \rightarrow 5$, $5 \rightarrow 6$, $6 \rightarrow 4$
  - Anche questa è deterministica, ma non è equivalentemente logica alla prima.
  - Diamo un nome a questi cicli, ovvero denotiamoli da ora in poi come **cicli**.
  - Se si inizia in un ciclo, si rimane nello stesso ciclo, se si inizia nell'altro ciclo, si rimane nello stesso ciclo.
    - Questo si chiama **quantità conservata**, ovvero che se noi iniziamo nel ciclo nominato 1 (i primi 3 numeri) allora sappiamo che questa quantità sarà conservata nel tempo, ovvero che rimarremmo sempre nello stesso ciclo per sempre
    - Equivalente anche per il secondo ciclo.

> Una **legge di conservazione** ci indica che una certa quantità è conservata nel tempo.

Il nostro primo esempio non aveva una quantità conservata non banale, in quanto si passa per tutti gli stati. 

Il secondo ha una **quantità conservata**, che può essere *rimanere nel primo ciclo* o *rimanere nel secondo ciclo*.

### 3 ⋅ Altri esempi di quantità conservate

Possiamo immaginare i 3 cicli:
- $1 \rightarrow 1$
- $2 \rightarrow 3$, $3 \rightarrow 2$
- $4 \rightarrow 5$, $5 \rightarrow 6$, $6 \rightarrow 4$

Possiamo associare ad ognuno, rispettivamente:
- Quantità conservata $0$
- Quantità conservata $1$
- Quantità conservata $2$

### 4 ⋅ Stati infiniti

Non deve avere infiniti oggetti, ma basta anche un solo oggetto che può essere arraggianto in un infinito numero di modi, ognuno dei quali rappresenta uno stato.

#### 4.1 ⋅ Esempio - Con una particella

Immaginiamo di avere una linea infinita e su questa linea infinita ci marchiamo gli interi.

Immaginiamo di avere una *particella* (per ora definita come "una cosa che occupa un posto", che per ora sono gli interi).

Possiamo avere un infinità di stati dove può stare, ovvero l'infinito numero di posti dove può stare.

Possiamo andare ad indicare la posizione con un intero, $n$. Poi possiamo descrivere leggi come per esempio:
- $n \rightarrow n + 1$, che si può scrivere come $\sigma(t + 1) =\sigma(t) + 1$
- Notiamo che non **cicla**

Potremmo avere un'altra legge:
- Ovunque tu sia salta di due unità:
- $n \rightarrow n + 2$
- $\sigma(t + 1) = \sigma(t) + 2$

Notiamo che nel primo caso non c'è nulla di conservato, mentre nel secondo si conserva la **parità**, ovvero possiamo identificare tutte le posizioni dispari come una quantità conservata labellata come $1$, mentre tutte le posizioni pari come una quantità conservata labellata come $0$.

Quindi anche se abbiamo un infinito di stati, possiamo avere delle quantità conservate.

Avere un infinità di stati però ci libera dal concetto dei cicli, quindi un evoluzione più "interessante".

### 5 ⋅ Regoli fisiche non permesse

Da chi non sono permesse? Dal mondo della fisica.

Immaginiamo di avere un mondo con 3 stati: $H,T,E$, (Heads, Tails e Edges).

Possiamo andare a descrivere una legge nel seguente modo:
- $H \rightarrow T$
- $T \rightarrow E$
- $E \rightarrow T$

In base al nostro stato iniziale possiamo determinare tutto il futuro:
- $HTETETET...$
- $TETETETE...$
- $ETETETET...$

Cosa c'è di strano in questa legge? Per quanto sia deterministica nel futuro, non è deterministica nel passato, ovvero non possiamo capire da dove siamo partiti:
- Se siamo a $T$, non sappiamo se siamo partiti da $H$ o da $E$.

Pertanto vi sono **più configurazioni** che finiscono nella stessa configurazione finale.

> Si dice che un sistema **non è reversibile** quando non è possibile capire da dove siamo partiti.
>
> Questo perché possiamo andare a invertire ogni freccia, ottenendo:
> - $T \rightarrow H$
> - $E \rightarrow T$
> - $T \rightarrow E$
>
> Adesso da $T$ abbiamo essenzialmente una scelta, che lo rende non deterministico.

> Questa legge, una legge **non reversibile** non è permessa nella fisica classica.

> Le **leggi non deterministiche** (probabilistiche) vanno in conflitto e non sono permesse nella fisica classica.

In meccanica quantistica, invece, le leggi probabilistiche sono permesse e sono alla base.

## 6 ⋅ Limiti della predizione

Per questi semplici sistemi discreti potremmo pensare che noi possiamo predirre completamente tutto il sistema e capirlo nella sua interezza usando esperimenti e quant'altro. 

Ma nel mondo reale, dove siamo di fronte a libertà che sono nel continuo ($\mathbb{R}$), non possiamo predirre tutto, in quanto non le conosciamo **nella loro interezza**, in quanto saranno sempre **inaccurate** almeno di un po'.

> Se si sapesse la condizione iniziale di un sistema nella sua interezza e con precisione assoluta, si potrebbe predirre tutto il futuro e tutto il passato all'interno della meccanica classica

D'altro canto, nel mondo reale non possiamo quindi:

> Se non puoi sapere con certezza la situazione iniziale, devi capire quanto sia imperfetta la tua misura e se si riesce a quantitficare, allora ti può aiutare a determinare quanto puoi predirre nel futuro gli stati.

Se noi dovessimo prendirre, per esempio, $X$ anni nel futuro, noi dovremmo poter calcolare con quanta *precisione* dovremmo conoscere lo stato del sistema.

## 7 ⋅ Come capire se una legge è deterministica

Capire se una legge è **legale**, ovvero se è **reversibile**, ovvero se è **deterministica** ci basta guardare se:
- $\forall \sigma \in \Sigma$ (ovvero per ogni stato del sistema) $\exists$ una e una sola $\rightarrow$ (ovvero una e una sola freccia che parte da $\sigma$) e una e una sola $\leftarrow$ (ovvero una e una sola freccia che arriva a $\sigma$).

## 8 ⋅ Passando ad un mondo reale

Immaginiamo di usare particelle. Se lo volessimo rendere più complicato, useremmo un insieme di particelle e le loro interazioni.

Per ora consideriamo una particella puntiforme unica che si muove nello spazio.

### 8.1 ⋅ Introduzione a nozioni matematiche

Innanzitutto da notare che noi considereremo, in generale, le particelle in 3 dimensioni, ma sono da considerare anche quelle che vanno in più dimensioni o in meno

#### 8.1.1 ⋅ Spazio cartesiano

Come si descrive la posizione di una particella nello spazio?

- $O$
  - Un punto che rappresenta l'**origine**.
  - Questo punto si può trovare in un qualsiasi punto dello spazio, ma noi lo considereremo come il punto $(0,0,0)$.
  - La sua posizione non influenza il resto, in quanto è solo un punto di riferimento. Ci è utile però per capire dove si trovano le altre particelle.
- $x,y,z$
  - I tre assi cartesiani, che sono perpendicolari tra loro.
  - Una convenzione tipica e arbitraria è quella della **mano destra**, dove noi impostiamo la $x$ come pollice, la $y$ come indice (che punta in alto) e la $z$ che punta verso di noi, con il medio.
- Dobbiamo marcare le distanze
  - Per fare questo dobbiamo scegliere delle **unità**, per esempio metri, centimetri, ecc...
- Una volta che abbiamo deciso questo, ogni punto nello spazio può essere labellato con il valore di $x,y,z$ che ha, per esempio $(1,2,2)$, che ci indica che si trova a $1$ unità di distanza da $O$ lungo l'asse $x$, $2$ unità di distanza da $O$ lungo l'asse $y$ e $2$ unità di distanza da $O$ lungo l'asse $z$.

#### 8.1.2 ⋅ Vettori

I vettori sono delle frecce che hanno una direzione e una lunghezza. Non ce li dobbiamo immaginare come da qualche parte nello spazio, ma in generale che hanno **una direzione e una lunghezza**.

Un vettore si scrive con una freccia o una barra di sopra, ovvero $\vec{v}$ o $\bar{v}$.

I suoi componenti sono $v_x, v_y, v_z$ (non c'è bisogno di usare la freccia sopra, in quanto sono solo numeri).

I vettori hanno:
- Un magnitudo (**modulo**)
  - La sua *lunghezza*
  - La lunghezza si descrive come $|v|$
    - Si calcola con il teorema di Pitagora, ovvero $\sqrt{v_x^2 + v_y^2 + v_z^2}$
- Una direzione (**versore**)
  - La sua *direzione*
  - E' "encoded" nei suoi componenti

> **Enfasi** sul fatto che un vettore non è legato ad un punto nello spazio, non è una posizione, ma è una **direzione** e una **lunghezza**.
>
> Ci saranno momenti in cui sì, lo vogliamo andare a legare con un determinato punto.
>
> Ma in generale, la nozione del vettore non è quella di un punto nello spazio, ma di una direzione e una lunghezza.

#### 8.1.3 ⋅ Operazioni sui vettori

Moltiplicazione tra vettore e scalare:
- $c \cdot \vec{A} = \vec{B}$
  - $\vec{B} = (c \cdot A_x, c \cdot A_y, c \cdot A_z)$
  - La direzione rimane uguale, andiamo però a cambiargli il modulo del fattore $c$.

Somma tra vettori:
- $\vec{A} + \vec{B} = \vec{C}$
  - $\vec{C} = (A_x + B_x, A_y + B_y, A_z + B_z)$
  - Possiamo anche scrivere la relazione $C_i = A_i + B_i$
  - Graficamente è come mettere la coda di $\vec{B}$ alla punta di $\vec{A}$ e poi disegnare un vettore che va dalla coda di $\vec{A}$ alla punta di $\vec{B}$.
  - L'ordine in cui si mettono i due vettori è equivalente.

Moltiplicazione tra vettori:
- **Dot product**, dove si ottiene uno scalare:
  - Ci possiamo immaginare che questo è come "droppare" una linea perpendicolare da $\vec{A}$ a $\vec{B}$. A questo punto moltiplichiamo questo componente di $A$ sulla $B$ axis con il componente di $\vec{B}$ sulla $\vec{B}$ axis, che è il suo modulo.
  - Sia $\theta$ l'angolo tra $\vec{A}$ e $\vec{B}$. Allora il componente di $\vec{A}$ lungo l'asse $B$ è: $A_B=|A|\cos(\theta)$. Quindi il dot product equivale a $\vec{A} \cdot \vec{B} = |A| |B| \cos(\theta)$.
    - A partire da questa forma capiamo che il dot product è commutativo, ovvero $\vec{A} \cdot \vec{B} = \vec{B} \cdot \vec{A}$.
  - Il risultato può essere positivo o negativo, in base all'angolo tra i due vettori (se l'angolo è ottuso, ovvero maggiore di 90, allora il risultato è negativo)
  - In termini dei componenti, il dot product è: $\vec{A} \cdot \vec{B} = A_x B_x + A_y B_y + A_z B_z$

Legge dei coseni:
- $\vec{A} \cdot \vec{B} = |A| |B| \cos(\theta)$
- $\vec{A} \cdot \vec{A} = |A|^2$

Sia $\vec{A}$ e $\vec{B}$ due vettori, allora il vettore con il quale formano un triangolo è:
- $\vec{C} = \vec{A} - \vec{B}$

Inoltre abbiamo che:
- $\vec{C} \cdot \vec{C} = |\vec{C}|^2 = |\vec{A} - \vec{B}|^2 = |\vec{A}|^2 + |\vec{B}|^2 - 2 \vec{A} \cdot \vec{B}$

## 9 ⋅ Tornando alle particelle

Se noi immaginiamo di avere una particella, la sua posizione sarà descritta dal vettore $\vec{r}$ (che dovrebbe stare per raggio). Difatti la sua magnituda è la distanza dall'origine.

Avrà coordinate $r_x,r_y,r_z$.

In generale, noi siamo interessati al loro movimento. Quindi ci interessa come la posizione cambia nel tempo.

pertanto ci interessa il vettore $\vec{r}(t)$, che è una funzione che da un vettore che varia in base al tempo. Pertanto i suoi componenti saranno anch'esse delle funzioni: $r_x(t) = x(t),r_y(t) = y(t),r_z(t) = z(t)$.

### 9.1 ⋅ Velocità

La velocità è la derivata della posizione rispetto al tempo. 

Lo possiamo scrievre nel seguente modo:

$$
v_x = \frac{dx}{dt} = \frac{d}{dt} x(t)
\\ \ \\
\vec{v} \quad (=(v_x, v_y, v_z) = (\frac{dx}{dt}, \frac{dy}{dt}, \frac{dz}{dt}))
$$

Quindi abbiamo un vettore che rappresentà la velocità, il suo magnitudo è la velocità, mentre la sua direzione è la direzione del moto.

In inglese questo funziona meglio perché **velocity** fa riferimento al vettore, mentre **speed** fa riferimento alla magnitudo.

Piuttosto che scrivere ogni volta $\frac{d}{dt}$, possiamo scrivere $\dot{x}$, quindi:

$$
\frac{df(t)}{dt}= \dot{f}(t)
$$

Il "dot" indica una **derivata rispetto al tempo**.

Quindi:

$$
v_i = \frac{dx_i}{dt}= \dot{x}_i
$$

### 9.2 ⋅ Accelerazione

L'accelerazione è la derivata della velocità rispetto al tempo.

Anch'essa è un vettore, ovvero ha sia un modulo che una direzione.

$$
a_i = \frac{dv_i}{dt} = \frac{d^2x_i}{dt^2}
\\ \ \\
a_i = \dot{v}_i = \ddot{x}_i
$$

Dove i due punti indicano quindi una seconda derivata rispetto al tempo.

Possiamo indicare questo anche sui vettori, piuttosto che solo sui componenti:

$$
\vec{a} = \dot{\vec{v}} = \ddot{\vec{r}}
\\ \ \\
\vec{v} = \dot{\vec{r}}
$$

## 10 ⋅ Movimento lungo una linea

Immaginiamo di essere in una dimensione, quindi abbiamo un vettore con 1 componente (non andiamo davvero ad usare il vettore in quanto un vettore in una dimensione è concetto triviale).

Quindi possiamo descrivere il movimento come:

$$
x(t) = a + bt + ct^2
$$

Possiamo ocntinuare quanto vogliamo, ma per ora ci fermiamo a considerare solo fino al quadrato (fino all'accelerazione).

In particolare possiamo ottenere la velocità e l'accelerazione come:

$$
v(t) = \dot{x}(t) = b + 2ct
\\ \ \\
a(t) = \dot{v}(t) = 2c
$$

> Questa è una particella **uniformemente accellerata**, per esempio il movimento di un oggetto che cade sotto l'effetto della gravità.

### 11 ⋅ Movimento lungo un cerchio

Abbiamo due dimensioni, ovvero $x$ e $y$. La particella si muove su questo piano. Per ora ignoriamo la $z$.

Consideriamo vi sia un cerchio unitario, ovvero con raggio $1$. Supponiamo che la particella si muova in senso antiorario.

Ad ogni dato istante, l'angolo che la particella fa con l'asse delle $x$ aumenta linearmente. Ovviamente, quando fa un giro, l'angolo torna a $0$, ma nel nostro caso ignoriamo questo formalismo e consideriamo che cotninui nel tempo.

In particolare l'angolo, chiamiamolo $\theta$ sarà:

$$
\theta(t) = \omega t
$$

Quanto tempo ci badiamo per fare un giro intero del cerchio? Per rispondere, ci chiediamo quanto tempo ci badiamo per andare far passare $\theta$ da $0$ a $2\pi$.

Quindi andiamo a risolvere l'equazione:

$$
\omega t = 2\pi
\\ \ \\
\frac{2\pi}{\omega} = t = \text{period}
$$

Dato un periodo, quindi, possiamo determinare $\omega$, ovvero la **frequenza angolare**.

Consideriamo ora le componenti della nostra particella, ovvero la sua $x$ e $y$.

$$
x(t) = \cos(\theta(t)) = \cos(\omega t)
\\ 
y(t) = \sin(\theta(t)) = \sin(\omega t)
$$

Con questi dati posso andare a calcolare la velocità e l'accelerazione:

$$
v_x(t) = \dot{x}(t) = -\omega \sin(\omega t)
\\
v_y(t) = \dot{y}(t) = \omega \cos(\omega t)
\\ \ \\
a_x(t) = \dot{v}_x(t) = -\omega^2 \cos(\omega t)
\\
a_y(t) = \dot{v}_y(t) = -\omega^2 \sin(\omega t)
$$

Possiamo fare un passaggio, ovvero fare un $\text{dot product}$ tra la velocità e la posizione, quindi:

$$
\vec{v} \cdot \vec{r} = v_x x + v_y y = 
\\  
= -\omega \sin(\omega t) \cos(\omega t) + \omega \cos(\omega t) \sin(\omega t) = 0
$$

Il fatto che il dot product tra due vettori è 0 ci dice che essi sono **perpendicolari**, quindi la velocità è perpendicolare alla posizione.

Compariamo l'**accelerazione** con la **posizione**: l'accelerazione ha un vettore che sta nella stessa "linea", ma mentre la posizione è un vettore che punta verso l'esterno, l'accelerazione punta verso l'interno.

D'altro canto, l'accelerazione e la velocità sono perpendicolari in quanto il loro dot product è 0.

Invece i **moduli** sono:
- $1$ per la posizione, in quanto sta sul raggio del cerchio unitario
- $\omega$ per la velocità, che ha senso, in quanto più è alta la frequenza, più è alta la velocità
- $\omega^2$ per l'accelerazione

Quindi più grande è $\omega$, più grande è la velocità ed ancora più grande è l'accelerazione.