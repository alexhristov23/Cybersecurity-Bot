# Cybersecurity Bot
The following repository contains all the needed files (including a README file) that are needed to run the MSc Cybersecurity Project: The Cybersecurity Bot

# Project Overview

This repository contains code for three projects that are combined into one:

1. A Flask-based Cybersecurity Chatbot
2. Warning Alert Extension for Chrome
3. Chatbot Browser Extension for Chrome

## Table of Contents

- [Prerequisites](#prerequisites)
- [Cybersecurity Chatbot](#cybersecurity-chatbot)
- [Warning Alert Extension](#warning-alert-extension)
- [Chatbot Browser Extension](#chatbot-browser-extension)
- [Running the Chatbot](#running-the-chatbot)
- [Further Notes](#further-notes)

## Prerequisites

Before diving into the project, ensure you have the following prerequisites set up:

- [Python 3.x](https://www.python.org/downloads/)
- Google Chrome (For the extensions)
- Python packages:
  ```bash
  pip install Flask
  pip install chatterbot
  pip install chatterbot_corpus
\
\
\
### Cybersecurity Chatbot

Cybersecurity Bot, a chatbot trained in cybersecurity topics, is built using Flask and ChatterBot.

**Files:**

**app.py:** The main file for setting up Flask and training the chatbot.

**index.html:** A simple frontend to interact with the chatbot.

**style.css:** Creating a simple and good looking design. 

**cybersecurity.yml:** Containing all the needed training data.
\
\
\
### Warning Alert Extension

A Chrome extension designed to warn users when they try to navigate to potentially malicious websites.

**Files:**

**background.js:** Monitors website access and triggers warnings for flagged URLs.

**content.js:** Displays the warning and potentially redirects the user.

**manifest.json:** Configuration and setup for the extension.

**popup.html & popup.js:** Provides an interface to toggle the extension's functionality.
\
\
\
### Chatbot Browser Extension

Allows users to directly open the CyberBot chatbot in a new browser tab.

**Files:**

**manifest.json:** Configuration and setup for the extension.

**popup.html & popup.js:** Provides an interface button to launch the chatbot.
\
\
\
**Running the Chatbot**

To get the chatbot running:

1. Navigate to the project's root directory in your terminal.
2. Run the Flask app:
   ```bash
   python app.py

3. Open a browser and go to **'http://127.0.0.1:5000/'** to start chatting!


## Further Notes

Load the Chrome extensions as "unpacked" from **'chrome://extensions/'** for testing. Remember to enable "Developer mode".

The Warning Alert Extension currently has a sample list of malicious sites. For practical purposes, consider expanding this list or integrating a comprehensive database.

Ensure other extensions or software don't conflict with the provided projects.
