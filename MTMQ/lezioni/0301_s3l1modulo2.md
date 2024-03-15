# Modulo 2

## Cosa si farà

Andiamo a capire come e dove possiamo andare a fare test di laboratorio. In particolare, andremo a vedere come possiamo fare test di laboratorio per la realizzazione di un computer quantistico.

Questa parte non segue un libro di testo, in quanto si parla di esperimenti. Quindi ci saranno gli appunti caricati su Virtuale della lezione.

Questi esperimenti sono di ottica o di fisica atomica. Spesso ci saranno riferimenti a questi concetti, ma non è necessario conoscerli per capire il corso.

L'argomento sarà, per le prime lezioni, il **teletrasporto quantistico**.

## 1. Teletrasporto quantistico

Cosa si intende?

> Per **teletrasporto quantistico** si intende il trasferimento dello stato quantistico di un *qubit*.

Non si intende una trasmissione di materia, ma solo di informazione, tra due qubit separati fisicamente, ma il cui stato di uno va ad influenzare l'altro.

### 1.1. Quali saranno i qubit utilizzati

Useremo dei Qubit che sono **fotoni**: prendiamo un campo elettrico $\vec{E}$. Lo rappresentiamo nella rappresentazione compessa, ovvero:

$$
\vec{E} = \vec{E}_0 \vec{\epsilon} e^{i(\vec{k}z - \omega t)} + c.c. \quad \text{con } c.c. \text{ che sta per complesso coniugato } \vec{\epsilon} + k \hat{z}
\\ \ \\
= \vec{E}_0 [\hat{x} cos \theta e^{i (kz - \omega t)} + \hat{y} sin \theta e^{i (kz - \omega t + \phi)}] + c.c.
\\ \ \\
= \vec{E}_0 e^{i (kz - \omega t)} [\hat{x} cos \theta + \hat{y} sin \theta e^{i\phi}] + c.c.
\\ \ \\
\epsilon \text{ vettore in spazio tridimensionale con } base={\hat{x}, \hat{y}}
$$

Quindi qualsiasi campo elettrico può essere rappresentato come una combinazione lineare di due campi elettrici, uno in fase e uno in controfase.

Il nostro versore di polarizzazione sarà:

$$
\vec{\epsilon} = \hat{x} cos \theta + \hat{y} sin \theta e^{i\phi}
$$

Possiamo associare ai due versori i due vettori nello spazio di Hilbert che rappresentano i due stati di polarizzazione di un fotone:

$$
\ket{0} = \hat{x} \quad \text{e} \quad \ket{1} = \hat{y}
$$

Quindi possiamo andare a riscrivere lo stato di polarizzazione nel seguente modo:

$$
\vec{\epsilon} = cos \theta \ket{0} + sin \theta e^{i\phi} \ket{1}
$$

Potevamo anche scrivere $\theta/2$ in quanto un incremento di $\theta + \pi$ porta ad un cambio di segno, ovvero $\ket{\vec{\epsilon}} = -\ket{\vec{\epsilon}}$.

Quello che ci facciamo in meccanica quantistica con un campo elettrico sarà quello di farci degli operatori.

Noi parleremo genericamente di fotoni, ma i fotoni sono un quanto di eccitazione del campo elettromagnetico, che in meccanica quantistica è analogo ad un oscillatore armonico.

Un fotone quindi vive in uno spazio di Hilbert a due dimensioni, e da ora in poi lo chiameremo **qubit** e lo useremo. L'unica base che useremo sarà quella di polarizzazione (quella con $\ket{0}$ e $\ket{1}$).

Usiamo i fotoni nello spazio di Hilber per due motivi:
- Le sovrapposizioni sono molto "resistenti" nel tempo, in quanto interagiscono poco e si muovo velocemente. Quindi la loro coerenza della loro combinazione lineare è ottima.
- Sono quindi ottimi qubit per trasmettere informazioni, ma sono difficili da manipolare, quindi non sono ottimi per andare ad eseguire delle computazioni.

### 1.2. Come si fa una misura di polarizzazione

Una misura di polarizzazione si fa con un polarizzatore:

> Un **polarizzatore** è elemento ottico (per esempio un cubetto di vetro, un vetrino, uno specchietto, etc.) che assorbe fotoni con una certa polarizzazione $\hat{x}$ e trasmette i fotoni con polarizzazione $\hat{y}$. Chiamo questo quindi un polarizzatore $\pi_y$.

Se noi abbiamo $\ket{\vec{\epsilon}} = cos \theta \ket{0} + sin \theta e^{i\phi} \ket{1}$, allora dopo il polarizzatore, abbiamo:

$$
\pi_y \ket{\vec{\epsilon}} = \ket{1} \bra{1} \ket{\vec{\epsilon}} = sin \theta e^{i\phi} \ket{1}
$$

La probabilità che un fotone attraversi un polarizzatore $\hat{y}$ è dato dalla regola di Born:

$$
P(\hat{y}) = |\bra{\vec{\epsilon}} \pi_y \ket{\vec{\epsilon}}|^2
$$

I polarizzatori sono quelli che si usano per fare misure proiettive dello stato di polarizzazione dei fotoni.

Il polarizzatore fa passare il protone, poi dobbiamo usare qualcosa per misurare se è passato o meno:
- Abbiamo un polarizzatore ed un **rivelatore**
- Per noi il rilevatore è super basico: fa "click" quando arriva il fotone. Un rivelatore è qualcosa che trasforma un fotone assorbito in una corrente elettrica.

> Le misure di polarizzazione sono quindi misure proiettive in cui abbiamo un polarizzatore e un rivelatore.

Per ora andiamo a supporre che il rivelatore sia perfetto e non ci siano problemi (più avanti andremo a vedere le disuaguaanze di Bell).

## 2. Esperimento del teletrasporto di Vienna (1997)

L'esperimento del teletrasporto consiste nel trasferire lo stato di un Qubit (che è un fotone) da Alice a Bob.

> Ci sono Alice e Bob che sono "distanti" (nell'esperimento che analizziamo sono vicini, ma oggi sono stati portati anche a centinaia di km) e Alice vuole trasferire istantaneamente lo stato di un qubit a Bob.

Attenzione: **non si viola il no-cloning theorem**: per trasferire lo stato di un qubit da Alice a Bob, Alice deve distruggere il suo qubit.

L'esperimento è stato fatto per la prima volta nel 1997 a Vienna, da Zeilinger e colleghi. Vinsero il premio Nobel nel 2022 per questo esperimento. Più o meno negli stessi mesi in cui è stato pubblicato questo esperimento, è stato pubblicato anche l'esperimento da parte di De Martini, che è molto più complicato da capire.

Questo articolo dell'esperimento sarà presente nell referenze.

### 2.1. Protocollo di Bennett

Anche questo un articolo che si può trovare nelle referenze. Si tratta di un articolo proposto da Bennet et al., PRL 70, 1985 (1993).

Cosa prevede?

> Ci sono A(lice) e B(ob).
>
> Alice ha un qubit:
> $$
> \ket{q_1} = \alpha \ket{0}_1 + \beta \ket{1}_1, \quad \text{fotone iniziale di Alice}
> $$
>
> Bob deve trovarsi questo stato alla fine del protocollo, ed è lo stato che Alice cerca di trasmettere a Bob.
>
> Alla fine del protocollo, si ha:
> $$
> \ket{q_3} = \alpha \ket{0}_3 + \beta \ket{1}_3, \quad \text{fotone finale di Bob}
> $$
>
> Il protocollo di Bennet prevede:
> 1. Creazione di una **coppia di fotoni entangled**, in un particoalre stato di Bell:
> $$ \ket{\Phi^-}_{23} = \frac{1}{\sqrt{2}} [\ket{1}_{2} \ket{0}_3 - \ket{0}_{2} \ket{1}_3] \\ \ \\ \text{di cui Alice prende il fotone } \ket{q}_2 \text{ e Bob prende il fotone } \ket{q}_3 $$
> 2. A questo punto, Alice ha due fotoni: il fotone $\ket{q}_1$ che è quello che vuole trasmettere e il fotone $\ket{q}_2$ che è quello entangled con il fotone di Bob.
> 3. Alice esegue una "misura di Bell" sui fotoni $\ket{q}_1$ e $\ket{q}_2$. Una misura di Bell è una misura i cui proiettori sono gli stati di Bell:
> $$ \{ \ket{\phi^-}_{12} \bra{\psi^-}, \ket{\psi^-}_{12} \bra{\psi^-}, \ket{\phi^+}_{12} \bra{\phi^+}, \ket{\psi^+}_{12} \bra{\psi^+} \} $$
> In particolare 
> $$\ket{\phi^+}_{12} = \frac{1}{\sqrt{2}} [\ket{0}_1 \ket{0}_2 + \ket{1}_1 \ket{1}_2] \\ \ket{\psi^+}_{12} = \frac{1}{\sqrt{2}} [\ket{0}_1 \ket{1}_2 + \ket{1}_1 \ket{0}_2] \\ \ket{\phi^-}_{12} = \frac{1}{\sqrt{2}} [\ket{0}_1 \ket{0}_2 - \ket{1}_1 \ket{1}_2] \\ \ket{\psi^-}_{12} = \frac{1}{\sqrt{2}} [\ket{0}_1 \ket{1}_2 - \ket{1}_1 \ket{0}_2] $$
> 
> Nel protocollo di Bennet dovrebbe fare una misura di Bell, ovvero proiettare su questi stati: pertanto gli esiti sono 4 possibili, ma nell'esperimento non c'è tutta questa risoluzione, ma è in grado di proiettare unicamente su uno degli stati di Bell, ovvero $\ket{\Phi^-}_{12}$.
>
> 4. Alice comunica a Bob l'esito della misura di Bell, in base al quale Bob esegue un operazione unitaria $\ket{q}_3$. Dopo aver eseguito questa operazione unitaria, lo stato di Bob sarà esattamente quello che Alice voleva trasmettere, ovvero $\ket{q}_1$. Nel caso l'esito è uguale a $\ket{\Phi^-}_{12}$, Bob non deve fare nulla (L'operazione unitaria è l'identità). Nel caso l'esito è $\ket{\Phi^+}_{12}$, Bob deve fare una porta $X$ (porta di Pauli $X$). Nel caso l'esito è $\ket{\Psi^-}_{12}$, Bob deve fare una porta $Z$ (porta di Pauli $Z$). Nel caso l'esito è $\ket{\Psi^+}_{12}$, Bob deve fare una porta $X$ e poi una porta $Z$.
>
> Quindi Alice ha:
> - Un qubit iniziale $\ket{q}_1$
> - Una coppia di fotoni entangled $\ket{\Phi^-}_{23}$
> - In totale ha 3 qubit:
>   - $$\ket{\varphi}_{123} = \ket{q}_1 \otimes \ket{\Phi^-}_{23}$$
>   - $$= 1/\sqrt{2} [\alpha \ket{1} \ket{1} \ket{0} - \alpha \ket{1} \ket{0} \ket{1} + \beta \ket{0} \ket{1} \ket{0} - \beta \ket{0} \ket{0} \ket{1}]$$
>   - $$= \frac{1}{2} \alpha[ \ket{\psi^+} + \ket{\psi^-} ]_{12} - \frac{1}{2} \alpha [ \ket{\phi^+} - \ket{\phi^-} ]_{12} + \frac{1}{2} \beta [ \ket{\psi^+} - \ket{\psi^-} ]_{12} - \frac{1}{2} \beta [ \ket{\phi^+} + \ket{\phi^-} ]_{12}$$
>   - A questo punto devo raccogliere tutti gli stati, a me interessa quello di $\ket{\phi^-}_{12}$, quindi faccio:
>   - $$\frac{1}{2} \ket{\phi^-}_{12}( - \alpha \ket{1}_3 - \beta \ket{0}_3 ) + \frac{1}{2} \ket{\phi^+}_{!2} ...$$
>
> Quindi Bob sarà sempre in grado di ricostruire lo stato di Alice, anche se non sa nulla di $\alpha$ e $\beta$.

### 2.2. Parte sperimentale

Ci interessano 2 cose: come generare la coppia di fotoni entangled e come si esegue la misura di Bell.

#### 2.2.1. Misura di Bell

Come si esegue? Usando un **"beam-splitter"**, ovvero uno specchio parzialmente riflettente, ovvero uno specchio che a volte viene attraversato e a volte viene riflettuto, ma nulla viene assorbito.

Nelle slide viene fatto un disegno: si tratta di un rettangolo a 45° (partendo da orizzontale con ancora di rotazione a sinistra e in senso antiorario), con fotoni che arrivano da sinistra e o passano indisturbati o vengono riflessi in alto.

In particolare:
- Sia $A_1$ l'ambiezza del campo elettrico incidente sul beam-splitter
- Sia $B_1$ l'ampiezza del campo elettrico trasmesso
- Sia $B_2$ l'ampiezza del campo elettrico riflesso

In genere in ottica queste ampiezze sono proporzionale alle ampiezze moltiplicati per un coefficiente, ovvero:

$$
B_1 = t A_1, \quad B_2 = r A_1
\\ \ \\
\text{Con t e r coefficienti di trasmissione e riflessione}
$$

In assenza di assorbimento, si conserva l'energia, ovvero:

$$
|A_1|^2 = |B_1|^2 + |B_2|^2
\\ \ \\
\text{Con } |t|^2 + |r|^2 = 1
$$

Fintanto che qualcuno ha stati con tanti fotoni, essi sono descritti ragionevolmente da queste descrizioni classiche. Tuttavia queste descrizioni classiche non vanno bene, e dobbiamo usare degli operatori, quando abbiamo pochi fotoni (nell'ordine di 0 o 1 fotoni): gli effetti quantistici diventano importanti.

Quando passo da una descrizione classica ad una descrizione quantistica, passo agli operatori:

$$
A_1 \rightarrow \hat{a}_1 \text{ operatore di distruzione di un foto nel modo "1", in ingresso}
\\ \ \\
B_1 \rightarrow \hat{b}_1 \text{ operatore di distruzione di un foto nel modo "1", in uscita}
\\ \ \\
B_2 \rightarrow \hat{b}_2 \text{ operatore di distruzione di un foto nel modo "2", in uscita}
$$

Da notare:
- Per *modo* di un fotone si intende la direzione del fotone.
- "Operatore di distruzione di un fotone nel modo 1" vuol dire che si tratta di un fotone che viene distrutto nel modo incidente.
- "in ingresso" e "in uscita" sono arbitrari, nel nostro caso abbiamo tracciato una linea tratteggiata che ci dice che il fotone è in ingresso. (Si tratta di una linea posizionata in modo perpendicolare al beam-splitter)

Adesso vogliamo scrivere delle analogie al caso classico, ovvero, per esempio: $\hat{b}_1 = t \hat{a}_1$. Ma questa cosa non si può fare: questi operatori di creazione e distruzione non commutano con il loro Hermitiano coniugato, ovvero:

$$
[\hat{a}_1, \hat{a}_1^\dagger] = 1
$$

Notiamo che quindi non fanno 0, ovvero non commutano. Questa cosa non vale neanche per $\hat{b}_1$ e $\hat{b}_1^\dagger$ e neanche per $\hat{b}_2$ e $\hat{b}_2^\dagger$.

Tra l'altro, piccola nota, $\hat{a}_1^\dagger$ è l'operatore di creazione di un fotone nel modo "1".

Ci sono certe regole di commutazione che quindi devono essere soddisfatte su questi operatori, e questo ci dice che non possiamo andare a traslare le regole classiche in regole quantistiche, in quanto sono incomplete.

Da notare che però invece $[a_1, b_1] = 0 = [a_1, b_2] = [a_1, b_1^\dagger]=[a_1, b_2^\dagger]$

Se:
- $\hat{b}_1 = t \hat{a}_1 + r \hat{a}_2$, allora $[\hat{b}_1, \hat{b}_1^\dagger] = [t \hat{a}_1, t^* \hat{a}_1^\dagger] = |t|^2$
- Ma abbiamo che $|t|^2$ è 1, e possiamo anche calcolare che andremmo ad avere $|r|^2 = 1$, quindi la loro somma farebbe 2, che non va bene.

Ma quindi perché? Perché ci sono due parti di entrata: c'è anche $A_2$, che viene dal basso. Nella parte classica si può ignorare, assumendo sia 0, ma nella parte quantistica no, non è possibile pensare che non ci sia nulla: il campo magnetico può essere sollecitato casualmente. Nelle note, dopo questa rivelazione, c'è un completamento a posteriori fatto con il colore rosso che va a correggere la nostra assunzione iniziale.

Quindi ora abbiamo che:
- $\hat{b}_1 = t \hat{a}_1 + r' \hat{a}_2$
- $\hat{b}_2 = r \hat{a}_1 + t' \hat{a}_2$

E pertanto abbiamo che:
- $[\hat{b}_1, \hat{b}_1^\dagger] = [t \hat{a}_1 + r' \hat{a}_2, t^* \hat{a}_1^\dagger + r'^* \hat{a}_2^\dagger] = |t|^2 + |r'|^2$
- $[\hat{b}_2, \hat{b}_2^\dagger] = [r \hat{a}_1 + t' \hat{a}_2, r^* \hat{a}_1^\dagger + t'^* \hat{a}_2^\dagger] = |r|^2 + |t'|^2$
- $[b_1, b_2^\dagger] = 0 = [b_1, b_2] = [b_1, b_1^\dagger] = [b_2, b_2^\dagger]$

La conservazione dell'energia ci dice che $|t|^2 + |r|^2 = 1$ e $|t'|^2 + |r'|^2 = 1$. 

Le regole di commutazione ci dicono anche che $|t|^2 + |r'|^2 = 1$ e $|r|^2 + |t'|^2 = 1$ e anche che $tr^* + r't'^* = 0 \rightarrow$ ovvero che: $|r| = |r'|$ e $|t| = |t'|$, con $t, t'$ che è sempre possibile siano reali. (da fidarsi su queste ultime cose.) L'ultima condizione è che $r^* +r'=0$.

Mettiamo insieme tutte queste condizioni e scriviamo che:

$$
\begin{equation}
\begin{cases}
\hat{b}_1 = cos \theta \hat{a}_1 + sin \theta e^{i\psi} \hat{a}_2
\\
\hat{b}_2 = -sin \theta e^{-i\psi} \hat{a}_1 + cos \theta \hat{a}_2
\end{cases}
\end{equation}
$$

Dove abbiamo che $t = cos \theta$ e $r = - sin \theta e^{-i\psi}$, e che $t' = cos \theta$ e $r' = sin \theta e^{i\psi}$.

Quello che ci dice che quando due fotoni arrivano su un beam-splitter, essi fanno interferenza ed escono tutti e due dalla stessa parte.