const Command = require('../../structures/Command');
const Discord = require('discord.js');
const Guild = require("../../database/schemas/Guild.js");
const Economy = require("../../models/economy.js")
const Logging = require('../../database/schemas/logging.js')
const { DiscordTogether } = require('discord-together');



module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'poker',
        aliases: [ 'poker'],
        description: 'You can play Poker with your Friend in a Voice Channel!',
        category: 'Fun',
        usage: 'poker',
        examples: ['poker', 'poker'],
        guildOnly: true,

      });
    }

    async run(message, args) {

let client = message.client
        client.discordTogether = new DiscordTogether(client);

    
        if (!message.member.voice.channel) {
            message.channel.send({embed: {
              color: "RED",
              description: "You must be in a Voice room to use this command.."
            }});
          }
      
          if(message.member.voice.channel) {
      
      client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
          return message.channel.send({embed: {
            color: "RED",
            description: `[Click me](${invite.code}) to play Poker.`
          }});
      });
      
          }
      
        }
      }