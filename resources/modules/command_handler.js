const Discord = require('discord.js');
// const Embed = require('./resources/modules/discord/embed/embed');
const Log = require('./discord/console/log');
class command_handler {
    constructor(client) {
        this.client = client;
        // let embed = new Embed(client);
        // this.client.on('ready', () => {
        //     console.log(`Logged in as ${client.user.tag}!`);
        // })

        // this.client.on('message', msg => {
        //     if (msg.author == client.user) {
        //         return;
        //     }
        //     console.log(msg.content);
        // })
        let log = new Log(client);
        log.console();
    }
}
module.exports = command_handler;