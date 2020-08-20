let s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.runtime.getURL('index.js');
(document.head || document.documentElement).appendChild(s);
s.onload = function() {
  let url = chrome.runtime.getURL("1up.mp3");

  let evt = document.createEvent("CustomEvent");
  evt.initCustomEvent("yourCustomEvent", true, true, url);
  document.dispatchEvent(evt);
};
