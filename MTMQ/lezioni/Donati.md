Problemi principali:
- no cloning per creare i 3 qubit fisic per quello logico
- misura disturba, non posso misurare quale qubit è flippato
- come applico la maggioranza
- piccoli errori tipo evoluzioni temporali dello stato
- flip di fase, per esempio flip da $\ket{+}$ a $\ket{-}$

**Esempio:**
//TODO: inserire porta
Input: $\alpha\ket{0} + \beta\ket{1}, \ket{0}, \ket{0}$
Output: $\alpha\ket{000} + \beta\ket{111}$
Così ho la codifica di 1 qubit logico su 3 qubit fisici
$$\alpha\ket{000} + \beta\ket{111} \rightarrow (1-\epsilon_\tau)^3 \\ \alpha\ket{100} + \beta\ket{011} \rightarrow \epsilon(1-\epsilon_\tau)^2 \\ 