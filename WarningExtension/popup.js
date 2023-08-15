document.addEventListener("DOMContentLoaded", function() {
    var toggleSwitch = document.getElementById("toggleSwitch");
  
    // Retrieve the extension's enabled status from Chrome storage
    chrome.storage.sync.get("extensionEnabled", function(data) {
      toggleSwitch.checked = data.extensionEnabled !== undefined ? data.extensionEnabled : true;
    });
  
    // Toggle the extension's enabled status when the switch is clicked
    toggleSwitch.addEventListener("change", function() {
      var isChecked = toggleSwitch.checked;
  
      // Save the updated enabled status to Chrome storage
      chrome.storage.sync.set({ "extensionEnabled": isChecked }, function() {
        // Send a message to the background script to update the extension's state
        chrome.runtime.sendMessage({ "extensionEnabled": isChecked });
      });
    });
  });
  