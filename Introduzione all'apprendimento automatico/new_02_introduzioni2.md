[//]: # (Stili di riferimento per il markdown)
<link rel="stylesheet" href="./res/style.css">

> # Introduzione

## Feature

### Cosa sono le feature?

Ogni informazione relativa ad un dato che ne descrive una sua proprietà è una *feature* (caratteristica).

Le features sono gli input del processo di apprendimento.

L'apprendimento è molto sensibile alla scelta delle features.

Determinare delle buone feature per un umano è complesso, richiede una buona conoscenza del dominio e può essere molto dispendioso.

### Come scegliere le feature

*Approccio tradizionale*: si determina durante il preprocessing delle buone feature, e si applicano in un metodo semplice ma robusto di apprendimento, ad esempio qualche tecnica di regressione lineare.

*Approccio moderno*: si usa il deep learning per sintetizzare le feature: si passano tutti quanti i dati di input grezzi e si delega alla macchina il compito di trovare le feature migliori.

## Le varie aree di ricerca

Deep learning ⊂ Representation learning ⊂ Machine learning ⊂ Artificial Intelligence.

In particolare:
- Deep learning
  - Si tratta dell'uso di più layer all'interno di un neural network.
  - Può essere supervisionato, semi-supervisionato o non supervisionato.
- Representation learning
  - Si tratta dell'utilizzo di feature per rappresentare i dati.
- Machine learning
  - Si tratta di un sottoinsieme di AI che si occupa di far imparare ai computer a fare cose che non sono state programmate. (Scoprire da soli gli algoritmi che risolvono un problema)
- Artificial Intelligence
  - Tutto ciò che è relativo alla realizzazione di software che sono capaci di "comportamenti intelligenti".

### Differenze tra AI, ML e DL

- **Sistemi basati su conoscenza**
  - Prendete un esperto, chiedetegli come risolverebbe il problema e poi provate a mimare il suo comportamento mediante regole logiche.
- **Machine Learning tradizionale**
  - Prendete un esperto, chiedetegli di quali features avrebbe bisogno per risolvere un dato problema, raccogliete un insieme di osservazione e lasciate alla macchina il compito di apprendere l'associazione.
- **Deep learning**
  - Liberatevi dell'esperto, date alla macchina un insieme di osservazioni e lasciatele trovare da sola le features e l'associazione.

