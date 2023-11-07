### $1.1 \cdot$ Operatore unitario

Un operatore $U$ regolare tale che:

$$
U^{-1} = U^{\dagger}   \quad ovvero \quad U^{\dagger}U = UU^{\dagger} = I
$$

si dice *operatore unitario*. Il prodotto di due operatori unitari è unitario.

Un operatore unitario conserva la norma dei vettori su cui agisce:

$$
|| {U | x \rangle} || = \sqrt{\langle x | U^{\dagger}U | x \rangle} = \sqrt{\langle x | x \rangle} = || | x \rangle ||
$$

Questo vuol dire che se noi calcoliamo la norma di un vettore e poi lo moltiplichiamo per un operatore unitario, la norma non cambia.

Pertanto se l'evoluzione nel tempo è rappresentata da un operatore unitario, la norma del vettore di stato rimane costante e non dobbiamo ricarcolarlo, per esempio, secondo per secondo.

Un generico operatorio unitario può essere messo nella forma:

$$
U=e^{iH}
$$

con $H$ operatore hermitiano.

### $1.2 \cdot$ Prodotto ket-bra

Un simbolo del tipo $|a\rangle \langle b|$ soddisfa tutte le proprietà di un operatore lineare.

Posto infatti:

$$
A=|a\rangle \langle b|
$$

si ha che A applicato a un $ket$ produce un nuovo $ket$.

$$
A|x\rangle=|a\rangle \langle b|x\rangle= \alpha | a\rangle = |x'\rangle
$$

ove si è posto $\alpha = \langle b|x\rangle$ e $|x'\rangle = \alpha | a\rangle$.

Allo stesso modo si può verificare che anche l'azione su un $bra$ è consistente con la definizione di operatore.

L'aggiunto di $A=|a\rangle \langle b|$ è $A^{\dagger}=|b\rangle \langle a|$.

Per dimostrare questa cosa abbiamo fatto il calcolo:

$$
\langle a | b \rangle = (a_1 a_2) \begin{pmatrix}
b_1 \\
b_2
\end{pmatrix} = a_1 b_1 + a_2 b_2
$$

#### $1.2.1 \cdot$ Proiettore

Un operatore lineare hermitiano e idempotente, cioè tale che $P^2=P$, si dice *operatore di proiezione o proiettore*. Un operatore di proiezione **non ammette inverso** (a meno che sia l'identità, però questo è un caso banale). La somma di due proiettori è un proiettore se e solo se essi sono *ortogonali*, cioè se $P_1 P_2 = P_2 P_1 = 0$.

Un proiettore per esempio è $|x\rangle \langle x|$. Si tratta di un proiettore che ci proietta nella direzione di $x$. Qualunque altro vettore noi ci mettiamo davanti, viene proiettato nella direzione di $x$. Per esempio:

$$
|x \rangle \langle x | a\rangle =\alpha | x\rangle 
$$

## $2 \cdot$ Autovalori e autovettori

Se l'applicazione di un operatore $A$ ad un certo vettore $|u\rangle\neq0$ da come risultato un vettore proporzionale a $|u\rangle$ stesso:

$$
A|u\rangle=\lambda|u\rangle
$$

(Con $\lambda$ un numero complesso$

Si dice che $\lambda$ è un **autovalore** dell'operatore $A$ e che $|u\rangle$ è un **autovettore** dell'operatore $A$ appartenente o corrispondere all'autovalore $\lambda$.

Per essere autovettore di $A$ un vettore $|u\rangle$ deve soddisfare un'*equzione agli autovalori* come la precedente. Riscriviamola come:

$$
(A-\lambda I)|u\rangle=0
$$

In particolare per trovare gli autovalori si fa come in algebra, ovvero si va a fare:

$$
A=
\begin{pmatrix}
a_{11} \quad a_{12} \\
a_{21} \quad a_{22}
\end{pmatrix}

\\ \quad \\ \quad \\ \quad \\

0 = det(A - \lambda I) \\ \quad \\

= \begin{pmatrix} a_{11} - \lambda & a_{12} \\ a_{21} & a_{22} - \lambda \end{pmatrix} \\ \quad \\

= (a_{11} - \lambda)(a_{22} - \lambda) - a_{12}a_{21} \\ \quad \\

= \lambda^2 - (a_{11} + a_{22})\lambda + a_{11}a_{22} - a_{12}a_{21}
$$

Andiamo quindi a trovare delle soluzioni, ovvero $\lambda_{1}$ e $\lambda_{2}$. Andando quindi a usare questi autovalori, possiamo trovare gli autovettori corrispondenti. L'importante è trovare gli autovalori e listarli e un volta che vengono listati tutti si possono sicuramente andare a trovare gli autovettori, per ognuno di essi. 

**Osservazione interessante**: visto che siamo nel campo complesso ci sono sempre atuovalori e quindi anche autovettori, in quanto prima nel campo dei numeri reali potevano non esserci soluzioni per i $\lambda$ ma qua c'è sempre.

L'autovalore di solito mi va ad indentificare un sottospazio, di dimensione 1 e complesso. Questo sottospazio è formato da un vettore e tutti gli altri vettori che sono multipli di esso. Noi andiamo ad indicare questo vettore con: 

$$
\lambda_1 \rightarrow \alpha|u_{1}\rangle \rightarrow |\check {u_{2}}\rangle = \frac{|u_{1}\rangle}{||u_{1}||} 
\\ \quad \\

\lambda_2 \rightarrow \beta|u_{2}\rangle \rightarrow |\check {u}_{2}\rangle = \frac{|u_{2}\rangle}{||u_{2}||}
$$

In particolare abbiamo poi che:

$$
|u\rangle = \alpha | u_{1}\rangle + \beta | u_{2}\rangle
$$

Possiamo anche avere delgi autovalori che mi indicano un sottospazio di dimensione maggiore a 1: in questo caso si chiamano **autovalori degeneri**. Per esempio se un autovalore è degenere di ordine 2, allora il sottospazio "labelled" da quell'autovalore è di dimensione 2.

Ci rendiamo conto che essa è equivalente alla richiesta che l'operatore $A-\lambda I$ debba essere singolare. Se infatti esso ammettesse un inverso potrei moltiplicare a sinistra per $(A-\lambda I)^{-1}$ e otterrei $|u\rangle=0$ in contraddizione con la definizione stessa di autovalore.

### $2.1 \cdot$ Definizione

Si dice *normale* un operatore i cui autovettori costituiscano un insieme completo ortonormale.

(Ovvero si riesce a spannare su tutto lo spazio di Hilbert, se ho sentito bene)

### $2.2 \cdot$ Teorema

Un operatore $A$ è *normale* se e solo se commuta con il suo aggiunto:

$$
[A,A^{\dagger}] = 0
$$

Ovviamente ogni operatore hermitiano è anche normale.

E' possibile dimostrare il seguente fondamentale.



> Lezione qua in mezzo che non ho seguito

### 2.1 ⋅ Definizione

Al posto di fare le sommatorie, viene definito un integrale, ovvero si passa da:

$$
\sum_{k} \rightarrow \int dk

\\ \quad \\

\phi_{k}->\phi(k)

\\ \quad \\

\delta_{k,k'} \rightarrow \delta(k-k')
$$

Quindi adesso al sostituiremo per esempio:

$$
\sum |k\rangle \langle k | = 1

\\ \quad \\
\text{Adesso scriveremo:}
\\ \quad \\

\int |k\rangle \langle k | dk = 1
$$

Alcuni autori scrivono anche un simbolo che mischia l'integrale e la sommatoria, ovvero:

$$
\int\kern-1.3em\footnotesize\sum{}{} \normalsize _{k} |k\rangle \langle k | dk = 1
$$

### $2.1 \cdot$ Definizione
Data una successione di funzioni $g_1(x), g_2(x)$, ... anche se non esiste limite per $lim_{n\rightarrow \infty}g_n(x)$, ma esiste:

$$
lim_{n\rightarrow \infty} \int_{a}^{b} g_n(x)f(x) x
$$
Rispetto a tutte le funzioni $f(x)\in \mathit{F}$, over $F$ è una certa classe di funzioni, si dice che la successione $g_n(x)$ identifica una distribuzione $\gamma(x)$ rispetto a $F$ nell'intervallo [a,b], definita da formalmente dall'identità

$$
\int_{a}^{b} \gamma(x)f(x) dx = lim_{n\rightarrow \infty} \int_{a}^{b} g_n(x)f(x) dx
$$

ovvero, con una scrittura formalmente impropria ma efficace

$$
\gamma(x) = lim_{n\rightarrow \infty} g_n(x)
$$

L'oggetto $\gamma(x)$ così introdotto non può essere considerato una funziona in senso stretto. Ecco perché si preferisce indicarlo con il termine distribuzione.

### $2.2 \cdot$ Definizione

> NB: noi la usiamo con numeri in $\mathbb{R}$, ma in realtà si può usare con numeri complessi però non ci complichiamo la vita con definizioni complicate quindi per ora gestiamola in $\mathbb{R}$

La distribuzione **delta di Dirac** $\delta(x)$ è definita dalla relazione:

$$
\forall f \quad : \quad \int_{-\infty}^{+\infty} \delta(x-y)f(x)dx = f(y)
$$

in particolare per $f(x)=1$

$$
\int_{-\infty}^{+\infty} \delta(x-y) f(x) dx = f(x) \ , \ f(x)=1

\\ \ \\

\int_ {-\infty}^{+\infty} \delta(x) dx = 1

\\ \ \\

\int_{-\infty}^{+\infty} \delta(x-y)dx = 1
$$

Quello che fa la delta di dirac, in genrale è "uccidere" tutti i valori che sono diversi da $y$ e lascia vivo solo il valore $y$.

Nella pratica noi dovremmo pensare alla delta di Dirac nel seguente modo:

$$
\delta (x) = \begin{cases} 0 \quad x \neq 0 \\ \infty \quad x = 0 \end{cases}
$$

Quello che ci deve interessare da un punto di vista operativo è che la delta di Dirac (non è una funzione, ma una distribuzione), è una funzione *pari*, in quanto c'è un solo punto e poi le cose a sinistra e destra sono uguali (ovvero 0).

Come posso rappresentarla come limite? (Ovvero con lo stesso senso di quello che ho scritto nell'equazione sopra)

Alcuni esempi pratici di successioni, definenti la delta di Dirac, che sono usate spesso, sono:

$$
\delta_n(x) = lim_{n\rightarrow \infty} \frac{1}{\pi}\frac{n}{1+n^2x^2}
$$

Una molto più carina è la gaussiana:

$$
\delta_n(x) = lim_{n\rightarrow \infty} \frac{n}{\sqrt{\pi}}e^{-(nx)^2}
$$

Infine c'è una forma che usa il sin:

$$
\delta_n(x) = lim_{n\rightarrow \infty} \frac{1}{\pi}\frac{\sin(nx)}{x}
$$

E da questa formula noi possiamo ottenere una rappresentazione integrale per il delta di Dirac è la seguente utilissima regola di somma:

$$
\delta(x)=\frac{1}{2\pi}\int_{-\infty}^{+\infty}e^{ikx}dk

\\ \ \\

\frac{1}{2\pi}\sum_{n=-\infty}^{+\infty}e^{inx}=\delta(x)
$$

In particolare notare che una formula del sin è (è quella che viene usata per trovare quell'integrale):

$$
sin \ x = \frac{e^{ix}-e^{-ix}}{2i}
$$

#### 2.3.1 ⋅ Proprietà della Delta di Dirac

La delta di Dirac gode delle seguenti proprietà:

$$
\delta(x) = \delta(-x)

\\ \ \\

\delta(ax) = \frac{1}{|a|}\delta(x) \ , \ \forall a \in \mathbb{R}

\\ \ \\

\delta(x-y)f(x)=\delta(x-y)f(y)

\\ \ \\

x\delta(x) = 0
$$

Poi ricordare una formula (non spiegata è fuori di testa come cose che ci mette, prenderla come buona):

$$
\delta(y(x))=\sum_{i}\frac{\delta(x-x_i)}{|y'(x_i)|}
$$

Da cui in particolare si può ottenre, usando le fomrule precedenti che:

$$
\delta(x^2-a^2) = \frac{1}{2|a|}\left[\delta(x-a)+\delta(x+a)\right]
$$

Quest'ultima corrisponde con il delta di una funzione quadratica.

### 2.4 ⋅ Funzioni theta di Heaviside

Potremmo andare a fare la derivata della delta di Dirac? Abbiamo la funzione di Dirac che passa da 0 a infinito a 0.

Per farlo andiamo a definire la funzione **theta di Heaveside**, o funzione gradico, ovvero:

$$
\theta(x) = \begin{cases} 0 \quad x < 0 \\ 1 \quad x > 0 \end{cases}
$$

Che ha la delta di Dirac come derivata:

$$
\theta'(x) = \delta(x)
$$

E quindi è la primitiva (in senso formale delle distribuzioni) della delta:

$$
\theta(x) + cost. = \int_{}^{} \delta(x) dx
$$

La $\Theta$ ha una utile rappresentazione integrale, ovvero:

$$
\Theta (x) = \frac{1}{2\pi} \int_{-\infty}^{+\infty} \frac{e^{ikx}}{ik} dk
$$

#### Cosa ci serve ricordare?

Ci sono veramente tante cose riguardo alla delta di Dirac.

Ci serve ricordare in particolare:
- Che quando si ha la delta di Dirac si schiaffa il valore di $x$ che non ci interessa
- Ricordare le formule (quelle derivate dalla formula con sin) presenti e le proprietà
- Ricordarsi che la forma del gaussiano che rappresenta la delta di Dirac è appunto una gaussian che va restringendosi.

### 2.5 - Delta di Dirac multidimensionali

La delta di Dirac può essere agevolmente generalizzata a più dimensioni. Per esempio in $\mathbb{R}^3$ si definisce la delta tridimensionale dipendente da un vettore $\bold{x} = (x_1,x_2,x_3)$ come

$$
\delta(\bold{x}) = \delta(x_1)\delta(x_2)\delta(x_3)
$$

Per il resto, se curiosi, guardare sulle slide.

> Torniamo a fisica

## 4. ⋅ Qualcosa

### 4.1 ⋅ Funzioni a quadrato sommabile e spazio $\mathbb{L}^2$

Consideriamo:

$$
f(x) \in \mathbb{L}^2(a,b)
\\
\int_{a}^{b} |f(x)|^2 dx < \infty
$$

Le funzioni che hanno l'integrale scritto sopra uguale a 0, allora in quanto la funzione ha solo dei valori positivi e quindi se l'integrale è 0, allora la funzione è 0.

Abbiamo quindi una funzione nulla o *quasi* nulla.

Se anche $g(x)\in \mathbb{L}^2(a,b, allora:

$$
\int_{a}^{b} |\alpha f(x) + \beta g(x)|^2 dx < \infty
$$

In quanto abbiamo la disuguaglianza triangolare e gli integrali sono lineari:

$$
\int_{a}^{b} |\alpha f(x) + \beta g(x)|^2 dx \leq \alpha \int_{a}^{b} |f(x)|^2 dx + \beta \int_{a}^{b} |g(x)|^2 dx < \infty
$$

No ma tranquillo tanto $f(x) \sim |f\rangle$

Essenzialmente noi possiamo avere dei picchi qua e là e non ci crea nessun problema. In sostanza:

$$
f(x) \sim f(x) + q(x)
$$

Dove $q(x)$ è una funzione con integrale nullo, il quale assume valori finiti qua e là.

#### Continuando noi abbiamo

Una formula importantissima da ricordare per meccanica quantistica è la seguente.

In $\mathbb{L}^2(a,b)$ possiamo introdurre una nozione di prodotto scalare tra due funzioni $f(x)$ e $g(x)$, definendolo come:

$$
\langle f | g \rangle = \int_{a}^{b} f^*(x)g(x) dx
$$

Esso è, come è facile verificare, una forma hermitiana che definisce una norma definita positiva:

$$
|| f || = \sqrt{\langle f | f \rangle} = \sqrt{\int_{a}^{b} |f(x)|^2 dx}
$$

Inoltre:

$$
f_{norm}(x)=\check f(x)= \frac{f(x)}{||f||}
$$

#### In seguito abbiamo

Sia dato un insieme di funzioni infinito ${\phi_i(x)}$, con $i=1,...,n$ di funzione normalizzate a 1 tra loro ortogonali costituisce un sistema ortonormale:

$$
\langle \phi_i | \phi_j \rangle = \delta_{ij}
$$

Prima cosa: le funzioni che costituiscono un sistema ortonormale sono linearmente indipendenti. Se per assurdo non lo fossero, allora (dimostrazione sul libro).

> alte cose in mezzo

Devono convergere in modulo quadro. Alcuni al posto di fare la formula scritta subito sotto 4.1 nelle slide scrive:

$$
f(x) = l.i.m._{n\rightarrow \infty} \sum_{i=1}^{n} \alpha_i \phi_i(x)
$$

Dove $l.i.m.$ Vuol dire "limite in media". Ma questa è una porcata.

> Alte cose

Appuntino:

$$
\mathcal{F}_k[f(x)] = \frac{1}{2\pi}\int_{-\infty}^{+\infty} e^{-ikx}f(x)dx = \tilde{f}(k)

\\ \ \\

\mathcal{F}_{-x}[\tilde{f}(k)]=\frac{1}{2\pi}\int_{-\infty}^{+\infty} e^{ikx}\tilde{f}(k)dk = f(x)