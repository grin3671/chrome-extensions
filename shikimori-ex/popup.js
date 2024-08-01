"use strict";

function removeCSS (event) {
  chrome.runtime.sendMessage("remove-user-css", (response) => {
    console.log('received user data', response);
    window.close();
  });
}


document.getElementById("del_css").addEventListener("click", removeCSS);
