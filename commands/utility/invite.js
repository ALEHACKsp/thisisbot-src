const Command = require('../../structures/Command');
const Guild = require('../../database/schemas/Guild');
const { MessageEmbed } = require('discord.js');
module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'invite',
        aliases: [ 'inv' ],
        description: 'Sends you my invite link',
        category: 'Utility',
        cooldown: 3
      });
    }

    async run(message) {
       const guildDB = await Guild.findOne({
        guildId: message.guild.id
      });
    
      const language = require(`../../data/language/${guildDB.language}.json`)
      
      const embed = new MessageEmbed()
        .setColor(message.guild.me.displayHexColor)
        .setDescription(`${language.invite}(https://discord.com/oauth2/authorize?client_id=835605460970110996&permissions=8&redirect_uri=https%3A%2F%2Fthisisbot.tk%2Fcallback&scope=bot) ${message.client.emoji.success}`);

      await message.channel.send(embed)  
    }
};