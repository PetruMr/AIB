# Introduzione del corso

Prima lezione del corso di Fondamenti di Cybersecurity di UniBo, 2023/2024.

Corso tenuto dalla professoressa **Jocelyna Elias**.

Il materiale di questa lezione si può trovare [qui](https://virtuale.unibo.it/pluginfile.php/1987492/mod_resource/content/1/Lecture%200%20-%20Introduction.pdf)

## Di cosa si occupa la sicurezza informatica?

### Terminologia

**Cybersecurity** si riferisce ad ogni tecnologia, misura o pratica volta a prevenire **cyberattack** o mitigarne l'impatto.

> Cybersecurity is the practice of deploying people, policies, processes, and technologies to protect organizations, their critical systems and sensitive information from digital attacks.

La cybersecurity mira a proteggere il sistema, i computer, etc. di un individuo o di un associazione da semplici virus a sofisticati ransomware.

Un **cyberattack** è ogni sforzo di compromettere, rubare, alterare o distruggere informazioni o sistemi informatici attraverso accessi non autorizzati ad un network, un computer o un dispositivo.

### Attacci comuni

- **Phishing and social-engineering-based attacks**
  - L'attaccante di far si che utenti con accesso legittimo aprano una porta di accesso per utenti non autorizzati, in modo che possano rubare informazioni sensibili.
- **Internet-facing service risks (including cloud services)**
  - Relativo alle minacce che i servizi che si interfacciano a internet possono subire. 
- **Password-related account compromises**
  - Deploy di software non autorizzato o altre tecniche di hacking per poter ottenere le password più usate, affinché si possa accedere a dati confidenziali, sistemi, etc.
- **Misuse of information** (*Abuso di informazioni*)
  - Utenti autorizzati diffondono involontariamente o deliberatamente o altrimenti abusano di informazioni o dati a cui hanno accesso legittimo.
- **Network-related and man-in-the-middle attacks** (*Attacchi relativi alla rete e attacchi man-in-the-middle*)
  - Gli aggressori possono essere in grado di intercettare il traffico di rete non sicuro o di reindirizzare o interrompere il traffico a seguito del mancato criptaggio dei messaggi all'interno e all'esterno del firewall di un'organizzazione.
- **Supply chain attacks** (*Attacchi alla catena di fornitura*)
  - Partner, fornitori o altri asset o sistemi di terze parti (o codice) vengono compromessi, creando un vettore per attaccare o esfiltrare informazioni dai sistemi aziendali.
- **DoS attacks** (*Denial of service*)
  - Gli aggressori **sovraccaricano** i sistemi aziendali causando una chiusura temporanea o un rallentamento. Gli attacchi **DoS distribuiti** (**DDoS**) inondano anche i sistemi, ma utilizzando una rete di dispositivi.
  - Ogni giorno vengono segnalati migliaia di attacchi DDoS e gli aggressori informatici sono capaci di aumentare l'ampiezza dell'attacco.
  - Gli attacchi DDoS continuano ad aumentare in complessità, volume e frequenza. Questo rappresenta una minaccia crescente per la sicurezza della rete anche delle più piccole imprese.
- **Ransomware**
  - Questo software malevolo infetta i sistemi di un'organizzazione e limita l'accesso ai dati criptati o ai sistemi **fino a quando non viene pagato un riscatto** al perpetratore. Alcuni aggressori minacciano di rilasciare i dati se il riscatto non viene pagato.

### Cybersecurity nel passato - timeline

Nel 1969 nasce ARPANET, che viene definito da Rober Metcalfe come "non sicuro".

Nel 1983 Fred Cohen inventa il termine "computer **virus**"

Dal 1983 viene adottato TCP/IP da ARPANET.

Nel 1988 nasce il primo worm, il **Morris Worm**, per il quale il creatore è stato condannato a 400 ore di servizio comunitario e a pagare una multa di 10.000 dollari in quanto aveva crashato il 10% dei computer connessi ad internet.

### Cyber systems

Cybersecurity non si riferisce alla sicurezza dei singoli computer individuali, ma quello del "Cybersystem", il quale integra:
- Computer
- Comunicazioni
- Persone

### Altre definizioni

Alcuni termini utili:
- **Vulnerability**: una debolezza che può essere sfruttanta per causare del danno
- **Attacco**: un metodo per sfruttare una vulnerabilità
- **Threat**: un avversario capace e motivato di sfruttare una vulnerabilità

Quali sono le strategie di risolvere questi problemi?
- Identificare ogni vulnerabilità (di solito causati da bug)
- Identificare attacchi e eliminare le vulnerabilità che quegli attacchi sfruttano

Altre definizioni ancora:
- **Zero-day vulnerability**
  - Una vulnerabilità che è sconosciuta a coloro che dovrebbero proteggersi da essa
- **Window of Opportunity**
  - Il tempo tra quando un attacco è scoperto e quando viene risolto
- **Zero-day attack**
  - Un attacco che sfrutta una window of opportunity

Nel *2005*, la window of opportunity era di *54 giorni*, nel *2014* è salita a *12 mesi*.

