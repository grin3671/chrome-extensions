chrome.contextMenus.create({
  id: "myanimelist",
  title: "Search on MAL \u201C%s\u201D",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  id: "jisho",
  title: "Search on Jisho \u201C%s\u201D",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  id: "separator1",
  type: "separator",
  contexts: ["selection"]
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

chrome.contextMenus.create({
  id: "natalie",
  title: "Search on Natalie \u201C%s\u201D",
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

    case "jisho":
      chrome.tabs.create({
        url: "https://jisho.org/search/" + encodeURIComponent(info.selectionText),
        active: true
      });
      break;

    case "natalie":
      chrome.tabs.create({
        url: "https://natalie.mu/search?context=news&query=" + encodeURIComponent(info.selectionText),
        active: true
      });
      break;

    default:
      console.log('tab:' + tab + ". Listener for the action with id '" + info.menuItemId + "' not found!");
      break;
  }
});