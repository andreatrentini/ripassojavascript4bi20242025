function getAeroporti() {
    fetch('../data/aeroporti.json')
    .then(response => response.json())
    .then(dati => {
        console.log(dati);
    })
    .catch(error => {
        console.log(error);
    })
}

// async informa il browser cha la funzione getAeroporti2 contiene Promise che devono essere risolte
// (cioà contiene codice asincrono).
async function getAeroporti2() {
    let divdati = document.getElementById('tabella-dati');
    try {
        // await converte il blocco di istruzioni in un blocco sincrono
        const risposta = await fetch('../data/aeroporti.json');
        // Le istruzioni successive saranno eseguite solo quando la risposta sarà arrivata,
        // cioè la Promise sarà risolta.
        const dati = await risposta.json();
        // Abbiamo ottenuto i dati!!!!!
        divdati.appendChild(createTable(dati));
        console.log(dati);
    }
    catch (error) {
        divdati.innerHTML = `<div class="alert alert-danger" role="alert">
                                 Errore durante la ricezione dei dati.
                             </div>`
        console.log(error);

    }
}

function createTable(aeroporti) {
    let table = document.createElement('table');
    table.className = 'table table-striped';
    table.appendChild(createTableHeader());
    let tbody = document.createElement('tbody');
    aeroporti.forEach(aeroporto => {
        tbody.appendChild(createTableRow(aeroporto));
    });
    table.appendChild(tbody);
    return table;
}

function createTableHeader() {
    let header = document.createElement('thead');
    header.innerHTML = `<tr>
      <th scope="col">id</th>
      <th scope="col">Code</th>
      <th scope="col">Name</th>
      <th scope="col">Country code</th>
      <th scope="col">Elevation</th>
    </tr>`;
    return header;
}

function createTableRow(aeroporto) {
    let row = document.createElement('tr');
    row.innerHTML = `<th scope="row">${aeroporto.id}</th>
      <td>${aeroporto.code}</td>
      <td>${aeroporto.name}</td>
      <td>${aeroporto.country_code}</td>
      <td>${aeroporto.elevation}</td>`;
    return row;
}

// Non sappiamo quanto tempo impiegherà la funzione getAeroporti2() a completare le istruzioni.
// Il browser lo sa, perchè la funzione è stata definita come async (cioè potrebbe impiegare diverso tempo 
// per essere completata).
getAeroporti2();

// Di conseguenza le istruzioni successive vengono eseguite immediatamente
console.log('Terminato');