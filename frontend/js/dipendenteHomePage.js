import {getOrderList, getUserInfo, getWarehouseList} from "./apiService.js";
import {renderContent} from "./utility.js";

document.addEventListener('DOMContentLoaded', () => {
    initTable();
    initWarehouseTable();
    initDipendente();
    renderContent(sessionStorage.getItem("USERNAME"));
});

async function initTable() {
    $(document).ready(async function () {

        var tableBody = $("#tableBody");

        try {
            let data = await getOrderList();

            console.log(data);

            $.each(data, function (index, row) {
                var newRow = $("<tr>");
                newRow.html(`
            <td>${row.ID_ORDINE}</td>
            <td>${row.NUMERO_ORDINE}</td>
            <td>${row.STATO_ORDINE}</td>
            <td>${row.ORDINATO_DA}</td>
            <td>${row.DESTINAZIONE}</td>
            <td>${row.FILIALE_IN_CARICO}</td>
            <td>${row.CORRIERE_IN_CARICO}</td>
            `);
                tableBody.append(newRow);
            });
        } catch (error) {
            console.error("Errore nel recupero dati", error);
        }
    })
}

async function initWarehouseTable() {
    $(document).ready(async function () {

        var tableBody = $("#warehouseBody");

        try {
            let data = await getWarehouseList();

            console.log(data);

            $.each(data, function (index, row) {
                var newRow = $("<tr>");
                newRow.html(`
            <td>${row.NOME_FILIALE}</td>
            <td>${row.ID_PRODOTTO}</td>
            <td>${row.NOME_PRODOTTO}</td>
            <td>${row.QUANTITA_PRODOTTO}</td>
            `);
                tableBody.append(newRow);
            });
        } catch (error) {
            console.error("Errore nel recupero dati", error);
        }
    })
}

async function initDipendente() {
    $(document).ready(async function() {

        let __undefinedValue = "undefined";

        try {
            const username = {
                username: sessionStorage.getItem("USERNAME")
            }
            let [data] = await getUserInfo(username);

            if (data) {
                $("#fiscalCode").text(data.CODICE_FISCALE);
            } else {
                $("#fiscalCode").text(__undefinedValue);
            }

        } catch (e) {
            console.error("Errore nel recupero dati", e);
        }
    });
}

export function applyUpdateOrder() {

}

export function deleteFilters() {
    $("#orderID").text("");
    $("#orderNumber").text("");
    $("#filialeInCarico").text("");
    $("#corriereInCarico").text("");
}