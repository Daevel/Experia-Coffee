export function checkPasswordAreEqual(password, repeatPassword) {
    return password === repeatPassword;
}

function getTipoUtente(email) {
    return email.includes("@experiacoffee.it") ? "dipendente" : "cliente";
}

// Funzione per mostrare il contenuto in base al tipo di utente
export function renderContent(email) {
    const tipoUtente = getTipoUtente(email);

    if (tipoUtente === "cliente") {
        $("#clienteContent").show();
        $("#resetEmailClienteContent").show();
    } else {
        $("#dipendenteContent").show();
    }
}