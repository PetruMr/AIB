# Haltin problem

## 1 ⋅ Introduzione

Gli argomenti di questa lezione si trovano [qua](https://virtuale.unibo.it/pluginfile.php/1762952/mod_resource/content/2/lezione6.pdf)

Fin'ora abbiamo studiato cosa possono fare le TM:
- Decidere o riconoscere problemi (linguaggi)
- Simulare altri modelli di calcolo, tra cui le macchine a registri e i linguaggi di programmazione di alto livello
- Essere "universali" e quindi programmabili

Ora invece andremo a vedere cosa **non possono fare** le TM.

In particolare andiamo a introdurre il primo problema **indecidibile**: il problema della **fermata** (*halting problem*).

Questo risultato ci informa più in generale sui limiti della computazione per algoritmi.

## 2 ⋅ Ripasso

Andiamo a rivedere le definizioni:
- Una TM $\mathcal{M}$ **decide** un linguaggio $L$ se:
  - Quando $x\in L$, allora $\mathcal{M}$ accetta $x$ (si ferma nello stato $Y$)
  - Quando $x\not\in L$, allora $\mathcal{M}$ rifiuta $x$ (si ferma nello stato $N$)
- Una TM $\mathcal{M}$ **riconosce** un linguaggio $L$ se:
  - Quando $x\in L$, allora $\mathcal{M}$ accetta $x$ (termina)
  - Quando $x\not\in L$, allora $\mathcal{M}$ non accetta $x$ (non termina)

## 3 ⋅ Gradi di (in)calcolabilità

Abbiamo 3 diversi "gradi":

| Tipo | Descrizione |
|-----------------------|---------------------------------------------------------|
| Decidibile da una TM | Calcolabile (c'è un algoritmo che risponde "Si" o "No") |
| Riconoscibile da una TM (ma non decidibile) | Non calcolabile (Semi-calcolabile: c'è un algoritmo che risponde "Si", ma non "No") |
| Non riconoscibile da una TM | Non calcolabile (Qualsiasi algoritmo fallirà nel dare sia le risposte "Si" che "No") |

### 3.1 ⋅ Problema non decidibile

Andiamo a dimostrare l'esistenza di un problema del primo tipo di non calcolabilità, ovvero **non decidibile**.

Prima di tutto, supponiamo che esissta una codifica $\text{code}(-)$:

$$
\text{TM su alfabeto } \Sigma \xrightarrow{\text{code}(-)} \text{Stringhe } x \in \Sigma^*
$$

La codifica usata per definire la macchina di Turing universale è un esempio di tale procedura. (L'espressione prima ci descrive la procedura di trasformare una macchina di turing, che è definita su un alfabeto $\Sigma$ e trasformarla in una stringa $x$ appartenenete all'insieme delle stringhe formate dall'alfabeto $\Sigma$)

> Definiamo il linguaggio del **problema della fermata**:
>
> $$
> \text{HALT} = \{ \langle y, x \rangle \in \Sigma^* \times \Sigma^* \mid y = \text{code}(\mathcal{M}) \text{ e } \mathcal{M} \text{si ferma su } x \}
> $$
>
> **Teorema**: il problema della fermata è *riconoscibile* ma non è *decidibile*

#### 3.1.1 ⋅ Dimostraziones

Andiamo quindi a dimostrare che $HALT$ è riconoscibile.

La dimostrazione di questo è semplice, dobbiamo descrivere come andremmoa costruire una TM che riconosce HALT:
- Lo facciamo creando una simulazione di $\mathcal{M}$ su $x$ con una macchina di Turing $\mathcal{M}_1$, la quale è una macchina di Turing universale

Adesso andiamo invece a dimostrare l'altra parte del teorema, ovvero che HALT **non è decidibile**. Faremo la nostra dimostrazione **per contraddizione**.

Assumiamo che HALT sia decidibile e chiamiamo $\mathcal{M}_H$ la TM che lo decide.

Perciò $\mathcal{M}_H$ si comporterà come segue:
- Se $y = \text{code}(\mathcal{M})$ per qualche $\mathcal{M}$:
  - Accetta se $\mathcal{M}$ si ferma su $x$
  - Rifiuta se $\mathcal{M}$ non si ferma su $x$

Possiamo andare a definire una nuova TM $\mathcal{M}'$ che si comporta come segue:
- Dato $z \in \Sigma^*$ come input:
  - Simula $\mathcal{M}_H$ su $\langle z, z \rangle$
  - Se $\mathcal{M}_H$ accetta, allora $\mathcal{M}'$ si cicla all'infinito
  - Se $\mathcal{M}_H$ rifiuta, allora $\mathcal{M}'$ si ferma

Proviamo ora ad eseguire $\mathcal{M}'$ su input $\text{code}(\mathcal{M}')$:
- Diamo a $\mathcal{M}'$ la sua stessa codifica come input
  - Simula $\mathcal{M}_H$ su $\langle \text{code}(\mathcal{M}'), \text{code}(\mathcal{M}') \rangle$
  - Se $\mathcal{M}_H$ accetta, allora $\mathcal{M}'$ si cicla all'infinito
  - Se $\mathcal{M}_H$ rifiuta, allora $\mathcal{M}'$ si ferma

Quindi adesso andiamo ad eseguire i singoli passaggi logici, andando per casi:

$$
\begin{align*}
& \text{Se } \mathcal{M}_H \text{ accetta } \langle \text{code}(\mathcal{M}'), \text{code}(\mathcal{M}') \rangle
\\ \ \\
& \quad \quad \Downarrow (\text{per definizione di } \mathcal{M}')
\\ \ \\
& \mathcal{M}' \text{ non ferma su } \text{code}(\mathcal{M}')
\\ \ \\
& \quad \quad  \Downarrow (\text{per definizione di HALT})
\\ \ \\
& \langle \text{code}(\mathcal{M}'), \text{code}(\mathcal{M}') \rangle \not\in HALT
\\ \ \\
& \quad \quad  \Downarrow (\text{per definizione di } \mathcal{M}_H)
\\ \ \\
& \mathcal{M}_H \text{ rigetta } \langle \text{code}(\mathcal{M}'), \text{code}(\mathcal{M}') \rangle
\end{align*}
$$

Ora facciamo il ragionamento partendo dalla considerazione che "rigetti":

$$
\begin{align*}
& \text{Se } \mathcal{M}_H \text{ rigetta } \langle \text{code}(\mathcal{M}'), \text{code}(\mathcal{M}') \rangle
\\ \ \\
& \quad \quad \Downarrow (\text{per definizione di } \mathcal{M}')
\\ \ \\
& \mathcal{M}' \text{ ferma su } \text{code}(\mathcal{M}')
\\ \ \\
& \quad \quad  \Downarrow (\text{per definizione di HALT})
\\ \ \\
& \langle \text{code}(\mathcal{M}'), \text{code}(\mathcal{M}') \rangle \in HALT
\\ \ \\
& \quad \quad  \Downarrow (\text{per definizione di } \mathcal{M}_H)
\\ \ \\
& \mathcal{M}_H \text{ accetta } \langle \text{code}(\mathcal{M}'), \text{code}(\mathcal{M}') \rangle
\end{align*}
$$

L'unica assunzione usata per costruire $\mathcal{M}'$ è che $\mathcal{M}_H$ sia una TM che decide HALT.

Pertanto $\mathcal{M}_H$ non può esistere: HALT è indecidibile.

### 3.2 ⋅ Problema non riconoscibile

> **Teorema**: il complemento $HALT^-$ del problema della fermata non è riconoscibile da nessuna TM.
>
> In particolare lo definiamo a partire da HALT:
>
> $$
> \text{HALT} = \{ \langle y, x \rangle \in \Sigma^* \times \Sigma^* \mid y = \text{code}(\mathcal{M}) \text{ e } \mathcal{M} \text{ si ferma su } x \}
> $$
>
> E quindi abbiamo:
>
> $$
> \text{HALT}^- = \{ \langle y, x \rangle \in \Sigma^* \times \Sigma^* \mid y \neq \text{code}(\mathcal{M}) \text{ per qualsiasi } \mathcal{M} \text{ oppure } y = \text{code}(\mathcal{M}) \text{ e } \mathcal{M} \text{ non si ferma su } x \}
> $$

**Nota:** non capivo in che modo la prima parte dell'oppure non fosse riconoscibile: apparenetemnte non si possono andare a riconoscere tutte le $y$ che **non** codificano una TM, in quanto una codifica infinita che quindi non è di una TM (visto che sono finite) non verrebbe neanche riconosciuta.

Noi però non faremo questo tipo di dimostrazione diretta, che si può fare e funziona per contraddizione. Andiamo a fare una dimostrazione più astratta. Deriva dal seguente teorema:

> **Teorema**: se $HALT^-$ fosse riconoscibile, allora $HALT$ sarebbe decidibile

Infatti, dal momento che $HALT$ è indecidibile, se questo teorema è vero allora $HALT^-$ non può essere riconoscibile.

#### 3.2.1 ⋅ Dimostrazione

*Cose mie per capire come stiamo ragionando*: notiamo che $A \implies B$ vuol dire $\neg B \implies \neg A$. Quindi se noi dimostriamo che $A$ implica $B$, allora possiamo dire che $\neg B$ implica $\neg A$. E noi sappiamo che $\neg B$ è vera quindi ci basta dimostrare che dato che $\neg B$ è vera, allora $\neg A$ è vera.

Abbiamo già visto che $HALT$ è riconoscibile, diciamo da una TM $\mathcal{M}_HR$.

Supponiamo per assurdo che anche $HALT^-$ sia riconoscibile, diciamo da una TM $\mathcal{M}_H^-$.

Possiamo ora costruire una TM $\mathcal{M}_H$ che decide $HALT$ come segue:
- Su input $\langle y, x \rangle$, simula $\mathcal{M}_H^-$ e $\mathcal{M}_HR$ in **parallelo** su $\langle y, x \rangle$.
- Se $\mathcal{M}_HR$ si ferma, accetta.
- Se $\mathcal{M}_H^-$ si ferma, rifiuta.
- Ogni problema o è riconosciuto da $\mathcal{M}_HR$ o da $\mathcal{M}_H^-$, quindi $\mathcal{M}_H$ si ferma sempre.
- Fermandosi sempre, in uno stato di accetto o rigetto, $\mathcal{M}_H$ decide $HALT$.

Quindi: $HALT$ è decidibile, assurdo, come dimostrato in precedenza. Quindi se $HALT^-$ fosse riconoscibile, allora $HALT$ sarebbe decidibile.

### 3.3 ⋅ Teorema generale

Notiamo che la dimostrazione data non sfrutta in alcun modo il fatto che $HALT$ sia definito nel modo in cui è definito: potremmo sostituire $HALT$ con un qualsiasi problema riconoscibile e funzionerebbe lo stesso. Pertanto:

> **Teorema**: se $L$ è riconoscibile e $L^-$ è riconoscibile, allora $L$ è decidibile
>
> **Dimostrazione**: la stessa data per $L= HALT$

### 3.4 ⋅ Corollario

Usando quindi quello che abbiamo ottenuto:
- **Teorema** se $L$ e $L^-$ sono riconoscibili, allora $L$ è decidibile
- **Teorema** $HALT$ è riconoscibile ma non decidibile

Otteniamo il seguente corollario:
> **Corollario**: I linguaggi riconoscibili **non** sono chiusi sotto complemento
>
> **Dimostrazione**: HALT è riconoscibile ma il suo complemento non è riconoscibile.