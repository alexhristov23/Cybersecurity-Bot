// Wait for the document to be fully loaded before attaching event handlers
$(document).ready(function() {
    // Attach an event listener to the user input box for keypress events
    $('#user-input-box').keypress(function(event) {
        // Check if the pressed key is the 'Enter' key (keyCode 13)
        if (event.keyCode == 13) {
            // Prevent the default action (form submission, for instance)
            event.preventDefault();
            // Handle the user's message input
            handleUserMessage();
        }
    });
});

// This function handles the event when an example question button is clicked
function handleExampleQuestion(button) {
    // Get the text inside the clicked button
    const question = button.innerText;
    // Set the user's input box with the example question text
    $('#user-input-box').val(question);
    // Process the user's message
    handleUserMessage();
}

// Handle the message typed by the user
function handleUserMessage() {
    // Get the message from the user's input box
    const message = $('#user-input-box').val();
    // Check if the message is not empty after trimming spaces
    if (message.trim() !== '') {
        // Append the user's message to the chat log
        appendMessageToChatLog(message, 'user');
        // Fetch a response from the bot for the message
        getBotResponse(message);
        // Clear the user's input box for new messages
        $('#user-input-box').val('');
    }
}

// Function to append a message to the chat log
function appendMessageToChatLog(message, sender) {
    // Create a new div element
    const div = document.createElement('div');
    // Check if dark mode is enabled
    if ($('#darkmode').is(':checked')) {
        div.className = sender + '-message darkmode';
    } else {
        div.className = sender + '-message';
    }
    // Set the message as the content of the div
    div.innerText = message;
    // Append the message div to the chat log container
    document.getElementById('chat-log').appendChild(div);
    // Scroll to show the most recent messages
    scrollToBottomOfChatLog();
}

// Function to automatically scroll to the bottom of the chat container
function scrollToBottomOfChatLog() {
    const chatLog = document.getElementById('chat-container');
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Function to fetch a response from the bot backend for the given message
function getBotResponse(message) {
    // Make a POST request to '/get-response' endpoint with the user's message
    axios.post('/get-response', { message: message })
        .then(function(response) {
            // Delay the display of the bot's response by 1.5 seconds for a more "natural" feel
            setTimeout(function() {
                appendMessageToChatLog(response.data.response, 'bot');
            }, 1500);
        })
        .catch(function(error) {
            // Log any errors to the console
            console.error(error);
        });
}

// Attach an event listener to the dark mode checkbox for change events
$('#darkmode').click(function() {
    // Toggle dark mode styling for various elements
    $('body, .container, #chat-container, .example-question, #user-input-box, #send-button').toggleClass('dark');
    // Check if dark mode is enabled
    if ($('#darkmode').is(':checked')) {
        // Add the 'darkmode' class to all user and bot messages
        $('.user-message, .bot-message').addClass('darkmode');
    } else {
        // Remove the 'darkmode' class from all user and bot messages
        $('.user-message, .bot-message').removeClass('darkmode');
    }
});
