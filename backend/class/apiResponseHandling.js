function handleError500 (res, error) {
    console.error('Errore interno del server', error);
    res.status(500).send('Errore generico del server.');
}

function handleError404 (res, error) {
    console.error('Not found', error);
    res.status(404).send('Not Found.');
}

function handleSuccess200 (res) {
    console.info('Operazione completata con successo', res);
    res.status(200).send('Operazione completata con successo.');
}

module.exports = {
handleSuccess200,
handleError404,
handleError500
}