const settings = require('./resources/config/settings');
const Handler = require('./resources/modules/discord/command_handler');
const Discord = require('discord.js');
const client = new Discord.Client();
let handler = new Handler(client);
// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);
// });

// client.on('message', msg => {
//     if (msg.content === 'ping') {
//         msg.reply('pong');
//     }
// });

client.login(settings.BOT_TOKEN);


// CommandHander commandHsnlfer = new CommandHander(client)
// commsnhanler.init()