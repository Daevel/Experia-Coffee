import { apiUrl }  from "./appEnvironment.js";

/**
 * @description after the DOM has been loaded it initializes the init() function.
 */
document.addEventListener('DOMContentLoaded', function () {
   init();
})

/**
 * @author Daevel
 * @description it establish the connection between backend and database service.
 * @returns true if the connection is established correctly.
 */
function init() {
   const response = fetch(`${apiUrl}/api/connect`).then((response) => {
      if (response.status === 200) {
         window.location.href = '/pages/loginPage.html';
      } else {
         console.log('authentication failed');
      }
   }).finally(() => {
      console.log('finally executed');
   });
}

