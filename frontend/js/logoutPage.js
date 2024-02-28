document.addEventListener('DOMContentLoaded', () => {
    logoutProgress();
})

function logoutProgress() {

    $(".progress-bar").animate({
        width: "70%",
    }, 2200);


    setTimeout(() => {
        window.location.href = "loginPage.html";
    }, 2000)
}