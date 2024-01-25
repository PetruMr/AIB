# Classical Mechanics - Lecture 3

## 1 ⋅ Principle of least action

In realtà il nome è sbagliato: non è il principio dell'azione minima, ma è il principio dell'azione stazionaria. In generale minimo e stazionario sono intercambiabili, o almeno lui li usa come intercambiabili.

Pensiamo alle leggi della fisica e consideriamone una molto specifica:
- Le leggi dell'equilibrio
  - Un oggetto che non si muove da che leggi è governato
  - La somma delle forze è uguale a 0 (diciamo che non accellera)

In particolare l'equilibrio lo possiamo scrivere in questo modo:

$$
F(x) = \frac{dV(x)}{dx} = 0
$$

Quindi cosa vuol dire che la forza è 0? Che la derivata dell'energia potenziale è 0. Immaginiamo l'energia potenziale come delle collinette che va a percorrere la particella. I casi dove questa ha forza 0 sono quelli dove si trova su un punto di minimo o massimo locale. 

**Da notare** che non solo quando è in un punto di **minimo** e sopratutto non solo quanto è in un punto di **minimo assoluto**.

Un altro modo di scriverlo, una "notazione utile che useremo più avanti" è:

$$
\frac{dV}{dx} \delta x = \delta V = 0
$$

Il significato intuitivo è che sei in equilibrio quando sei in un punto dove se ti muovi un pochetto ($\delta x$) non succede nulla.

In più dimensioni si scrive come:

$$
\forall i, \ \frac{\partial V(x)} {\partial x_i} = 0
$$

Essenzialmente, siamo in un punto di equilibrio se siamo in un punto di minimo, massimo o di sella (in 2 dimensioni).

Per ora abbiamo finito con la fisica di tutto ciò che ci dice la meccanica classica, ignorando il tempo.

## 2 ⋅ Traiettorie

Le traiettorie sono le curve che descrivono il moto di un oggetto. Esse sono descritte da una funzione $x(t)$, $y(t)$ e così via, dove $t$ è il tempo, in quanto la posizione di un oggetto dipende dal tempo.

Trovare la funzione che minimizzano qualche quantità è un famoso problema, chiamato problema di variational calculus, e vedremo degli esempi. Passeremo prima per la matematica che ci serve per risolvere questi problemi.

Il problema più semplice di questo tipo di studio è:

> Dati due punti, qual'è la curva più corta che collega questi punti? 
> 
> Risposta: è una linea retta da uno all'altro.

Come possiamo impostare questa domanda da un **punto di vista matematico**?

$$
\text{Siano:} \quad A=(x_1,y_1) \quad B=(x_2,y_2)
$$

Sia la funzione della curva che noi tracciamo tra questi due punti $y(x)$.

Una lunghezza di un piccolo segmento di questa funzione (ovvero la lunghezza di un segmento che si trova tra due piccoli incrementi $dx$ e $dy$) è data da:

$$
\sqrt{dx^2 + dy^2} = ds \quad, \quad (delta \text{ segment})
\\ \ \\
\text{Tiriamo fuori il } dx \text{ dalla radice:}
\\ \ \\
ds = \sqrt{1 + \left(\frac{dy}{dx}\right)^2} dx
$$

Quindi la lunghezza della curva è:

$$
S_{12} = L = \int_A^B ds = \int_{x_1}^{x_2} \sqrt{1 + \left(\frac{dy}{dx}\right)^2} dx
$$

Per indicare che noi scegliamo il minimo, impostiamo che la derivata di questo integrale sia 0. Questo è praticamente lo stesso concetto di trovare un punto di minimo. Questo è un "principio":

$$
\delta \int_{x_1}^{x_2} \sqrt{1 + \left(\frac{dy}{dx}\right)^2} dx = 0
$$

Questo in particolare lo sappiamo risolvere, in quanto sappiamo che la risposta è una linea retta, però in generale questo metodo verrà usato per risolvere problemi più complessi.

Come li risolviamo? Non potremmo probabilmente farlo in modo completo, ma andremmo ad usare approssimazioni.

Risolverlo, in generale, vorrà dire ridurlo ad una equazione differenziale e risolverla, in modo che ci dia modo di studiarla in piccoli step e studiarla.

Questa equazione si potrebbe generalizzare anche per ottenere la distanza minore tra due punti su qualsiasi superficie, non solo nel piano cartesiano. Per esempio sulla terra o su un terreno accidentato. Il modo pragmatico di farlo sarebbe quello di avere una stringa e tirarla tra i due punti. Tuttavia non scriveremo queste equazioni.

> Shortest path between two points is known as a **geodesic**.

### 2.1 ⋅ Luce

La luce si propaga in linea retta, ma non è la distanza minima tra due punti. La luce si propaga in modo che **il tempo sia minimo**.

Per descrivere la luce, possiamo considerare questo: sappiamo già qual'è la distanza tra due punti, per trovare il tempo dividiamo la distanza per la velocità.

$$
\text{Tempo} = \frac{\text{Distanza}}{\text{Velocità}}
\\ \ \\
\text{Tempo} = \frac{ds}{c} = \frac{\sqrt{dx^2 + dy^2}}{c(x,y)}
\\ \ \\
\text{Tempo} = \frac{\sqrt{1 + \frac{dy}{dx}^2}}{c(x,y)}dx
$$

Le cose nell'integrale non dipendono solo da $x$, ma anche dalla derivata (quindi dagli slope della curva).

Questa funzione descritta sopra è veramente la funzione che la luce percorrerebbe per andare da un punto all'altro.

### 2.2 ⋅ Calcolo della traiettoria

Il grafico della traiettoria avrà sull'asse delle $x$ il tempo e sull'asse delle $y$ la posizione (x).

Per le equazioni di Newton, sappiamo che dobbiamo conoscere la posizione e la velocità per conoscere la traiettoria. Quindi dobbiamo conoscere la posizione e la derivata della posizione.

Un modo per formulare il problema è conoscere:
- $x(t_0) = x_2$
- $x(t_1) = x_1$

Quindi quello che hai è la posizione di partenza e la posizione finale, il tempo di partenza e il tempo finale, e vuoi trovare la traiettoria: devi trovare la velocità.

> Data una configurazione iniziale e una finale, trovare quello che interpoli le due posizioni.

In fisica, questo problema coincide con il minimizzare, ovvero "rendere stazionario": qualche integrale va minimizzato.

Quindi come lo colleghiamo a ciò che dobbiamo trovare?

$$
A = \int_{t_0}^{t_1} \mathscr{L}(x,\dot{x}) dt
$$

Dove $\mathscr{L}$ è la lagrangiana, che è una funzione che dipende dalla posizione e dalla velocità. Se si vuole trarre un parallelo con la traiettoria della luce descritta in precedenza, la $t$ in questo caso è la $x$ della traiettoria della luce.

Come puoi ricostruire questo problema usando le **equazioni di Newton**?

La prima cosa che vedremmo è che questi problemi possono essere sempre ricondotti a equazioni differenziali, e queste equazioni sono chiamte **equazioni di Eulero-Lagrange**.

L'equazione dipende da cosa $\mathscr{L}(x,\dot x)$ è, in quanto ci puoi mettere molte diverse cose dentro. Ogni funzione che ci metti dentro ti darà una diversa equazione differenziale.

> L'equazione di Eulero-Lagrange è una equazione differenziale che dipende dalla lagrangiana.

Il nostro obbiettivo è quindi rendere questa equazione stazionaria:

$$
\delta \int_{t_0}^{t_1} \mathscr{L}(x,\dot{x}) dt = 0
$$

Il modo di farlo è ridurlo al problema di trovare un punto di minimo, ovvero rendere stazionario l'integrale. Quindi troviamo il **problema approssimativo** ovvero:
- Dividiamo l'asse del tempo in piccoli incrementi
- Rimpiazziamo la traiettoria con una sequenza di intervalli di linee rette
- Prendere la dimensione di ognuno di questi intervalli, chiamati $\varepsilon$ (che poi andremo a far tendere a 0)
- Prima però di andare al limite, continuiamo a lavorare sull'approssimazione:
  - Sostituiamo l'integrale di $dt$ con una sommatoria dei vari segmenti $[i-1,i]$, $[i,i+1]$ e così via:

$$
\int dt \rightarrow \sum_i \mathscr{L}(x_i,\frac{x_{i+1} - x_i}{\varepsilon}) \varepsilon
$$

**Ricordiamo**: la $i$ è il tempo, quindi $x_i$ è la posizione al tempo "$i$".

Immaginiamo ora di considerare un unico $x_i$: se noi lo andiamo a cambiare leggermente, allora avremmo un cambiamento sia della posizione che della velocità, in quanto cambierà la differenza tra $x_{i+1}$ e $x_i$. Quindi immaginiamo di stare considerando il segmento subito dopo e subito prima ad $i$, ovvero $[x_i, x_{i+1}]$ e $[x_{i-1}, x_i]$.

Riscriviamoli usando la sommatoria e concentrandoci solo su questi due termini:

$$
\mathscr{L}(x_i,\frac{x_{i+1} - x_i}{\varepsilon}) \varepsilon + \mathscr{L}(x_{i-1},\frac{x_{i} - x_{i-1}}{\varepsilon}) \varepsilon
$$

Ora voglio differenziare questa funzione rispetto a $x_i$:

$$
\varepsilon \left( \frac{\partial \mathscr{L} (x_i, v_i)}{\partial x_i} + 
\frac{1}{\varepsilon} \frac{\partial \mathscr{L}}{\partial v_i} - \frac{1}{\varepsilon} \frac{\partial \mathscr{L}}{\partial v_{i-1}} \right)
\\ \ \\
= \varepsilon \left( \frac{\partial \mathscr{L} (x_i, v_i)}{\partial x_i} - \frac{d}{dt} \frac{\partial \mathscr{L}}{\partial v_i} \right)
$$

Quindi possiamo andare a riscrivere la parte di sopra:

$$
\delta A = - \frac{d}{dt} \frac{\partial \mathscr{L}}{\partial v} + \frac{\partial \mathscr{L}}{\partial x_i} = 0
$$

Quindi, ripercorrendo il ragionamento:
- Vogliamo capire come cambia l'integrale se cambiamo la traiettoria, ovvero al variare di $x_i$.
- Se noi lo muoviamo un po' su o un po' giù ottieniamo un cambiamento che ci dice due cose: quanto cambia rispetto a quanto lo muoviamo e quanto cambia la velocità *prima* e *dopo* il punto in cui lo muoviamo (e queste due cose hanno segno opposto, in quanto se aumenta prima, dovrà diminuire dopo per rimanere stazionario come punto, e viceversa).

Quella formula è la formula generale delle equazioni di Eulero-Lagrange, che è una equazione differenziale che dipende dalla lagrangiana.

#### 2.2.1 ⋅ Ritornando all'integrale

$$
\begin{align*}
A = & \int_{t_0}^{t_1} dt \ \mathscr{L}(x,\dot{x}) 
\\
\delta & \int_{t_0}^{t_1} dt \ \mathscr{L}(x,\dot{x}) & = 0
\\
& \frac{d}{dt} \frac{\partial \mathscr{L}}{\partial \dot{x}} = \frac{\partial \mathscr{L}}{\partial x}
\end{align*}
$$

### 2.3 ⋅ Equazioni di Newton con la lagrangiana

Troviamo una $\mathscr{L}$ che ci dia le equazioni di Newton (Quindi troviamo quale sia la $\mathscr{L}$ che ci descrive una particella che si muove in una energia potenziale).

$$
\begin{align*}
& P.E. \quad & & V(x)
\\
& K.E. & & \frac{m}{2} \dot{x}^2
\end{align*}
\\ \ \\
\mathscr{L} = \frac{m}{2} \dot{x}^2 - V(x)
$$

Da notare che c'è un meno, perchè? Perché non è la formula dell'energia, bensì è qualcosa che deve accontentare la lagrangian equation, quindi è semplicemente diversa.

Ora andiamo quindi a scrivere la formula trovata in precedenza ($\frac{d}{dt} \frac{\partial \mathscr{L}}{\partial \dot{x}} = \frac{\partial \mathscr{L}}{\partial x}$) con la lagrangiana che abbiamo trovato:

$$
\begin{align*}
\frac{d}{dt} \frac{\partial \mathscr{L}}{\partial \dot{x}} & = \frac{\partial \mathscr{L}}{\partial x}
\\
\frac{d}{dt} \frac{\partial}{\partial \dot{x}} \left( \frac{m}{2} \dot{x}^2 - V(x) \right) & = \frac{\partial}{\partial x} \left( \frac{m}{2} \dot{x}^2 - V(x) \right)
\\
\frac{d}{dt} \left( m \dot{x} \right) & = - \frac{d V}{d x}
\\
m \ddot{x} & = - \frac{d V}{d x}
\\ 
m \ddot{x} & = F(x)
\end{align*}
$$

### 2.4 ⋅ Per più particelle, per più dimensioni

Cambiamo la definizione di $i$ data prima, ora la $i$ identifica per esempio $x_1 = x$, $x_2 = y$ e così via. Quindi la $i$ è la dimensione.

La nostra equazione diventa quindi:

$$
\begin{align*}
A & = \int_{t_0}^{t_1} dt \ \mathscr{L}(x_i, \dot{x}_i)
\\
\frac{d}{dt} \frac{\partial \mathscr{L}}{\partial \dot{x}_i} & = \frac{\partial \mathscr{L}}{\partial x_i}
\end{align*}
$$

Se si vanno a rifare i passaggi, il risultato che si ottiene è che, ad ogni istante di tempo, un'equazione diversa per ogni dimensione, e si vuole minimizzare l'azione rispetto ad ognuna di queste dimensioni.

Il risultato è quindi:

$$
\begin{align*}
\frac{d}{dt} \frac{\partial \mathscr{L}}{\partial \dot{x}_i} & = \frac{\partial \mathscr{L}}{\partial x_i}
\\
\frac{d}{dt} \frac{\partial}{\partial \dot{x}_i} \left( \frac{m}{2} \dot{x}_i^2 - V(x_i) \right) & = \frac{\partial}{\partial x_i} \left( \frac{m}{2} \dot{x}_i^2 - V(x_i) \right)
\\
\frac{d}{dt} \left( m \dot{x}_i \right) & = - \frac{\partial V}{\partial x_i}
\\
m \ddot{x}_i & = - \frac{\partial V}{\partial x_i}
\\
m \ddot{x}_i & = F_i(x_i)
\end{align*}
$$

Quindi siamo riusciti a trovare le equazioni di Newton a partire da le equazioni di Eulero-Lagrange per il principio di minimo dell'azione.

### 2.5 ⋅ Come dovremmo pensare alle equazioni di Eulero-Lagrange

Le equazioni di Eulero-Lagrange sono un modo di pensare alle equazioni di Newton, ma non sono le equazioni di Newton. Sono un modo di pensare alle equazioni di Newton in modo che possiamo generalizzarle.

Esse, in generale, descrivono quindi la realtà fisica. Le equazioni di Newton sono un caso particolare di queste equazioni.

Oltre a questo, ovvero trovare che una legge deve rispettare le equazioni di Eulero-Lagrange, c'è un altra comodità che ci danno: ci permettono di trovare le equazioni di Newton in coordinate diverse.

La legge generale sarà che si tratta di una linea retta, indipendente dalle coordinate. Però se noi cambiassimo le coordinate, la "linea retta" rappresentata in quelle coordinate potrebbe essere diversa, pertanto le equazioni di Euler-Lagrange ci permettono di trovare le equazioni di Newton in coordinate diverse.

### 2.6 ⋅ Esempio

[Da riguardare da circa 1:00:00]

Praticamente qua ricrea diverse configurazioni dove usa le equazioni di Eulero-Lagrange per trovare le equazioni di Newton cambiando le coordinate e trovando tante cose molto carine. 