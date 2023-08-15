$(document).ready(function() {
    $('#user-input-box').keypress(function(event) {
        if (event.keyCode == 13) {  // enter key is pressed
            event.preventDefault();
            handleUserMessage();
        }
    });
});

function handleExampleQuestion(button) {
    const question = button.innerText;
    $('#user-input-box').val(question);
    handleUserMessage();
}

function handleUserMessage() {
    const message = $('#user-input-box').val();
    if (message.trim() !== '') {
        appendMessageToChatLog(message, 'user');
        getBotResponse(message);
        $('#user-input-box').val('');
    }
}

function appendMessageToChatLog(message, sender) {
    const div = document.createElement('div');
    if ($('#darkmode').is(':checked')) {
        div.className = sender + '-message darkmode';
    } else {
        div.className = sender + '-message';
    }
    div.innerText = message;
    document.getElementById('chat-log').appendChild(div);
    scrollToBottomOfChatLog();
}

function scrollToBottomOfChatLog() {
    const chatLog = document.getElementById('chat-container');
    chatLog.scrollTop = chatLog.scrollHeight;
}

function getBotResponse(message) {
    axios.post('/get-response', { message: message })
        .then(function(response) {
            // Delay for 1.5 seconds before showing the bot's response
            setTimeout(function() {
                appendMessageToChatLog(response.data.response, 'bot');
            }, 1500);
        })
        .catch(function(error) {
            console.error(error);
        });
}

$('#darkmode').click(function() {
    $('body, .container, #chat-container, .example-question, #user-input-box, #send-button').toggleClass('dark');
    if ($('#darkmode').is(':checked')) {
        $('.user-message, .bot-message').addClass('darkmode');
    } else {
        $('.user-message, .bot-message').removeClass('darkmode');
    }
});
