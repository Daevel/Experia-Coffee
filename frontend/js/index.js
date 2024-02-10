document.addEventListener('DOMContentLoaded', function () {
   init();
})

function init() {
   //let state;
   const response = fetch("http://localhost:3000/api/connect").then((response) => {
      if (response.status === 200) {
         window.location.href = '/pages/loginPage.html';
      } else {
         console.log('authentication failed');
      }
   }).finally(() => {
      console.log('finally executed');
   });
}

