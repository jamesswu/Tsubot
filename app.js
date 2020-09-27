const Secrets = require('./resources/config/secrets');
const Handler = require('./resources/modules/command_handler');
const Discord = require('discord.js');

const client = new Discord.Client();

// prevent lint from barking from currently unused const
const handler = new Handler(client); // eslint-disable-line

client.login(Secrets.BOT_TOKEN);
