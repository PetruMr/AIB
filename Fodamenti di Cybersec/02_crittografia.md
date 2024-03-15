# Crittografia

Le slide si possono trovare a [questo link](https://virtuale.unibo.it/pluginfile.php/1987584/mod_resource/content/1/Lecture%201%20-%20IntroductionToCryptography.pdf).

## Terminologia

- **Crittografia**
  - L'arte e la scienza di usare la matematica per oscurare il significato dei dati attraverso l'applicazione di trasformazioni ad essi che sono difficilmente o impossibili da invertire senza conoscere i dettagli della trasformazione (una qualche chiave)
  - Il termine viene da due parole greche: *kryptos* (nascosto) e *graphein* (scrivere)
- **Crittanalisi**
  - L'arte e la scienza di rompere la crittografia
- **Crittologia**
  - L'insieme di crittografia e crittanalisi

## Secure communication

Nella comunicazione tra pagina e server vogliamo che non ci sia un attaccante che possa leggere o modificare i dati.

Ci sono due approcci:
- **Steganografia**
  - Nascondere il messaggio in un altro messaggio
  - *Nascondere l'esistenza del messaggio*
- **Crittografia**
  - Trasformare il messaggio in modo che sia illeggibile senza la chiave
  - *Nasconde il contenuto del messaggio*

In particolare ci sono i seguenti obbiettivi:
- **Confidenzialità**
  - L'informazione non deve essere letta da chi non è autorizzato
- **Integrità**
  - L'informazione non deve essere modificata da chi non è autorizzato
- **Autenticazione**
  - L'informazione deve essere inviata da chi dice di averla inviata
- **Non ripudio**
  - Chi ha inviato l'informazione non può negare di averla inviata

## Protocolli di sicurezza

I protocolli devono far sì che si possa comunicare con sicurezza, proteggendo confidenzialità e integrità.

## Kerckhoff's principle

La sicurezza di un protocollo dovrebbe basarsi unicamente sulla segretezza delle chiavi, mentre il protocollo stesso dovrebbe essere pubblico (1883)

> **Security by obscurity does not work**


## Attacker threat model

Un sistema dovrebbe essere sicuro anhce se tutto il protocollo è pubblico, con l'eccezione della chiave usata.

L'attaccante si assume sappia tutto l'algoritmo.

L'interazione con il messaggio e il protocollo può essere:
- **Passiva**
  - Osserva e prova a capire il messaggio
  - Va a minacciare solo la confidenzialità
- **Attiva**
  - Osserva, modifica, inietta e cancella messaggi
  - Va a minacciare sia confidenzialità, integrità e autenticazione
  
Interazioni con l'algoritmo di crittografia:
- **Ciphertext-only attack**
  - L'attaccante ha solo il testo cifrato
- **Chosen-plaintext attack (CPA)**
  - L'attaccante può scegliere il testo in chiaro e vedere il testo cifrato
- **Chosen-ciphertext attack (CCA)**
  - L'attaccante può scegliere il testo cifrato e vedere il testo in chiaro
- Sia CPA che CCA possono essere adattivi: l'attaccante può scegliere il testo in base ai risultati delle precedenti scelte

Le risorse disponibili:
- Illimitate
- Limitate - *computational security*

## Simmetrica e asimmetrica

GLS.

Use cases:
- **Single-use key**
  - La chiave è usata una sola volta
- **Multi-use key**
  - La chiave è usata più volte

# Algoritmi di crittografia

## Cos'è la crittografia

Metodi per memorizzare, elaborare e trasmettere informazioni in maniera sicura in presenza di agenti ostili.

Un classico scenario è quello del cifrario di cesare:
- **Cifrario di Cesare**
  - Spostare le lettere di un certo numero di posizioni
  - Esempio: con uno shift di 3, `A` diventa `D`, `B` diventa `E`, etc.

Si tratta di una crittografia **simmetrica**.