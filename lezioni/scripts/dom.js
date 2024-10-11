// Cos'è il DOM

// Dell'intero documento HTML viene crato dal browser un modello ad oggetti: per ogni tag presente nella pagina
// è disponibile un oggetto javascript con il quale modificarne l'aspetto.
// E' possibile modificare l'aspetto di un tag oppure aggiungere nuovi tag alla pagina.

// L'oggetto che rappresenta l'intera pagina HTML si chiama: document
// Sono presenti anche altri oggetti che gestiscono altri aspetti, ad esempio l'intera finestra del browser: window
// Questti oggetti esistono già e NON devono essere dichiarati o creati.

// Per modificare un tag è necessario:

// 1. dichiarare un'istanza dell'elemento interessato

var  primoparagrafo = document.getElementById('primoparagrafo');
// getElementById ci consente di creare un'istanza dell'elemento HTML con l'id specificata fra parentesi

// 2. Eseguire le modifiche necessarie
primoparagrafo.innerHTML = '<b>Testo modificato in grassetto</b>';
primoparagrafo.innerText = 'Solo testo senza TAG interni';
primoparagrafo.style.color = 'red';
primoparagrafo.className = 'nuovaclasse';

// 1. Recuperiamo tutti i tag presenti nella pagina che hanno come class
// il valore 'sottotitolo'
var sottotitoli = document.getElementsByClassName('sottotitolo');

//2. Modifichiamo le caratteristiche che ci interessano,
//   UN ELEMENTO ALLA VOLTA attraverso una iterazione

// Codice errato: NOM è possibile usare forEach sulle collezioni

/* sottotitoli.forEach(element => {
   element.style.color = 'Blue'; 
}); */

/* sottotitoli.forEach(function(element) {

}); */

// Modo corretto per effettuare una iterazione su una Collection

for (let i = 0; i < sottotitoli.length; i++) {
    const element = sottotitoli[i];
    element.style.color = 'Blue'; 
}

// Possiamo selezionare elementi ddel dom usando il nome del tag

var paragrafi = document.getElementsByTagName('p');

for (let i = 0; i < paragrafi.length; i++) {
    const element = paragrafi[i];
    element.innerText = i; 
}