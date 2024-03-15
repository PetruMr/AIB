# Introuduzione al corso

## Materiale da seguire

Abbiamo il seguente materiale
- Libro: Nielsen-Chuans, QCQI
- J. Preskilc, Lecture notes

## Step di MQMT

- Cos'è la QIP
- POstulati
- Qubit -> Circuiti
- Parallelismo q -> algoritmo deutsck-josza
- Error correction
- Quantum comm, bb84
- Teleportation

## Cos'è l'informazione?


Dopo che ci è stata fatta la domanda di cosa è l'informazione le nsotree risposte erano:
- Conoscenza
- Esclusione di possibilità
- Conoscenza da salvare
- Entropia
- Interpretazione di un dato
- Interazione
- Scelte / Previsioni
- Stimoli

L'informazione è legata allo svolgimento di un compito.

In particolare:
> L'informazione è fisica
>
> *Detto da R. Landauer*

#### Diavoletto di Marxwell

Il secondo principio della termodinamica ci dice che se noi avessimo un bagno con due lati a una certa temperatura, allora no ne possiamo trarre informazione in quanto c'è appunto al stessa temperatura.

Immaginiamo di avere un diavoletto che ha una porticina arbitrariamente piccola e il cui moviemnto è trascurabile. Imposta le seguenti regole (*Particella che arriva da X la faccio passare*):
- Destra veloce: **si**
- Sinistra veloce: **no**
- Destra lenta: **no**
- Sinistra lenta: **si**

Per la misurazione lenta e veloce ci riferiamo ad un sistema classico.

Alla fine arriveremo ad una condizione dove la temperatura a sinistra sarà maggiore, mentre quella a destra sarà minore: le particelle più veloci sono tutte a sinistra, mentre quelle più lente sono a destra.

Noi sappiamo che questo è impossibile, ma perché?

Il principio di Carnot ci dice che non è possibile avere un motore che lavori al 100% di efficienza, ovvero non possiamo trasformare tutta l'energia in lavoro.

Un processo ciclico è un processo dove parto da uno stato del sistema e torno allo stesso stato. Il lavoro è dato dalla differenza di calore tra due stati. In questo caso il lavoro è dato dalla differenza di temperatura tra i due lati.

Il principio di R. Landauer ci dice che se io cancello un bit devo dissipare almeno kTln2 di energia. Essenzialmente:
- Immaginiamo di avere uno spazio, con due posizioni, e una cosa che sta lì
- Non sappiamo dove si trova, potrebbe essere sia in 0 che in 1
- Comprimiamo ora con un pistone in modo da ottenre 1 unica posizione
- Questo processo di compressione richiede energia
- $S' = k_B ln \Omega$ = $S'= = K_b ln 2$ , che poi diventa $S = k_B ln1$ (entropia) che ci dà una differenza di entropia pari a $k_B ln2$
- $\partial Q = T \Delta S = k_b T ln2$

Processi fisici che elaborano informazione non fanno cose senza consumare energia.


## Quali sono le caratteristiche di un sistema quantistico

### Cos'è il processing? (elaborazione di informazione)

Nel modo classico, cosa è un qualche cosa che risolve un problema?
- Un **algoritmo**, ovvero un insieme finito di istruzioni che risolve un problema e termina (da un output)

Ricitiamo la tesi di Church-Turing:
> Ogni funzione calcolabile è calcolabile da una macchina di Turing

Citiamo anche la tesi forte di Church-Turing:
> Ogni algoritmo può essere simulato efficientemente da una macchina di Turing

Efficienza: ha a che fare con quante risorse mi servono in funzione della dimensione del problema. Vedremo meglio una definizione a riguardo più avanti.

David Deutsch ha detto una cosa interessante, riflettendo sul fatto che diamo per scontato che una macchina di Turing sia un sistema classico:
> Posso simulare un sistema classico o un sistema quantistico con una macchina di Turing
>
> Posso risolvere con la macchina quantistica problemi che non hanno una soluzione con un sistema classico?
>
> Derivabilità di un algoritmo quantistico da un algoritmo classico (non sono sicuro di questo punto cercare su internet meglio "Derivabilità CTT?")

#### Fa effettivamente differenza una simulazione classica e una simulazione quantistica?

La meccanica quantistica:
- **Non** è una teoria fisica. È un framework, che possiamo usarlo per più cose, sia per gli spazi di Hilbert dove capire la posizione e velocità delle particelle e così via, ma posso farlo anche per un sistema dove posso capire, per esempio, lo spin up e down di un elettrone. Non è una teoria, è la madre di tutte le teorie. 

Cosa vuol dire essere lineare:
- Che cambiamenti piccoli iniziali portano a cambiamenti piccoli finali
- Ma per il teorema del caos / effetto farfalla / etc. vediamo che non è vero: si chiamano sistemi fortemenete non lineari
- Se ho una causa e ho un effetto, il doppio della causa mi dovrebbe dare il doppio dell'effetto
- Ho alcune cose che sono anche lineari, per esempio la molla di Hooke, ma sono casi speciali.

Definizione di determinismo:
- Se io so lo stato iniziale del sistema, allora so lo stato finale del sistema

| Meccanica quantistica | Meccanica classica |
|-----------------------|--------------------|
| Lineare (ci genera il palarrelismo quantistico) | Non lineare |
| Deterministica (nel senso che noi conosciamo le possibilità prima e dopo in modo deterministico) | Deterministica |
| Indeterminazione (imperfettad conoscenza dello stato) | Indeterminazione (non sappiamo misurare perfettamente lo stato del si) |

### Postulati della meccanica quantistica

La meccanica quantistica abbiamo detto essere un *framework*, quindi qua andiamo a descrivere i singoli postulati. Un postulato è una cosa che noi prendiamo per vera senza dimostrarla, noi le andiamo a dimostrare con "trail and error", quindi proviamo e vediamo se funziona. L'idea è che potrebbe anche non essere la cosa reale, ma funziona, almeno entro i nostri esperimenti.

#### 1. Spazio degli stati

> Ogni sistema fisico è associato ad uno spazio vettoriale complesso.

Si potrebbe pensare che lo spazio vettoriale complesso siano funziono d'onda, ma non è necessario, nel nostro caso per esempio non succede.

La aprte importante è che lo spazio vettoriale complesso abbia il prodotto scalare.

> Ogni stato è associato ad un vettore di norma 1 (norma 1 ci indica che la somma delle probabilità di dove si trova è 1)

Qua di solito si dice che il vettore deve stare nello spazio di Hilbert, ma qua no.

> *Non dice* cosa è lo spazio dei vettori complesso associato al sistema fisico e *non* mi dice cosa è il vettore di norma 1.

#### 2. Evoluzione temporale

> $| \psi \rangle_{t_1} \rightarrow | \psi'\rangle_{t_2}=U | \psi \rangle$
> 
> - Dove la $U$ dipende da $t_1, t_2$
> - Quali operatori unitari sono possibili?
>   - Per i qubit **tutti** gli operatori unitari sono possibili
>   - $\sigma_x, \sigma_y, \sigma_z$

La descrizione di un Qubit viene fatta usando:

$$
\sigma_x \cdot 
\begin{pmatrix}
    0 \\
    1
\end{pmatrix} = \begin{pmatrix}
    1 \\
    0
\end{pmatrix} 
$$

Dove abbiamo che:

$$
\sigma_x = 
\begin{pmatrix}
    1 & 0 \\
    0 & 1
\end{pmatrix}
$$

Notiamo che questa cosa è equivalente al **not**

#### 2'. Formulazione (variabili continue)

Equazione di Schrodinger:

$$
i \hbar \frac{\partial}{\partial t} | \psi \rangle = H | \psi \rangle
$$

#### 2''. No cloning theorem

Viene come conseguenza dei teoremi precedenti.

> Quando consideriamo uno stato quantistico come portatore di informazione, allora non possiamo copiarlo. 

Si tratta quindi come limitazione per la computazione, ma è un gigantesco vantaggio per la crittografia, in quanto se io invio un qubit, non posso copiarlo, quindi non posso intercettare il messaggio.

Il teorema ci dice questo:

$$
| \psi \rangle \  \otimes \ | \beta \rangle \rightarrow | \psi \rangle \  \otimes \ | \psi \rangle
$$

Vuol dire che:
- Parto adall'inizio con un qubit
- Lo clono
- Alla fine ho due qubit uguali

Per fare questo cambiamento, devo fare uso dell'operatore unitario, come ci viene detto dall'equazione. Quindi:

$$
\exists U \ U( | \psi \rangle \  \otimes \ | \beta \rangle) = | \psi \rangle \  \otimes \ | \psi \rangle
$$

Voglio che questa macchina funzione per tutti i possibili qubit, in quanto mi serve che funzioni per stati arbitrari.

Quindi:

$$
\exists U \\
U( | \psi \rangle \  \otimes \ | \beta \rangle) = | \psi \rangle \  \otimes \ | \psi \rangle
\\
U( | \phi \rangle \  \otimes \ | \beta \rangle) = | \phi \rangle \  \otimes \ | \phi \rangle
$$

Si deve quindi preservare il prodotto scalare, ovvero:

$$
\langle \psi | \phi \rangle  \langle b | b \rangle = \langle \psi | \phi \rangle \langle \psi  | \phi \rangle
$$

Quindi questo vuol dire che:

$$
\langle \phi | \psi \rangle \langle \phi | \psi \rangle = (\langle \phi | \psi \rangle)^2 = \langle \phi | \psi \rangle 
\\ \ \\
\Leftrightarrow 
\begin{matrix}
    \langle \phi | \psi \rangle = 1
    \\
    \langle \phi | \psi \rangle = 0
\end{matrix}
\\ \ \\
\Leftrightarrow
\begin{matrix}
    | \phi \rangle = | \psi \rangle
    \\
    | \phi \rangle \perp | \psi \rangle
\end{matrix}
$$

Quindi possiamo dire che questa cosa funziona solo per qubit ortogonali, quindi non funziona per qubit generici. Pertanto non posso clonare un qubit generico.


Spiegazione leggermente migliore dei vari passaggi fatti per ottenere il prodotto scalare:

$$
\langle \beta | \langle \psi | U^\dagger U | \phi \rangle | \beta \rangle = \langle \psi | \langle \psi | \phi \rangle | \phi \rangle
\\
\langle \phi | \psi \rangle \langle \beta | \beta \rangle = \langle \psi | \phi \rangle \langle \phi | \phi \rangle
$$

#### 3. Misura

Ci sono misure quantistiche che non sono proiettive, ma quelle che vedremo saranno unicamente quelle proiettive. Questo è il postulato relativo ad essa.

> Con un osservabile, ovvero un operatore hermitiamo autoaggiunto sullo spazio degli stati.
>
> Preparo l'osservabile e lo rendo $|\psi \rangle$, ovvero gli faccio una serie di operazioni e so che alla fine di esse l'atomo sarà in una bella funzione d'onda gaussiana (per esempio). Potrei prepararlo anche in modo diverso. Lo stato è una descrizione della ricetta applicata al sistema.
> Ma quando la misuro, che valore ottengo? Non lo so: lo posso sapere solo in media, è per quello che spesso si parla di un ensemble di misure.
>
> Gli possiamo associare una decomposizione spettrale chiamata $M$ formata da $M = \sum_m m P_m$ con $P_m$ proiettore:
> - Quando $P_m$ viene applicato, il risultato della misura sono gli autovalori di $M$
> - Ovvero $M | m \rangle = m | m \rangle$ ($m$ sono gli autovalori di $M$)
> - $m$ con probabilità $p(m) = \langle \phi | P_m | \phi \rangle$
> - Lo stato dopo la misura è 
> 
> $$\frac{P_m | \phi \rangle}{\sqrt{p(m)}} = | m \rangle$$
>
> - $P_m = | m \rangle \langle m |$
>
> Essenzialmente prendo un osservabile e gli pongo una domanda:
> - Qual'è la tua energia? Qual'è la tua posizione? Qual'è il tuo spin? etc.
>
> Lo stato del sistema non è una proprietà del sistema, ma è una proprietà del sistema e dell'osservatore. Quindi se io misuro un sistema, lo stato del sistema cambia.
>
> Quindi abbiamo:
>
> $$
> E(M) = \sum_m m p(m) \\ \ \\
> E(M) = \sum_m m \langle \phi | P_m | \phi \rangle \\ \ \\
> E(M) = \langle \phi | M | \phi \rangle
> $$ 
>
> "Misuro M".
>
> "Misuro nella base $| m \rangle$" $\longrightarrow$ quindi $P_m = | m \rangle \langle m |, M = \sum_m m P_m$
>
> Avendo $\sigma_x, \sigma_y, \sigma_z$ come osservabili, possiamo misurare lo spin di un elettrone, ad esempio. Noi abbiamo un vettore $\vec{v} = (v_x, v_y, v_z)$, l'osservazione sarà $v_x \sigma_x + v_y \sigma_y + v_z \sigma_z = \vec{v} \cdot \vec{\sigma}$.

#### 4. Fase

$$
e^{i^{\theta}} | \psi \rangle
$$

Posso misurare questa fase $\theta$?
- No, possiamo misurare una differenza di fase
- La fase globale non possiamo misurarla: la misura avvrrebbe nel modo:

$$
\langle \phi | e^{-i^{\theta}} P_m e^{i^{\theta}} | \psi \rangle = \langle \phi | P_m | \psi \rangle
$$

Quindi la statistica è identica a quella di $| \psi \rangle$.

La fase relativa invece si può misurare, in quanto:

$$
\begin{matrix}
    \frac{|\sigma \rangle + | 1 \rangle}{\sqrt{2}} & \perp & \frac{|\sigma \rangle + e^{i\pi} | 1 \rangle}{\sqrt{2}} \\\\
    |+\rangle & & |-\rangle
\end{matrix}
$$

Come vado a distinguere questi due stati? Con una diversa base.