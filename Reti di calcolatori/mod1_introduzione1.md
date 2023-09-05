[//]: # (Date: 2023-04-30 19:00)
[//]: # (Stili di riferimento per il markdown)
<link rel="stylesheet" href="./res/style.css">

> # Introduzione 1

---

> ## Descrizione iniziale delle reti

---

### Cos'è una rete di calcolatori?

Una rete di calcolatori è un insieme di dispositivi *autonomi* (computer, stampanti, ecc.) *interconnessi* tramite un mezzo trasmissivo (cavo, fibra ottica, wireless) che permette lo scambio di informazioni.

### Classificazione delle reti

Le reti possono essere classificate in base alla dimensione geografica:
- **PAN** (Personal Area Network)
  - Rete personale, di dimensioni ridotte, che collega dispositivi di un singolo utente (es. Bluetooth, telefono e orologio, una stanza).
- **LAN** (Local Area Network)
  - Rete locale, che collega dispositivi di un ufficio, un laboratorio, un edificio, un campus
- **MAN** (Metropolitan Area Network)
  - Connessioni di reti urbane, reti civiche, di un comune o di una città.
- **GAN** (Global Area Network)
  - Rete globale, che collega reti di stati, continenti o del mondo.

---

> ## Prestazioni

---

### Esempio di parametri da considerare

Vi sono due aspetti interessanti per gli utenti da considerare quando si parla delle prestazioni delle reti:
- **Capacità di trasmissione**
  - La quantità di dati che possono essere trasmessi in un certo intervallo di tempo.
  - Misurata in *bit/s* (bit al secondo) oppure *byte/s* (byte al secondo) o loro multipli.
- **Ritardo del collegamento**
  - Il tempo che impiega un bit per attraversare il collegamento.
  - Misurato in *secondi*.

### Misure del ritardo del collegamento

Abbiamo due importanti misure sul ritardo del collegamento, che sono:
- **Round trip time** (RTT)
  - Il tempo che impiega un pacchetto per andare da un nodo all'altro e ritornare.
  - Indica appunto il ritardo che si ha quando si invia un pacchetto e si attende la risposta.

- **Jittering** (o *varianza del ritardo*)
  - La variazione del ritardo del collegamento.
  - Indica la variazione del ritardo che si ha quando si inviano più pacchetti.


Un *jittering* elevato può essere significativo per lo streaming di contenuti multimediali.

*Latenza* alta può essere un problema per le applicazioni interattive.

---

> ## Componenti del calcolatore e della rete

---

### Cosa hanno le reti?

La connessione di un calcolatore a una rete di calcolatori richiede un insieme minimo di componenti, sia hardware che software, in aggiunta al calcolatore elettronico di base:
- *Dispositivi o scheda di rete*
  - Si occupa di codificare, trasmettere, ricevere e decodificare dati dal calcolatore alla rete.
  - Amministrati da componenti software del sistema operativo (driver)
- *Mezzo di trasmissione*
  - Supporto fisico alla propagazione e transmissione dei segnali, come cavi in rame, fibra ottica, onde radio.
- *Connettore di rete*
  - Collega il dispositivo di rete al mezzo di trasmissione.
  - Si tratta delle porte, che possono essere di tipo RJ-45, BNC, fibra ottica, ecc, oppure delle antenne per le reti wireless.
- *Protocolli di rete*
  - insieme di regole implementate sotto forma di software del calcolatore, univocamente definite per garantire compatibilità, e corretta gestione della comunicazione

---

> ## Collegamenti e infrasstrutture di rete

---

### Tipi di collegamenti

Definizioni utili:
- **Connessione o collegamento di rete**:
  - Un mezzo di trasmissione condiviso tra calcolatori in rete (nodi, host)
  - Il mezzo di trasmissione supporta fisicamente la trasmissione di segnali
- **Infrastruttura di rete**:
  - La struttura di connessione dei collegamenti della rete
  - Se ne possono avere di diverso tipo:
    - Punto a punto
    - Multipunto
      - Completamente connesse
      - Parzialmente connesse
      - Partizioni di rete (alcuni elementi sono isolati da altri)
- **Cammino dei segnali**
  - Diretto oppure indiretto attraverso connessioni in sequenza


### Topologie di rete

Esempi di topologie:
- *Anello*
- *Stella*
- *Bus*
- *Albero*

Reti piccole (PAN, LAN) rispettano queste topologie. Reti più complesse possono assumere topologie ibride, dette a maglia.

Reti con connessioni multiple riducono il rischio di partizioni della rete, ovvero che ci siano sezioni non collegate.

---

> ## Deep dive sui vari topic

---

### Tipi di mezzi di tramissione

Vi sono 3 tipi:
- **Cavetti o fili metallici**
  - Trasmettono segnali elettrici (corrente ae variazione di tensione)
  - Esempi sono: doppino intrecciato, cavo coassiale
  - Metodo più usato, affidabile e con buon rapporto costo/prestazione (Fino a 1/2 Gbps)
- **Fibre ottiche**
  - Trasmettono segnali luminosi vincolati entro fibre di vetro
  - Offre le migliori prestazioni di capacità della rete (Varie migliaia di Gbps)
  - Costo elevato, sia per la fibra che per i connettori
- **Senza fili** (Wireless)
  - Trasmettono segnali elettromagnetici (e funzionano anche nel vuoto). Usano onde radio o infrarossi
  - Permettono mobilità dei dalcolatori, riducono l'infrastruttura di rete.
  - Hanno un certo raggio di azione.
  - Prestazioni variabili, ma in generale inferiori a quelle dei cavi
  - Costo variabile, ma in generale inferiore a quello dei cavi


### Dispositivo o scheda di rete

Si tratta di un componente dell'architettura del calcolatore dodato di:
- Interfaccia di collegamento al calcolatore
- Un connettore di rete

Trasmette e riceve dati, opportunamente codificati e decodificati.

Dipende dal mezzo di trasmissione e dalla teconologia di trasmissione usata, ovvero c'è qualcosa di specifico per ogni tipo di mezzo di trasmissione e di tecnologia di trasmissione.

Ha un codice identitifaivo univoco: *indirizzo di livello MAC*.(Medium access control)

### Canali di comunicazione della rete

Si tratta di vedere il mezzo di trasmissione in modo più astratto.

Un canale di comunicazione è un mezzo di trasmissione che collega due o più dispositivi di rete.

Possiamo avere:
- *Canali punto a punto*
  - Canale riservato sul mezzo trasmissivo tra soli due dispositivi di rete
- *Canali ad accesso multiplo* (canale *broadcast*)
  - Canale condiviso sul mezzo trasmissivo tra più dispositivi di rete
  - Necessita di un arbitraggio per decidere chi trasmette e quando
    - Ha un rischio di collisione dei segnali
  - Richiede indirizzamento
    - Indirizzi univoci per mittente e destinatario
    - Si usano gli indirizzi MAC della scheda di rete


---

> ## Tipi di trasmissioni su rete

---

### Reti a commutazione di circuito

Si tratta di una rete che stabilisce un *canale di comunicazione dedicato* tra due dispositivi di rete.

Il canale è stabilito prima della trasmissione dei dati, e viene mantenuto per tutta la durata della comunicazione.

Si paga il canale, indipendentemente dal suo utilizzo, in base al tempo per il quale lo si affitta.

Si tratta di una tecnologia usata per le reti telefoniche, per esempio.

### Reti a commutazione di pacchetto

Molto usata in reti basatu su canali ad accesso multiplo (broadcast) e su Internet.

I dati vengono suddivisi in *pacchetti indipendenti*.

Ogni pacchetto viene spedito sul *canale*, separatamente.

In particolare, su quelli broadcast:
- Ogni pacchetto deve contenenere l'indirizzo del destinatario (e mittente)
- Si ha condivisione del canale tra diversi flussi di pacchetti
- Richiede minore numero di risorse (canali e connessioni), ma esse sono meglio usate, in quanto ci saranno meno tempi morti tra le trasmissioni
- Maggiore **ritardo della rete** di comunicazione
- Si paga per **quantità di dati trasmessi** e non per il tempo necessario. 


### Servizi orientati alla connessione e non

Nelle *reti a commutazione di pacchetto* il servizio di trasmissione dei dati, tra mittente e destinatario ha proprietà determinate dal ruolo dei protocolli di rete usati.

I dati sono spediti indicando mittente e destinatario. 

Ad ogni nodo intermedio i pacchetti vengono inoltrati verso il destinatario, seguendo un percorso.

C'è la possibilità di perdere o avere un arrivo disordinato dei pacchetti.

Si possono avere due tipi di servizi:
- *Servizio orientato alla connessione*
  - Si stabilisce una connessione tra mittente e destinatario
  - Si trasmettono i dati
  - Si chiude la connessione
  - Si ha un servizio di trasmissione affidabile
  - In particolare
    - Garantiscono la **consegna ordinata** dei pacchetti ricevuti, secondo l'ordine di invio
    - Garantiscono la **consegna senza perdita** dei pacchetti ricevuti e, eventualmente, la **ritrasmissione** di quelli persi
- *Servizio non orientato alla connessione*
  - Per esempio, le lettere della posta ordinaria oppure lo streaming.
  - In particolare
    - I pacchetti possono seguire strade diverse, ed arrivare in ordine diverso o non arrivare mai

---

> ## Protocolli di rete e livelli

---

### Organizzazione a livelli

Iniziamo a considerare ora gli aspetti di gestione della comunicazione nelle reti di calcolatori.

Definizione di *protocollo*:
- Insieme di regole e procedure (**semantiche**) di gestione dei processi di comunicazione
- Insieme di regole e formati (**sintattici**) per definire scambio di messaggi non ambigui
- Permettono **compatibilità** dei dispositivi e dei sistemi conformi allo **stesso standard**


I protocolli di rete vengono separati su livelli, stabilendo quella che è l'architettura di rete:
- Ogni livello affronta e risolve un problema della comunicazione
- I livelli superiori richiedono serivizi ai livelli inferiori
- I livelli inferiori offrono servizi ai livelli superiori
- Le richieste e i servizi realizzano l'interfaccia del protocollo verso altri livelli.

### Architettura standard dei protocolli di rete

Esiste un riferimento standard per definire l'architettura dei protocolli di rete dei calcolatori:
- Standard **ISO/OSI** (Open Systems Interconnection Reference Model della International Organization for Standardization)
  - Insieme di livelli completo e rigoroso, per supportare la comunicazione in rete
- Definisce un architettura dei protocolli di rete organizzata in *7 livelli*:
  - Ogni livello gestisce una classe di problematiche di rete
  - Ogni livello fornisce ai livelli superiori una visione della rete semplificata
    - Dialogo tra livelli paritari avviene astraendo l'architettura sottostante
    - Dialogo tra livelli sovrapposti attraverso interfaccia comune per tutti i protocolli.



### ISO/OSI

7 livelli:

7) *Livello Applicazione*
   1. Interfaccia con l'utente 
   2. Fornisce le primitive di trasmissione e ricezione dei dati
6. *Livello Presentazione*
   1. Come i dati vengono modoficati per essere trasmessi
   2. Risolve eventuali eterogeneità del formato dei dati tra i nodi della rete 
5) *Livello Sessione*
   1. Come si stabilisce, gestisce e termina una sessione di comunicazione 
4. *Livello Trasporto*
   1. Connessione affidabile
   2. Controllo congestione
3) *Livello Rete*
    1. Indirizzamento dei dati stabilendo indiriizzi univoci per mittente e destinatario
    2. Instradamento dei dati verso i nodi intermedi
    3. Frammentazione dei dati in pacchetti
2. *Livello MAC/LLC*
   1. Garantire l'affidabilità del mezzo di trasmissione e la gestione dell'accesso al mezzo trasmissivo ad accesso multiplo, evitando quindi collisioni.
3) *Livello Fisico*
   1. Definire le tecniche di codifica dei dati
   2. Trasmissione e ricezione dei dati sul mezzo fisico di trasmissione


In particolare **i livelli 4,3,2,1** sono i livelli di rete, mentre **i livelli 7,6,5** sono i livelli di applicazione. 

I livelli di rete aggiungono informazioni ai dati, per permettere la comunicazione tra i nodi della rete. Essenzialmente, ogni livello imbusta il livello superiore, aggiungendo un *header* e un *trailer*.

### ISO/OSI su Internet

L'Internet usa solo 5 dei 7 livelli ISO/OSI: *1, 2, 3, 4, 7*.

In trasmissione, ogni livello riceve dati dai livelli superiori e li inserisce in buste con dati aggiuntivi, utili ad istruire il corrispondente livello del dispositivo ricevente.

In ricezione, ogni livello verifica i dati della busta, agisce di conseguenza, e passa i dati al livello superiore:
- Livello trasporto imbusta i dati aggiungendo informazioni utili all'ordinamento e controllo della velocità di invio delle buste
- Livello rete frammenta i dati in pacchetti, decide il cammino sul quale inviare il pacchetto a seconda dell'indirizzo del destinatario
- Livello MAC/LLC esegue la consegna finale dei dati a dispositivi di una rete locale

### Livelli e integrazione delle reti

Vediamo quindi nel dettaglio di come ogni livello vede la rete e di come gestiscono problemi relativi ad essa:
- **Livello fisico**
  - La rete è solo un segmento, ovvero un mezzo di trasmissione condiviso tra dispositivi
    - Si occupa di come codificare e trasmettere i dati, con una tecnologia in comune
- **Livello MAC/LLC**
  - La rete è locale, può integraer mezzi trasmissivi e tecnologie diverse
    - Regole per gli indirizzi dei dispositivi, tempi di accesso al mezzo e gestione errori
- **Livello rete**
  - La rete è una collezione di reti locali, e assume struttura gerarchica (reti di reti, sottoreti)
    - Regole di indirizzamento che nascondono i dettagli locali
    - Si definiscono nuovi dispositivi (router) che smistano i pacchetti di dati tra rete e rete
- **Livello trasporto**
  - La rete è una collezione di reti organizzate gerarchicamente
    - Regole per la spedizione affidabile di pacchetti, controllo della congestione della rete
- **Livello applicazione**
  - La rete esiste, funziona, ed è usabile dalle applicazioni dell'utente

---

#### Livello fisico

La trasmissione dati sul canale di comunicazione richiede la codifica e decondifica dei dati, uno di seguito all'altro sul mezzo trasmissivo, da parte della scheda di rete.

I dati sono *bit*, ovvero 1 e 0. Vengono condificati in segnali elettrici, luminosi, o onde elettromagnetiche, che possono essere analogici o digitali.

La velocità di trasmissione è misurata in *bit per secondo* (bps), e dipende dalla tecnologia di trasmissione e dal mezzo fisico. La velocità di trasmissione di questi segnali elettromagnetici è teoreticamente la velocità della luce.

Concettualmente, quindi, non ha senso parlare tanto di velocità di trasmissione quanto di capacità di condifica e decodifica dei dati, ovvero *capacità del canale*. I canali con capacità elevata sono considerabili più veloci di quelli con capacità ridotta, anche se la velocità di trasmissione è la stessa.

#### Segmento di rete locale

Praticamente nelle reti locali si trasmette a tutti i dispositivi collegati al mezzo trasmissivo, e ogni dispositivo deve essere in grado di riconoscere i dati che gli sono destinati.

Lo fanno guardando l'indirizzo MAC, ovvero un indirizzo univoco assegnato ad ogni scheda di rete. L'indirizzo MAC è di 48 bit, e viene assegnato dal produttore della scheda di rete.

#### Come rendere il segmento affidabile

Usiamo gli ACK:
- Il mittente invia un pacchetto
- Il destinatario riceve il pacchetto e invia un ACK
- Il mittente riceve l'ACK e invia il pacchetto successivo
  - Se il mittente non riceve l'ACK, ritrasmette il pacchetto, in quanto il destinatario non lo ha ricevuto oppure lo ha ricevuto male, oppure l'ACK si è perso

#### Affidabilità da livello 4 a livello 2

Livello 4:
- Manda un segmento e aspetta l'ACK di quel segmento intero. Si può vedere come un ACK end to end, il che lo rende lento a risolvere problemi più "piccoli" della rete.

Livello 3:
- Manda un pacchetto (parte del segmento di livello 4) e decide come trasmettere i pacchetti

Livello 2:
- Tra ogni nodo, si aspetta l'ACK di ogni pacchetto, e si ritrasmette il pacchetto se non si riceve l'ACK.
- Si può vedere come un ACK hop to hop, il che lo rende più veloce a risolvere problemi più "piccoli" della rete.

#### Esempi di soluzioni di livello 2

- **Ethernet**
  - Usata nelle reti locali
  - Usa un metodo di accesso *randomizzato nel tempo* per trasmettere i dati sul mezzo condiviso.
  - Non garantisce prestazioni, in quanto vi sono comunque collisioni
- **Token Ring**
  - Usata se i dispositivi sono collegati in anello cablato
  - Un dispositivo trasmette solo se ha il *token*, ovvero un messaggio che gli permette di trasmettere.
  - Il *token* è passato da un dispositivo all'altro, e ogni dispositivo ha un tempo massimo di trasmissione.
  - Si generano problemi quando un dispositivo si disconnette senza rilasciare il *token*.
- **IEEE 802.11 (Wi-Fi)**
  - Usata nelle reti locali senza fili
  - Ogni membro ascolta, e quando c'è silenzio trasmette
  - Se due membri trasmettono contemporaneamente, si genera una collisione
  - Ognuno aspetta una quantità di tempo casuale prima di ritrasmettere

---

> ## Dispositivi per unire le reti

---

### Cosa viene usato

- **Repeater**
  - Livello fisico (1)
  - I segnali trasmesso sul mezzo fisico degradano con la distanza, in quanto si introduce del rumore.
  - Un *repeater* riceve il segnale, lo amplifica, e lo ritrasmette.
- **Hub**
  - Livello fisico (1)
  - Un *hub* è un *repeater* multiporta, ovvero un dispositivo che riceve il segnale da una porta e lo ritrasmette su tutte le altre porte.
- **Bridge**
  - Livello MAC/LLC (2)
  - Un *bridge* è un dispositivo che collega due segmenti di rete locale, e li unisce in un unico segmento.
  - Connette segmenti di una rete locale con tecnologie di rete diverse (Per esempio Ethernet e Token Ring)
  - Traduce i frammenti da un segmento all'altro, e li ritrasmette.
- **Switch**
  - Livello MAC/LLC (2)
  - Un *switch* è un *bridge* multiporta, ovvero un dispositivo che collega più segmenti di rete locale.
  - Ha la capacità di memorizzare gli indirizzi MAC dei dispositivi collegati alle porte, e di inviare i pacchetti solo alla porta giusta.