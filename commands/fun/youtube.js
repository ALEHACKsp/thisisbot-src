const Command = require('../../structures/Command');
const Discord = require('discord.js');
const Guild = require("../../database/schemas/Guild.js");
const Economy = require("../../models/economy.js")
const Logging = require('../../database/schemas/logging.js')
const { DiscordTogether } = require('discord-together');



module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'youtube',
        aliases: [ 'youtube'],
        description: 'You can watch Youtube with your Friend in a Voice Channel!',
        category: 'Fun',
        usage: 'youtube',
        examples: ['youtube', 'youtube'],
        guildOnly: true,

      });
    }

    async run(message, args) {

let client = message.client
        client.discordTogether = new DiscordTogether(client);

    
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
                return message.channel.send(`**Click To This Invite Youtube Together For Your Room ➜ **(${invite.code})`);
            });
        };
 
        }
    }