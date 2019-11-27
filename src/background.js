'use strict';

console.log("Hello from background")

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({url: 'src/auth/index.html'});
});
