document.addEventListener('DOMContentLoaded', function() {
    var openChatbotButton = document.getElementById('open-chatbot');
    openChatbotButton.addEventListener('click', function() {
      chrome.tabs.create({ url: 'http://127.0.0.1:5000/' });
    });
  });
  