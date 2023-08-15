// Display the warning message
var confirmed = confirm("Warning: You are about to visit a malicious website! Click 'OK' if you wish to proceed at your own risk!\n\nMore information: The website you are trying to access is flagged for scams and fraudulent activities. It is advised to avoid visiting it to protect your security. Stay safe online!");

// Proceed to load the website if the user confirms
if (!confirmed) {
  // Redirect to a neutral page or close the tab if the user cancels
  window.location.href = "about:blank";
}
