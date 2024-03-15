# Ripasso scorse lezioni

Abbiamo una funzione $f(x)$ che può essere $costante$ (se per $\forall x \in \mathbb{R}$, $f(x) = c$) oppure $bilanciata$ (se abbiamo un numero finito di $x$ tali che $f(x) = c$ e un numero finito di $x$ tali che $f(x) = d$).

$0 \leq x < 2^n$, abbiamo $2^n$ possibili valori di $f(x)$.

$$
U_f : | x \rangle | 0 \rangle \rightarrow | x \rangle | f(x) \rangle
\\ \ \\
\text{Input: } \left[ \frac{1}{\sqrt{2}} (|0\rangle + |1 \rangle)\right] ^{\otimes n}
\\ \ \\
= \frac{1}{2^{n/2}} \sum_{x=0}^{2^n-1} |x\rangle
$$

Tutti gli input li passo per $[H]$, ovvero la porta di Hadamard, che mi fa avere una sovrapposizione di tutti gli stati.

Infine, applico a tutti gli stati la funzione $U_f$.

Adesso ho come stato del sistema tutti i possibili valori della funzione $f(x)$.

Ci riduciamo dal dover $2^{n-1} + 1$ ricerche in un computer classico a doverne fare solo una.

Questo risulta poco importante per $n$ piccole, ma per $n$ grandi può essere la differenza tra la possibilità di trovare una soluzione in un tempo umano oppure no.

Questo tipo di algoritmo è chiamato $\textbf{algoritmo quantistico}$, in particolare questo è l'algoritmo di Deutsch-Josza.

Una sua versione simile può anche per esempio ritornarti quale percorso scegliere all'interno di un labirinto in modo da trovare la soluzione in un tempo minore.

# Correzione di errori

## Nei computer classici

Il primo e più basilare sistema di prevenzione di errore in un computer classico è:
- Avere una ventola per raffreddare il computer in modo da evitare che si surriscaldi (questo potrebbe causare errori nei calcoli).
  - Possiamo immaginare 0 e 1 come culle di potenziali e, se l'energia aumenta, allora potremmo finire dall'una all'altra e quindi avere errori a caso.

Per la correzione usiamo la ridondanza, ovvero, per esempio:
- Al posto di salvare un bit singolo, lo $0_L$ (0 logico) e $1_L$ (1 logico), salviamo 3 bit per ciascuno, ottenendo: $0_L = (0,0,0), 1_L = (1,1,1)$.
- Se uno dei bit si guasta, allora possiamo usare gli altri due per capire quale era il bit originale.
- La possibilità che 2 o tutti e 3 i bit si flippino è molto bassa.

## Nei computer quantistici

Per mantenere la coerenza quantistica, nei computer di Google e IMB, si usano delle temperature molto basse (vicine allo zero assoluto, circa 15 millikelvin).

Nei computer quantistici che arriveranno a Bologna non ci sarà bisogno di questo tipo di raffreddamento, in quanto si userà il raffreddamento a laser.

$\varepsilon_\tau$ è la probabilità che dopo $\tau$ bit ci sia un flip.

$\varepsilon_\tau << 1$.

Dati 3 bit:
- La possibilità che non ci sia alcun flip è $(1-\varepsilon)^3$.
- La probabilità che ci sia SOLO un flip è $3\varepsilon_\tau(1-\varepsilon)^2$.
- La probabilità che ci siano DUE flip è $3\varepsilon_\tau^2(1-\varepsilon)$.
- La probabilità che ci siano TUTTI e TRE i bit che si flippino è $\varepsilon_\tau^3$.

Anche qua ci fidiamo della maggioranza.

La probabilità che alla fine abbiamo ricostruito il bit corretto è:

$$
P_3 ^{corretto} = 1 - 3\varepsilon_\tau^2(1-\varepsilon) - \varepsilon_\tau^3
$$

Per fare questi calcoli 

La probabilità che 1 bit sia errato è:
$$
P_1 ^{errato} = 1 - \varepsilon_\tau < P_3^{corretto}
$$

Notiamo che quindi c'è un miglioramento, in quanto la probabilità che un bit sia errato è minore della probabilità che 3 bit siano corretti.

### Correzione di errore nel tempo

Immaginiamo di avere una linea temporale che va da 0 a $t$.

Vi sono $N$ suddivisioni, dove ogni suddivisione è lunga $\tau$, quindi $\tau = t/N$.

Ora capiamo $\varepsilon_t \approx 1$, ovvero che la probabilità di errore è 1 man mano che passa il tempo. 

Andiamo a fare un approssimazione di taylor con la quale portiamo $\epsilon_t = e^{-\tau \gamma}$ che diventa, approssimato, $1 - \gamma \tau$, pertanto $\varepsilon_\tau = \gamma \tau$.

$$
1 - \varepsilon_t = (1 - \frac{\gamma t}{N})^{N} \xrightarrow{N \rightarrow \infty}  e^{-\gamma t}
$$

$$
P_3 ^{corretto}(t) = (1 - 3\varepsilon_\tau ^2 + 2\varepsilon_\tau^3)^N = (1 - \frac{3\gamma^2 t^2}{N^2} + \frac{2\gamma^3 t^3}{N^3})^N \xrightarrow{N \rightarrow \infty} 1
$$

### Quali problemi ci sono nel QECC?

Problemi:
- No cloning theorem: non posso clonare un qubit.
  - I qubit logici saranno entangled.
- Misura disturba: se misuro un qubit, allora lo sto disturbando.
- Come applico la maggioranza? Non potendo misurare, non posso sapere quale sia la maggioranza.
- Evoluzione temporale dello stato: lo stato ruota di una piccola $\varepsilon$
  - Da notare che quindi ci possono essere anche *piccoli* errori, non necessariamente un flip.
- Tenere tutto isolatissimo dall'esterno in quanto le interazioni posso far collassare. (Uno dei criteri di Vincenzo, da ricercare se si vuole)
- Cambiamento di fase
  - Per esempio con l'operazioen $Z$, che mi manda $|0\rangle \rightarrow |0\rangle$ e $|1\rangle \rightarrow |-1\rangle$

### Come passo ad avere della ridondanza quantistica?

Uso delle porte CNOT. Immaginiamo di avere 3 *qubit*, di cui 1 è il qubit logico e gli altri due sono i qubit che servono per la ridondanza.

Il primo qubit sarà $\alpha |0\rangle + \beta |1\rangle$, il secondo e il terzo sono $|0\rangle$.

Ora uso una CNOT tra il primo e il secondo, e ottengo: $\alpha |00\rangle + \beta |11\rangle$.

Poi faccio una CNOT tra il primo e il terzo, ottenndo quindi: $\alpha |000\rangle + \beta |111\rangle = \alpha |0\rangle_L + \beta |1\rangle_L$.

Mettiamo ora che arrivi un flip:
- Nessun flip: $\alpha |0\rangle_L + \beta |1\rangle_L = \alpha |000\rangle + \beta |111\rangle$
  - Probabilità di errore: $(1 - \varepsilon_\tau)^3$
- Se c'è un flip sul primo, allora ottengo: $\alpha |100\rangle + \beta |011\rangle$
  - Probabilità di errore: $\varepsilon_\tau(1-\varepsilon)^2$
- Se c'è un flip sul secondo, allora ottengo: $\alpha |010\rangle + \beta |101\rangle$
  - Probabilità di errore: $\varepsilon_\tau(1-\varepsilon)^2$
- Se c'è un flip sul terzo, allora ottengo: $\alpha |001\rangle + \beta |110\rangle$
  - Probabilità di errore: $\varepsilon_\tau(1-\varepsilon)^2$
- Se ci sono due flip, sul primo e sul secondo, allora ottengo: $\alpha |110\rangle + \beta |001\rangle$
  - Probabilità di errore: $\varepsilon_\tau^2(1-\varepsilon)$
- Se ottengo due flip, sul primo e sul terzo, allora ottengo: $\alpha |101\rangle + \beta |010\rangle$
  - Probabilità di errore: $\varepsilon_\tau^2(1-\varepsilon)$
- Se ci sono due flip, sul secondo e sul terzo, allora ottengo: $\alpha |011\rangle + \beta |100\rangle$
  - Probabilità di errore: $\varepsilon_\tau^2(1-\varepsilon)$
- Se ci sono 3 flip, allora ottengo: $\alpha |111\rangle + \beta |000\rangle$
  - Probabilità di errore: $\varepsilon_\tau^3$

Voglio proiettare su degli autospazi che contengano entrambi questi vettori. Voglio distinguere in base alle righe scritte sopra, ma non in base ai singoli componenti $\alpha$ e $\beta$.

Chiamiamo i 3 valori dei qubit come $|x, y, z \rangle$: **misura sindrome** $(y \oplus z, x \oplus z)$ (dove $\oplus$ è l'or esclusivo).