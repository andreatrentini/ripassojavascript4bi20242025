// Sequenza si applicano le consuete regole: tutte le istruzioni una dopo l'altra

// Selezione

var numero = 5;

if (numero == 6) {
    console.log('Condizione vera')
}
else {
    console.log('Condizione false')
}

// Iterazione

var colori = ['Rosso', 'Verde', 'Blu', 'Arancio'];

var indice = 0;

while (colori[indice] != 'Verde' && indice < colori.length) {
    console.log(colori[indice]);
    indice++;
}

for(let i = 0; i < colori.length; i++) {
    console.log(colori[i]);
}

colori.forEach(function(colore) {
    console.log(colore);
})

colori.forEach(colore => {
    console.log(colore);
})