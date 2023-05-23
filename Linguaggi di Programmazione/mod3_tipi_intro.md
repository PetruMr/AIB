[//]: # (Date: 2023-04-29 19:00)
[//]: # (Stili di riferimento per il markdown)
<link rel="stylesheet" href="./res/style.css">

> # Introduzione ai tipi

---

> ## Storia dei tipi

###  Da cosa nasce il concetto di tipo

Il sistema di tipi (o teoria dei tipi) si riferisce ad un ampio campo di studi in logica, matematica e filosofia.

I primi ricercatori che hanno formalizzato i sistemi di tipi in questo senso all'inizio del 1900 se ne occuparono per *evitare i paradossi logici*, come quello di Russell.

### Tipi in informatica

In informatica esistono due grandi branche di ricerca sui sistemi di tipi:
- **Pratica**: ovvero riguardante le applicazioni ai linguaggi di programmazione
- **Astratta**: ovvero sulle connessioni con la varietà logica.

Anche se sono simili, per concetti, notazioni e tecniche, hanno delle differenze sostanziali. Per esempio la ricerca astratta riguarda computazioni ben tipate, mentre quella pratica sacrifica questa proprietà a vantaggio di caratteristiche come le definizioni ricorsive.

*Definizione di sistema di tipi*:
- Un metodo sintattico praticabile per dimostrare l'assenza di determinati comportamenti del programma, fatto classificando le unità sintattiche in base ai tipi di valore che assumono.

*Interpretazione pratica*:
- **Collezioni di valori omogenei e rappresentabili**
  - Omogeneo: i valori condividono alcune proprietà strutturali che li rendono simili tra loro
  - Rappresentazione: si riferisce all'aspetto pratico della manipolazione dei valori che possono essere scritti e letti in modo finito.

---

> ## Tipi di dato

### Motivazione

Vi sono diverse motivazioni sul perché scegliamo di usare tipi di dati:
- Supporto all'*organizzazione concettuale*
- Supporto all'*astrazione*
- Supporto alla *correttezza*
- Supporto all'*implementazione*
- E altri vantaggi

#### Supporto all'organizzazione concettuale

L'uso di tipi può anche essere visto come uno strumento di **documentazione** e **progettazione**.

Conoscere il tipo di una variabile ci aiuta a capire che ruolo ha nel programma. Svolgono un ruolo simile a quello dei commenti, anche se a loro differenza, la loro correttezza viene verificata.

#### Supporto all'astrazione

Da come l'ho capito io, si hanno:
- Moduli collegati ai tipi
  - I moduli "impacchettano" e legano insieme diverse unità software 
  - Questo vuol dire che per esempio il "+" è un modulo il quale lega interi e l'operazione di addizione.
- Le interfacce sono considerabili come l'elenco dei moduli disponibili
- Mettono a disposizione al programmatore un modo per collegare determinati metodi con determinati tipi
- Non bisogna concentrarsi sull'implementazione di tutte le unità software (somme, divisioni, conversioni), ma ci si può concentrare sulle operazioni più grandi lasciando "per scontate" le più piccole

L'esempio tipico di questo tipo di utilizzo dei tipi sono le **interfacce**, che **associano un tipo** (per esempio l'intero) **ad operazioni** che si possono applicare su di esso (per esempio +, -, %, conversioni, etc.). Possiamo considerare un interfaccia come una sorta di "menù" delle strutture fornite dal modulo o come parte di un contratto tra implementatori e utenti.

Tutto questo permette di concentrarsi sulla progettazione del software dall'alto verso il basso: dai contratti che i moduli si offrono reciprocamente alla loro implementazione indipendente (questo supporta anche il riutilizzo e la ristrutturazione coerente del codice)

#### Supporto alla correttezza

Il vantaggio più famoso dei tipi è il **type-checking** che ci permette di rilevare errori di tipo in fase di programmazione. (Verifica che i tipi che vengono usati nelle assegnazioni/confronti/etc siano coerenti)

Abbiamo poi il vantaggio del **refactoring** (ristrutturare il codice esistente). Cambiare una struttura dati e poi correggere solo ciò che non è corretto è più comodo di dover cambiare tutto dopo aver cambiato la struttura dati.

Il supporto per la correttezza menzionato in precedenza si riferisce al concetto più generale di *safety* del linguaggio.
- Safety si riferisce alla capacità di un linguaggio di **garantire l'integrità delle sue astrazioni**

I linguaggi safe sono anche detti *linguaggi fortemente tipati* o *strongly typed* (e quelli non sicuri sono detti a *tipizzazione debole* o *weakly typed*).

Per esempio Java è un linguaggio fortemente tipato, mentre C è un linguaggio debolmente tipato (perché, per esempio, si può accedere ad un array oltre la sua fine).

#### Supporto all'implementazione

I tipi possono anche contribuire a migliorare **l'efficienza** del programma, attraverso un implementazione delle operazioni ottimizzate in base al tipo.

Nei linguaggi safe, i tipi aiutano a migliorare l'efficienza eliminando molti dei controlli dinamici per garantire la sicurezza.

I moderni compilatori ad alte prestazioni si basano molto sulle informazioni raccolte dal type-checker per ottimizzare la generazione del codice.

#### Altri vantaggi

I tipi vengono usati in tante diverse applicazioni:
- La tipizzazione è alla base del modello di sicurezza di Java
- Si trova alla base anche dell'architettura "plug and play" di JINI per dispositivi di rete
- Vengono usati dai theorem provers
- Anche i Database, i Document Type Definitions e altri tipi di schemi (schemi XML, JSON, etc) fanno uso di tipi per verificare la correttezza dei dati e delle interrogazioni

---

> ## Distinzioni importanti


### Dynamic vs Static Typing

Relativo al *momento* in cui un linguaggio esegue il controllo dei tipi.

- **Linguaggi a tipizzazione dinamica**
  - Quando il controllo dei tipi avviene durante l'esecuzione del programma.
  - Ogni valore ha un descrittore di esecuzione che ne specifica il tipo e che, a ogni operazione, viene controllato per verificare che l'operazione sia applicabile.
- **Lintuaggi a tipizzazione statica**
  - Quando il controllo dei tipi avviene durante la compilazione del programma, senza doverlo eseguire.
  - A meno che il runtime non abbia bisogno di informazioni a livello di tipo, il compilatore può eliminare le annotazioni di tipo del condice generato.

### Manifest vs Inferred Typing

Relativo alla *quantità di informazioni* che il programmatore deve inserire nei suoi programmi.

- **Manifest Typing** (o *explicit typing*)
  - Quando il programmatore deve specificare il tipo di ogni variabile.
- **Inferred Typing** (o *implicit typing*)
  - Quando il compilatore deduce il tipo di ogni variabile in base al contesto in cui viene usata.

Il tipaggio manifesto e inferito sono uno **spettro** determinato da fattori ergonomici ed algoritmici. Bisogna essere attenti a bilanciare la quantità di informazioni che il programmatore deve inserire con la quantità di informazioni che il compilatore può dedurre, in modo da avere un buon compromesso tra flessibilità e sicurezza.

### Altri appunti

Vi è un pressuposto *sbagliato* che:
- Tipaggio statico è collegato a tipaggio manifesto
- Tipaggio dinamico è collegato a tipaggio inferito

Seppure è vero per la maggior parte dei linguaggi, non è vero per tutti.

Un altro mito è che i linguaggi a tipaggio dinamico siano interpretati. Questo deriva dal pensare che il linguaggi determini il modo in cui si eseguono i programmi (che non è vero).

Quindi, scegliere tra un linguaggio a tipizzazione statica o dinamica non è una scelta tra compilazione ed interpretazione, o tra scrivere tante informazioni sui tipi o no, ma una scelta tra due diversi modi di gestire i tipi, che quindi influenzano *correttezza, prestazioni* ed *espressività*

Un linguaggio statico ti fa controllare tutto prima di eseguire il programma, tuttavia può dare problemi in quanto possono rifiutare programmi che verrebbero eseguiti correttamente, in quanto non può controllare in che rami il programma potrebbe entrare.