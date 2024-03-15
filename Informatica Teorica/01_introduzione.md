# Introduzione al corso

Il prof è nice

## Cosa è un computer?

La teoria della computabilità deve come presupposto partire da un modello astratto di cosa sia uno strumento di calcolo e non.

L'essenza di tutti i macchinari che sono presenti nelle slide (fisso, laptop, telefono, roomba, persona, ...) sono le stesse, mentre le loro differenze sono accidentali (la velocità di calcolo, etc. sono tutte proprietà accidentali).

Quindi di sicuro non è la potenza, non la velocità, non è l'efficienza, ma ci deve essere qualcosa che è più astratto e ci dice cosa è e cosa non è un computer.

Questo stesso insieme di step l'ha fatto anche la geometria, che doveva descrivere il mondo attorno a noi. Adesso li faremo anche per la teoria della computabilità.

### Quindi cosa è un computer?

Questa domanda può avere più risposte corrette:
- Una macchina di Turing
- Una macchina a registri
- Una funzione ricorsiva
- Un linguaggio di programmazione sufficientemente espressivo

Per la **tesi di Church-Turing**: qualunque problema che un essere umano può calcolare seguendo un algoritmo, può essere calcolato da indifferentemente usando uno di questi strumenti di calcolo.

C'è un'altra tesi secondo la quale un essere umano è equivalente in termini di calcolo a una macchina di Turing. Quindi: ogni macchina può calcolare quanto un umano, con abbastanza tempo, e ogni umano può calcolare quanto una macchina.

> Domande extra: la computabilità quantistica è equivalente a quella "classica"? A quella di un umano? etc.

## Cosa può fare un computer?

Questo limite si va a spostare nel tempo, man mano aumentando quello che era percepito come "impossibile" da fare con un computer.

L'idea che quindi si potrebbe percepire è che non c'è un limite a ciò che è calcolabile: invece c'è, ci sono problemi per cui esiste una dimostrazione matematica per cui non è possibile calcolarli.

> La teoria della computabilità ci da sia gli strumenti per dire cosa vuol dire calcolare che per definire cosa è incalcolabile

### Problemi irrisolvibili

Eccone un piccolo elenco:
- Il programma `P` andrà in crash?
- La computeazione di `P` si fermerà su un dato input?
  - Importanza storica in quanto primo problema irrisolvibile identificato
- Il programma `P` rispetta la specifica data dalla funzione `f`?
- I programmi `P` e `Q` sono equivalenti?

Ne esistono anche in *logica*:
- La fomrula del prim'ordine $\phi$ è soddisfacibile?

Oppure in *algebra*:
- Quando due parole rappresentano lo stesso elemento di un gruppo? (Word problem)
- Un'equazione diofantina ha soluzioni intere?

Anche problemi più semplici come:
- Possiamo usare un dato insieme di piastrelle per coprire una qualisasi area quadrata?

### Teoria della computabilità e l'irrisolvibilità

Interessante è osservare che sapevamo già che diversi problemi erano incomputabili ancora prima di avere un calcolatore pratico che lo potesse provare: la teoria della computazione nasce molto prima.

### Ma quanti sono i problemi irrisolvibili?

In generale:
- La **maggior parte** dei quesiti che possiamo porre a un computer non è calcolabile
  - Possiamo dimostrarlo usando l'argomento diagonale di Cantor
- Tutti i problemi universali non-triviali sono irrisorvibili
  - Teorema di Rice
  - Esempio: il problema di fermarsi

#### Ma quindi, siamo spacciati?

Ci potrebbe venire quindi da pensare che, visto che così tanti problemi non sono risolvibili e noi ne possiamo effettivamente risolvere pochi, allora non abbiamo speranze.

Invece no, abbiamo avuto grazie a importanti branche di informatica teorica sviluppi attraverso i quali siamo riusciti a circumnavigare alcuni di questi problemi.

## Cosa faremo nel corso

In primis rispondiamo a delle domande relative alla computabilità:
- Cosa è un linguaggio di programmazione
- Cos'è un computer
- Ci sono limiti a ciò che possiamo programmare

In seguito, torneremo anche con i piedi per terra, occupandoci della **complessità computazionale**:
- Nasce dalla teoria della computabilità in modo da effettivamente considerare le risorse di calcolo
- Non ci basta sapere se un problema è calcolabile o meno, ma anche quanto tempo ci si mette a calcolarlo