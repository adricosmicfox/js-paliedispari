
// creare input per chiedere all'utente di inserire parola
const form = document.getElementById("am-form");

// aggiunta funzione al bottone per verifica parola
form.addEventListener("submit", verificaPal);
form.addEventListener("submit", pariEDispari);


function verificaPal() {

    let parolaUtente = document.getElementById("box-parola").value;
    console.log(parolaUtente);

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

    if (parolaUtente == "") {
        alert("inserisci una parola")
    }

    // join unisce gli elementi contenuti nell'array eliminando le virgole
    else if (parolaRigirata.join("") == parolaUtente) {
        alert("la parola è palindroma");

    }
    else {
        console.log("no");
        alert("la parola NON è palindroma");
    }
}



function pariEDispari() {

    let numeroUtente = parseInt(document.getElementById("box-numero").value);

    let numeroRandom = parseInt(Math.floor(Math.random() * 5) + 1);
    console.log(numeroRandom);

    let somma = numeroUtente + numeroRandom;
    console.log(somma);

    // se pari
    if (somma % 2 == 0) {
        alert("il numero è pari");

    }
    // se dispari
    else {
        alert("il numero è dispari")
    }

}