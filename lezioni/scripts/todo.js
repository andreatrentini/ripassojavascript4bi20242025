class Todo {
    constructor(id, data, categoria, descrizione) {
        this.id = id;
        this.data = data;
        this.categoria = categoria;
        this.descrizione = descrizione;
        this.completato = false;
    }
}

class Todos {
    constructor() {
        this.todos = [];
    }

    salvaLS() {
        // localStorage è una classe che ci consente di accedere al local storage del browser
        // setItem consente di memorizzare un valore di tipo string nel localStorage e di associare a quel valore
        // una chiave che lo identifica
        localStorage.setItem('todos', JSON.stringify(this.todos));
    } 

    caricaLS() {
        // getItem recupera dal local storage il valore con chiave todos
        // il dato recuperato è di tipo string
        let tmp = localStorage.getItem('todos');
        // Controllo se la chiave era presente nel local storage (non è detto che i dati siano stati salvati)
        // Se non presenti getItem restituisce null
        if(tmp) {
            // I dati erano presenti, la funzione parse della libreria JSON converto dati json in un formato javascript
            this.todos = JSON.parse(tmp);
        }
    }

    rimuoviLS() {
        localStorage.removeItem('todos');
    }

    aggiungi(todo) {
        this.todos.push(todo);
    }

    elimina(indice) {

    }

    modifica(indice, nuovo) {

    }

    completa(indice) {
        
    }
}