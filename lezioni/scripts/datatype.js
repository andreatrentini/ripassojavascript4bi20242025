// Le variabili in javascript NON sono tipizzate

// valori numerici
var numero = 5;

//Testi (stringhe)
var testo = 'Ciao';

// Una variabile può acquisire nel tempo valori di tipo diverso
// NON CONSIGLIATO!!!
var mista = 10;
mista = "Hello world!"

// Boolean
var controllo = false;
controllo = true;

// Array
var vettorevuoto = [];
var vettoreconvalori = ['Rosso', 'Verde', 'Blu'];

// Usare con attenzione!!!
var vettoreconvaloridiversi = [1, 'Marco', 7.6, 'Blue'];

// Oggetti modo standard
// Ho una "variabile" che contiene dati e che posso utilizzare per visualizzarli, modificarli
var oggetto = {
    id: 1,
    nome: 'Andrea',
    cognome: 'Trentini',
    materie: ['Informatica', 'TPSIT', 'Sistemi e reti'],
    account: {
        username: 'andrea',
        password: 'pippo'
    }
}

// Accesso alle proprietà
console.log(oggetto);
console.log(oggetto.cognome);
console.log(oggetto.account.username);
console.log(oggetto.materie[0]);

// Modifica di una proprietà
oggetto.nome = 'Marco';

oggetto.cgnome = 'Rossi';
console.log(oggetto);

// Oggetti in ECMA6 mode (in modo più moderno)
// Non ho un oggetto, ma definisco solo come l'oggetto di questi tipo deve essere
class Studente {
    // Dichiarazione del costruttore
    // La parola chiave this trasforma la variabile in una proprietà della classe
    constructor(id) {
        this.id = id;
        this.nome = '';
        this.cognome = '';
        this.classe = '';
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.cognome;
    }

    iscrivi(classe) {
        // Effettuare dei controlli o scrivere codice più complesso
        if (classe.length == 3) {
            this.classe = classe;
        }
        else {
            console.log('Nome della classe errata');
        }
    }
}

var s = new Studente(1);
s.cognome = 'Trentini';
s.nome = 'Andrea';
s.classe = '3Bi';

s.iscrivi('4Bi');
console.log(s.nomeCompleto);

var s2 = new Studente(2);

class Classe {
    constructor(nome) {
        this.nome = nome;
        this.studenti = [];
    }

    aggiungiStudente(studente) {
        this.studenti.push(studente);
    }

    get numeroStudenti() {
        return this.studenti.length;
    }
}

cl1 = new Classe('4Bi');
cl1.aggiungiStudente(new Studente(1));
cl1.studenti[0].nome = 'Gabriel';

console.log(cl1);