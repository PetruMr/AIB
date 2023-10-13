[//]: # (Stili di riferimento per il markdown)
<link rel="stylesheet" href="./res/style.css">

> # 1.4 - Integrali nel piano complesso

---

## Definizioni

Passiamo al concetto di integrabilità lungo la curva.

### Definizione - **Curva**

Si definisce curva una applicazione continua

$$
\gamma : [\alpha, \beta] \rightarrow \mathbb{C}
$$

In cui $\alpha, \beta \in \mathbb{R}$ sono gli estremi di un segmento $[\alpha, \beta]$ della retta reale marametrizzata da $t \in \mathbb{R}$

$$
\gamma(t) = x(t) + iy(t)
$$

I punti $a = \gamma(\alpha)$ e $b = \gamma(\beta)$ sono detti *estremi* della curva $\gamma$. La curva $\gamma$ è detta *chiusa* se $a = b$.

1. Una curva è detta di *Jordan* se $\gamma : ]\alpha, \beta[ \rightarrow \mathbb{C}$ è biettiva. Si noti l'esclusione degli estremi, ciò permette in questa definizione di evitare i nodi, ma permette comunque che $\gamma(\alpha) = \gamma(\beta)$ e cioè che la curava sia chiusa.
2. Una curva è *regolare* (o differenziabile) se esiste $\gamma'(t), \forall t \in [\alpha,\beta]$, cioè posso disegnare la retta tangente per tutti i punti di $\gamma$.
   1. Non regolare sarebbe qualcosa che ha uno spigolo, per esempio
3. Una curva che sia composta dall'unione di più curve regolari, ma che nei punti di unione non è regolare, si dice *regolare a tratti*.
   1. Possiamo immaginare tante curve collegate in dei punti ogni tanto e che sono staccati nelle y, e quindi non sono regolari in quei punti.
4. Una curva è *rettificabile* (cioè si può rendere equivalente a un segmento in $\mathbb{R}$) se esiste $\gamma'(t)$ quasi ovunque e $\gamma'(t)$ è assolutamente integrabile, cioè:

$$ 
\int_{\alpha}^{\beta} |\gamma'(t)| dt = \int_{\alpha}^{\beta}{\sqrt{x'(t)^2 + y'(t)^2} dt} < \infty
$$

La lunghezza della curva $\gamma$ sarà allora definita da

$$
l(\gamma) = \int_{\alpha}^{\beta} |\gamma'(t)| dt
$$

Il "quasi ovunque" nella definizione di curva rettificabile significa che anche curve regolari a tratti sono rettificabili.

#### Recap

Innazitutto abbiamo citato l'integrale, la formula e come funzione.

Poi ci è stato spiegato cosa si intende graficamente per la area sotto una curva, definendo una funzione:

$$
f(x,y) : \mathbb{R}^2 \rightarrow \mathbb{R}
$$

E noi abbiamo la nostra curva $\gamma(t)$ che è definito come:

$$
\gamma(t)=(x(t),y(t))
$$

E quindi la curva che noi abbiamo in tre dimensioni è:

$$
f(\gamma(t))
$$

Allora poi andiamo a definire l'integrale, definendo le varie dimensioni infinitesimali, e poi come si calcola l'area piccola sotto ogni porzione della curva e infine come tutto questo si somma in una sommatoria per un limite verso l'infinito.

Passiamo quindi infine a definire quello per queste curve qua nel piano complesso:

Sia $f(z)$ una funzione in $\mathbb{C}$ e $\gamma(t)$. Una curva regolare

$$
\gamma(t) = z(t) = x(t) + iy(t)
$$

Continua per $t\in [\alpha, \beta]$ con $a = \gamma(\alpha), b = \gamma(\beta)$.

Per ogni arco $[Z_{k-1}, Z_k]$, $\xi_k \in [Z_{k-1},Z_k]$ e definiamo:

$$
I_n = \sum_{k=1}^{n}{f(\xi_k)(Z_k - Z_{k-1})}
$$

Dove per $I_n$ si intende "Integrale di linea", il quale è definito come segue:

$$
    lim_{n\rightarrow\infty} I_n = I = \int_{\gamma}{f(z)dz}
$$

Se $\gamma$ è chiusa, allora $a = b$ e si scrive:

$$
\int_{\gamma}{f(z)dz} = \oint_{\gamma}{f(z)dz}
$$

in particolare poi abbiamo:

$$
\int_{\gamma} f(z)dz = \int_{\gamma} (u+iv) (dx+idy)
$$

Dove l'uguale deriva dalle due eguaglianze:

$$
f(z) = u+iv) \quad \quad z = x+iy
$$

E poi abbiamo, quindi:

$$
\int_\gamma (udx - vdy) + i \int_\gamma (vdx + udy)
$$

#### Proprietà

1. **Linearità:** 
   1. Vi sia $A\subset\mathbb{C}$
   2. Allora $\int_\gamma Af(z) dz = A \int_\gamma f(z) dz$
   3. $\int_\gamma (f(z) + g(z)) dz = \int_\gamma f(z) dz + \int_\gamma g(z) dz$
2. **Somma dei contorni**
   1. $\int_{\gamma=\gamma_1\cup\gamma_2}$ f(z) dz = $\int_{\gamma_1}$ f(z) dz + $\int_{\gamma_2}$ f(z) dz
3. Se $\gamma$ è percorsa in un certo verso, sia $\gamma^-$ la stessa curva ma percorsa in senso opposto, allora:
    1. $\int_{\gamma^-}$ f(z) dz = - $\int_{\gamma}$ f(z) dz
 4. *Integrazione per parti*
    1. $\int_{\gamma} \frac{df}{dz}{g(z)dz} = f(z)g(z)|_{z=a}^{z=b} - \int_{\gamma} f(z) \frac{dg}{dz} dz$ 

### Definizione

