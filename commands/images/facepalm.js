const Canvacord = require("canvacord/src/Canvacord");
const Command = require('../../structures/Command');
const Discord = require('discord.js');
const Guild = require("../../database/schemas/Guild.js");
const Logging = require('../../database/schemas/logging.js')
const { MessageAttachment } = require("discord.js");

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'facepalm',
        aliases: [ 'facepalm'],
        description: 'Send a facepalm',
        category: 'Images',
        usage: 'facepalm',
        examples: ['facepalm', 'facepalm'],
        guildOnly: true,
      });
    }

    async run(message, args) {

let client = message.client

let mentionedMember = message.mentions.users.first() || message.author;
if(!mentionedMember) mentionedMember = message.author
let avatar = mentionedMember.displayAvatarURL({ dynamic: false, format: 'png' })     

let image = await Canvacord.facepalm(avatar)
let facepalm = new MessageAttachment(image, 'facepalm.png')


message.channel.send(facepalm)
}
}