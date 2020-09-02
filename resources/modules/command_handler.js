const Discord = require('discord.js');
class command_handler {
    constructor(client) {
        this.client = client;
        this.client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}!`);
        })
    }
}
module.exports = command_handler;