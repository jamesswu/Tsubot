const settings = require('./resources/config/settings');
const Handler = require('./resources/modules/command_handler');
const Discord = require('discord.js');
const client = new Discord.Client();
let handler = new Handler(client);
client.login(settings.BOT_TOKEN);