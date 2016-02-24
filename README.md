# README
1. Cos'è
2. Come si attiva
3. Come funziona


1. Cos'è
--------
È un semplice codice javascript che ho pensato di scrivere come rimedio temporaneo al tuo problema.
Il file contiene 3 funzioni:
- translate(lang) : è la funzione principale che prendere in ingresso come parametro, la lingua in cui verrà tradotta la pagina
- getParameterByName(name, url): funziona ausiliare per prendere il numero di pagina dall'url
- indexOf(array, valToFind): funziona ausiliare per la retrocompatibilità con tutti i browser

2. Come si attiva
-----------------
Bisogna aggiungerlo alla coda dei file javascript di wordpress o in alternativa lo copi ed incolli nel template di pagina.

3. Come funziona
----------------

Ecco un esempio
<a onclic="translate('en')"> Traduci in inglese</a>

all'interno della funzione ci sono due array, contenenti ciascuno gli id delle pagine in lingua italiana ed inglese.
L'associazione tra i due array è di 1:1
arrayPostEn = ['2','10','5'];
                |   |    |
                v   V    V
arrayPostIt = ['4','11','7'];
ciò significa che l'id della pagina in inglese presente nella posizione 0 dell'Array arrayPostEn corrisponde all'id della pagina in italiano, in posizione 0 dell'Array arrayPostIt .

Affinchè funzioni correttamente, vanno modificati nel codice l'url del tuo sito, ed inseriti gli id dei singoli post, nell'ordine spiegato sopra.
