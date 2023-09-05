### Primo esempio

Allora:

```Java
class A {
    int x;
    void f() { };
};

class B extends A {
    void g() { };
};

class C extends B {
    int x;
    void f() { };
    void g() { };
}


A a = new C();

a.x = 1; // quale x?
        // Le variabiili sono sempre staiche, quindi si usa quella di A
a.f();  // quale f()?
        // Con chiamata metodi dinamica arriva a C.f(), con chiamata statica arriva a A.f()
a.g();  // quale g()?
        // Con chiamata metodi dinamica arriva a C.g(), con chiamata statica da errore.
```

Praticamente abbiamo:

- Oggetto, che è una tabella:
  - Con le variabili, dalla superclasse alla sottoclasse, in modo da indicare il shadowing
  - Qua si avrebbe:
  - ``` OGGETTO / x (di A) / x (di C, shadowata) ```
  - Viene sempre quella presa in cima


Poi l'oggetto punta a una vtable, ovvero una tabella di puntatori a funzione, che contiene i puntatori ai metodi della classe.

Queste funzioni possono essere overritten oppure no. In pratica con quella dinamica si ha la vtable del tipo dell'oggetto assegnato, con la statica si ha la vtable del tipo della variabile.



### Secondo esempio

Con la chiamata di metodi dinamica:

```Java
class A {
    int x = 5;
    int fie() {
        return g();
    };
    int g() {
        return x;
    }
}
class B extends A {
    int g() {
        return x + 1;
    }
}

B b = new B();
A a = b;
int zz = a.fie() + b.x // == 6 + 5;
```

Questo succede perché viene usata la vtable con il metodo fie di A e il metodo g di B dentro la vtable di A.