const Discord = require('discord.js');

class log {
    constructor(client) {
        this.client = client;
    }
    console() {
        this.client.on('ready', () => {
            console.log(`Logged in as ${this.client.user.tag}!`);
        })
        return;
    }
}

module.exports = log