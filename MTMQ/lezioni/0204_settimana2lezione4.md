# Encryption

## Esempio di cifratura asimmetrica e simmetrica classiche

Qua ci viene spiegata la crittografia asimmetrica e simmetrica usate nei computer classici. In particolare fa riferimenti ad Alan Turing, all'RSA e al one time pad.

## Quantum Key Distribution

Distribuisce una chiave, o meglio una sequenza di chiavi. Viene generata in tal modo che una volta passate, in sicurezza a chi deve riceverle, non possono ritrovarla le persone che intercettano la comunicazione.

### BB84

Alice e Bob vogliono avere la stessa identica sequenza di 0 e 1 e che solo loro due la possano avere.

BB84 è il protocollo del quale parleremo: BB perché è stato inventato da Bennet e Brassard, 84 perché è stato inventato nel 1984.

#### 1. Preparazione e trasmissione

Alice ha un insieme di stati:

$$
\{ |0\rangle_z, |1\rangle_z, |0\rangle_x, |1\rangle_x \}
$$

In particolare da notare che $|0\rangle_x$ e $|1\rangle_x$ sono:

$$
|0\rangle_x = \frac{1}{\sqrt{2}} (|0\rangle + |1\rangle)
\\ \ \\
|1\rangle_x = \frac{1}{\sqrt{2}} (|0\rangle - |1\rangle)
$$ 

Ovvero l'equivalente di $|+\rangle$ e $|-\rangle$.

Deve scegleire quali mandare a bob.

Facciamo una tabella:

| Qubit | Bit random | Polarizzazione Random | Stato mandato | Misura scelta da Bob | Risultato ottenuto dalla misura | Discussione pubblica | Auth | Chiave |
|-------|------------|----------------|---------------|------------|---|---|---|---|
| 1     | 0          | $\sigma_x$     | $0\rangle_x$ | $\sigma_z$ | 0 | -  |  |  |
| 2     | 1          | $\sigma_x$     | $1\rangle_x$ | $\sigma_x$ | 1 | ok |   | 1 |
| 3     | 1          | $\sigma_z$     | $1\rangle_z$ | $\sigma_x$ | 1 | -  |   |   |
| 4     | 1          | $\sigma_z$     | $1\rangle_z$ | $\sigma_z$ | 1 | ok | Ho misurato 1 - anche io - ok |  |
| 5     | 0          | $\sigma_x$     | $0\rangle_x$ | $\sigma_x$ | 0 | ok |   | 0 |
| 6     | 0          | $\sigma_z$     | $0\rangle_z$ | $\sigma_x$ | 1 | -  |   |   |
| 7     | 1          | $\sigma_x$     | $1\rangle_x$ | $\sigma_x$ | 1 | ok | Ho misurato 1 - anche io - ok |
| 8     | 0          | $\sigma_z$     | $0\rangle_z$ | $\sigma_z$ | 0 | ok | Ho misurato 0 - anche io - ok |
| 9     | 1          | $\sigma_z$     | $1\rangle_z$ | $\sigma_x$ | 0 | -  |   |   |
| 10    | 0          | $\sigma_z$     | $0\rangle_z$ | $\sigma_z$ | 0 | ok |   | 0 |

#### 2. Misura

Bob sceglie la direzione a caso e misura (o $\sigma_x$ o $\sigma_z$).

Infine, trova appunto un valore (Risultato ottenuto dalla misura). Per quelli per cui ha scelto correttamente la misura, ovvero scelto correttamente $x$ o $z$ (a caso), trova il valore corretto. Per gli altri, trova un valore casuale.

#### 3. Discussione pubblica

Bob annuncia il valore misurato per **tutti** i qubit. Ovvero gli dice se ha scelto $x$ o $z$.

A questo punto Alice annuncia se l'operatore di Bob è lo stesso che ha mandato lei.

Alice e Bob tengono solo i qubit per i quali hanno scelto la stessa misura.

Quindi a questo punto si hanno tutti i Qubit misurati con una certa direzione: l'informazione su quali qubit dovessero venire misurati come $x$ e quali come $z$ è stata definita solo dopo la trasmissione, pertanto Trudy non poteva sapere a priori quali misure avrebbe dovuto fare.

#### 4. Autenticazione

A questo punto loro scelgono un sottoinsieme dei Qubit che sono rimasti (nel nostro caso è rimasto un sottoinsieme formato dal 2°, 4°, 5°, 7°, 8°, 10° qubit). Scegliamo per esempio il sottoinsieme formato dal 4°, 7°, 8° (scelto casualmente).

#### Effetto delle intercettazioni

Notiamo che Trudy vuole la chiave: trovarla è estremamente complicato, in quanto non si sa ne quali misure fare ne quali sono il sottoinsieme scelto da Bob.

L'obbiettivo di Trudy è avere l'informazione della chiave, ovvero avere gli stessi bit, senza che Alice e Bob sappiano che lei li ha.

Esempio:
- Alice manda $|0\rangle_x$.
- Supponiamo che Trudy scelga $\sigma_x$ per la misura, quindi poi passa le cose corrette a Bob: $\sigma_x \rightarrow |0\rangle_x \rightarrow Bob$. Succede con probabilità 1/2.
- Supponiamo che Trudy scelga $\sigma_z$ invece per la misura, anche questo ha probabilità di 1/2. A questo punto può finire nello stato $|0\rangle_z$ o $|1\rangle_z$, etrambi con 1/2 di probabiità.
- Immaginiamo che Bob scelga $\sigma_x$ per la misura. A questo punto, se Trudy ha scelto $\sigma_z$, allora Bob troverà un valore casuale, e non quello che Alice ha mandato. Potrebbe trovare $|0\rangle_x$ o $|1\rangle_x$ con probabilità 1/2.
- In metà dei casi, Bob trova il valore corretto rispetto a come è stato mandato da Alice. In metà dei casi, Bob trova un valore sbagliato.
- L'autenticazione quindi può andare male:
  - C'è una probabilità di 3/4, per 1 bit, che Trudy riesca a passare inosservato nella misurazione e nell'ottenimento dell'informazione.
  - Per $n$ bit, la probabilità che Trudy passi inosservato è $\left( \frac{3}{4} \right) ^n$.
  - Notiamo che per $n \rightarrow \infty$, la probabilità che Trudy passi inosservato è 0.
- Quindi Trudy può impedire la comunicazione, ma non potrà andare a ottenre l'informazione.