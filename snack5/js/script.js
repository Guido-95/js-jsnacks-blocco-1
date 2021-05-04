// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.

// Crea un array vuoto.
var arr = [];

// numero utente
var numeroUtente;

for(i=0; i<6; i++){
    // richiesta numero
    do {
        numeroUtente = parseInt(prompt("inserisci un numero"));
    }
    // controllo che sia un numero
    while(isNaN(numeroUtente));

    // stampa numero inserito
    console.log("numero inserito",numeroUtente);

    // se il numero inserito è dispari inseriscilo nell'array
    if(controlloNumero(numeroUtente)){
        arr.push(numeroUtente);
   }
 
}
// stampa array con numeri dispari inseriti
console.log("numeri dispari: ", arr);

// // funzione che controlla se numero è dispari
function controlloNumero(numeroDaControllare){
    if(numeroDaControllare % 2 == 1){
        return true;
    } 
} 
