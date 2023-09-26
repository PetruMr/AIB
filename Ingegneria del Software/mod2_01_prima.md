[//]: # (Stili di riferimento per il markdown)
<link rel="stylesheet" href="./res/style.css">

> # Introduzione

---

## Tipi di polimorfismo

Ci sono 4 tipi di polimorfismo:
- *Overloading*
  - Gestito dal compilatore
  - Metodi / funzioni con lo stesso nome ma con una diversa signature, ovvero un numero e/o un tipo diverso di parametri.
- *Funzioni virtuali*
  - Associazione tra nome del metodo e corpo del metodo viene fatto dinamicamente
  - Ci sono linguaggi che usano **reflection**, che permette di sapere dato un oggetto il tipo dell'oggetto, quindi permette all'oggeto di "riflettere" su se stesso, come Java, etc.
  - Ci sono altri linguaggi che non supportano reflection, come C++, che hanno una **vtable**, che guardano la propria vtable per capire come chiamare il metodo.
- *Generici*
  - Si tratta di un tipo parametrico, dove noi definiamo uno scheletro di comportamento che può essere istanziato, non su un oggetto, ma su un tipo di oggetti.
  - Sono risolti in Java durante l'esecuzione, come il più delle volte in altri linguaggi.
- In C++ non ci sono i generici, c'è un "apporssimazione" chiamata *template*
  - Sintassi simila ai generici, ma durante la compilazione vado a costruire il codice sorgente equivalente e dopodiché lo vado a compilare, con il risultato che ho un codice diverso più veloce. Più template ho istanziato, più codice ho generato.
- In C si può usare il preprocessore per fare qualcosa di simile ai template, ma è molto più limitato.

### Overriding

In C++ bisogna usare `virtual` per ottenere il polimorfismo a real time.

```cpp
class A {
  public:
    virtual void foo() { cout << "A::foo()" << endl; }
};

class B : public A {
  public:
    void foo() { cout << "B::foo()" << endl; }
};

int main() {
  A* a = new A();
  B* b = new B();
  A* c = new B();

  a->foo(); // A::foo()
  b->foo(); // B::foo()
  c->foo(); // B::foo()
}
```

Senza virtual ci sarebbe stato un *early binding* e quindi il metodo chiamato sarebbe stato quello della classe A.

---

> ## UML

L'UML ha almeno 9 diagrammi, di cui alcuni sono:
- Strutturali
  - Descrivono la struttura del sistema
  - Quello per le classi, per gli oggetti, per i componenti, per i deployment (ovvero come vanno consegnati ai clienti)
- Comportamentali
  - Descrivono il comportamento del sistema


#### Caso d'uso

Trovare i requisiti del sistema. Come li trovo? Mi faccio raccontare delle storie. Come le rappresento?

**Casi d'uso**, dove ho un attore che interagisce con il sistema e mostra un caso d'uso di esso.

Una descrizione degli *use case* include due parti:
- Un diagramma, dove abbiamo *attori* che rappresentano persone o altri sistemi che interagiscono con il sistema che stiamo descrivendo.
- Una descrizione testuale, che descrive il caso d'uso.

Dobbiamo generare le azioni atomiche che vengono viste esternamente.

Per atomiche si intende il concetto di evitare di usare il caso d'uso "ordina pranzo completo" rispetto a "ordina antipasto", "ordina primo", etc.

#### Diagramma delle classi

Dove andiamo a descrivere gli oggetti come appaiono nel sistema.

#### Diagramma a stati

Ci va a definire lo stato in cui si trova il nostro sistema, e ci serve se abbiamo un sistema complesso e ne dobbiamo descrivere un comportamento.

Le macchine a stati risolvono problemi di complessità simile alle regular expression, ovvero che gestiscono cicli e poco altro.

Sepppure semplice, questo è molto comodo in quanto alcuni sistemi non hanno bisogno di particolare complessità.

#### Diagramma di attività

A differenza da un diagramma a stati è simile ad un flowchart, che permette qualunque tipo di complessità.

#### Diagramma di sequenza

Dove vado a descrivere le interazioni tra gli oggetti.

#### Diagramma di collaborazione

Struttura più semplificata, dove nascondo l'asse temporale e semplicemente faccio vedere le interazioni tra gli oggetti.

## Obbiettivi dell'OO

Ci sono due fasi:
- **OO Context Analysis**
  - Dove si capiscono i requisiti del sistema
- **OO Requirements Analysis**
  - Dove si capisce come soddisfare i requisiti del cliente

