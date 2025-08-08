# 🚫 Discord.js Anti-Spam System

A lightweight and effective **anti-spam system** for your `discord.js` bot.  
It helps keep your server clean by detecting and blocking users who send too many messages in a short period.

---

## ✨ Features
- 🛡️ Prevents spam by tracking user message
- ⚡ Easy to integrate
- 🔧 Fully customizable time windows
- ♻️ Simple functions for detection and clearing data

---

## 📦 Installation
Just drop the `anti-spam.js` file into your project folder.

---

## 🚀 Usage

```js
const antiSpam = require('./anti-spam.js');

function onUserMessage(userId, message) {
    if (antiSpam.isSpam(userId)) {
        console.log(`User ${userId} has sent too many messages!`);
        return;
    }

    // Further message processing
    console.log(`Message from ${userId}: ${message}`);
}
