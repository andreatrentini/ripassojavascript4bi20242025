var dati;

async function getAeroporti(funzioneDiCallback, criterio) {
    try {
        const risposta = await fetch('../data/aeroporti.json');
        // Salvo i dati nella variabile GLOBALE dati
        dati = await risposta.json();
        funzioneDiCallback(dati, criterio)
    }
    catch (error) {
    }
}

function filterAeroporti(aeroporti, criterio) {
   /*  let aeroportiFiltrati = [];

    for(let i=0; i < aeroporti.length; i++) {
        if (aeroporti[i].name.includes(criterio)) {
            aeroportiFiltrati.push(aeroporti[i])
        }
    } */

        let aeroportiFiltrati = aeroporti.filter(aeroporto => aeroporto.name.startsWith(criterio));
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

getAeroporti(() => {
    let aeroportiFiltrati = aeroporti.filter(aeroporto => aeroporto.name.startsWith(criterio));
}, 'A');
