var dati;

async function getAeroporti() {
    try {
        const risposta = await fetch('../data/aeroporti.json');
        // Salvo i dati nella variabile GLOBALE dati
        dati = await risposta.json();
        const tabellaDati = document.getElementById('tabella-dati');
        tabellaDati.innerText = '';
        tabellaDati.appendChild(createTable(dati));
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

    // Ottengo un array con i soli aeroporti che soddisfano i criteri di ricerca (iniziano per ...)
    let aeroportiFiltrati = aeroporti.filter(aeroporto => aeroporto.name.toUpperCase().startsWith(criterio.toUpperCase()));
    
    // Rigenero la tabella con gli aeroporti, usando non dati (che contiene l'inero elenco), ma aeroportiFiltrati
    const tabellaDati = document.getElementById('tabella-dati');
    tabellaDati.innerText = '';
    tabellaDati.appendChild(createTable(aeroportiFiltrati));
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

function cambiaVisualizzazione() {
    const nuovaVisualizzazione = dati.map(aeroporto => {
        return {
            name: aeroporto.name, 
            country_code: aeroporto.country_code}
    });
    console.log(nuovaVisualizzazione);
}

function statistiche() {
    const country_code = dati.map(aeroporto => aeroporto.country_code);
    console.log(country_code);
    const country_code_singoli = new Set(country_code);
    console.log(country_code_singoli);

}

getAeroporti();

var iniziali = document.getElementById('iniziali');
iniziali.addEventListener('input', () => {
    filterAeroporti(dati, iniziali.value);
})