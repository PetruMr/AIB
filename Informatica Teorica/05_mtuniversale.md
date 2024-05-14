# Macchina di Turing universale

Il materiale di questa lezione si può trovare [qua](https://virtuale.unibo.it/pluginfile.php/1762951/mod_resource/content/2/lezione5.pdf)

In questa lezione andiamo a definire un concetto molto importante: la possibilità di una macchina di Turing **universale** (UTM).

## 1 ⋅ Programmi universali

Partiamo da un esempio:
- **Word**, il software di Windows, ci permette di aprire:
  - File di testo ".doc"
  - Ma anche qualsiasi altro file, per esempio un file ".pdf", ".jpg", ".mp3" o ".exe"
  - Non sa bene come eseguire questi ultimi file, ma è comunque predisposto a ricevere qualsiasi tipo di input.
  - Può eseguire **qualsiasi file** in input.
  - Può anche **eseguire se stesso**

Ricapitoliamo quindi:
1. Qualsiasi programma può eseguire qualsiasi file come input (sebbene l'output corrispondente non sarà interessante a meno che l'input è di un formato pensato per essere eseguito da quel programma)
2. I programmi sono file come gli altri. Quindi un programma può ricevere altri programmi come input.
3. Un programma può addirittura ricevere il suo stesso codice come input.

### 1.1 ⋅ Definizione

Un **programma universale** è un programma pensato per ricevere altri programmi come input ed eseguirli.

Dato un programma $P$ ed un input $x$ come input $1$ e $2$, il programma universale ha come output $P \text{ su } X$.

I *sistemi operativi* sono esempi di programmi universali, ai quali per esempio si da in pasto Word e un file ".doc" e si ottiene come output la visualizzazione del file in Word.

Un **interprete**, tipo Python, è un altro esempio di programma universale, al quale si dà in pasto il programma Python e un input e si ottiene l'output di P su x.

### 1.2 ⋅ Storia

Prima si andavano a costruire macchine a **singolo compito**, ovvero eseguire un determinato programma.

Le macchine **multi-uso** sono una cosa moderna e derivano dal capire che non c'è differenza tra programme ed i suoi dati.

Una **macchina universale** è una che è in linea di principio capace di riprodurre qualsiasi algoritmo (è programmabile).

## 2 ⋅ Godelizzazione

Gödel ha dimostrato che è possibile codificare le formule della logica proposizionale in numeri.

Per estensione, possiamo codificare qualsiasi cosa in numeri.

Pertanto anche una macchina di Turing può essere codificata come input di altre macchine di Turing.

## 3 ⋅ Macchina di Turing universale

La **UTM** prende come input una stringa $y$.

Per prima cosa, verifica che $y$ sia della forma $\text{code}(\mathcal{M})\text{code}(x)$, dove per $\text{code}(-)$ è una codifica, $\mathcal{M}$ è una macchina di Turing e $x$ è una stringa nell'alfabeto di input $\Sigma_|$ di $\mathcal{M}$.

Essenzialmente:
- Si da $y$ alla **UTM**
- La **UTM** verifica se $y = \text{code}(\mathcal{M})\text{code}(x)$ per qualche $\mathcal{M}$ e $x$
  - Se non è così, la **UTM** si cicla all'infinito
- Se è così, la **UTM** esegue $\mathcal{M}$ su $x$
- Se $\mathcal{M}$ si ferma su $x$, la **UTM** si ferma e restituisce l'output di $\mathcal{M}$ su $x$
- Se $\mathcal{M}$ non si ferma su $x$, la **UTM** si cicla all'infinito

### 3.1 ⋅ Teorema

Il teorema di **Turing** dice che esiste una macchina di Turing universale.

### 3.2 ⋅ Dimostrazione

Lo dimostreremo costurendone noi stessi una, così come fece Turing.

Ci concentriamo quindi sulla definizione di $\text{code}(-)$.

Tradurrà una TM in una string su alfabeto $\{0, 1\}$.

Nota: si sono diversi modelli che fanno questa operazione, ne useremo uno particolare ma non unico.

#### Convenzioni

Andiamo a definire alcune convenzioni:
- Gli stati in $Q$ sono ordinati come $q_0, q_1, q_2, ...$ con $q_0$ lo stato iniziale
- Ordiniamo i simboli che possono apparire nella definizione di $\delta$:
  - $\sigma_0 = \sqcup$
  - $\sigma_1 = \rightarrow$
  - $\sigma_2 = \leftarrow$
  - E gli altri simboli in $\Sigma$ come $\sigma_3, \sigma_4, ...$

Possiamo codificare gli stati ed i simboli con le stringhe unarie:

$$
\begin{align*}
\text{code}(q_i) & = 1^{i+1}
\\
\text{code}(\sigma_i) & = 1^{i+1}
\end{align*}
$$

#### Codifica

Sia la TM $\mathcal{M} = \langle \Sigma, Q, q_0, H, \delta\rangle$

- Codifichiamo una tupla $t = (q, \sigma, q', \sigma', d)$ come $\text{code}(q)0\text{code}(\sigma)0\text{code}(q')0\text{code}(\sigma')0\text{code}(d)0$
- Tutta la funzione di transizione $\delta = \{t_1, t_2, ..., t_n\}$ come $\text{code}(t_1)0\text{code}(t_2)0...\text{code}(t_n)0$
- Possiamo dedurre quali sono gli stati finali di $H$: sono quelli su cui $\delta$ non è definita (= non occorrono mai in prima posizione in una tupla)

Gli input possono essere codificati nello stesso modo:
- $\text{code}(x) = \text{code}(\sigma_{i1} \sigma_{i2}...) = 00\text{code}(\sigma_{i1})0\text{code}(\sigma_{i2})...$

#### Osservazioni

- E' possibile che ci siano due o più macchine di Turing che computino la stessa fuznione, ma le codifiche saranno diverse.
- La codifica è **iniettiva**, ovvero non ci sono due macchine diverse che vengono codificate nello stesso modo.
- Data una stringa su $\{0, 1\}$, è possibile determinare se sia o meno il codice di una TM (e di quale). In particolare, è un problema **decidibile** (ovvero si ferma sia per il YES che per il NO).

#### Costruzione

La UTM è definita come una macchina di Turing con tre nastri:
1. Manterrà il nastro di $\mathcal{M}$ (che è finito) in forma codificata
2. Manterrà $\text{code}(\mathcal{M})$
3. Manterrà lo stato corrente di $\mathcal{M}$ in forma codificata.

#### Esecuzione

Setup:
1. Passo di preparazione: verifico che $y$ sia della forma $\text{code}(\mathcal{M})\text{code}(x)$ per qualche TM $\mathcal{M}$ e input $x$. Se no, cicla. Se si, allora nastro 1 contiene $\text{code}(\mathcal{M})\text{code}(x)$. Vai al passo 2.
2. Sposta $\text{code}(\mathcal{M})$ su nastro 2 e $\text{code}(q_0)$ su nastro 3. Ora su nastro 1 c'è solo $\text{code}(x)$.
3. Posiziona testina 1 sul primo simbolo di $\text{code}(x)$ e testina 2 sul primo simbolo di $\text{code}(\mathcal{M})$ e la testina 3 sul primo simbolo di $\text{code}(q_0)$.

Un passo della simulazione:
1. Cerca in $\text{code}(\mathcal{M})$ una tupla che abbia come stato corrente quello su nastro 3 e come simbolo corrente quello su nastro 1.
2. Aggiorna nastro 1 con il simbolo successivo e nastro 3 con lo stato successivo.
3. Se lo stato è finale, fermati

### 3.3 ⋅ Considerazioni finali

Questa costruzione mostra l'esistenza di una macchina di Turing universale, $\mathcal{M}_U$.

Niente impedisce a $\mathcal{M}_U$ di eseguire se stessa.

Questo forma di autoreferenzialità sarà utilizzata nella prossima lezione per dimsotrare che esiste un problema indecidibile.