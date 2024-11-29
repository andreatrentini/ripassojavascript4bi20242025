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
        this.seedId = 1;
    }

    salvaLS() {
        // localStorage è una classe che ci consente di accedere al local storage del browser
        // setItem consente di memorizzare un valore di tipo string nel localStorage e di associare a quel valore
        // una chiave che lo identifica
        let datiDaSalvare = {            
            seedId: this.seedId,
            todos: this.todos
        };

        localStorage.setItem('todos', JSON.stringify(datiDaSalvare));
    } 

    caricaLS() {
        // getItem recupera dal local storage il valore con chiave todos
        // il dato recuperato è di tipo string
        let tmp = localStorage.getItem('todos');
        // Controllo se la chiave era presente nel local storage (non è detto che i dati siano stati salvati)
        // Se non presenti getItem restituisce null
        if(tmp) {
            // I dati erano presenti, la funzione parse della libreria JSON converto dati json in un formato javascript
            let datiCaricati = JSON.parse(tmp);
            console.log(datiCaricati)
            this.seedId = datiCaricati.seedId;
            this.todos = datiCaricati.todos;
        }
    }

    rimuoviLS() {
        localStorage.removeItem('todos');
    }

    aggiungi(data, categoria, descrizione) {         
        let newTodo = new Todo(this.seedId, data, categoria, descrizione);
        this.todos.push(newTodo);
        this.seedId++;
    }

    elimina(indice) {
        this.todos.splice(indice, 1);
    }

    modifica(indice, nuovo) {
        // Soluzione 1 per il controllo dell'errore
        try {
            this.todos[indice] = nuovo;
        }
        catch { }

        // Soluzione 2: controllo che i dati siano corretti
/*         if (indice >= 0 && indice < this.todos.length) {
            this.todos[indice] = nuovo;
        }
 */    }

    completa(indice) {
        try {
            this.todos[indice].completato = true;
        }
        catch {}
    }

    createHTMLTable() {
        // 1. ottengo il tag div nel quale inserire la tabella e lo svuoto
        let div = document.getElementById('tabella-dati');
        div.innerHTML = '';
        // 2. Creo la tabella
        let table = document.createElement('table');
        table.className = 'table table-striped';
        // 3. Creo la header
        let tableHead = document.createElement('thead');
        tableHead.innerHTML = `<tr><th scope="col">Id</th><th scope="col">Data</th><th scope="col">
                                Categoria</th><th scope="col">Descrizione</th><th scope="col">Completato</th></tr>`;
        // 4. Aggiungo la header alla tabella
        table.appendChild(tableHead);

        // 5. Creo il tbody
        let tbody = document.createElement('tbody');
        this.todos.forEach(todo => {
            // Creo una nuova riga
            let row = document.createElement('tr');
            row.innerHTML = `<tr><th scope="row">${todo.id}</th><td>${todo.data}</td><td>${todo.categoria}</td>
                             <td>${todo.descrizione}</td><td>${todo.completato}</td></tr>`;
            // 6. aggiungo la nuova riga a tbody
            tbody.appendChild(row);
        });
        // 7. Aggiungo tbody alla tabella
        table.appendChild(tbody);

        // 8. Aggiungo la tabella al div
        div.appendChild(table);

    }
}

function aggiungiTodo() {
    // 1. recupero i valori inseriti nelle input
    let dataInput = document.getElementById('data');
    let categoriaInput = document.getElementById('categoria');
    let descrizioneInput = document.getElementById('descrizione');
    
    // 2. Aggiungo a todos il nuovo elemento
    todos.aggiungi(dataInput.value, categoriaInput.value, descrizioneInput.value);
    
    // 3. Svuoto le input
    dataInput.value = '';
    categoriaInput.value = '';
    descrizioneInput.value = '';
    
    todos.createHTMLTable();
}

function azzeraLS() {
    localStorage.clear();
    todos = new Todos();
    todos.createHTMLTable();
}

// Codice da eseguire al caricamento della pagina

var todos = new Todos();

document.addEventListener("DOMContentLoaded", () => {
    todos.caricaLS();
    todos.createHTMLTable();
});

window.addEventListener('beforeunload', () => {
    todos.salvaLS();
})