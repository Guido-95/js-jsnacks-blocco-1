// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.

// Crea un array vuoto.
var arr = [];

var numeroUtente;


for(i=0; i<6; i++){
    
    do {
        numeroUtente = parseInt(prompt("inserisci un numero"));
    }
    while(isNaN(numeroUtente));
    
    console.log("numero inserito",numeroUtente);
    
    if(controlloNumero(numeroUtente)){
        arr.push(numeroUtente);
   }
 
}

console.log("numeri dispari: ", arr);

// // funzione che controlla se numero è dispari e lo inserisce nell'array
function controlloNumero(numeroDaControllare){
    if(numeroDaControllare % 2 == 1){
        return true;
    } 
} 




// for(i=0; i<6; i++){
    
//     do{
//         numeroUtente = parseInt(prompt("inserisci un numero"));
//     }
//     while(isNaN(numeroUtente));

//     console.log("numero inserito",numeroUtente);
//     controlloNumero(numeroUtente,arr);
//     console.log(i);
  
// }


// console.log("numeri dispari: ", arr);

// // funzione che controlla se numero è dispari e lo inserisce nell'array
// function controlloNumero(numeroDaControllare, arrayNumeri){
//     if(numeroDaControllare % 2 == 1){
//         arrayNumeri.push(numeroDaControllare);
//     } 
// } 