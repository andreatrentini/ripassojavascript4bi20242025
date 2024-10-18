// Funzione che simuli ll'esecuzione di una operazione di fetch da un server web (ipotetica API)

function fetchDataFromServer1() {
    // Restituisco NON i dati ma la promessa che si cercherà di ottenere i dati (la richiesta potrebbe fallire...)
    // resolve: funzione che verrà eseguita in caso di successo. 
    // Per eseguire il codice: resolve()
    // reject: funzione che verrà eseguita in caso di fallimento. 
    // Per eseguire il codice: reject()

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Esempio di promise che ha sempre un esito positivo
            // dati corrisponde a quanto lo sviluppatore si attendeva di ricevere
            const dati = {
                id: 1,
                nome: 'Andrea',
                cognome: 'Trentini'
            }
            // Eseguo per conto dello sviluppatore che usa la mia funzione fetchDataFromServer1
            // il codice (funzione di callback) indicata.
            resolve(dati);
        }, 3000);
    })
}

fetchDataFromServer1()
    .then(datiRicevuti => {
        console.log('Dati ricevuti: ', datiRicevuti);
    });

function fetchDataFromServer2() {
    // Restituisco NON i dati ma la promessa che si cercherà di ottenere i dati (la richiesta potrebbe fallire...)
    // resolve: funzione che verrà eseguita in caso di successo. 
    // Per eseguire il codice: resolve()
    // reject: funzione che verrà eseguita in caso di fallimento. 
    // Per eseguire il codice: reject()

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Possibile errore. La probabilità di successo è del 70%
            var success = Math.random() > 0.3;

            if (success) {
                // Gestione del caso di successo: il server ha i dati e me li manda
                // Dati corrisponde a quanto lo sviluppatore si attendeva di ricevere
                const dati = {
                    id: 1,
                    nome: 'Andrea',
                    cognome: 'Trentini'
                }
                // Eseguo per conto dello sviluppatore che usa la mia funzione fetchDataFromServer1
                // il codice (funzione di callback) indicata.
                resolve(dati);
            }
            else {
                // Gestione del caso di insuccesso, comunico anche il tipo di errore accaduto
                reject('Errore di rete. Impossibile contattare il server')
            }
        }, 3000);
    })
}

fetchDataFromServer2()
    // .then -> funzione di callback da eseguire in caso di successo
    .then(datiRicevuti => {
        console.log('Dati ricevuti: ', datiRicevuti);
    })
    // .catch -> funzione da eseguire in caso di insuccesso
    .catch(errore => {
        console.log(errore);
    })
    // .finally -> funzione da eseguire al termine delle funzioni sia di successo che di insuccesso.
    .finally(() => {
        console.log('Operazione terminata.')
    })