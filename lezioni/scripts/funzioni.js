// dichiarazione di una funzione

function nomeFunzione(param1, param2, param3) {
    console.log(param1, param2, param3);
}

// Esecuzione di una funzione
nomeFunzione(1,2,3);

function conRitornoValore(param1, param2) {
    return param1 + param2;

    console.log(param1, param2);
    // eventuali istruzioni dopo l'istruzione return NON verranno eseguite
}

var somma = conRitornoValore(4, 5);

// Parametri opzionali

function conParametriOpzionali(obbligatorio, opzionale1 = 2, opzionale2 = 10) {
    console.log(obbligatorio, opzionale1, opzionale2);
}

conParametriOpzionali(5);
// In console verranno visualizzati; 5, 2, 10

conParametriOpzionali(5, 3);
// In console verranno visualizzati; 5, 3, 10

conParametriOpzionali(5, 3, 1);
// In console verranno visualizzati; 5, 3, 1

// Funzioni callback
setTimeout(function() {
    console.log('Ciao!');
}, 5000);

// Stessa cosa con espressione Lambda
setTimeout(() => {
    console.log('Ciao');
}, 5000);

// Esempio complesso: scrivere Benvenuto ogni 3 secondi per 20 secondi poi fermarsi

var id = setInterval(() => {
    console.log('Benvenuto');
}, 3000);

setTimeout(() => {
    // come faccio a fermare setInterval???
    clearInterval(id);
}, 20000);