const Command = require('../../structures/Command');
const Discord = require('discord.js');
const Guild = require("../../database/schemas/Guild.js");
const Logging = require('../../database/schemas/logging.js')

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'vkick',
        aliases: [ 'vkick'],
        description: 'Kick a user from a Voice Channel',
        category: 'Moderation',
        usage: 'vkick',
        examples: ['vkick @rico', 'vkick'],
        guildOnly: true,
        botPermission: ['MANAGE_MESSAGES'],
        userPermission: ['MANAGE_MESSAGES'],
      });
    }

    async run(message, args) {

        if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
        return message.channel.send(
          "I Don't Have Proper Permissions To Use This Command!"
        );
  
      if (!message.mentions.members.first())
        return message.channel.send(
          `Please Mention User That You Want To Kick From Voice Channel!`
        );
  
      let { channel } = message.mentions.members.first().voice;
  
      if (!channel)
        return message.channel.send(`User Is Not In Any Voice Channel!`);
  
      message.mentions.members.first().voice.kick();
      
      message.channel.send(`User Has Been Kicked From Voice Channel!`)
    }
  };
 