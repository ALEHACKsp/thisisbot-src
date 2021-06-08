const Command = require('../../structures/Command');
const Discord = require('discord.js');
const Guild = require("../../database/schemas/Guild.js");
const Economy = require("../../models/economy.js")
const Logging = require('../../database/schemas/logging.js')
const { DiscordTogether } = require('discord-together');



module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'fish',
        aliases: [ 'fish'],
        description: 'You can play fish with your Friend in a Voice Channel!',
        category: 'Fun',
        usage: 'fish',
        examples: ['fish', 'fish'],
        guildOnly: true,

      });
    }

    async run(message, args) {

let client = message.client
        client.discordTogether = new DiscordTogether(client);

    
        if (!message.member.voice.channel) {
            message.channel.send({embed: {
              color: "RED",
              description: "You must be in a chant room to use this command.."
            }});
          }
      
          if(message.member.voice.channel) {
      
      client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
          return message.channel.send({embed: {
            color: "RED",
            description: `[Click me](${invite.code}) for play Fishing.`
        }});
    });
    
        }
    
      }
    }