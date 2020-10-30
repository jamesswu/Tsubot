const _ = require('lodash');
const Discord = require('discord.js');
const {createCanvas} = require('canvas');

const Temperature = require('./math/temperature');
const ChessUtil = require('./chess/chess_util');

/** The main entry-point command handler class. */
class CommandHandler {
  /**
   * Construct the command handler.
   * @param {Client} client - The bot client.
   */
  constructor(client) {
    client.on(
        'ready',
        (
          () => {
            console.log(`Logged in as ${client.user.tag}!`);
            this._initialize(client);
          }
        ),
    );
  }

  /**
   * Initialize the command handler.
   * @param {Client} client - The bot client.
   */
  _initialize(client) {
    client.on('message', (msg) => {
      if (msg.author == client.user) {
        return;
      }
      if (msg.content[0] === '.') {
        const args = msg.content.split(' ');
        const command = args[0].slice(1);
        console.log(args);
        switch (command) {
          case 'far2cel':
            this._fahrenheitToCelcius(msg, args);
            break;
          case 'cel2far':
            this._celciusToFahrenheit(msg, args);
            break;
          case 'testCanvas':
            this._testCanvas(msg, args);
          case 'testChess':
            this._testChess(msg, args);
          default:
            break;
        }
      }
    });
  }

  /**
   * Handle the fahrenheitToCelcius bot command.
   * @param {Message} msg - The message invoking the command.
   * @param {Array<string>} args - The command args.
   */
  _fahrenheitToCelcius(msg, args) {
    if (args.length !== 2) {
      msg.channel.send(`${args[0]} requires 1 argument.`);
      return;
    }

    const floatVal = parseFloat(args[1]);
    if (isNaN(floatVal)) {
      msg.channel.send(
          `Argument to ${args[0]} must be a number (got '${args[1]}' instead).`,
      );
      return;
    }

    msg.channel.send(
        Temperature.fahrenheitToCelcius(
            floatVal,
        ),
    );
  }

  /**
   * Handle the celciusToFahrenheit bot command.
   * @param {Message} msg - The message invoking the command.
   * @param {Array<string>} args - The command args.
   */
  _celciusToFahrenheit(msg, args) {
    if (args.length !== 2) {
      msg.channel.send(`${args[0]} requires 1 argument.`);
      return;
    }

    const floatVal = parseFloat(args[1]);
    if (isNaN(floatVal)) {
      msg.channel.send(
          `Argument to ${args[0]} must be a number (got '${args[1]}' instead).`,
      );
      return;
    }

    msg.channel.send(
        Temperature.celciusToFahrenheit(
            floatVal,
        ),
    );
  }

  /**
   * Handle the testCanvas bot command.
   * @param {Message} msg - The message invoking the command.
   * @param {Array<string>} args - The command args.
   */
  _testCanvas(msg, args) {
    const canvas = createCanvas(200, 200);
    const ctx = canvas.getContext('2d');
    ctx.font = '30px Impact';
    ctx.rotate(0.1);
    ctx.fillText('Awesome!', 50, 100);

    // Draw line under text
    const text = ctx.measureText('Awesome!');
    ctx.strokeStyle = 'rgba(0,0,0,0.5)';
    ctx.beginPath();
    ctx.lineTo(50, 102);
    ctx.lineTo(50 + text.width, 102);
    ctx.stroke();

    const buffer = canvas.toBuffer('image/png');

    const attachment = new Discord.MessageAttachment(
        buffer,
        'test.png',
    );

    msg.channel.send(
        new Discord.MessageEmbed()
            .setTitle(':kekw:')
            .attachFiles(attachment)
            .setImage('attachment://test.png'),
    );
  }

  /**
   * Handle the _testChess bot command.
   * @param {Message} msg - The message invoking the command.
   * @param {Array<string>} args - The command args.
   */
  _testChess(msg, args) {
    const FENBoard = ChessUtil.parseFEN(args[1]);
    msg.channel.send(
        ChessUtil.getFENBoardAt(FENBoard, args[2], _.parseInt(args[3])),
    );
  }
}

module.exports = CommandHandler;
