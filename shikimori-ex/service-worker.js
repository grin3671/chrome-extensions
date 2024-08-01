let activeTab;

function removeCss () {
  document.getElementById("custom_css").remove();
}

chrome.action.onClicked.addListener((tab) => {
  activeTab = tab.id;

  if (!tab.url.includes("shikimori.one")) return;

  chrome.action.setPopup(
    {
      popup: "popup.html",
      tabId : activeTab
    },
    () => chrome.action.openPopup()
  )
});


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "remove-user-css") {
    chrome.scripting.executeScript({
      target: {tabId : activeTab},
      func: removeCss,
    });
  }
});