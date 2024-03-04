import { apiUrl } from "./appEnvironment.js";;
import {deleteFilters} from "./dipendenteHomePage.js";

export function establishConnection() {
    $.get({
        url: `${apiUrl}/api/connect`,
        method: "GET",
        contentType: 'application/json',
        success: function(response) {
            if(response.message === "connected") {
                window.location.href = '../pages/loginPage.html';
            }
        },
        error: function (error) {
            console.error("DATABASE CONNECTION FAILED", error);
        }
    })
}


/**
 * @function login
 * @description Effettua l'autenticazione dell'utente.
 *
 * @param {string} username - username utente
 * @param {string} password - password utente
 * @returns {boolean} se username e password sono corretti.
 *
 * @author Daevel
 * @version 1.0.0
 */
export function login() {
       const username=  $("#username").val();
       const password = $("#password").val();


       if (!username || !password) {
           $('#loginErrorMessage').text('Inserisci username e password.');
           return;
       }

       const payload = {
           username: username,
           password: password
       };


   $.post({
       url: `${apiUrl}/api/auth`,
       contentType: 'application/json',
       data: JSON.stringify(payload),
       success: function(response) {
           if(response.username) {

               const isDipendente = response.username.includes("@experiacoffee.it")

               sessionStorage.setItem("USERNAME", response.username);

               if (isDipendente) {
                   window.location.href = "dipendenteHomePage.html";
               } else {
                   window.location.href = "homePage.html";
               }
           }
       },
       error: function(e) {
        console.error(e);
           $('#loginErrorMessage').text(e.message);
       }
   })
}

/**
 * @author Daevel
 * @description logs out the user clearing all the sessionStorage keys
 * @return boolean
 */
export function logout() {
    sessionStorage.clear();
    window.location.href = "logoutPage.html";
    return true;
}

export function signUp() {

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
            if (response.affectedRows > 0) {
                window.location.href = "loginPage.html";
            }
            console.log("errore durante l'iscrizione")
            $('#loginErrorMessage').text('Username o password non corrette, riprovare.');
        }
    })
}

export function getUserInfo(username) {
    return new Promise((resolve, reject) => {
        $.post({
            url: `${apiUrl}/api/viewUser`,
            data: JSON.stringify(username),
            contentType: 'application/json',
            success: function(response) {
                console.log("API RES",response);
                resolve(response);
            },
            error: function(error) {
                console.error(error);
                reject(error);
            }
        })
    });
}

export function getMarketList() {

    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${apiUrl}/api/getProductList`,
            method: "GET",
            contentType: 'application/json',
            success: function(response) {
                console.log("API RES",response);
                resolve(response);
            },
            error: function(error) {
                console.error(error);
                reject(error);
            }
        })
    });
}

export function getOrderList() {

    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${apiUrl}/api/getOrderList`,
            method: "GET",
            contentType: 'application/json',
            success: function(response) {
                console.log("API RES",response);
                resolve(response);
            },
            error: function(error) {
                console.error(error);
                reject(error);
            }
        })
    });
}

export function getWarehouseList() {

    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${apiUrl}/api/getWarehouseList`,
            method: "GET",
            contentType: 'application/json',
            success: function(response) {
                console.log("API RES",response);
                resolve(response);
            },
            error: function(error) {
                console.error(error);
                reject(error);
            }
        })
    });
}

export function getOrderListByClient(email) {

    let payload = {
        email: email
    }

    return new Promise((resolve, reject) => {
        $.post({
            url: `${apiUrl}/api/getOrderListByClient`,
            method: "POST",
            data: JSON.stringify(payload),
            contentType: 'application/json',
            success: function(response) {
                console.log("API RES",response);
                resolve(response);
            },
            error: function(error) {
                console.error(error);
                reject(error);
            }
        })
    });
}

export function changeEmail(newEmail, oldEmail) {

    let payload = {
        newEmail: newEmail,
        oldEmail: oldEmail
    }

    $.post({
        url: `${apiUrl}/api/changeEmail`,
        contentType: 'application/json',
        data: JSON.stringify(payload),
        success: function(response) {
            if (response.message === "Utente modificato con successo") {
                window.location.href = "loginPage.html";
            } else {
                console.log("errore durante il cambio email");
            }

        }
    })
}

export function changePassword(password, email) {

        let payload = {
            password: password,
            email: email
        }

        $.ajax({
            url: `${apiUrl}/api/changePassword`,
            method: "POST",
            contentType: 'application/json',
            data: JSON.stringify(payload),
            success: function(response) {
                if (response.message === "Password modificata con successo") {
                    window.location.href = "loginPage.html";
                } else {
                    console.log("errore durante il cambio password");
                }

            }
        })
}

export function createOrder(email, cartID) {

    let payload = {
        email: email,
        cartID: cartID,
    }

    $.post({
        url: `${apiUrl}/api/createOrder`,
        contentType: 'application/json',
        data: JSON.stringify(payload),
        success: function(response) {
            if (response.affectedRows > 0) {
                window.location.href = "homePage.html";
            }
            console.log("errore durante la creazione dell'ordine");
        }
    })
}

export function updateOrder(numeroOrdine, statoOrdine, filialeInCarico, corriereInCarico, idOrdine) {
    let payload = {
        numeroOrdine: numeroOrdine,
        statoOrdine: statoOrdine,
        filialeInCarico: filialeInCarico,
        corriereInCarico: corriereInCarico,
        idOrdine: idOrdine
    }

    $.ajax({
        url: `${apiUrl}/api/updateOrder`,
        method: "PUT",
        contentType: 'application/json',
        data: JSON.stringify(payload),
        success: function(response) {
            if (response.affectedRows > 0) {
                window.location.href = "dipendenteHomePage.html";
                deleteFilters();
            }
            console.log("errore durante l'update dell'ordine");
        }
    })
}

$(document).ready(function() {
    $("#submitBtn").on('click', login);
})

$(document).ready(function() {
    $("#signUpBtn").on('click', signUp);
})

$(document).ready(function() {
    $("#clientelogoutBtn").on('click', logout);
    $("#logoutBtn").on('click', logout);
    $("#dipendentelogoutBtn").on('click', logout);
})