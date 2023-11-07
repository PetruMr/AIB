# 3 ⋅ Formalismo della meccanica quantistica

## 3.1 ⋅ Richiami di meccanica classica hamiltoniana

[...]

## 3.2 ⋅ Postulati della meccanica quantistica

Nel seguito riassumiamo tutti i fatti scoperti finora su un sistema quantistico in un insieme coerente di postulati che stanno alla base del formalismo della teoria della MQ.

### 3.2.1 ⋅ Definizione

Un **raggio** in uno spazio di Hilbert $\mathcal{H}$ è una classe di equivalenza di vettori che differiscono l'uno dall'altro per una costante arbitraria non nulla $\alpha \in \mathbb{C} \setminus \{0\}$ moltiplicativa:

$$
|v\rangle \sim |\alpha v\rangle \quad \forall \alpha \in \mathbb{C} \setminus \{0\}
$$

### 3.2.2 ⋅ Postulato n.1

> A ciascun sistema fisico quantistico si fa corrispondere uno spazio di Hilbert $\mathcal{H}$ complesso e separabile. A ciascun stato del sistema si fa corrispondere, a un fissato tempo $t$, un raggio in $mathcal{H}$.

Uno stato è un raggio in quello spazio di Hilbert che descrive il mio sistema.

Come si rappresenta il raggio? E' una classe di equivalenza: possiamo prendere un vettore dalla classe di equivalenza e associarlo. Ma quale scegliamo? Può essere utile usare quello di norma 1, il versore. (Sempre che lo possa fare, ovvero che la norma sia finita, ma se fosse infinita in realtà non saremmo neanche in uno spazio di Hilbert)


Dire che gli stati sono in uno spazio di Hilbert, mi sta dicendo che una sovrapposizione lineare di stati è ancora uno stato. Questo è identico al nostro "principio di sovrapposizione". E' importante capire che la meccanica quantistica è formulata in uno spazio lineare, quindi useremo l'algebra lineare.

Se possiamo fattorizzare davanti a tutto il nostro stato una fase, quella non conta. Se però lo stato è fatto da combinazioni di fasi, allora quelle fasi contano. Questo deriva dal fatto che è lineare. 

### 3.2.3 ⋅ Definizione

Un'osservabile è una proprietà di uno stato fisico che in principio può essere misurata.

### 3.2.4 ⋅ Postulato n.2

> Ogni grandezza osservabile $F(p,q,t)$ del sistema fisico si rappresenta, nel formalismo matematico della MQ, con un operatore lineare hermitiano $F$ che opera sullo spazio di Hilbert $\mathcal{H}$ del sistema considerato.

In particolare, ricordare che:
- $p := \text{momentum}$
- $q := \text{coordinate}$
- $t := \text{tempo}$

Perché una quantità fisica deve essere hermitiana? Cosa hanno in più (ovvero che proprietà hanno che noi possiamo sfruttare)? Il fatto che hanno tutti gli **autovalori reali**.

L'insieme di tutti gli autovalori di $F$, detto *spettro*, può essere discreto o continuo, o presentare entrambe le situazioni (hanno pezzi di entrambi). In particolare, ricordare che sommiamo se discretto, integriamo se continuo.

L'operatore hermitiano $F$ soddisfa l'equazione agli autovalori

$$
F | k \rangle = f_k | k \rangle
\\ \ \\
F \sum_k |k\rangle \langle k | = \sum_k f_k |k\rangle \langle k |
\\ \ \\
F = \sum_k f_k |k\rangle \langle k |
\\ \ \\
\text{In quanto:} \quad \sum_k | k \rangle \langle k | = \mathbb{1}
$$

In cui gli autovettori $| k \rangle$ tutti tra loro ortogonali e ammette una decomposizione spettrale:

$$
F = \sum_k f_k E_k = \sum_k f_k | k \rangle \langle k |
$$

Dove i proiettori $E_k = | k \rangle \langle k |$ realizzano le proiezioni ortogonali sull ospazio di autovettori appartenenti all'autovalore $f_k$. Essi soddisfano le seguenti relazioni:

$$
E_k E_l = \delta_{kl} E_k \quad \sum_k E_k = \mathbb{I} \quad E_k^\dagger = E_k
$$

Quindi dobbiamo immaginare i vettori come i loro autovalori e in particolare i loro versori.

### 3.2.5 ⋅ Postulato n.3 - postulato della misura - misura di osservabili fisiche

Una misura è un processo nel quale una informazione relativa allo stato di un sistema fisico è acquisita da un osservatore.

> La misura di una osservabile $F$ su uo stato $| \psi \rangle$ generico proietta tale stato su un autovettore $|k\rangle$ dell'operatore $F$ e il risultato della misura è il valore corrispondere autovalore $f_k$. L'autovalore $f_k$ è ottenuto con una probabilità:
>
> $$
> \mathcal{P}_k = || E_k | \psi||^2 = \langle \psi | E_k | \psi \rangle
> $$
>
> ovvero:
> - $\mathcal{P}_k = |\langle k | \psi \rangle |^2$ nel caso di autovalori discreti non degeneri
> - $\mathcal{P}_k =\sum_{i=1}^{g_k}|\langle k_i | \psi \rangle |^2$ (dove $g_k$ è il grado di degenerazione dell'autoavlore $f_k$ e $\{|k_i\rangle\})$ una base ortonormale dell'autospazio di $f_k$) nel caso di autovalori discreti degeneri
> - Nel caso di autovalori continui si parlerà invece di densità di probabilità $\rho (k)=|\langle k | \psi \rangle |^2$  e la probabilità di misure il sistema con $F$ compresa tra $f(k)$ e $f(k)+dk$ sarà $\rho(k)dk = |\langle k | \phi \rangle |^2 dk$.

Quello che la meccanica quantistica ci può dire è una lista di autovalori, dalla quale possiamo ottenere una lista di probabilità (a ognuno degli autovalori si assegna una probabilità). La somma di tutte le probabilità deve fare 1, non può cambiare nel tempo il valore di questa somma (in quanto andremmo a predere informazioni e non va bene per la conservazione).

La probabilità è data dalla norma del vettore proiettato nella direzione dell'autovalore.

Noi quindi non lo possiamo prendirre! Anche se è "l'unica cosa che vogliamo fare" con la fisica, e che si fa con la fisica classica. Sappiamo sicuramente che sarà uno dei nostri autovalori, ma non sappiamo quale. Questa è la differenza fondamentale che esiste tra meccanica quantistica e meccanica classica.

Noi abbiamo:
- Prima di fare la misura
  - Quello che c'è scritto sopra
- Quando abbiamo fatto la misura (e da quel momento in poi)
  - Non c'è più probabilità: è 1 la probabilità dell'elemento misurato.
  - La funzione d'onda passa dall'essere un onda di probabilità ad essere un "niente" (un delta di Dirac)
  - Questo passaggio è detto **collasso** della funzione d'onda.
  - Da notare che il collasso non implica un qualche cosa di mistico, ma semplicemente si passa dall'avere probailità di uno stato $|\psi\rangle$ che conteneva tanti stati ognuno con il suo autovalore ad avere uno stato $|k\rangle$ singolo. Questo passaggio non è da pensare come un effettivo passaggio, cioè che da tutto passa ad 1, ma prima c'era una probabilità e poi si misura, non c'è nessun tipo "movimento" o passaggio o trasmissione di informazione.
  - Un osservatore (misuratore) non deve necessariamente essere una persona, un essere conscio o altro: è sufficiente che sia un sistema fisico macroscopico che interagisce con il sistema che si vuole misurare. Non importa se esso è una persona, un dinosauro oppure un computer.
  - Immaginiamo il sistema gatto di Schrodinger:
    - Lo stato dell'atomo che decade è: $|atomo\rangle = \frac{1}{\sqrt{2}}(|+\rangle + |-\rangle) \Rightarrow |gatto\rangle = \frac{1}{\sqrt{2}}(|vivo\rangle + |morto\rangle)$
    - Quindi questo esempio ci fa capire che: la meccanica quantistica ci viene fatto notare che non riguarda solo l'infinitamente piccolo: sicuramente è il luogo dove troviamo nel modo più visibile gli effetti quantistici, ma si possono trovare anche a livello macroscopico.
    - La misura avviene solo quando apro la scatola e guardo dentro, non prima. Quindi fino a quando non guardo dentro, il gatto è "sia" vivo che morto.
    - Virner dire: mi metto anche io nella stessa situazione del gatto di Schrodinger, quindi funziono da osservatore per il gatto. Ma immaginiamo di avere un amico che, mentre deve arrivare, trova del traffico, quindi arriva in ritardo. Io collasso la funzione del gatto a "vivo", in quanto apro ed è vivo, ma per l'amico che arriva in ritardo, il gatto è ancora in sovrapposizione! Quindi,l'osservazione è soggettiva? No! La misurazione viene fatto dal geiger che misura l'atomo, non da me. Quindi il gatto di Schrodinger è un po' una contraddizione di termini (in quanto si usano quelli sbagliati). Non siamo noi a misurare tutto l'universo ed è tutto in sovrapposizione fino a quando lo facciamo. Saremo osservatori di alcune cose, certo, in quanto le misuriamo, ma ci sono più osservatori che fanno misure. Capire con più profondità questa soggettività entra più in filosofia.


Da alcuni questo postulato è chiamato il "postulato interpretato di Born" in quanto è quello che fa scaturire in noi domande di interpretazioni del "perché?". La meccanica quantistica funziona, ma non riusciamo a capirne il perché, quali sono i moventi. 

##### Nota sul determinismo:
La parte non deterministica è la misurazione, non l'evoluzione nel tempo.

##### Sull'entanglement

- Einstain pensava ci fossero variabili nascoste, quindi una particella mantenesse, in una variabile, lo stato di quella con cui è entanglata
- Bell ha creato un teorema per dimostrare che non esistono variabili nascoste (ha mostrato che se dovessero esiste, una disuguaglianza dovrebbe essere vera, ma era profondamente falsa)

Quindi boh.

##### La teoria dei multi mondi

Dice che quando si fa la misura, l'universo intero si divide in 2, dove in uno vale la misura "+" e in uno la misura "-", quindi ci sono mondi dove tutto è possibile. 

Questa teoria ha problemi per esempio con la conservazione dell'energia. Inoltre è piuttosto impossibile da dimostrare, in quanto non si può mai vedere l'altro mondo.

Ma risolverebbe per esempio in modo elegante il paradosso del nonno, in quanto se io tornassi indietro finissi in un universo branchato rispetto al mio, allora in esso c'è una diversa linea temporale.

### 3.2.6 ⋅ Postulato n.4 - dinamica ed evoluzione temporale degli stati

La dinamica descrive come uno stato evolve nel tempo. In meccanica quantistica, l'evoluzione temporale di un sistema chiuso è descritta da un operatore *unitario*.

> L'evoluzione temporale di uno stato $|\phi(t)\rangle$ è data dall'equazione di Schrodinger
> $$
> i\hbar \frac{d}{dt} |\phi(t)\rangle = \mathrm{H} |\phi(t)\rangle
> $$
>
> ove $H$ è l'operatore hamiltoniano
> $$
> \mathrm{H} = H(p,q)
> $$
>
> ottenuto cosiderando come operatore le osservabili posizione $q$ e momento coniugato $p$ nella hamiltoniana del sistema.

Il prof ha scritto le equazioni seguenti:

$$
i\hbar \frac{d}{dt} \phi(x,t) = \mathrm{H} \phi(x,t)
\\ \ \\
i\hbar \frac{d}{dt} |\phi(t)\rangle = \mathrm{H} |\phi(t)\rangle
\\ \ \\
|\phi(t)\rangle = e^{i\mathrm{H}t} |\phi(0)\rangle
\\ \ \\
|| \phi(t) ||^2 = \langle \phi(t) | \phi (t) \rangle 
\\
= \langle \phi(0) | U^\dagger (t) U(t)| \phi(0) \rangle 
\\
= \langle \phi(0) | \phi(0) \rangle
$$


> Qua ci dovrebbero essere appunti su 3.3 - 3.8 escludendo 3.7

## 3.9 ⋅ Valori medi e scarti quadratici medi

Definiamo *valor medio* di una osservabile $F$, rappresentata da un operatore hermitiano $F$, sullo stato $|\psi\rangle$ la quantità:

$$
\langle F \rangle = \frac {\langle \psi | F | \psi \rangle} {\langle psi | \psi \rangle}
$$

Il valor medio è una operazione lineare:

$$
\langle \alpha F + \beta G \rangle = \alpha \langle F \rangle + \beta \langle G \rangle
$$

### 3.9.1 ⋅ Nota

Sarebbe meglio indicarlo come $\langle F \rangle _ {\psi}$, ma per non appesantire la notazione, faermo ricorso a tale scrittura solo in caso di ambiguità.

### 3.9.2 ⋅ Matematica delle cose

$$
|\psi\rangle = \sum_k c_k |k\rangle
\\ \
\langle \psi = \sum_k c_k'^* \langle k' |
\\ \ \\
\hat F | \psi \rangle = \sum_k c_k \hat F |k\rangle 
\\ \ \\
\langle \psi | \hat F | \psi \rangle = \sum _{n,n'} \langle k | c_{n'}^* c_n | f_k | k \rangle = \sum_k c_k c_k^* \langle k | k \rangle = \sum_k |c_k|^2 f_k 
$$

### 3.9.3 ⋅ Il valore medio

Ma si ponga attenzione che il valore medio di una potenza non è la potenza del valore medio, ovvero:

$$
\langle F^n \rangle \neq \langle F \rangle ^n
$$

Accanto al valore medio di un insieme di valori è d'uso definire lo *scarto quadratico medio* come la misura dell'incertezza con cui il valor medio è determinato:

$$
\Delta F = \sqrt{\langle (F - \langle F \rangle)^2 \rangle} = \sqrt{\langle F^2 \rangle - \langle F \rangle ^2}
$$

> Se misuro, $F$ mi da qualche autovalore. Prendo il valore medio e sto sostanzialmente calcolando la distanza tra ognuno degli autovalori di $F$ ed il valor medio. Se si calcola solo la distanza essa sarà positiva o negativa (sopra o sotto al valore medio), quindi per i grandi numeri si compensa e diventa 0. Se invece eleviamo al quadrato, questo sarà sempre positivo, quindi noi calcoliamo, che siamo sotto o sopra al valore medio, la nostra distanza, quindi poi le possiamo sommare e trovare il valore medio, per poi fare la radice quadrata in quanto abbiamo elevato al quadrato.

> Calcolare il valore medio è essenzialmente trovare il picco, poi ci interessa anche la "dimensione" di questa distribuzione e questa è data dallo squarto quadratico medio, lo "spread" della distribuzione

Quando si azzera questo scarto quadratico medio? Quando:

$$
(\Delta F )^2 = \langle (F - \langle F \rangle)^2 \rangle = \frac {\langle \psi | (F - f)^2 | \psi \rangle} {\langle \psi | \psi \rangle} = 0
$$

L'operatore $F-f$ è palesemente hermitiano, percò possiamo applicarlo una volta a $ket$ e una volta a $bra$, ottenendo:

$$
(\Delta F)^2 = \frac {|| (F-f|\psi \rangle)||^2} {||\psi||^2} = 0
$$

Questo ci dice che $\psi$ può annullare lo scarto quadratico medio di $F$ **se e solo se** sono un autovettore di $F$.

Se il mio stato è un autovettore, allora è sicuro che come risultato della misura otterrò il corrispondente autovalore. Questo in quanto c'è solo lui nella decomposizione di $\psi$.

In tutti gli altri casi, dove $\psi$ è una combinazione lineare di più autovettori, lo squarto quadratico medio me lo calcolo e sarà un numero diverso da 0, in quanto avrò i miei risultati di misura che sono distribuiti su una certa funzione di probabilità.

> Poi qua c'è una formula che l'ha descritta come super ovvia

> Come valore medio, non è necessario che sia uno degli autovalori. Se noi abbiamo uno strumento di misura che misura 1 o 2, ciascuno con 50%, allora il valore medio sarà 1.5, ma non è un valore misurabile. Equivalente per questo.

## 3.10 ⋅ Teorema di Ehrenfest

> Come conseguenza a ciò che c'era in *3.9*

L'evoluzione temporale di qualunque quantità in MQ è dettata dall'equazione di Schrodinger. Questo è vero anche per i valori medi. Calcoliamo perciò:

$$
\frac{d}{dt}\langle F\rangle _ \psi
\\ \ \\
= \frac{d}{dt} (\langle \psi | \hat F | \psi \rangle ) 
\\ \ \\
= \int _ {-\infty} ^ {+\infty} \psi ^* (x,t) F_{(x)} \psi (x,t) dx
\\ \ \\
= (\frac{d}{dt} \langle \psi |) F | \psi \rangle + \langle \psi | \frac {\partial F} {\partial t} | \psi \rangle + \langle \psi | F \frac {d}{dt} | \psi \rangle
\\ \ \\
= - \frac {1}{i \hbar} \langle \psi | \mathrm{H} F | \psi \rangle + \langle \frac {\partial F} {\partial t} \rangle + \frac {1}{i \hbar} \langle \psi | F \mathrm{H} | \psi \rangle
$$

E dunque

$$
\langle \dot F \rangle = \frac {1}{i \hbar} \langle [F, \mathrm{H}] \rangle + \langle \frac {\partial F} {\partial t} \rangle
$$

### 3.10.1 ⋅ Teorema (di Ehrenfest)

I valori medi delle osservabili fisiche evolvono nel tempo come le corrispondenti quantità classiche:

$$
\langle \dot F \rangle = \frac {1}{i \hbar} \langle [F, \mathrm{H}] \rangle + \langle \frac {\partial F} {\partial t} \rangle
$$

> Aveva formulato questa cosa per capire quali erano le relazioni tra meccanica classica e meccaniac quantistica

> C'era un formulazione ovvero l'integrale di cammino di Feynman. Praticamente noi se abbiamo una transizione da A a B, per un qualcosa sappiamo che noi scegliamo il cammino migliore. In meccanica quantistica tutti i cammini sono esistenti, non solo quello migliore, e c'è una distribuzione di probabilità. Più sono vicino alla meccanica quantistica, in un certo senso, più lo spread sarà grande. Nel limite, dovrebbe andarmi a riprodurre il cammino classico.
>
> Si dice dovrebbe perché questi sono determinati dagli integrali di cammino, che non è banale, in quanto bisogna dimostrare qualcosa di molto delicato dal punto di vita matematico. Da un punto di vista fisico l'idea è chiara invece.

## 3.11 ⋅ Principio di Heisenberg generalizzato

Si considerino due osservabili $F$ e $G$ e uno stato $| \psi \rangle$, che supponiamo normalizzato a 1, e si definiscono i vettori:

$$
|f\rangle = (F - \langle F \rangle ) | \psi \rangle \quad |g\rangle = (G - \langle G \rangle ) | \psi \rangle
$$

In quanto applicando un operatore hermitiano a ket, ottengo un ket.

Poi abbiamo che:

$$
\langle f | = \langle \psi | (F - \langle F \rangle ) \quad \langle g | = \langle \psi | (G - \langle G \rangle )
$$

Adesso faccio:

$$
\langle f | f \rangle = \langle \psi | (F - \langle F \rangle ) (F - \langle F \rangle ) | \psi \rangle = \langle \psi | (F - \langle F \rangle )^2 | \psi \rangle = (\Delta F)^2
\\ \ \\ \text{o meglio} \\
= \langle \psi | F^2 - F\langle F \rangle - \langle F \rangle F + \langle F\rangle ^2 | \psi \rangle
\\ \ \\
[\langle \psi | F | \psi \rangle = \langle F \rangle _ \psi]
\\ \ \\
= \langle \psi | F^2 | \psi \rangle - \langle F \rangle ^2  - \langle F \rangle ^2 + \langle F \rangle ^2 
\\ \ \\
= \langle F ^2 \rangle - \langle F \rangle ^2
\\ \ \\
= (\Delta F)^2
$$

Stessa cosa per la $g$.

Adesso abbiamo dalla disuguaglianza di Schwarz (ricordiamocelo per dopo):

$$
|\langle f | g \rangle |^2 \leq \langle f | f \rangle \langle g | g \rangle
\\ \ \\
\text{In particolare:} \quad |\langle f | g \rangle |^2 \leq (\Delta F)^2 (\Delta G)^2
$$

Poi, abbiamo che per ogni numero complesso, vale la relazione:

$$
|z|^2 = [(\text{Re}z)^2 + (\text{Im}z)^2] \geq (\text{Im}z)^2 = \frac {(z - z^* )^2} {(2i)^2}
$$

Prendiamo nel nostro caso $z=\langle f|g \rangle$, quindi:

$$
(\Delta F)^2 (\Delta G)^2 \geq \frac {(\langle f | g \rangle - \langle g | f \rangle )^2} {(2i)^2}
$$

Ora:

$$
\langle f | g \rangle = \langle \psi  | (F - \langle F \rangle) ) (G - \langle G \rangle ) | \psi \rangle
\\ \ \\
= \langle FG \rangle - \langle F \rangle \langle G \rangle
$$

E analogamente per $\langle g | f \rangle = \langle GF \rangle - \langle G \rangle \langle F \rangle$. Perciò:

$$
(\Delta F)^2 (\Delta G)^2 \geq \frac {(\langle FG \rangle - \langle F \rangle \langle G \rangle - \langle GF \rangle + \langle G \rangle \langle F \rangle )^2} {(2i)^2} = \frac {\langle [F, G]\rangle ^2 } {(2i)^2}
$$

Da cui otteniamo la *relazione di Heisenberg generalizzata*:

$$
\Delta F \Delta G \geq | \frac{\langle [F,G] \rangle} {2i} |
$$

> Se due operatori hermitiani commutano, f e g, possono essere diagonalizzati simultaneamente, ovvero ammettono lo stesso insieme di autovalori.
>
> Questo vuol dire che io li posso, da fisico, andarli a misurare **simultaneamente**

> Quindi se riduco di molto delta F, allora devo allargare di molto delta G.

> Se io prnedessi gli operatori $q$ e $p$ e lo sbatto nella relazione generalizzata vista prima e ci mettiamoq questo $i \hbar$ [... non ho capito]

> Quando noi in meccanica classica abbiamo parlato di traiettorie, esse dipendevano da $q$ e da $p$, ma qui noi non le possiamo misurare contemporaneamente, in quanto il concetto di traiettorie, di orbital e quant'altro, in meccanica quantistica è in crisi.
>
> Cosa rimane? Il concetto di stato, composto da un protone ed un elettrone, che messi insieme mi danno degli stati, che mi danno un ket.

> skip to pagina 76, slide 30

## 3.15 ⋅ Relazione di indeterminazione ergia-tempo

> Appunti su cose scritte sulle slide

## 3.16 ⋅ Parità

E' la trasformazione che manda $x \rightarrow -x$.

> Poi definisce parità e la disparità per le funzioni e continua con la definizione

> Questa cosa ci serve quando sappiamo di avere degli stati dispari, per cui ci troviamo a fare un integrale da più infinito a meno infinito, ma sapendo che sono dispari sappiamo che è 0
>
> Essenzialmente noi possiamo usare questa informazione per poter spezzare una funzione in una parte pari e una dispari, e quindi possiamo aiutarci, a volte, non sempre, con i calcoli, se lo facciamo. Semplicemente **dobbiamo sapere che questa è una cosa che esiste**

## 3.13 ⋅ Equazione di Schrodinger stazionaria

> Spiegazione anche su questa

Dalla prossiam settimanasi fanno glie eserczi (sopratutto sulla separazionedelle variabili, ovvero quest'ultima cosa fatta credo idk).