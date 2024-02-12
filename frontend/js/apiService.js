
document.addEventListener('DOMContentLoaded', () => {
    init();
})

function init() {
    console.log('apiService initialized');
}

const apiURL = "http://localhost:3000";

function login(username, password) {

    username = document.getElementById('username');
    password = document.getElementById('password');

    const data = {
        username: username,
        password: password
    }

    return fetch(`${apiURL}/api/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            return !!data;
        })
        .catch(error => {
            console.error('Errore durante la richiesta:', error);
            throw error;
        });
}