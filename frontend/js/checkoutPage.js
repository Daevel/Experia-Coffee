import {createOrder, getUserInfo} from "./apiService.js";
import {resetPassword} from "./profilePage.js";

document.addEventListener('DOMContentLoaded', function () {
    const oggettoSelezionatoString = sessionStorage.getItem('oggettoSelezionato');

    initCheckoutPage();

    if (oggettoSelezionatoString) {
        const oggettoSelezionato = JSON.parse(oggettoSelezionatoString);

        var subtotale = calculateProduct(oggettoSelezionato);
        var totaleWithIVA = calculateTotalWithIVA(parseFloat(subtotale));


        $("#products").text(subtotale);
        $("#calculusIVA").text(totaleWithIVA.iva)
        $("#totalProducts").text(totaleWithIVA.totalWithIVA);

    }

})


async function initCheckoutPage() {
    $(document).ready(async function() {

        let __undefinedValue = "undefined";

        try {
            const username = {
                username: sessionStorage.getItem("USERNAME")
            }
            let [data] = await getUserInfo(username);

            if (data) {
                $("#streetAddress").text(data.VIA);
                $("#telephone").text(data.CELLULARE);
                $("#creditCardNumber").text(data.NUM_CARTA);
                $("#creditCardExpiration").text(data.SCADENZA_CARTA);
            } else {
                $("#streetAddress").text(__undefinedValue);
                $("#telephone").text(__undefinedValue);
                $("#creditCardNumber").text(__undefinedValue);
                $("#creditCardExpiration").text(__undefinedValue);
            }

        } catch (e) {
            console.error("Errore nel recupero dati", e);
        }
    });
}

function calculateIVA(subTotal) {
    const IVA_PERCENTAGE = 20;
    return (subTotal * IVA_PERCENTAGE) / (100);
}

function calculateTotalWithIVA(subTotal) {
    const iva = calculateIVA(subTotal);
    const totalWithIVA = subTotal + iva;
    return {
        iva: iva.toFixed(2),
        totalWithIVA: totalWithIVA.toFixed(2)
    };
}

function calculateProduct(array) {
    let somma = 0;

    $.each(array, function(key, value) {
        somma+= parseFloat(value.prezzoProdotto);
    })
    return somma.toFixed(2);
}

export function proceedOrder() {
    let email = sessionStorage.getItem("USERNAME");
    let cartID = generateRandomOrderNumber();
    createOrder(email, cartID);
}


function generateRandomOrderNumber() {
    // Genera un numero casuale tra 100 e 999
    const randomNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);

    // Concatena il numero alla stringa "ORD - "
    const orderNumber = `ORD-${randomNumber}`;

    return orderNumber;
}

window.proceedOrder = proceedOrder;