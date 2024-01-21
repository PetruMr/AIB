# Classical Mechanics - Lecture 2

## 1 ⋅ Aristotle's law of motion

Non sapeva scrivere equazioni, ma descriveva i fenomeni con le parole.

Il moto come descritto da Aristotele è il seguente:
- Una forza applicata ad un oggetto ne modifica la velocità, più alta è la forza e più alta è la velocità (sono proporzionali)
- Quando smetti di applicare la forza, l'oggetto si ferma
- Più un oggetto è pesante, più forza bisogna applicare

Queste leggi non sono corrette, ma restano qualcosa di interessante da analizzare per mettere in pratica cosa abbiamo appreso nella lezione precedente, ovvero la **reversability** delle leggi, che già ci dimostra come queste leggi no siano corrette.

## 1.2 ⋅ Le leggi di Aristotele

Una sua legge:

$$
\vec{F} = m \cdot \vec{v}
$$

Immaginiamo di avere una particella che si muove solo in una dimensione, pertanto:

$$
F = m \cdot \dot{x}
$$

Andiamo a definire il tempo come quantizzato, ovvero formato a piccolissimi istanti. La differenza di tempo tra un istante e quello dopo è $\Delta$.

Quindi:

$$
F = m \cdot \dot{x} = m \frac{x (t+\Delta)-x(t)}{\Delta}
$$

Quindi la velocità è la differenza di spazio diviso la differenza di tempo.

Andiamo a risolvere per $x(t)$:

$$
x(t+\Delta) = x(t) + \frac{F(t)}{m} \Delta
$$

Questo è molto simile a come abbiamo descritto le leggi della fisica dei mondi che abbiamo immaginato, con le monete e i dadi, nella scorsa lezione, in quanto dato un istante, conosciamo l'istante successivo.

Andiamo a creare una forza che varia in base alla posizione: 

Immaginiamo ora di star considerando una particella collegata ad una molla. Se noi andiamo a muovere la particella lontana dall'orgine, ovvero l'origine della molla, allora abbiamo una forza che spinge all'indietro. Inoltre questa forza è proporzioanta alla distanza dalla posizione di equilibrio. In particolare:

$$
F = -k \cdot x
$$

Cosa farebbe questo nell'equazione di aristotele?

$$
x(t+\Delta) = x(t) + \frac{-k \cdot x(t)}{m} \Delta
\\ \ \\
x(t) [1 - \frac{k \Delta}{m}] = x(t+\Delta)
$$

Questa formula ci dice che se noi sappiamo la posizione ad un dato tempo, ogni intervallo di tempo quello che succedere è che la posizione sarà moltiplicata per un valore che è minore di 1. Questo significa che la posizione si avvicinerà sempre più a 0.

Andiamo a scriverlo in modo continuo, piuttosto che discreto, pertanto:

$$
\frac{dx}{dt} = - \frac{k}{m} x
$$

Qual'è la funzione che ha una proprietà per cui la derivata è proporzionale a se stessa? L'esponenziale.

La soluzione è quindi:

$$
x(t) = x(0) e^{-\frac{k}{m} t}
$$

Quindi la posizione è proporzionale all'esponenziale negativo del tempo.

Per ora tutto okay, questa legge ci predice il futuro della particella e sembra avere senso, dicendo che essa si avvicina sempre più a 0, diminuendo la sua velocità esponenzialmente man mano che si avvicina a 0.

**Ma è reversibile?**

Il futuro è che ovunque tu sia, tu sai in che modo ti avvicini all'origine.

Ma in che senso non si può predirre il passato? La configurazione finale, indipendentemnte dalla precisione o dallo stato iniziale, sarà sempre quella dove la particella è ferma in 0.

Per l'abilità di predirre il passato intendiamo dire che non tutte configurazioni iniziali vanno a finire nello stesso stato finale, ma che le distinzioni iniziali sono preservate, in un certo modo.

Per questo questa formula ci sembra un po' sospetta, perchè ogni configurazione iniziale va a finire nello stesso stato finale, quindi non si può predirre il passato.

Le leggi di Newton, invece, non soffrono di questo problema: anche semplici sistemi come quello della molla, in base allo stato iniziale daranno luogo a un diverso stato finale; sono reversibili.

#### Note

Per le equazioni di Aristotele, ci basta conoscere la posizione per sapere tutto del futuro, ovvero la velcità, l'accelerazione, etc.

In particolare possiamo avere le seguenti equazioni:

$$
F = m \cdot v
\\ \ \\ 
F(x) = m \cdot \frac{dx}{dt} \quad,\quad \text{Da notare che è una funzione di } x
\\ \ \\
\frac{dF}{dt} = m \cdot a
\\ \ \\ \text{Ma questo lo possiamo riscrivere come:}
\\ \ \\
\frac{dF}{dx} \cdot \frac{dx}{dt} = m \cdot a
\\ \ \\
\frac{dF}{dx} \cdot v = m \cdot a
$$

A questo punto abbiamo che:
- Sappiamo la velocità dato il luogo
- Sappiamo l'accelerazione data la velocità (e quindi dato il luogo)

Possiamo anche andare oltre, e calcolare la derivata della accellerazione, ovvero la gierezione (*jerk*):

$$
m \cdot J = \frac{d\frac{dF}{dx}v}{dt} = \frac{d^2F}{dx^2}v + \frac{dF}{dx}a
$$

(Abbiamo usato la regola della derivata di un prodotto, ovvero la derivata della prima per la seconda più la prima per la derivata della seconda)

Da qui si potrebbe anche andare avanti, ma ci fermiamo qua e mostriamo che esiste un pattern.

## 1.3 ⋅ Le leggi di Newton

#### Piccolo appunto sugli intertial frame of refference

In fisica ci sono diversi frame of reference. In particolare, quelli che non sono inerziali sono quelli che sono in moto rispetto ad un altro frame of reference.

In generale, Newton funziona negli intertial frame of reference e non funziona in quelli che non lo sono. (Inertial frame of reference: non accellera)

Le leggi di Newton sono le seguenti:

#### Descriviamo meglio la formula

$$
\vec{F} = m \cdot \vec{a}
$$

Definiamo meglio le cose:
- La massa è una caratteristica dell'oggetto, essa è una proprietà intrinseca
- La forza viene dalla massa e dalla velocità

Si vuole evitare una situazione "chicken and egg" dove si dice "la massa è la forza divisa l'accelerazione" e "la forza è la massa moltiplicata per l'accelerazione", anche se in realtà i concetti veri verranno introdotti in seguito.

#### Immaginiamo la stessa sensazione di prima con la sprint

Abbiamo una molla e una particella attaccata alla molla.

Sperimentalmente, se noi raddoppiamo la massa, dimezza l'accellerazione. Se invece raddoppiamo la forza, raddoppia l'accellerazione. Quindi abbiamo sperimentalmente mostrato questa legge e cosa le singole unitò di misura sono (raddoppiare la massa vuol dire raddoppiare il numero di particelle, raddoppiare la forza vuol dire raddoppiare il numero di molle).

Ora, riesce a predirre il futuro?

Innanzitutto definiamo la velocità e l'accelerazione:

$$
\vec{v} = \frac{x(t+\Delta) - x(t)}{\Delta}
\\ \ \\ \ \\
\vec{a} = \frac{x(t+\Delta) - x(t)}{\Delta^2} - \frac{x(t) - x(t-\Delta)}{\Delta^2}
\\ \ \\
\vec{a} = \frac{x(t+\Delta) - 2x(t) + x(t-\Delta)}{\Delta^2}
$$

Quindi abbiamo che:

$$
\Delta^2 \frac{F}{m} = x(t+\Delta) - 2x(t) + x(t-\Delta)
\\ \ \\
\Delta^2 \frac{F}{m} + 2x(t) - x(t-\Delta)= x(t+\Delta) 
$$

Quindi ora ho una formula con la quale posso ottenere la posizione della particella nell'istante successivo, ma noto che l'informazione di cui ho bisogno non è solo la posizione attuale, ma anche quella precedente.

Non sembra soddisfare "se sai tutto del presente, sai tutto del futuro", in quanto dobbiamo sapere anche cose del passato.

Tuttavia, cosa intendiamo veramente per sapere tutto del sistema? Si intenderebbe sapere tutto quello che c'è bisogno di sapere per predirre il futuro. Quindi anche dov'era prima.

Quindi quello che ci dice questa equazione: affiché le equazioni di Newton siano "predictive" dobbiamo sapere le condizioni iniziali:
- La posizione
  - $x(t)$
- La velocità
  - $\dot{x}(t)$

> Questo è lo spazio delle **cose che sono importanti**

### 1.3.1 ⋅ Momentum

Il momentum è per definizione massa per velocità:

$$
\text{momentum} = \vec{p} = m \cdot \vec{v} = m \cdot \dot{x}
$$

Ora riscriviamo le equazioni di Newton in termini di momentum:

$$
\vec{F} = \dot{\vec{p}}
\\ \ \\
\vec{p} = m \cdot \dot{\vec{x}}
$$

Ora, pensando a queste equazioni, sono *predictive*?

$$
F = \frac{p(t+\Delta) - p(t)}{\Delta}
\\ \ \\
p = m \frac{x(t+\Delta) - x(t)}{\Delta}
$$

Quindi specifichiamo lo stato di una particella, quindi gli diamo una posizione e una velocità, $x$ e $p$. Assumiamo che qualcuno ci abbia dato della forza $F$. Noi possiamo creare un grafico cartesiano che ha momentum sulle $y$ e posizione sulle $x$ e capiamo che ci forma un grafico lineare, dove andiamo ad evolverci lungo una retta che rimane costante.

Dobbiamo immaginare queste formule di Newton non come una equazione di secondo ordine, ma come due equazioni di primo ordine, in modo da renderle completamente predictive.

> Questo spazio cartesiano fatto da *momentum* e *posizione* è chiamato **phase space**. 
> 
> Si tratta dello spazio che bisogna conoscere (che ci indica le condizioni iniziali) per poter andare a predirre quelle future

#### Capiamo la reversibilità usando la molla con Newton

Abbiamo:

$$
\vec{F} = -k \cdot \vec{x} = m \cdot \ddot{x}
$$

Per semplificarlo scriviamo $m=1$ e $k=1$:

$$
\ddot{x} = -x
$$

Prima avevamo che:

$$
\dot{x}=-x
\\
x = x(0) e^{-t}
$$

Ora invece abbiamo che:

$$
\ddot{x} = -x
\\
x = c \cos(t-t_0)
\\ 
p = \dot{x} = -c \sin(t-t_0)
$$

Innanzitutto, questa condizione non arriverà mai ad essere a "rest", bensì continuerà infinitamente avanti e indietro, tra il massimo "positivo" e il massimo "negativo".

Ci sarà un punto dove la velocità sarà massima e uno quando la velocità sarà 0:
- Quando la velocità è massima, $t-t_0 = \frac{\pi}{2}$
- Quando la velocità è 0, $t-t_0 = \pi$

Se noi quindi ci immaginiamo un **phase space**, possiamo immaginare che la particella si muova lungo una circonferenza. Muovendosi aumenterà la velocità man mano che la posizione si avvicina all'origine.

Sapendo che la particella si trova in un qualsiasi punto su questo *phase space* ci da completamente informazioni sul suo passato e sul suo futuro.

#### Altra nota

Se noi andassimo a cambiare il segno nell'equazione di Aristotele, allora avremmo:

$$
\frac{dx}{dt} = F(x) \neq \frac{dx}{d (-t)} = F(x)
$$

Invece, se noi la cambiamo nell'equazione di Newton, allora avremo:

$$
\frac{d^2x}{dt^2} = F(x) = \frac{d^2x}{d (-t)^2}
$$

Quindi anche da qua notiamo che le leggi di Newton sono reversibili, mentre quelle di Aristotele no.

Risolvere quindi per $t$ positivo o negativo non cambia nulla per Netwon, mentre inverte il moto per Aristotele.

## 1.4 ⋅ Energia come quantità conservata

Come possiamo notare dalle leggi di Newton e da come una particella si muove con una molla, essa rimane all'interno di un'orbita.

Non possiamo passare da un'orbita ad un altra, ma rimaniamo sempre nella stessa. E' quindi una certa quantità conservata nel tempo. Questa quantità, chiamamola $c$ è equivalente a:

$$
c^2 = x^2 + \dot{x}^2
$$

Che è, pazzesco incredibile, l'energia. (in realtà sarebbe $c^2 = m\dot{x}^2 / 2 + xk/2$)

## 1.5 ⋅ Le leggi di Newton effettive

> **Prima legge**:
> - Se la forza è 0, allora la velocità è costante
>
> **Seconda legge**:
> - La forza è proporzionale all'accelerazione
>
> Ma la prima è ridondante in quanto è un caso speciale della seconda
>
> **Terza legge**:
> - Se un corpo A esercita una forza su un corbo B, allora B esercita su A una forza uguale e contraria.
> - Possiamo scriverla come:
>
> $$
> \vec{F}_{ij} = - \vec{F}_{ji}
> \\ \ \\ \text{Along lines of center}
> $$
>
> "La forza che $j$ ha su $i$ è equivalente e inversa alla forza che $i$ ha su $j$", ma solo nella linea che si traccia da un oggetto all'altro, sennò potremmo andare a creare forze insensate (per esempio due forze che spingono verso l'esterno, che seguono la definizione, ma che creano qualcosa di impossibile)
>
> Facciamo l'assunzione che tutto sia formato da particelle. Le particelle fanno forza le une sulle altre e la forza netta che viene fatta su una particella è la somma delle forze che le altre particelle fanno su di essa.

Ma quest'ultima parte, con l'uguale e inverso, ha a che vedere con la conservazione del momentum.

L'equazione di movimento per la particella $i$ è:

$$
m_i \frac{d^2\vec{r}_i}{dt^2}=\sum_{j\neq i} \vec{F}_{ij}
\\ \ \\
m_i \frac{d\vec{v}_i}{dt}=\sum_{j\neq i} \vec{F}_{ij}
\\ \ \\
\frac{d\vec{p}_i}{dt}=\sum_{j\neq i} \vec{F}_{ij}
$$

Sommiamo ora il momentum di tutte le particelle:

$$
\frac{d}{dt} \sum_i \vec{p}_i = \sum_i \sum_{j\neq i} \vec{F}_{ij}
\\ \ \\
\text{Lui la scrive come:}
\\ \ \\
\frac{d}{dt} \vec{p_{total}} = \sum_{i,j} \vec{F}_{ij}
$$

Cosa otteniamo da questo? $0$, perché viene contata la forza in entrambi i sensi, quindi in paia uguali ed opposte.

> Quindi **le leggi di Newton implicano la conservazione del momenutm**, che per la fisica moderna risulta come cosa un po' più importante.

## 1.6 ⋅ Energia

Dimostriamo la conservazione dell'energia, in particolare lo facciamo per un'unica particella in una dimensione.

Assumiamo che ci sia un'unica particella in una dimensione. Assumiamo inoltre che ci sia una forza applicata su di essa, la quale dipende solo e soltanto dalla posizione della particella:

$$
F(x)
$$

Da notare che non dipende dal tempo. Dipende dal tempo in modo implicito, se la posizione della particella dipende dal tempo. Ma indipendentemente dal tempo nel quale si guarda, se la posizione è la stessa allora la forza è la stessa.

Quindi non è dipendente dal tempo in modo esplicito, ma solo in modo implicito.

Il processo che vogliamo seguire per questa dimostrazione è partire con la definizione di energia e poi mostrare come è conservata dalle leggi di Newton. Si può fare anche l'inverso, ma questo è più semplice.

Passo prima: noi possiamo sempre andare a fare derivate nelle funzioni in una dimensione, in particolare abbiamo questa:

$$
F(x) = - \frac{dV(x)}{dx}
$$

Il "$-$" è pura convenzione, da quel che dice il professore, una "standard definition"

Per trovare la V dobbiamo fare:

$$
\int F(x) dx = -V(x)
$$

Dobbiamo fare **un'assunzione**: la forza è una funzione continua, che si "comporta bene abbastanza" da poter essere integrata.

Immaginiamo questa cosa:
- La particella si muove sull'asse delle $x$, ma si muove anche su delle collinette.
- L'altezza delle collinette è il valore della $V$
- Per questo abbiamo $-V$, in quanto si cercherà di muovere verso il basso, non aumentando quella che è (spoiler) *l'energia potenziale*
- Accellererà in base a quanto lo slope è ripido.
- Quindi c'è una forza in tutti i punti che ti spinge in basso, in base allo slope, verso $V=0$

L'energia totale del sistema, che rimane conservata, è:

$$
E = \frac{1}{2} m \dot{x}^2 + V(x)
$$

Perché si chiama energia? Perché è conservata. E' l'unica cosa che ci interessa dell'energia, che è un valore conservato nel sistema.

Spiegando quello che si vede nella formula dell'energia:
- $E$ vuol dire energia
- $T=\frac{1}{2} m \dot{x}^2$ è l'energia cinetica
- $V(x)$ è l'energia potenziale

Dobbiamo dimostrare che $T + V$ non cambia con il tempo.

Spiegazione intuitiva: se noi scendiamo nella collinetta (diminuisce la nostra energia potenziale) allora la velocità aumenta, quindi aumenta anche l'energia cinetica. Se invece saliamo, allora la velocità diminuisce, quindi diminuisce anche l'energia cinetica, ma aumenta l'energia potenziale.

Ora che abbiamo questa immagine in mente, andiamo a dimostrarlo, partendo da questa formula:

$$
\vec{F}(x) = - \frac{dV(x)}{dx} = m \ddot{x}
$$

Cosa dobbiamo fare per dimostrare che è conservata? Ci basta dimostrare che la sua derivata nel tempo è 0 (Ovvero andiamo a mostrare che l'energia, nel tempo, non varia, ma rimane costante, in quanto la sua derivata è 0).

$$
1/2 m \dot{x}^2 + V(x) = E
\\ \ \\ \ \\ 
\frac{dE}{dt} = 1/2 m 2 \dot{x} \ddot{x} + \frac{dV(x)}{dt} \cdot \frac{dx}{dx}
\\ \ \\
m\dot{x} \ddot{x} + \frac{dV(x)}{dx} \cdot \frac{dx}{dt}
\\ \ \\
m\dot{x} \ddot{x} + \frac{dV(x)}{dx} \cdot \dot{x} = \frac{dE}{dt}
\\ \ \\
\dot{x} \cdot [m\ddot{x} + \frac{dV(x)}{dx}] = \frac{dE}{dt}
\\ \ \\ \text{Ma abbiamo che } m\ddot{x} + \frac{dV(x)}{dx} = 0
\\ \ \\
\dot{x} \cdot 0 = \frac{dE}{dt}
$$

Cosa succede se abbiamo più dimensioni di spazio? (rimaniamo comunque ad una particella)
- Dobbiamo scrivere le equazioni con i vettori, e i vettori hanno compoennti, pertanto dobbiamo andare a scrivere per ognuno dei componenti questo tipo di equazioni:

$$
F_i(x)=m \ddot{x}_i
\\ \ \\
F_i((x,y,z))=m \ddot{(x,y,z)}_i
$$

Vorrei scrivere l'equivalente della formula scritta prima per l'energia potenziale, ma questa volta in più dimensioni.

Quello che ci piacerebbe poter scrivere è:

$$
F_i(x) = - \frac{\partial V (x)} {\partial x_i}
$$

Il problema è che abbiamo un'unica funzione $F(x)$ ma questa non ci da abbastanza informazioni per avere 3 componenti distinte per ogni $F_i$.

Quindi non lo possiamo fare. Ci dobbiamo fidare che questa è una legge della fisica che funziona vista la nostra sperimentazione.

Ci aspettiamo che comunque ci sia una direzione, la direzione di decrescita massima, nella quale punta $V$.

Partendo con l'assunzione che però funzioni, come lo dimostriamo? nello stesso modo di prima:

$$
\sum_i \frac{1}{2} m \dot{x}_i^2 + V(x) = E
\\ \ \\ \ \\
\frac{dE}{dt} = \sum_i \frac{d}{dt} \frac{1}{2} m \dot{x}_i^2 + \frac{dV(x)}{dt}
\\ \ \\
\sum_i m\dot{x}_i \ddot{x}_i + \frac{\partial V}{\partial x_i} \cdot \frac{\partial x_i} {\partial t}
\\ \ \\
\sum_i \dot{x}_i [m\ddot{x}_i + \frac{\partial V}{\partial x_i} ]
\\ \ \\
\sum_i \dot{x}_i \cdot 0 = \frac{dE}{dt}
$$

Quindi noi abbiamo fatto un'assunzione, ovvero che le forze sono proporzionali alla derivata dell'energia potenziale, e abbiamo dimostrato che se questa assunzione è vera, allora l'energia è conservata.

Questa assunzione va bene perché... ha senso per la natura, il mondo funziona così, etc. Non è motivata matematicamente a partire dalla prima dimensione.

### 1.6.1 ⋅ Caso con n particelle

Immaginiamo di avere un elenco di componenti del tipo $x_1, y_1, z_1, x_2, y_2, z_2, ... x_n, y_n, z_n$.

Immaginiamo di chiamarle tutte come $x_i$, dove per esempio $x_5 = y_2$.

Abbiamo quindi un totale di $3n$ componenti $x_i$.

Le leggi si possono descrivere nello stesso identico modo, ma ora la formula assume la forma:

$$
\vec{F_i}(x) = m_i \ddot{x}_i
$$

Noi quindi diamo una libertà per ogni particella di avere una qualsiasi massa. In realtà questa formula è un po' troppo libera, in quanto diamo la libertà che la massa abbiamo valore diverso per ogni componente. Noi ci aspetteremmo che per esempio $x_1 - x_3$ abbiamo la stessa $m_1 = m_2 = m_3$ in quanto sono coordiante ddella stess particella.

Inoltre assumiamo che questa proporzione sia vera:

$$
\vec{F_i}(x) = - \frac{\partial V(x)}{\partial x_i}
$$

Notiamo che quindi possiamo usare lo stesso modo di soluzione precedente per dimostrare che l'energia è conservata.

E' importante dire che si assume che le forze sono influenzate da energia potenziale. Queste forze sono chiamate conservative.

## 1.7 ⋅ Harmonic oscillator

Innanzitutto, la forza e l'energia potenziale della molla sono:

$$
F(x) = -kx
\\ \ \\
V(x) = \frac{1}{2} kx^2
$$

Qual'è l'energia chinetica?

$$
T = \frac{1}{2} m \dot{x}^2
$$

Quindi abbiamo che l'energia è:

$$
E = \frac{1}{2} m \dot{x}^2 + \frac{1}{2} kx^2 = T + V
$$

Notiamo che in un piano con $\dot{x}$ e $x$ abbiamo che l'energia viene raprpesentata da una circonferenza, come ci indicava la nostra esperienza precedente.