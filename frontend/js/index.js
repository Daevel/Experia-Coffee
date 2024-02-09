document.addEventListener('DOMContentLoaded', function () {

   document.getElementById('btn').addEventListener('click', async () => {
      const response = fetch("http://localhost:3000/api/retrieveData");
      const data = console.log(response);
      alert(data.message);
   });

   document.getElementById("connect-button").addEventListener('click', async () => {
      const response = fetch("http://localhost:3000/api/connect");
      const data = console.log(response);
   });

   document.getElementById("provaPageButton").addEventListener('click', async () => {
      window.location.href = 'prova.html';
   })
})

