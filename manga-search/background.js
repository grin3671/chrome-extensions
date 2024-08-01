chrome.contextMenus.create({
  id: "myanimelist",
  title: "Search on MAL \u201C%s\u201D",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  id: "cmoa",
  title: "Search on CMOA \u201C%s\u201D",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  id: "amazon",
  title: "Search on Amazon \u201C%s\u201D",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  id: "shop-bell",
  title: "Search on BellAlert \u201C%s\u201D",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  id: "ebookjapan",
  title: "Search on EBookJapan \u201C%s\u201D",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "myanimelist":
      chrome.tabs.create({
        url: "https://myanimelist.net/search/all?q=" + encodeURIComponent(info.selectionText),
        active: true
      });
      break;

    case "cmoa":
      chrome.tabs.create({
        url: "https://www.cmoa.jp/search/result/?header_word=" + encodeURIComponent(info.selectionText),
        active: true
      });
      break;

    case "amazon":
      chrome.tabs.create({
        url: "https://www.amazon.co.jp/s?k=" + encodeURIComponent(info.selectionText),
        active: true
      });
      break;

    case "shop-bell":
      chrome.tabs.create({
        url: "https://alert.shop-bell.com/search/?Books=1&Title=" + encodeURIComponent(info.selectionText),
        active: true
      });
      break;

      case "ebookjapan":
        chrome.tabs.create({
          url: "https://ebookjapan.yahoo.co.jp/search/?keyword=" + encodeURIComponent(info.selectionText),
          active: true
        });
        break;
  
    default:
      console.log('tab:' + tab);
      break;
  }
});