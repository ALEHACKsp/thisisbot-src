const Canvacord = require("canvacord/src/Canvacord");
const Command = require('../../structures/Command');
const Discord = require('discord.js');
const Guild = require("../../database/schemas/Guild.js");
const Logging = require('../../database/schemas/logging.js')
const { MessageAttachment } = require("discord.js");

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'kiss',
        aliases: [ 'kiss'],
        description: 'Kiss a Guy',
        category: 'Images',
        usage: 'kiss',
        examples: ['kiss @rico', 'kiss @thisisbot'],
        guildOnly: true,
      });
    }

    async run(message, args) {

        const member = message.mentions.users.first() || message.author;
        if(!member) return message.channel.send('No members mentioned. Please mention the person you wanna kiss ;)')
        const mentionedMemberAvatar = member.displayAvatarURL({dynamic: false, format: "png"})
        const messageAuthorAvatar = message.author.displayAvatarURL({dynamic: false, format: "png"})

        let image = await Canvacord.kiss(mentionedMemberAvatar, messageAuthorAvatar)

        let kiss = new MessageAttachment(image, "kiss.png")

        message.channel.send(kiss)
}
}