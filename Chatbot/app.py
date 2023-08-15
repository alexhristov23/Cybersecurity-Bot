from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Create a new chatbot named CyberBot
chatbot = ChatBot('CyberBot')

# Create a new trainer for the chatbot
trainer = ChatterBotCorpusTrainer(chatbot)

# Train the chatbot with the cybersecurity corpus
trainer.train("chatterbot.corpus.english.cybersecurity")

@app.route('/')
def home():
    return render_template("index.html")

@app.route("/get-response", methods=['POST'])
def get_bot_response():
    user_text = request.json.get('message')  # fetch the user message
    response = str(chatbot.get_response(user_text))  # get the chatbot response
    return jsonify({'response': response})

if __name__ == "__main__":
    app.run()
