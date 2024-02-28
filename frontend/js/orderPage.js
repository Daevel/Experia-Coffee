import {getOrderListByClient} from "./apiService.js";
document.addEventListener('DOMContentLoaded', () => {
    initTable().then(r => console.log(r));
})

async function initTable() {
    $(document).ready(async function () {

        var tableBody = $("#tableBody");
        let email = sessionStorage.getItem("USERNAME");

        try {
            var data = await getOrderListByClient(email);

            console.log(data);

            $.each(data, function (index, row) {
                var newRow = $("<tr>");
                newRow.html(`
            <td>${row.ID_ORDINE}</td>
            <td>${row.ORDINATO_DA}</td>
            <td>${row.DESTINAZIONE}</td>
            <td>${row.STATO_ORDINE}</td>
            `);
                tableBody.append(newRow);
            });
        } catch (error) {
            console.error("Errore nel recupero dati", error);
        }
    })
}
