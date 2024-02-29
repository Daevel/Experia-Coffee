import {getMarketList} from "./apiService.js";

document.addEventListener('DOMContentLoaded', () => {
   initTable().then(r => console.log(r));
   initUser();
})

async function initTable() {
    $(document).ready(async function () {

        const oggettoSelezionato = {};
        var tableBody = $("#clientTableBody");

        try {
            var data = await getMarketList();

            console.log(data);

            $.each(data, function (index, row) {
                var newRow = $("<tr>");
                newRow.html(`
            <td>${row.NOME_PRODOTTO}</td>
            <td>${row.PREZZO_PRODOTTO}</td>
            <td>${row.QUANTITA}</td>
            <td>${row.PROVENIENZA}</td>
            <td>${row.ID_FORNITURA}</td>
            <td><input type="checkbox" class="checkbox-seleziona"></td>
            `);
                tableBody.append(newRow);
            });
        } catch (error) {
            console.error("Errore nel recupero dati", error);
        }

        $('#btnAggiungiSelezionati').on('click', function () {
            // Trova tutti i checkbox selezionati
            const checkboxSelezionati = $('.checkbox-seleziona:checked');

            // Itera sui checkbox selezionati
            checkboxSelezionati.each(function () {
                // Ottieni la riga genitore del checkbox
                const riga = $(this).closest('tr');

                // Ottieni i dati della riga

                const prezzoProdotto = riga.find('td:eq(1)').text();
                const idFornitura = riga.find('td:eq(4)').text();

                // Aggiungi l'oggetto all'oggetto selezionato
                oggettoSelezionato[idFornitura] = {prezzoProdotto, idFornitura};

                sessionStorage.setItem('oggettoSelezionato', JSON.stringify(oggettoSelezionato));

                window.location.href = "checkoutPage.html";
            });
            console.log(oggettoSelezionato);
        });
    })
}

function initUser() {
    $(document).ready(function() {
        let userLogged = sessionStorage.getItem("USERNAME");
        return $("#username").text(userLogged);
    })
}