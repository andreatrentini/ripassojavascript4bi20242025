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

/* fetchDataFromServer1()
    .then(datiRicevuti => {
        console.log('Dati ricevuti: ', datiRicevuti);
    }); */

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

/* fetchDataFromServer2()
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
    }) */

function getUser() {
    // La funzione getUser restituisce id e username di un utente. La Promise ha l'80% di probabilità di essere 
    // risolta correttamente.
    return new Promise((resolve, reject) => {
        // Simulo uno promise che ha il 80% di probabilità di avere successo
        setTimeout(() => {
            let success = Math.random() > 0.2;
            console.log('getUser success: ', success);
            if (success) {
                resolve({
                    id: 1,
                    username: 'andrea'
                });
            }
            else {
                reject('Errore nel recupero dei dati dell\'utente');
            }
        }, 2000);
    })
}

function getUserDetails(userId) {
    // La funzione getUserDetails restituisce il dettaglio di un utente cercandolo in un database usando id come chiave
    // di ricerca. La Promise ha l'80% di probabilità di essere risolta correttamente. 
    // La funzione è una simulazione del processo. Importante notare che il recupero dei dettagli è possibile solo
    // se l'id dell'utente è conosciuto.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.2;
            console.log('getUserDetails success: ', success);
            if (success) {
                resolve({
                    id: userId,
                    name: 'Andrea',
                    surname: 'Trentini',
                    grades: [7, 6, 8]
                })
            }
            else {
                reject('Errore nel recupero dei dati di dettaglio dell\'utente');
            }
        }, 2000)
    })
}

function addGradeToUser(grades, grade) {
    // La funzione addGradeToUser aggiunge un voto all'utente. Per poterlo fare deve disporre dell'elenco dei voti 
    // precedentemente recuperato..
    // La funzione ha un 20% di probabilità di avere successo.
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.8;
            console.log('addGradeToUser success: ', success);
            if (success) {
                // Scrivere del codice per aggiornare i dati del nostro user su database
                grades.push(grade);
                resolve({
                    id: userId,
                    nome: 'Andrea',
                    cognome: 'Trentini',
                    grades
                })
            }
            else {
                reject('Errore durante l\'aggiornamento dei dati.');
            }
        }, 2500)
    });
}

getUser() 
    .then(user => {
        console.log('getUser: ', user);
        return getUserDetails(user.id);
    })
    .then(details => {
        console.log('getDetails: ', details);
        return addGradeToUser(details.grades, 10);
    })
    .then(newDetails => {
        console.log('addUserGrade:', newDetails);
    })
    .catch(error => {
        console.log(error);
    } )