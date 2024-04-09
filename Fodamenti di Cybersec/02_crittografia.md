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

Un sistema dovrebbe essere sicuro anche se tutto il protocollo è pubblico, con l'eccezione della chiave usata.

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

# 2 ⋅ Algoritmi di crittografia

## 2.1 ⋅ Cos'è la crittografia

Metodi per memorizzare, elaborare e trasmettere informazioni in maniera sicura in presenza di agenti ostili.

Un classico scenario è quello del cifrario di cesare:
- **Cifrario di Cesare**
  - Spostare le lettere di un certo numero di posizioni
  - Esempio: con uno shift di 3, `A` diventa `D`, `B` diventa `E`, etc.

Si tratta di una crittografia **simmetrica**. In seguito, in questo documento, ci saranno esempi di altre tipologie di crittografia simmetrica e la loro descrizione matematica.

## 2.2 ⋅ Cifrario di Cesare (shift cipher)

Abbiamo che:
- Vi sia il plaintext $P$ (il messaggio da cifrare). Si tratta di parole che fanno parte di un alfabeto ${\{A, B, C, \ldots, Z\}} \approx \mathbb{Z}_{26}$.
- Vi sia una chiave $K$ (un numero intero) che rappresenta lo shift da fare per cifrare il messaggio. Questo shift è un intero $K \in \mathbb{Z}_{26}$.
- L'operazione di cifratura è data da $C = E_K(P) = (P + K) \mod 26$.
  - **Shift right**
- L'operazione di decifratura è data da $P = D_K(C) = (C - K) \mod 26$.
  - **Shift left**

Formalmente:

$$
\begin{align*}
\text{Let } & P, C, K \in Z_{26}^*
\\
\text{For } & 0 \leq k \leq 25:
\\
& E_K(P) = (P + K) \mod 26 
\\ 
& \quad \text{ and}
\\
& D_K(C) = (C - K) \mod 26
\\
(P,& \ C \in Z_{26})

\end{align*}
$$

Si fa notare come di solito la punteggiatura venga eliminata.

### Sicurezza

Il cifrario di Cesare è molto debole, in quanto ci sono solo 26 chiavi possibili. Pertanto si può fare un semplice attacco di forza bruta e si può ottenere il messaggio che "ha senso" in chiaro. Una volta che viene trovata $k$, diventa molto facile decifrare l'intero testo

### Vantaggi

- Facile da implementare
- Velocità di cifratura e decifratura

## 2.3 ⋅ Monoalphabetic substitution cipher

Abbiamo che:
- Le possibili chiavi sono tutte le permutazioni di $\Sigma = \{A, B, C, \ldots, Z\}$.
- L'operazione di cifratura è data da $C = E_K(P) = \pi(P)$.
  - Ogni lettera del plaintext è sostituita con la sua permutazione $\pi(X)$.
- La decifratura è data da $P = D_K(C) = \pi^{-1}(C)$.
  - Ogni lettera del ciphertext è sostituita con la sua permutazione inversa $\pi^{-1}(X)$.

Un esempio potrebbe per esempio essere:

$$
\begin{align*}
\pi(A) & = D
\\
\pi(B) & = E
\\
\vdots
\\
\pi(Z) & = C
\end{align*}
$$

Quante sono le possibili chiavi assumendo che si usino 26 lettere?
- $26! \approx 2^{88}$ chiavi possibili

### Sicurezza

Anche questa cifratura è piuttosto debole, in quanto si può fare un attacco usando la frequenza delle lettere, ovvero sappiamo che, per esempio, in inglese la lettera più frequente è la `E`, la seconda è la `T` e così via. Pertanto possiamo andare a sostituire le lettere usando questo tipo di frequenza nel testo.

Questo si chiama **frequency analysis attack**. Per la prima volta usato nel 800 AD.

Questo succedere perché la cifratura *preserva le caratteristiche del linguaggio*.

Da notare che oltre alla frequenza delle singole lettere si può usare anche la frequenza di sequenze di 2 lettere, di 3 lettere e così via. Per esempio la sequenza di 2 lettere più usata è `IN`, la sequenza di 3 lettere più usata è `THE` e così via.

## 2.4 ⋅ Vigenère cipher

Abbiamo che:
- La chiave è formata da $K = (k_1, k_2, \ldots, k_n)$, con $k_i \in \Sigma$.
- Ogni lettera $p_j$ del plaintext $P$ viene shiftata usando $k_i$, con $i = j \mod n$.

Per esempio, possiamo avere la chiave $K = (C, R, Y, P, T, O)$ e il plaintext viene cifrato man mano usando ognuna delle lettere della chiave e poi ritorna a cifrare con la prima lettera.

### Sicurezza

Questo è più resistente alla frequency analysis.

Tuttavia, è comunque relativamente facile da rompere: se si conosce o si indovina la lunghezza della chiave, allora diventa facile romperlo.

Si può pensare di allungare la lunghezza della chiave. Questo si può anche fare utilizzando più round di cifratura.


$$
\\ \ \\
$$

*A questo punto c'è una breve introduzione alla statistica in fondo alle slide, che parla di distribuzioni, eventi, etc.*

*Non trascriverò queste ultime slide.*