# Macchina di turing

Risorsa disponibile [qui](https://risorse.students.cs.unibo.it/informatica-teorica//lucidi//02-macchine-di-turing.pdf?from=informatica)

## Turing la persona

Piccola introduzione su Turing e su quanto è forte

## La domanda di turing

Si tratta di un articolo pubblicato da Turing, che è stato molto fertile per lo sviluppo della teoria della computabilità.

Turing afferma che per trovare delle soluzioni a "qualcosa X è calcolabile" dobbiamo prima definire cosa è calcolabile in modo formale

In particolare, poneva le seguenti domande:
- Che cos'è una **computazione**?
- Che cosa significa per un problema essere **calcolabile**?

### Da dove parte il ragionamento

Spesso si parte dicendo che la MT sia un tupla, con determinate caratteristiche e così via.

Vediamo invece un approccio più "filosofico" e "intuitivo", che spiega il movente di ogni scelta.

Osserviamo **come un umano esegue una computazione**. Cosa contraddistingue questa azione?
1. Eseguire un insieme di **regole**, ovvero eseguire un algoritmo.
   1. Da questo punto di vista anche la matematica delle superiori è algoritmica
2. Vengono letti e scritti dei **simboli** (su un supporto, ad esempio un foglio di carta)
3. L'azione eseguita dalla persona dipende dal simbolo che viene esaminato

Il metodo di turing ha precedenti illustri, e può essere riassunto come il tentativo di identificare le proprietà **essenziali** del processo di computazione, a discapito di ciò che invece è **irrilevante**.

(Essenzialmente per essenziale e accidentale, o irrilevante, si fa riferimento ad Aristotele: nella geometria, ad esempio, la lunghezza di un segmento è essenziale, mentre il fatto che sia rosso o blu è accidentale)

### Astrazione delle componenti

#### Astrazione dei dati

Partire dalla moltiplicazione, alla rappresentazione come stringa, alla rappresentazione come 1 e 0 su un nastro.

#### Astrazione delle azioni

Abbiamo le seguenti azioni:
- Scrivi il simbolo 0
- Scrivi il simbolo 1
- Spostati una cella verso destra
- Spostati una cella verso sinistra
- Osserva il simbolo corrente e scegli il prossimo passo di conseguenza
  - Intuitivamente ci verrebbe da dire che servirebbe tutto o una parte più grande del nastro, ma in realtà non è così: ci basta solo 1 simbolo alla volta per fare le decisioni
- Fermarsi

## La macchina di turing - definizione

### Definizione informale

- Una macchina di turing ha un **nastro**, infinito sul lato destro. Il nastro è diviso in **celle**.
- Ogni cella del nastro può contenere un simbolo o essere vuota
- La macchina avrà una **testina** che si muove sul nastro. La testina è sempre in un certo **stato** ($q_0, q_1,$...)
- Una **configurazione** è un istantanea di un passo di computazione della macchina.
- La **configurazione iniziale** vede la testina posizionata nella prima cella di sinsitra, nello stato iniziale $q_0$. Il nastro è vuoto, ad eccezione di una stringa di input $a=a_1a_2...a_n$ che va ad occupare le prime $n$ celle.

Ora che abbiamo questi primi step:
- Supponiamo che la macchina si trovi in una configurazione data. Come decide il prossimo passo di computazione?
- La testina legge il contenuto della cella, e sulla base della lettura la macchina può compiere una delle seguenti azioni:
  - **Fermarsi**
  - **Cambiare stato, scrivere** un nuovo simbolo nella cella corrente (o lasciarla vuota), e **spostarsi** nella cella immediatamente a sinistra o a destra dell'attuale.
- Il tipo di azione da prendere è dettato dal **programma** della macchina.

### Definizione formale

Una macchina di Turing è una tupla:

$$
M = \langle \Sigma, Q, q_0, H, \delta \rangle
$$

In particolare:
- $\Sigma$ è un **alfabeto** finito di simboli, che include un simbolo speciale $\sqcup$ per rappresentare la cella vuota
- $Q$ è un insieme finito di **stati**
- $q_0 \in Q$ è lo **stato iniziale**
- $H \subseteq Q$ è l'insieme degli **stati accettanti** (o **finali**)
- $\delta$ è la **funzione di transizione**:

$$
\delta: (Q \setminus H) \times \Sigma \rightarrow Q \times \Sigma \times \{ \rightarrow, \leftarrow \}
$$

#### La funzione di transizione:

La descrizione è:
- Da uno stato corrente
  - $q_i \in Q\setminus H$
- Con un certo simbolo letto
  - $a \in \Sigma$
- Passiamo al prossimo stato
  - $q_j \in Q$
- Con un nuovo simbolo da scrivere nella cella corrente
  - $b \in \Sigma$
- E ci si sposta a destra o a sinistra
  - $\rightarrow$ o $\leftarrow$


In particolare ci sono queste note:
- $\delta$ esprime il programma che governa il funzionamento della macchina di turing.
- $\delta$ è una funzione *totale*
  - In quanto per qualsiasi stato e simbolo ho una funzione di transizione definita
  - Parziale vorrebbe dire che per alcuni stati e simboli non ho una funzione di transizione definita
- Possiamo scrivere la definizione di $\delta$ come un insieme di quintuple:

$$
\{ \langle q_i, a, q_j, \sqcup, \rightarrow \rangle, \langle q_i, a, q_j, \sqcup, \leftarrow \rangle, \langle q_i, a, q_j, b, \rightarrow \rangle, \langle q_i, a, q_j, b, \leftarrow \rangle,... \}
$$

## Che cosa clacola la macchina di turing?

**L'alfabeto $\Sigma_|$ di simboli di input/output è un sottoinsieme di $\Sigma$ che non contiene il simbolo $\sqcup$.**

Possiamo finire da due parti:
- Con uno stato finale
- In un loop infinito

### Descrizione della macchina di turing

Si può sia andare a deifnire l'insieme di elementi della tupla, elmento per elemento + le funzioni di transizione.

Ma si può anche descrivere come grafo, con come nodi gli stati e come archi $\text{simbolo input},\text{output sul nastro},direzione$, per esempio $1, 0, \rightarrow$.

### Esempi di macchine di turing

Sulle slide si possono vedere esempi relativi a somma e moltiplicazione per 2.

Negli esempi vi sono diverse macchine di Turing che computano funzioni da $\mathbb{N}^k \rightarrow \mathbb{N}$.

Ma possiamo a definire anche altri tipi di macchine di turing, come quelle che computano funzioni da $\{0,1\}^k \rightarrow \{0,1\}$, oppure macchine più portate a risolvere problemi più complessi o di tipo diverso.

## Problemi di decisione

Molto spesso un problema che volgiamo risolvere usando uno strumento di calcolo può essere espresso come un **problema di decisione**, ovvero problemi che hanno risposta "si" o "no".

Alcuni esempi di problemi di decisione sono i seguenti:
- Dato un grafo, è strettamente connesso?
- Dato un insieme di città e una descrizione delle distanze tra di esse, è possibile visitarle a turno in modo tale che la lunghezza del percorso è minore di una data costante $d$
- Dato un insieme di equazioni, ha una soluzione?
- Date alcune forme da tagliare da un foglio di alluminio, possiamo ricavarle tutte da un singolo rettangolo di taglia $n \times m$, dove $n$ e $m$ sono dati?

In astratto, ciascun problema ha due componenti:
- **Dati**
  - Un sistema di equazioni
- **Domanda si/no**
  - Il sistema di equazioni ha soluzione?

Inoltre:
- **Instanza positiva**
  - Dati per i quali la risposta è sì
- **Instanza negativa**
  - Dati per i quali la risposta è no

Abbiamo visto che per calcolare la risposta ad un problema di decisione abbiamo bisogno di un programma che riceve in input dati del tipo corretto e da una risposta SI o NO come output.

**Come fare tutto ciò con le macchine di Turing?**

- Abbiamo visto che le TM possono calcolare funzioni di tipo $\mathbb{N}^k \rightarrow \mathbb{N}$.
- Il passaggio chiave è **codificare** un problema di decisione come *la funzione caratteristica di un linguaggio formale*

### Linguaggi formali

Dato un alfabeto $\Sigma$ di simboli, un *linguaggio formale* è un sottoinsieme di $\Sigma^*$, ovvero l'insieme di tutte le stringhe finite di simboli di $\Sigma$. Per esempio:
- Alfabeto: $\Sigma = \{0,1\}$
- Linguaggio: $L = \{\varepsilon, 0, 00, 011, 0111, 01101011, ...\}$

La **funzione caratteristica** di un linguaggio $L$ è la funzione $\chi_L: \Sigma^* \rightarrow \{0,1\}$ definita come:

$$
\chi_L(w) = \begin{cases}
1 & \text{se } w \in L \\
0 & \text{se } w \notin L
\end{cases}
$$

### Dai problemi di decisione ai linguaggi formali

$$
\text{dato } \alpha \xrightarrow{\text{schema di codifica}} code(\alpha)\in \Sigma^*
$$

Il **linguaggio** che codifica il **problema di decisione** sarà:

$$
L = \{ x \in \Sigma^* \mid x = code (\alpha) \text{ per qualche dato } \alpha\text{, e }\alpha \text{ è un'istanza positiva del problema} \}
$$

Essenzialemnte:
- Possiamo tradurre un grafo per esempio in una stringa di simboli 1 e 0.
- Queste cose sono state studiate e fatte, non solo nell'ambito della computabilità

Abbiamo quindi detto che assumiamo di avere una cofica, senza specificare come essa debba essere. Tuttavia, noi vogliamo alcuni **requisiti minimi** per $code(\cdot)$:
- Se $\alpha \neq \beta$ allora $code(\alpha) \neq code(\beta)$
  - Se abbiamo due dati diversi, vogliamo che le loro codifiche siano diverse
- Dovremmo poter verificare se $x \in \Sigma^*$ è $code(\alpha)$ per qualche $\alpha$
  - Questo è un problema di decisione, e quindi possiamo usare una macchina di turing per farlo
- Dovremmo poter calcolare $\alpha$ dato $code(\alpha)$
  - Quindi in un certo senso la nostra codifica deve essere reversibile

Da notare tuttavia che in questo contesto noi ci stiamo occupando solo del potere espressivo del modello di calcolo e non ci preoccupiamo dell'effeicienza, e quindi di quanto spazio sparso stiamo occupando e di quanto tempo ci mettiamo a fare le operazioni: queste cose però diventano rilevanti nella pratica, quindi si cerca di avere codifiche che non sono *ridondanti* e che possono essere calcolate in modo *efficiente*.

## Linguaggi decidibili

**In conclusione, come faccio a ragionare su un problema di decisione utilizzando una macchina di Turing?**

- Assumiamo una codifica del problema di decisione come un linguaggio $L$ su un alfabeto $\Sigma'$
- Vogliamo una TM $\mathcal{M}$ con le seguenti proprietà:
  - L'alfabeto di input/output è $\Sigma_|$ e $\Sigma'$
  - L'insieme degli stati finali è $H={Y,N}$
- Diciamo che $\mathcal{M}$ **accetta** un input $x \in \Sigma^*$ se $\mathcal{M}$ termina in uno stato finale $Y$ partendo da $x$, e **rigetta** $x$ se termina in uno stato finale $N$.
- $\mathcal{M}$ **decide** $L$ se:
  - Quando $x \in L$, $\mathcal{M}$ accetta $x$
  - Quando $x \notin L$, $\mathcal{M}$ rigetta $x$
- Un linguaggio (un problema di decisione) è **decidibile** se c'è una macchina di Turing che lo decide
  - Non tutti i problemi di decisione sono decidibili e lo dimostreremo

## Linguaggi riconoscibili

Questa è una definizione più lasca di quella decidibile. (Si tratta di un modo ulteriore, più "sottile", in cui una TM può essere associata ad un linguaggio). In particolare ha le seguenti caratteristiche:
- Assumiamo una codifica del problema di decisione come un linguaggio $L$ su un alfabeto $\Sigma'$
- Vogliamo una TM con alfabeto di input/output $\Sigma'$
- $\mathcal{M}$ **riconosce** $L$ se:
  - Quando $x \in L$, $\mathcal{M}$ si ferma (= raggiunge uno stato finale)
  - Quando $x \notin L$, $\mathcal{M}$ non si ferma
- Un linguaggio (un problema di decisione) è **riconoscibile** se c'è una TM che lo riconosce.

Si può dimostrare che se un linguaggio è **decidibile** allora è anche **riconoscibile**.

La nozione di decibile, quindi, è strettamente più forte.

## Note

Vedremo che molti problemi significativi **non sono decidibili**, ma **solo riconoscibili**.

Altri problemi ancora non sono nemmeno **riconoscibili**.

## Terminologia

In italiano abbiamo:
- Decidibile = Ricorsivo = Computabile
Che in inglese equivalgono, rispettivamente, a:
- Recognizable = Recursively enumerable = Computability enumerable

Sono qui scritti per poter leggere i testi in inglese o in generale di altri autori e capire cosa si intende.

## Macchine di Turing e automi

Nella gerarchia di Chomsky abbiamo i seguenti $set$, con quello più in cima contenente quelli sotto:
- Macchine di Turing / Linguaggi riconoscibili
- Linear bounded automata / Linguaggi context-sensitive
- Pushdown automata / Linguaggi context-free
- Finite automata / Linguaggi regolari