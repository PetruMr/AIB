# Network security

Le slide di questa lezione si possono trovare [qua](https://virtuale.unibo.it/pluginfile.php/2032188/mod_resource/content/1/Network_security_Definitions_Internet_security_and_Anonimity.pdf)

## 1 ⋅ Introduzione

In questa parte andremo a descrivere meglio come funzionano i network e i principi della sicurezza che adoperano.

## 2 ⋅ Principi di sicurezza

La parte di sicurezza che andremo ad approfondire in questa prima parte sarà relativa a due concetti:
- **AAA**
- **CIA**

Che stanno per:
- **AAA**:
  - *Authentication*
  - *Authorization*
  - *Accounting*
- **CIA**:
  - *Confidentiality*
  - *Integrity*
  - *Availability*

### 2.1 ⋅ AAA

**AAA** contiene 3 componenti, che è bene ricordare nel seguente ordine in quanto per garantirne una si ha bisogno della precedente:
- **Authentication**
  - La capacità di un sistema di garantire che un utente possa essere identificato tramite informazioni in suo possesso
  - Il tipo di identificazione può essere di 3 tipi:
    - *Qualcosa che si conosce* (e.g. password)
    - *Qualcosa che si possiede* (e.g. badge)
    - *Qualcosa che si è* (e.g. impronte digitali)
  - Se vengono usati più di 1 tipo di identificazione si parla di **multi-factor authentication**
  - Da notare che *più meccanismi dello stesso tipo non aumentano la sicurezza*
- **Authorization**
  - Indica che cosa può effettuare un determinato utente
  - Per esempio qualcuno che può leggere un file e qualcun'altro che non può
- **Accounting**
  - La procedura con cui si assegnano determinate operazione effetuate a un account (logging)
  - Ad esempio, il traffico consumato dalla propria SIM, quali siti visitate o l'ultima volta che avete cambiato password

### 2.2 ⋅ CIA

**CIA** è un altro concetto fondamentale per la sicurezza di un sistema:
- **Confidentiality**
  - Un messaggio si dice *confidenziale* se può essere letto solo dal destinatario predesignato.
  - Questo si traduce spesso nell'andare a criptare i messaggi
  - Alcuni possibili attacchi alla confidenzialità derivano da due parti: Eavesdropping e Man-in-the-middle
- **Integrity**
  - Un messaggio si dice *integro* se non è stato modificato durante il trasporto
  - Questo si traduce spesso nell'andare a firmare i messaggi
  - Alcuni possibili attacchi all'integrità derivano da due parti: User Impersonating / Spoofing e Manipulation
- **Availability**
  - Si tratta della capacità di un sistema di rispondere a determinate richieste
  - Per esempio, Alice vuole mandare un messaggio a Bob e vuole che sia garantito che il messaggio arrivi entro un certo tempo
  - Un possibile attacco è il Denial of Service, di cui possiamo vedere diversi tipi:
    - **DoS**: Denial of Service, per esempio un ristorante si fida che un unica persona prenoti tutti i coperti, quindi lo chiami e lo fai
    - **DoS + Spoofing**: Denial of Service + Spoofing, per esempio un ristorante non si fida che un unica persona prenoti tutti i coperti, quindi lo chiami tante volte e fai finta di essere un'altra persona
    - **DDoS**: Distributed Denial of Service, per esempio un ristorante non si fida che un unica persona prenoti tutti i coperti e riconosce il cambio di voce della persona, quindi uso tanti miei amici per chiamare il ristorante e prenotare tutti i coperti

### 2.3 ⋅ Altri concetti

Un concetto non presente in CIA (perché non rappresenta la sicurezza di un sistema ma un modo di eludere la proprietà di accounting) è **l'anonimato online**.

Da notare: non si è anonimi online. Dopo andremo a discutere TOR e Onion quindi capiremo meglio come raggiungere circa l'anonimato online.

## 3 ⋅ Alcuni attacchi

### 3.1 ⋅ TCP: Syn Flooding

Il TCP prevede il concetto di connessione, a differenza di altri protocolli dello stesso livello (UDP).

Sempre nel mondo dei telefoni possiamo pensare a questo concetto come chiamata.

Per effettuare l'operazione di **connessione**, il TCP prevede i seguenti passi:
1. **SYN**: Il client manda un pacchetto con il flag SYN attivo. Questo cerca di attivare una connessione.
2. **SYN-ACK**: Il server manda un pacchetto con il flag SYN e ACK attivi. Questo cerca di confermare la connessione.
3. **ACK**: Il client manda un pacchetto con il flag ACK attivo. Questo conferma la connessione.

Cosa succede se non si invia mai l'ACK finale e il server può accettare al massimo $n$ connessioni? Si tratta di un **Denial of Service** dopo $n$ "chiamate".

### 3.2 ⋅ DNS: Typo-squatting

Il DNS è un sistema che permette di tradurre un nome di dominio in un indirizzo IP e viceversa. Si tratta di una funzione molto utile in quanto ricordare nei numeri sarebbe molto più difficile.

Un attacco che si può fare al DNS è il **Typo-squatting**. Questo consiste nel registrare un dominio simile a quello di un sito famoso, in modo che chi sbaglia a digitare il nome del sito vada a finire su un sito malevolo.

### 3.3 ⋅ Sniffing

Lo **sniffing** è un attacco che consiste nel catturare i pacchetti che passano in una rete. Si tratta di un particolare tipo di Eavesdropping.

Di tutti i protocolli elencati è possibile fare sniffing. Risulta quindi importante evitare di utilizzare la **security by obscurity**, in quanto non è una soluzione valida.

Un modo per eseguire sniffing della rete è con l'uso di **Wireshark**, che permette di salvare, analizzare e filtrare i pacchetti che il computer intercetta.

## 4 ⋅ Anonimato

### 4.1 ⋅ Proxy

Un **proxy** è un server che si interpone tra il client e il server. Questo permette di nascondere l'indirizzo IP del client al server.

### 4.2 ⋅ Mixer

Si tratta di un sistema introdotto nel **1981** per delle e-mail anonime, successivamente generalizzato per TCP.

Utilizza dei *relay server*, chiamati MIXes, per la comunicazione online.

L'obbiettivo è l'anonimato del mittente, in modo da essere "unlinkable" da parte di eavesdropper.

L'idea è la seguente:
- Il mittente manda un messaggio al MIX
- Il MIX esegue il **batching**:
  - Colleziona un insieme di messaggi
  - Crea un **batch** di $n$ messaggi
- Poi esegue il **mixing**:
  - Trasforma in modo crittografico i messaggi
  - Li rimanda ai destinatari in un ordine casuale
- Viene utilizzato la chiave pubblica del server MIX per criptare il messaggio

Il problem è che questo sistema è molto lento in quanto la encryption e la decryption è molto computazionalmente costosa. Inoltre si ha latenza alta, che per un servizio come le e-mail può non essere un problema, ma per il traffico TCP è un problema.

### 4.3 ⋅ Onion

Per anonimizzare completamente il traffico è possibile usare il cosiddetto Routin "a cipolla" o **Onion Routing**.

Il sistema funziona nel seguente modo:
1. Il cliente Tor di Alice ottiene una lista dei nodi di Tor da un server di directory
2. Alice sceglie un percorso casuale attraverso la rete Tor e costruisce un circuito
3. Alice cripta il suo messaggio con l'insieme delle chiavi pubbliche dei nodi del circuito.
   1. Praticamente mette il pacchetto dentro un pacchetto dentro un pacchetto
   2. Parte dall'ultimo, poi il penultimo, e così via fino ad arrivare al primo

Man mano ogni nodo del circuito decifra il pacchetto e lo rimanda al nodo successivo, fino ad arrivare al destinatario. L'ultimo pacchetto è il messaggio originale, mandato senza strati della cipolla attorno.

