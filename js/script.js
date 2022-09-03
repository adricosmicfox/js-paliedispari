// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.





// creare prompt per chiedere all'utente di inserire parola

let parolaUtente = window.prompt("Inserisci una parola");

// split crea automaticamente un array dividendo le lettere
let splitParola = parolaUtente.split("");

console.log(splitParola);

// creare una funzione per capire se la parola è palindroma
let i;

// creiamo un array vuoto per inserire la parola al contrario
let parolaRigirata = [];
// creiamo il contatore per parolaRigirata
let j = 0;


// prendiamo l'ultima lettere dalla parola utente e la inseriamo nel nuovo array nella prima posizione e così via per le posizioni e lettere successive
for (i = splitParola.length - 1; i >= 0; i--) {

    parolaRigirata[j] = splitParola[i];
    j++;
    console.log(parolaRigirata);
}

// join unisce gli elementi contenuti nell'array eliminando le virgole
if (parolaRigirata.join("") == parolaUtente) {
    alert("la parola è palindroma");
}
else {
    alert("la parola NON è palindroma");
}

// restituire messaggio se la parola è palindroma o no