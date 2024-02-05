### 1. Domande a risposta multipla

1 - b
2 - b
3 - e
4 - c
5 - c
6 - b



### 2. Query

1 - 
```sql
SELECT nome 2
FROM film 
WHERE 
    anno >= 1990 
    AND 
    anno <= 2000 
    AND 
    (
        SELECT AVG(voto.valutazione) 
        FROM voto 
        GROUP BY voto.codFilm
        HAVING voto.codFilm = film.codFilm
    ) > 7
```

Oppure potrei andare a creare una view prima e poi usarla, ovvero:

```sql
CREATE VIEW avg_grade AS
SELECT AVG(valutazione) AS avg, codFilm
FROM voto
GROUP BY codFilm;

SELECT film.nome
FROM film JOIN avg_grade ON film.codFilm = avg_grade.codFilm
WHERE film.anno >= 1990 AND film.adnno <= 2000 AND avg_grade.avg > 7;
```

2 -
```sql
SELECT MIN(utente.età) 
FROM voto 
JOIN utente 
ON utente.codUtente = voto.codUtente 
JOIN film 
ON film.codFilm = voto.codFilm
GROUP BY film.codFilm
HAVING film.titolo = "Blade Runner" 
```

3 -

```sql
SELECT voto.valutazione
FROM voto, utente, film
WHERE 
    voto.codFilm = film.codFilm 
    AND
    voto.codUtente = utente.codUtente
    AND
    film.anno > 2000 
```

$$
\pi_{valutazione} \left( 
    \sigma_{anno > 2000}
    \left(
        film \bowtie_{film.codFilm = voto.codFilm}
        \left(
            voto \bowtie_{voto.codUtente =  utente.codUtente} utente
        \right)
    \right)
\right)
$$

4 -
```sql
SELECT utente.alias, utente.età
FROM utente u
WHERE
    # Votato pulp fiction 
    (
        SELECT COUNT(voto.valutazione) AS NumeroVoti
        FROM voto,utente,film
        WHERE 
        voto.codFilm = film.codFilm 
        AND
        voto.codUtente = utente.codUtente
        AND
        u.codUtente = utente.codUtente
        GROUP BY film.titolo
        HAVING 
        film.titolo = "Pulp Fiction"
    ) >= 1
    AND
    # Non votato Django
    (
        SELECT COUNT(voto.valutazione) AS NumeroVoti
        FROM voto,utente,film
        WHERE 
        voto.codFilm = film.codFilm 
        AND
        voto.codUtente = utente.codUtente
        AND
        u.codUtente = utente.codUtente
        GROUP BY film.titolo
        HAVING 
        film.titolo = "Django"
    ) = 0
```

$$
\pi_{alias, età} 
\left(
    \sigma_{titolo = "Django"}
    \right(
        film
    \left)    
    \sigma_{titolo = "Pulp Fiction"}
    \right(
        film
    \left)
\right)