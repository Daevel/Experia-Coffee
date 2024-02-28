/**
 * @description after the DOM has been loaded it initializes the init() function.
 */
import {establishConnection} from "./apiService.js";


document.addEventListener('DOMContentLoaded', function () {
  init();
});

/**
 * @author Daevel
 * @description it establish the connection between backend and database service.
 * @returns true if the connection is established correctly.
 */
function init() {
   establishConnection();
}

