var extensionEnabled = true;

// Retrieve the extension's enabled status from Chrome storage on startup
chrome.storage.sync.get("extensionEnabled", function(data) {
  extensionEnabled = data.extensionEnabled !== undefined ? data.extensionEnabled : true;

  // Update the extension's icon based on the stored enabled status
  setExtensionIcon(extensionEnabled);
});

// Update the extension's icon based on the enabled status
function setExtensionIcon(enabled) {
  var iconPath = enabled ? "icon16.png" : "icon16-disabled.png";
  chrome.browserAction.setIcon({ path: iconPath });
}

// Listen for messages from the popup script to update the extension's state
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.extensionEnabled !== undefined) {
    extensionEnabled = request.extensionEnabled;

    // Update the extension's icon based on the new state
    setExtensionIcon(extensionEnabled);

    // Send a response to confirm the state update
    sendResponse({ success: true });
  }
});

// Add a listener for webNavigation events
chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  if (extensionEnabled && details.url.includes("https://www.hugedomains.com/")) {  
    chrome.tabs.executeScript({
      file: "content.js"
    });
  }
});
