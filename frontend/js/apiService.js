
document.addEventListener('DOMContentLoaded', () => {
    init();
})

function init() {
    console.log('apiService initialized');
}

document.getElementById("userListButton").addEventListener('click', async () => {
    const response = fetch("http://localhost:3000/api/userList");
    console.log(response);
});