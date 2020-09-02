const Discord = require('discord.js');
//const { threadId } = require('worker_threads');
const client = null;

class command_handler(client) {
    this.client = client;
    function init(client) {
        this.client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}!`);
        })
    }
}
module.exports = command_handler;