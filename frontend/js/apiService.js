import { apiUrl } from "./appEnvironment.js";

document.addEventListener('DOMContentLoaded', () => {
    init();
})

function init() {
    console.log('apiService initialized');
}

function login() {
       const username=  $("#username").val();
       const password = $("#password").val();
       const payload = {
           username: username,
           password: password
       };
   $.post({
       url: `${apiUrl}/api/auth`,
       contentType: 'application/json',
       data: JSON.stringify(payload),
       success: function(response) {
           if(response.length !== 0) {
               sessionStorage.setItem("EMAIL", response[0].EMAIL);
               window.location.href = "prova.html";
           }
           $('#loginErrorMessage').text('Username o password non corrette, riprovare.');
       },
       error: function(e) {
        console.error(e);
       }
   })
}

function signUp() {

    let __name=  $("#name").val();
    let __surname = $("#surname").val();
    let __email= $("#email").val();
    let __mobilePhone = $("#mobilePhone").val();
    let __city = $("#city").val();
    let __address = $("#address").val();
    let __addressNumber = $("#addressNumber").val();
    let __capNumber =  $("#capNumber").val();
    let __password = $("#password").val();
    let __creditCardNumber = $("#creditCardNumber").val();
    let __creditCardCVV = $("#creditCardCVV").val();
    let __creditCardOwner = $("#creditCardOwner").val();
    let __creditCardExpireDate = $("#creditCardExpireDate").val();
    let __fiscalCode = $("#fiscalCode").val();
    let __birthDate = $("#birthDate").val();

    const payload = {
        NOME: __name,
        COGNOME: __surname,
        EMAIL: __email,
        CELLULARE: __mobilePhone,
        CITTA: __city,
        VIA: __address,
        N_CIVICO: __addressNumber,
        CAP: __capNumber,
        UTENTE_PASSWORD: __password,
        NUM_CARTA: __creditCardNumber,
        CVV_CARTA: __creditCardCVV,
        INTESTATARIO_CARTA: __creditCardOwner,
        SCADENZA_CARTA: __creditCardExpireDate,
        CODICE_FISCALE: __fiscalCode,
        DATA_DI_NASCITA: __birthDate
    };
    
    $.post({
        url: `${apiUrl}/api/signUp`,
        contentType: 'application/json',
        data: JSON.stringify(payload),
        success: function(response) {
            if(response.length !== 0) {
                console.log(response);
            }
            $('#loginErrorMessage').text('Username o password non corrette, riprovare.');
        },
        error: function(e) {
         console.error(e);
        }
    })
}

$(document).ready(function() {
    $("#submitBtn").on('click', login);
})

$(document).ready(function() {
    $("#signUpBtn").on('click', signUp);
})