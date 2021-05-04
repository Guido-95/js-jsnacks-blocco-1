// Snack #4:
// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.


//partendo da una lista di nomi e una lista di cognomi

// array nomi
var nomi = ["Marco","Giovanni","Carlo","Luca"];
// controllo nomi
console.log(nomi);

// array cognomi
var cognomi = ["Lavandino","Rubinetto","Salone","Tavolo"];
// controllo cognomi
console.log(cognomi);

// chiamata funzione
generatoreNomiCognomi(nomi,cognomi);

// generatore di 10 nomi e cognomi inseriti in una lista
function generatoreNomiCognomi(arrayNomi, arrayCognomi){
    // ul
    var ul = document.getElementById("lista");

    // ciclo lista html
    for(var i=0; i<10; i++){
        ul.innerHTML += "<li>" + arrayNomi[random(0,arrayNomi.length)] + " " + arrayCognomi[random(0,arrayNomi.length)] + "</li>"; 
    }
}

// numero casuale con min e max
function random(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

 

 