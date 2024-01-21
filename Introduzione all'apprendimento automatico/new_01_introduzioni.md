[//]: # (Stili di riferimento per il markdown)
<link rel="stylesheet" href="./res/style.css">

> # Introduzione

## Perché usare il machine learning?

### Problemi non risolvibili con tecniche normali

Ci sono diversi problemi che sono difficili se non impossibili da risolvere con un approccio tradizionale, ma che possono essere risolti con il machine learning.

Alcuni esempi sono: 
- *Classificazione*
  - Mail spam, sentimenti, ecc.
- *Riconoscimento di Immagini/Suoni*
- *Anomaly detection*
  - Rilevare anomalie in un sistema, per esempio frodi o guasti di sistema
- *Clustering*
  - Raggruppare dati in base a delle caratteristiche comuni
- *Tecniche generative*
  - Creare immagini o testi che non esistono davvero ma che sembrano reali

Perché questi problemi sono difficili?
- Scarsa conoscenza metateorica
- Largo numeri di attributi per ogni input
- Grande volume di dati disponibili
- Evoluzione dinamica del problema

### Come si approccia il machine learning a questi problemi?

Il machine learning ha i seguenti step, genericamente:
- Definire una classi di *modelli* del problema, parametrizzati su un insieme di *parametri* $\theta$
- Definire una *metrica di valutazione*: una misura dell'*errore* dei vari modelli
- Modificare i parametri $\theta$ in modo da *minimizzare* l'errore sui dati di *training*

Perché parliamo di **apprendimento**?
- Noi andiamo a gestire problemi di *ottimizzazione* (minimizzare l'errore)
- Tuttavia, lo facciamo *iterativamente*, usando le esperienze passate come guida per le future
- Pertanto il modello migliora con l'esperienza

## Differenti classi di problemi di apprendimento

### Apprendimento supervisionato **(Supervised learning)**

In questo tipo i apprendimento, il modello viene addestrato su un insieme di dati che include sia gli input sia gli output desiderati (etichette). 

L'obbiettivo è apprendere una mappatura dagli input agli output.

- *Input + Output (etichette)*

I tipi di problemi che si possono risolvere usando questo tipo di apprendimento sono:
- *Classificazione*
  - Classificare gli input in un numero finito di categorie
  - Esempi:
    - Classificare le mail in spam o non spam
    - Classificare le immagini in gatti o cani
- *Regressione*
  - Predire un valore numerico continuo
  - Esempi:
    - Predire il prezzo di una casa
    - Predire la temperatura di domani

Essenzialmente, se il risultato finale può appartenere ad una categoria discreta, si tratta di un problema di classificazione, altrimenti di regressione.

### Apprendimento non supervisionato **(Unsupervised learning)**

In questo tipo di apprendimento, il modello viene addestrato su un insieme di dati che include solo gli input, senza le etichette di output.

Il modello cerca quindi di trovare dei *pattern* o *strutture* all'interno dei dati.

- *Input*

I tipi di problemi che si possono risolvere usando questo tipo di apprendimento sono:
- *Clustering*
  - Raggruppare gli input in un numero finito di categorie
  - Esempi:
    - Raggruppare i clienti in base ai loro acquisti
    - Raggruppare i documenti in base al loro contenuto
- *Analisi delle componenti*
  - Si tratta di un metodo per ridurre la dimensionalità dei dati, trovando le componenti principali che catturano la maggior parte della varianza dei dati
  - Esempi:
    - Ridurre la dimensionalità di un'immagine
    - Ridurre la dimensionalità di un dataset
- *Autoencoder*
  - Si tratta di un tipo di rete neurale che cerca di apprendere una rappresentazione compatta dei dati di input (codifica), e di ricostruire i dati di input a partire dalla rappresentazione (decodifica)
  - Esempi:
    - Comprimere un'immagine
    - Comprimere un file

### Apprendimento per rinforzo **(Reinforcement learning)**

In questo paradigma, un agente impara a prendere decisioni attraverso un processo di **trial and error**, ricevendo ricompense o punizioni in base alle sue azioni.

- *Azioni + ricompense*

I tipi di problemi che si possono risolvere usando questo tipo di apprendimento sono:
- *Apprendere comportamenti*
  - L'agente impara quale comportamento massimizza la ricompensa nel tempo
  - Esempi:
    - Apprendere a giocare a scacchi
- *Model-free planning*
  - Si riferisce a metodi che non costruiscono un modello esplicito dell'ambiente ma apprendono direttamente una politica d'azione.

## Tecniche diverse

Vi sono diverse tecniche per l'apprendimento che si possono usare.

*Modi diversi per definire i modelli*:
- **Alberi di decisioni**
- **Modelli lineari**
- **Reti neurali**
- ...

*Diversi funzioni di loss*:
- **Errore quadratico medio**
- **Logistic loss**
- **Cross-entropy**
- **Similarità del coseno**
- ...