
const Handler = require('./modules/command_handler');
const Discord = require('discord.js');

require("dotenv").config();

const client = new Discord.Client();

// prevent lint from barking from currently unused const
const handler = new Handler(client); // eslint-disable-line

client.login(process.env.TSUBOT_TOKEN);
