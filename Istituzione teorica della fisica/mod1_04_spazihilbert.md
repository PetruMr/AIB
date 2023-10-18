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