const Command = require('../../structures/Command');
const Discord = require('discord.js');
const Guild = require("../../database/schemas/Guild.js");
const Logging = require('../../database/schemas/logging.js')
const DIG = require("discord-image-generation");

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'wanted',
        aliases: [ 'wanted'],
        description: 'wanted a user',
        category: 'Images',
        usage: 'wanted',
        examples: ['wanted @auxy', 'wanted @drknowi'],
        guildOnly: true,
      });
    }

    async run(message, args) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if(!user)
        return message.reply(`${emoji.Error} Provide a valid user !!`)

        const avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });

        let img = await new DIG.Wanted().getImage(avatar, `$`);

        let attach = new Discord.MessageAttachment(img, "wanted.png");

        message.channel.send(attach)
}
}