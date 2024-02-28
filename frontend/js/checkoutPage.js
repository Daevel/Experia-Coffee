import {getUserInfo} from "./apiService.js";

document.addEventListener('DOMContentLoaded', function () {
    const oggettoSelezionatoString = sessionStorage.getItem('oggettoSelezionato');

    initCheckoutPage();

    if (oggettoSelezionatoString) {
        const oggettoSelezionato = JSON.parse(oggettoSelezionatoString);
        let product = $("#products").text(calculateProduct(oggettoSelezionato));
        let calculusIVA = $("#calculusIVA").text(calculateIVA(oggettoSelezionato));
        let finalProducts = $("#totalProducts").text(product + calculusIVA);

        console.log(product);
        console.log(calculusIVA);
        console.log(finalProducts);
        console.log(oggettoSelezionato);
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

function calculateProduct(array) {
    let somma = 0;

    for (const prodotto of array) {
        const prezzoProdotto = parseFloat(prodotto.prezzoProdotto);

        if (!isNaN(prezzoProdotto)) {
            somma+= prezzoProdotto;
        }

    }
    return somma.toFixed(2);
}

function proceedOrder() {
    let email = sessionStorage.getItem("USERNAME");
    let cartID = retrieveCartID(email);
    createOrder(cartID, email);

}


