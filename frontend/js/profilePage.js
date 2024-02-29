import {changeEmail, changePassword, getUserInfo} from "./apiService.js";
import {checkPasswordAreEqual, renderContent} from "./utility.js";

document.addEventListener('DOMContentLoaded', () => {
    initProfileUser();
    renderContent(sessionStorage.getItem("USERNAME"));
})
 async function initProfileUser() {
        $(document).ready(async function() {

            let __undefinedValue = "undefined";

            try {
                const username = {
                    username: sessionStorage.getItem("USERNAME")
                }
                let [data] = await getUserInfo(username);

                if (data) {
                    $("#name").text(data.NOME);
                    $("#surname").text(data.COGNOME);
                    $("#email").text(data.EMAIL);
                    $("#birthDate").text(data.DATA_DI_NASCITA);
                    $("#fiscalCode").text(data.CODICE_FISCALE);
                } else {
                    $("#name").text(__undefinedValue);
                    $("#surname").text(__undefinedValue);
                    $("#email").text(__undefinedValue);
                    $("#birthDate").text(__undefinedValue);
                    $("#fiscalCode").text(__undefinedValue);
                }

            } catch (e) {
                console.error("Errore nel recupero dati", e);
            }
        });
}

export function resetPassword() {

        let __email = sessionStorage.getItem("USERNAME");
        let __password = $("#password").val();
        let __repeatPassword = $("#repeatPassword").val();

        if (checkPasswordAreEqual(__password, __repeatPassword)) {
            changePassword(__password, __email);
        } else {
            $("#mismatchPasswordLabel").text("Le password inserite non coincidono, riprova.");
        }
}

export function resetEmail() {
    $(document).ready(function() {

        try {
        let __newEmail = $("#newEmail").val();
        let __oldEmail = sessionStorage.getItem("USERNAME");

            const payload = {
                newEmail: __newEmail,
                oldEmail: __oldEmail
            }

            changeEmail(__newEmail, __oldEmail);

        } catch (e) {
            console.error("Errore nel recupero dati", e);
        }
    });
}

window.resetPassword = resetPassword;
window.resetEmail = resetEmail;
