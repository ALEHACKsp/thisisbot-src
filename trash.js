const Command = require('../../structures/Command');
const Discord = require('discord.js');
const Guild = require("../../database/schemas/Guild.js");
const Logging = require('../../database/schemas/logging.js')
const DIG = require("discord-image-generation");

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'trash',
        aliases: [ 'trash'],
        description: 'trash a user',
        category: 'Images',
        usage: 'trash',
        examples: ['trash @auxy', 'trash @drknowi'],
        guildOnly: true,
      });
    }

    async run(message, args) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if(!user)
        return message.reply(`${emoji.Error} Provide a valid user !!`)

        const avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });

        let img = await new DIG.Trash().getImage(avatar);

        let attach = new Discord.MessageAttachment(img, "trash.png");

        message.channel.send(attach)
}
}